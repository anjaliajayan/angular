const redisHelper = new (require('../helpers/redis.helper'))();
const { makeResponse } = require('../helpers/utils');
// const authenticate = require('./../middlewares/authenticate');

module.exports = function () {
    return  async function (req, res, next) {
        try {
            // user = authenticate(req, res, next);
            // console.log(user);
            // url's to ignore
            const ignorePath = ['sign-in', 'verify-otp', 'resend-otp', 'users/permissions', 'send_password'];

             // remove api from url
            const path = (req.url).replace('/api/', '');

            // ignore above urls
            if( !ignorePath.includes(path) ) {
            
                // get permissions from redis-cache
                const getPermissions = await redisHelper.get(`user_permissions_811`);

                // parse to json object
                const permissions = JSON.parse(getPermissions);

                // find the called url in permissions object
                const findMe = permissions.find(element => element[path] ) || false;
                
                // finally make a decision
                if( !findMe || findMe[path] == null || findMe[path] == undefined || findMe[path] == false || findMe[path] == 0) {
                    return makeResponse(res, false, 403, 'error', 'Not Authorized', 'You are not allowed to perform this action. Please contact your Administrator.');
                }
                
            }

            next();
        }
        catch(err ) {
            // console.log('PermissionMiddleWare:', err)
            return makeResponse(res, false, 403, 'error', 'Forbidden', 'Please contact your Administrator.');
        }
    }
};
