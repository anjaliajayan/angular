const { SessionModel } = require('../../config/db');


export default validateSession = async (sessionInput)=> {
    try{
    const result = await SessionModel.findOne({
        where : {
            id: sessionInput
        }
    })
    if(result){
        return result
    }
    return [];
}catch(err) {
throw err;
}
}




