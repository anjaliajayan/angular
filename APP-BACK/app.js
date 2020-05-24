// const compression = require('compression')
const express = require('express')
//const uuid = require('uuid/v4')
const session = require('express-session')
//const FileStore = require('session-file-store')(session);
var MemoryStore = require('memorystore')(session)
const bodyParser = require('body-parser');

const path = require('path');
const favicon = require('serve-favicon');
//const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//const debug = require('debug')('myapp:app');

const swaggerJSDoc = require('swagger-jsdoc');

//const validateRoutePermission = require('./app/middlewares/permissions.middleware')

// validation rules
global.Validator = require('validatorjs');
global.validRules = require('./validation_rules.js').rules;
global.FUNC = require('./_helpers/functions.js');

// config
const config = require('./config/config');

// database config
//const db = require('./config/db');

const { httpLogger } = require('./app/middlewares');
const { logger } = require('./app/utils');

const app = express();
app.use(httpLogger);
// app.use(compression({ threshold: 0 }))

var corsOptions = {
  origin: `http` + (config.client.secure ? `s` : ``) + `://` + config.client.hostname + `:` + config.client.port,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Authorization', 'X-PINGOTHE', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Custom-header', 'Set-Cookie'],
  exposeHeaders: ['Content-Range', 'X-Content-Range', 'Set-Cookie'],
  credentials: true,
  preflightContinue: false
  // If preflightContinue is set to true, it will remove the authorization from the request, and all other modification from the user
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

let sessionExpiryTime = 5 * 1000//(86400 * 1000 / 24)
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "MySecretKeyToBeChangedInProdWhenDeploy",
  store: new MemoryStore(),
  maxAge: new Date(Date.now() + sessionExpiryTime),
  expires: new Date(Date.now() + sessionExpiryTime)
}));


// app.use(session({
//   genid: (req) => {
//     // console.log('');
//     // console.log('╔═════════════════════════════════════════════════════════════════════════════════╗')
//     // console.log('║ Inside session middleware, genid function                                       ║')
//     // console.log(`║ Request object sessionID from client: ${req.sessionID}`)
//     // console.log('╚═════════════════════════════════════════════════════════════════════════════════╝')
//     // console.log('');
//     return uuid() // use UUIDs for session IDs
//   },
//   store: new FileStore(),
//   secret: 'MySecretKeyToBeChangedInProdWhenDeploy',
//   resave: false,
//   saveUninitialized: true
// }))

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

// COOKIE CONFIGS
var COOKIE_CONFIG = {
  setHeaders: function (res, path, stat) {
    res.set('Set-Cookie', cookie.serialize('aggregator-cookie', 'test', {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }))
  }
}

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', true);
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-auth");
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use((err, req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', true);
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-auth");
//   // set locals, only providing error in development
//   res.locals.message = err.message; // eslint-disable-line no-param-reassign
//   res.locals.error = config.isDev ? err : {}; // eslint-disable-line no-param-reassign
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


// Swagger definition
const swaggerDefinition = {
  definition: {
    swagger: '2.0',
    info: {
      title: 'TPConnects Aggregator Platform',
      version: '2.1',
    },
    host: config.server.hostname + `:` + config.server.port,
    basePath: '',
    schemes: [`http` + (config.server.secure ? `s` : ``)],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      authentication: {
        description: 'JWT Authorization header using the Bearer scheme. Example: "Authorization: {token}"',
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    security: [{
      authentication: []
    }],
  },
  apis: [
    './app/controllers/Auth.js',
    './app/controllers/organization/pos.js',
    './app/controllers/PointSaleManagement.js',
    './app/controllers/flights.controller.js',
    './app/controllers/paymentGateway.controller.js',
    './app/controllers/hotels.controller.js',
    './app/controllers/user-role-management/User.js',
    './app/controllers/sample.controller.js',
    './app/controllers/setup-configuration/roles/Roles.js',
    './app/controllers/organization/organization.js',
    './app/controllers/branches.controller.js',
    './app/controllers/pos.controller.js'
  ]
};


// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerDefinition);
app.use('/api/swagger/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});


app.use('/api/api-docs', express.static('api-docs'));
// app.use(validateRoutePermission());


require('./app/routes')(app, COOKIE_CONFIG);
//app.options('/api/*');
app.use(express.static(`${__dirname}/public/aggregator-platform`));
//app.use(logger(config.isProd ? 'combined' : 'dev'));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'public', 'favicon/favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));


// bootstrap routes

// require('./app/controllers/Upgrade').versionCheck();
require('./app/routes')(app, '/api');
const json2xls = require('json2xls');

app.use(json2xls.middleware);

app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/aggregator-platform/index.html`));
});


const appAllRoutes = [];
app._router.stack.forEach(middleware => {
  if (middleware.route) {
    appAllRoutes.push(`${Object.keys(middleware.route.methods)} -> ${middleware.route.path}`);
  }
});

// console.log(appAllRoutes);
// // console.log(JSON.stringify(appAllRoutes, null, 2));

app.listen(config.server.port, config.server.hostname, () => {
  logger.info(`App listening on ${config.server.hostname} port: ${config.server.port}`, '');
  app.emit('appStarted');
});

module.exports = app; 
