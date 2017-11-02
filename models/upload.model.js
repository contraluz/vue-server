
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var UploadSchema = new Schema({
	//允许传入的字段，链接修改到MongoDB里面
	
	date: { type: Date, default: Date.now },
	cateId: ObjectId,
	fieldname: String,
	originalname: String,
	encoding: String,
	mimetype: String,
	destination: String,
	filename: String,
	path: String,
	size: Number,
	
	title:String
})

UploadSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Upload',UploadSchema,'upload');