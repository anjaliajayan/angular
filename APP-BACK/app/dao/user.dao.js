const { Users } = require('./../../config/db');
const LoggerFile = 'userDao';

const saveTargets = async (data) => {
	const loggerObject = `${LoggerFile}saveTargets`;
	
	try {

		console.log(loggerObject, data.targets);

		const stmt = await Users.update({target_amount: data.targets}, { where: { users_id: data.user_id } });
		if( !stmt )
			return false;
		
		return true;
        
	}
	catch( err ) {
		console.log(loggerObject, err)
	  	return false;
  	}
		

}

module.exports = {
  saveTargets
};
