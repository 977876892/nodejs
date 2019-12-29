

const express = require("express");

const router = express.Router();

var multer = require('multer');


// file upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/app/blogs/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
var upload = multer({ storage: storage })
router.post("/upload", upload.single('blogimage'), function (req, res, next) {
    console.log(req.file)
    var fileinfo = req.file;
    var title = req.body.title;
    res.send(fileinfo);
})

module.exports = router;
