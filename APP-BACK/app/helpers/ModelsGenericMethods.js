
const  { Sequelize, db  } = require('./../../config/db');


var GenericMethods = function(model){
    this.ModelColumns = model.rawAttributes;
    this.colums = Object.keys( this.ModelColumns );
    this.model = model;
}

GenericMethods.prototype.add = function( params ){
    var record = params;
    // // console.log('Params are ', record)

    var model = this.model;
    var THIS = this;
    var promise = new Promise(function(resolve, reject){
        record = THIS.removeExtraParams( record );
        // // console.log('Params are ', record)
        try {
            model.create( record )
            .then(function( insert ){
                return resolve( insert )
            }).catch(function (err) {
                return reject( err )
            });    
        } catch (error) {
            return reject(error)
        }
    });
    return promise;
}

GenericMethods.prototype.updateOrAdd = function( cond, params ){
    var record = params;
    // // console.log('Params are ', record)

    var model = this.model;
    var THIS = this;
    var promise = new Promise( async function(resolve, reject){
        record = THIS.removeExtraParams( record );
        // // console.log('Params are ', record)
        try {
            var primaryValue = THIS.getPrimaryColumn();
            

            if( params[primaryValue] ){
                
                var tmp = {};
                tmp[ primaryValue ] = params[ primaryValue ];
                var arr = await THIS.find( tmp );
                if(arr.length == 1){
                    var tmp = arr[0];
                    // // console.log('updating old value')
                    return resolve( await THIS.updateByID( tmp[ primaryValue ], params ) )
                }
                else {
                    // // console.log('ading new value')
                    return resolve( await THIS.add( params ) )
                }

            }
            else {
                // // console.log('ading new value')
                return resolve( await THIS.add( params ) )
            }

            
        } catch (error) {
            return reject(error)
        }
    });
    return promise;
}


GenericMethods.prototype.updateByID = function( id, record ){
    var THIS = this;
    var model = this.model;
    var promise = new Promise(function(resolve, reject){
        
        var primaryColumn = THIS.getPrimaryColumn();
        record = THIS.removeExtraParamsAndPrimaryKey(record)

        if( primaryColumn =='' )
            return reject('no primary column found')
        var cond = {}
        cond[ primaryColumn ] = id;


        model.update( 
            record,
            {where: cond } )
            .then(function( update ){
                return resolve( update )
            }).catch(function (err) {
                return reject( err )
            });    

    })
    return promise;
}

GenericMethods.prototype.updateByAttributes = function( attributes, record ){
    var THIS = this;
    var model = this.model;
    var promise = new Promise(function(resolve, reject){
        
        record = THIS.removeExtraParamsAndPrimaryKey(record)

        model.update( 
            record,
            {where: attributes } )
            .then(function( update ){
                return resolve( update )
            }).catch(function (err) {
                return reject( err )
            });    

    })
    return promise;
}


GenericMethods.prototype.deleteById = function( id ){
    var THIS = this;
    var model = this.model;
    var promise = new Promise(function(resolve, reject){
       try {
            
            var primaryColumn = THIS.getPrimaryColumn();

            if( primaryColumn =='' )
                return reject('no primary column found')
            var cond = {}
            cond[ primaryColumn ] = id;

            model.destroy( 
                {where: cond } )
                .then(function( _delete ){
                    return resolve( _delete )
                }).catch(function (err) {
                    return reject( err )
                });  
       } catch (error) {
           return reject( error )
       }  

    })
    return promise;
}

GenericMethods.prototype.findById = function( id, attributes ){
    var model = this.model;
    var THIS = this;
    var promise = new Promise(function(resolve, reject){
        if( !id )
            return reject('missing id')
        try {
            var primaryColumn = THIS.getPrimaryColumn();
            var cond = {}
            cond[ primaryColumn ] = id;
            
            let options = {where: cond};
            if( attributes )
                options.attributes = attributes;
            
            model.findAll( options )
            .then(function( result ){
                if(result.length>=1)
                    return resolve( result[0] )    
                return resolve({})
                
            }).catch(function (err) {
                return reject( err )
            });
        } catch (error) {
            // console.log('Error => ', error)
            return reject(error)
        }
        
    })
    return promise;
}

GenericMethods.prototype.find = function( params, attributes ){
    var model = this.model;
    var THIS = this;
    var promise = new Promise(function(resolve, reject){
        try {
            params = THIS.removeExtraParams( params )  
            let options = {where: params};        
            if( attributes )
                options.attributes = attributes;
            model.findAll( options )
            .then(function( result ){
                return resolve( result )
                
            }).catch(function (err) {
                return reject( err )
            });
        } catch (error) {
            // console.log('Error => ', error)
            return reject(error)
        }
        
    })
    return promise;
}


GenericMethods.prototype.customQuery = function( query ){

    var promise = new Promise(function(resolve, reject){

        try {
            db.query(query, { type: Sequelize.QueryTypes.SELECT}).then(function( result ){
                return resolve( result )
            }).catch(function (err) {
                // console.log('daa ', err)
                return reject( err )
            });

        } catch (error) {
            return reject( error )
        }

    })

    return promise;

}


GenericMethods.prototype.findAndPaginate = function( params, limit, page ){
    var promise = new Promise(function(resolve, reject){
        return resolve('test data')
    })
    return promise;
}






// Helper function for Generic Methods 

GenericMethods.prototype.removeExtraParams = function( params ){
    // var colums = this.colums;
    // var outputObject = {}
    // if( typeof(params) != 'object' )
    //     return {}
    // var passedParams = Object.keys( params );
    // passedParams.forEach(param => {
    //     if( colums.indexOf( param ) >=0 )
    //         outputObject[ param ] = params[ param ]
    // });
    return params;
}

GenericMethods.prototype.removeExtraParamsAndPrimaryKey = function( params ){
    var primaryColumn = this.getPrimaryColumn();
    var colums = this.colums;
    var outputObject = {}
    if( typeof(params) != 'object' )
        return {}
    var passedParams = Object.keys( params );
    passedParams.forEach(param => {
        if( colums.indexOf( param ) >= 0 && param != primaryColumn)
            outputObject[ param ] = params[ param ]
    });
    return outputObject;
}

GenericMethods.prototype.getPrimaryColumn = function(){
    var columns = this.ModelColumns;
    var keys = Object.keys( columns );
    var primaryColumn = '';

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if( columns[ key ].primaryKey != null && columns[ key ].primaryKey == true )
            return key
    }
    return ''
}



module.exports = GenericMethods;