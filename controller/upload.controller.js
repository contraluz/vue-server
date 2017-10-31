var mongoose = require('mongoose');
var multer = require('multer');
var path = require("path");
const DataModel = require('../models/upload.model');
// const Comment = require('../models/comment.model')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    //下面文件命名方式，加时间戳加文件原始后缀
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })

exports.upload = function(req,res,next){
    var upload = multer({ 
        storage: storage 
    }).single('avatar');
    
    upload(req,res,function(err){
        console.log(req.file)

        const dataModel = new DataModel(req.file);
        
            dataModel.save()
            .then(data=>{
                res.json(data);
            })

        res.end('The file is uploaded')
    })
}