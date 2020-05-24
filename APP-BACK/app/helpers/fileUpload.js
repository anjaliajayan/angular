const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const dotenv = require('dotenv');
dotenv.config();

aws.config.update({
    secretAccessKey: 'bGJo+Aj4Xjx1vq0+NrbUazGdPuU3SnYakLqIn4DF',
    accessKeyId: 'AKIAJRVNRA2KDJ5SIAAA',
    region: 'us-east-1' //E.g us-east-1
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
    }
};

const upload = multer({
    fileFilter: fileFilter,
    storage: multerS3({
        acl: 'public-read',
        orgName: "TPConnects",
        s3,
        bucket: 'tpconnects-localproperty',
        key: function (req, file, cb) {
            /*I'm using Date.now() to make sure my file has a unique name*/
            req.file = Date.now() + file.originalname;
            cb(null, Date.now() + file.originalname);
        }
    })
});

module.exports = upload;

//Tpconnects
// Access ID: AKIAJRVNRA2KDJ5SIAAA
// Key : bGJo+Aj4Xjx1vq0+NrbUazGdPuU3SnYakLqIn4DF

// awsS3: {
//     accessKeyId: "AKIAJRVNRA2KDJ5SIAAA",
//     secretAccessKey: "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",
//     region: "us-east-1",
//     bucket: "tpconnects-localproperty",
//     orgName: "TPConnects",
//   }