

const { organsationModelForHeirarchy_AJ, roleModel_AJ, userModel_AJ, Sequelize } = require("../../config/db");
var GenericModelMethods = require('./ModelsGenericMethods')
var organisationService = new GenericModelMethods( organsationModelForHeirarchy_AJ );
var userService = new GenericModelMethods( userModel_AJ );

let hierarchyAttributes = ['organisation_id', 'parent_id', 'name', 'agent_code', 'hierarchy_id', 'status', 'is_active', 'hierarchy_parent', 'corporate_type', 'email', 'role_id', 'created_by'];

module.exports.getOrganisationDetail = async ( organisation_id ) => {
    try {
        // // console.log("--getOrganisationDetail---------------------",organisation_id)
        // let organisation = await organisationService.findById( organisation_id, hierarchyAttributes );
        let organisation = await organsationModelForHeirarchy_AJ.findOne({
            where : {organisation_id, status: 0},
            include: [{
                model: roleModel_AJ
            },{
                model: userModel_AJ,
                as : 'admin',
                where: {admin: 1},
                required: false,
                attributes: ['username', 'first_name', 'last_name']
            }],
            attributes: hierarchyAttributes
        })
        return organisation;
    } catch (error) {
        // console.log('er ', error)
        return {}
    }
}

module.exports.getChilds = async ( hierarchy_id ) => {
    try {
        var query = `SELECT GROUP_CONCAT(lv SEPARATOR ',') as child_ids FROM (
            SELECT @pv:=(SELECT GROUP_CONCAT(hierarchy_id SEPARATOR ',') FROM organisation 
            WHERE FIND_IN_SET(hierarchy_parent, @pv)) AS lv FROM organisation 
            JOIN
            (SELECT @pv:='${ hierarchy_id }') tmp
            ) a
            `;
        var childs = await organisationService.customQuery( query ) ;
        let child_ids = childs[0].child_ids;
        if( !child_ids )
            return []
        // let organisation_childs = await organisationService.find({hierarchy_id: {[Sequelize.Op.in]: child_ids.split(',')}}, hierarchyAttributes)
        let organisation_childs = await organsationModelForHeirarchy_AJ.findAll({
            where : {
                hierarchy_id: {[Sequelize.Op.in]: child_ids.split(',')},
                // is_active: true,
                status: false
            },
            include: [{
                model: roleModel_AJ
            },{
                model: userModel_AJ,
                as : 'admin',
                where: {admin: 1},
                required: false,
                attributes: ['username', 'first_name', 'last_name']
            }
        ],
            attributes: hierarchyAttributes
        })
        return this.sequelizeResponsetoJson(organisation_childs)
    }
    catch(error){
        // console.log('err ', error)
        return null
    }
}

module.exports.getChildUsers = async( user_id ) => {
    let query = `SELECT GROUP_CONCAT(lv SEPARATOR ',') as child_users FROM (
        SELECT @pv:=(SELECT GROUP_CONCAT(users_id SEPARATOR ',') FROM users 
        WHERE FIND_IN_SET(created_by, @pv)) AS lv FROM users 
        JOIN
        (SELECT @pv:='${user_id}') tmp
        ) a`;
    let result = await userService.customQuery(query)
    return result;
}

module.exports.getChildsHierarchy = async ( organisation_id ) => {
    try {
        // // console.log('organisation_id ', organisation_id)
        let organisation = await this.getOrganisationDetail( organisation_id );
        // // console.log('organisation ', organisation)
        let childs = await this.getChilds( organisation.hierarchy_id )
        
        organisation = this.sequelizeResponsetoJson(organisation);
        childs = this.sequelizeResponsetoJson(childs)
        return makeChildHierarchy(organisation, childs)    
    } catch (error) {
        // // console.log('df ', error)
        return {}
    }
    
}

