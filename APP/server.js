const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

var whitelist = ['http://127.0.0.1:5000', 'http://localhost:5000']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  console.log(whitelist);
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/aggregator-platform'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/aggregator-platform/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);