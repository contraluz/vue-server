
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var CommentSchema = new Schema({
	//允许传入的字段，链接修改到MongoDB里面
	name:String,
	comment:Number,
	words:String,
	date: { type: Date, default: Date.now },
	cateId: ObjectId
})

CommentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Comment',CommentSchema,'comment');