module.exports.getParents = async ( hierarchy_id ) => {
    try {
        var query = `SELECT GROUP_CONCAT(lv SEPARATOR ',') as parent_ids FROM (
            SELECT @pv:=(SELECT GROUP_CONCAT(hierarchy_parent SEPARATOR ',') FROM organisation 
            WHERE FIND_IN_SET(hierarchy_id, @pv)) AS lv FROM organisation 
            JOIN
            (SELECT @pv:='${ hierarchy_id }') tmp
            ) a`;
        var parents = await organisationService.customQuery( query ) ;
        let parent_ids = parents[0].parent_ids;
        if( !parent_ids )
            return []
        // let organisation_parents = await organisationService.find({hierarchy_id: {[Sequelize.Op.in]: parent_ids.split(',')}}, hierarchyAttributes)
        let organisation_parents = await organsationModelForHeirarchy_AJ.findAll({
            where : {hierarchy_id: {[Sequelize.Op.in]: parent_ids.split(',')}, status:0},
            include: [{
                model: roleModel_AJ
            }],
            attributes: hierarchyAttributes
        })
        return organisation_parents;
    } catch (error) {
        return null;
    }
}

module.exports.getParentsHierarchy = async ( organisation_id, hierarchyType ) => {
    let organisation = await this.getOrganisationDetail( organisation_id );
    let parents = await this.getParents( organisation.hierarchy_id );
    organisation = this.sequelizeResponsetoJson( organisation )
    parents = this.sequelizeResponsetoJson( parents )
    try {
        let hierarchy;
        if(hierarchyType && hierarchyType == 'toptobottom')
            hierarchy = makeParentHierarchy_toptobottom(organisation, parents);
        else
            hierarchy = makeParentHierarchy_bottomtotop(organisation, parents)
        return hierarchy    
    } catch (error) {
        // console.log('err ', error)
        return null
    }
    
}

module.exports.getPermissions = async(organisation_id) => {
    
    try {
        let data = await this.getOrganisationDetail( organisation_id )
        if( data && data.role )
            return JSON.parse(data.role.permissions);
        return {}
    } catch (error) {
        // console.log('errr => ', error)
        return null;
    }
    
}

let removeRolesNotallowedToParent = function(parent, child){
    return child;
};

module.exports.sequelizeResponsetoJson = (data) => {
    return JSON.parse(JSON.stringify(data))
}

// helper functions to process data

let makeParentHierarchy_toptobottom = function(organisation, parents){
    let currentOrganisation ;
    let lastParent = organisation.hierarchy_parent;
    let hierarchy;
    let isChange = true;
    while(isChange){ //( isChange ){
        if(!hierarchy)
            hierarchy = organisation;
        if(!lastParent)
            break;
        let parentsFilter = parents.filter( obj => obj.hierarchy_id == lastParent );
        if( parentsFilter.length > 0 ){
            let tmp_node = { ...hierarchy };
            hierarchy = parentsFilter[0]
            hierarchy.child = tmp_node;
            lastParent = hierarchy.hierarchy_parent;
        }
        else {
            isChange = false;
        }
    }
    return hierarchy;
}

let makeParentHierarchy_bottomtotop = function(organisation, parents){
    let org = {...organisation} ;
    let lastParent = org.hierarchy_parent;
    let currentOrganisation;
    let isChange = true;
    while(isChange){        
        if(!lastParent)
            break;
        if(!currentOrganisation)
            currentOrganisation = org;
        let parentsFilter = parents.filter( obj => obj.hierarchy_id == lastParent );
        if( parentsFilter.length > 0 ){
            currentOrganisation.parent = parentsFilter[0]
            currentOrganisation = parentsFilter[0]
            lastParent = currentOrganisation.hierarchy_parent;
        }
        else {
            isChange = false;
        }
    }
    return org;
}

let makeChildHierarchy = function(organisation, childs){
    organisation.childs = childs.filter(obj => obj.hierarchy_parent == organisation.hierarchy_id)
    for (let index = 0; index < organisation.childs.length; index++) {
        const innerOrganisation = organisation.childs[index];
        makeChildHierarchy(innerOrganisation, childs);
    }
    return organisation;
}