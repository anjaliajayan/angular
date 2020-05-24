const multer = require('multer');
const express = require('express');
const router = express.Router();
const {db ,PMS}= require('../../config/db.js');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './app/upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})
   
 var upload = multer({ storage: storage });
 router.post('/upload', upload.single('myFile'), (req, res, next) => {
  const file = req.file;
  // console.log("sravz",file);
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error);
  }
  else{ 
    res.json({type: 'data', msg: req.file});
    // PMS.create(req.file.path)
    // .then( (result) => {
    // res.json({type: 'data', msg: result});
    // }).catch((error) => {
    //   res.status(500).json({type: 'error', msg: error});
    // }); 
  }
});


 module.exports = router;



