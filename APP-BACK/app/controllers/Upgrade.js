const fs = require('fs');
const util = require('util');
const path = require('path');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
//const watch = require('node-watch');
const NodeCache = require('node-cache');
const cors = require('cors');

const authenticate = require('./../middlewares/authenticate');

const versionFilePath = path.join(__dirname + './../../public/aggregator-platform/version.json');


module.exports = {
  // versionCheck: (app) => {
  //   let http = require('http').Server(app);
  //   let io = require('socket.io')(http);
  //   io.on('connection', (socket) => {
  //     // console.log(`A user connected o`);
  //     let prevId = null;
  //     const safeJoin = currentId => {
  //       socket.leave(prevId);
  //       socket.join(currentId);
  //       prevId = currentId;
  //     }

  //     socket.on('version-check', (versionId) => {
  //       // console.log(`A user connected ${versionId}`);
  //       safeJoin(versionId);
  //       watch(versionFilePath, {
  //         recursive: true
  //       }, (e, filename) => {
  //         readFile(versionFilePath, 'utf8', function (err, contents) {
  //           if (err) {
  //             io.to(versionId).emit('version-check', `We could not find any version file or Post Build Procedure did not executed. ERR ${err}`);
  //           } else {
  //             const data = JSON.parse(contents);
  //             // console.log(data)
  //             // console.log(versionId)
  //             io.to(versionId).emit('version-check', data)
  //           }
  //         });
  //       });
  //     });
  //   });

  //   http.listen(3000, function () {
  //     // console.log('Socket listening on *:3000');
  //   });
  // }
};
