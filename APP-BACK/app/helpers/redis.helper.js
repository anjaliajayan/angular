const config = require("../../config/config");
const asyncRedis = require("async-redis");

const rClient = asyncRedis.createClient({
  host: config.redis.host,
  port: config.redis.port
});

const debuggerPage = "redisHelper";

// rClient.auth(config.redis.password, function (err, reply) {
//   // console.log(reply);
// });

rClient.on("error", err => {
  // console.log("Redis error: ", err);
});

rClient.on("ready", function() {
  // console.log("Redis is ready");
});

//iniatiate a Class
function RedisClass() {}

RedisClass.prototype.set = async (key, value) => {
  try {
    if (typeof value != "string") {
      rClient.set(key, JSON.stringify(value));
    } else {
      rClient.set(key, value);
    }
    return true;
  } catch (error) {
    // console.log(`${debuggerPage}Set`, error);
    return false;
  }
};

RedisClass.prototype.setTemp = async (key, value, expiry) => {
  try {
    expiry = expiry || 600;
    if (typeof value != "string") {
      rClient.set(key, JSON.stringify(value), "EX", expiry);
    } else {
      rClient.set(key, value, "EX", expiry);
    }
    return true;
  } catch (error) {
    // console.log(`${debuggerPage}SetTemp`, error);
    return false;
  }
};

RedisClass.prototype.get = async key => {
  try {
    return await rClient.get(key);
  } catch (error) {
    // console.log(`${debuggerPage}Get`, error);
    return false;
  }
};

RedisClass.prototype.del = async key => {
  try {
    return JSON.parse(await rClient.del(key));
  } catch (error) {
    // console.log(`${debuggerPage}Del`, error);
    return false;
  }
};

RedisClass.prototype.flushAll = async () => {
  try {
    return JSON.parse(await rClient.flushdb());
  } catch (error) {
    // console.log(`${debuggerPage}flushAll`, error);
    return false;
  }
};

module.exports = RedisClass;
