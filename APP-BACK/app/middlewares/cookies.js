const { SessionModel } = require('./../../config/db');
const config = require('../../config/config');

module.exports =async (req, res, next)=>{
    try{
    let headers = req.cookies[`aggregator-${config.client.hostname}`] ;
    if(!headers) {return res.status(401).json({ auth: false, msg: 'Invalid session value1'});}
   const sessionExist = await  SessionModel.findOne({
        where:{
            id: headers,
        }
    });
    const sessionDetail = sessionExist && sessionExist.dataValues;

 if(sessionDetail && sessionDetail.expires){
    const newDate =  new Date();
    const addDay = newDate.setDate(newDate.getDate()+0);
    const currentDateStamp = addDay;
     const timestampDiff = currentDateStamp - sessionDetail.expires;
    if(timestampDiff<0) {
        SessionModel.destroy({
            where: {
                id:  sessionDetail.id
            }
        }).then((response)=>{
            // console.log('_______response_after_delete_____', response);
            return res.status(401).json({ auth: false, msg: 'Invalid session value2'}); 
        })
    } 
    next();
 }
 next();
}catch(err){
    // console.log('______try_catch_error___cookie_middleware', err);
    res.status(500).json({ auth: false, msg: 'Internal Server Error'});
}
}

// export default validateSession;