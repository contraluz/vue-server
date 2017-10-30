
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var NewsSchema = new Schema({
	name:String,
	comment:Number,
	words:String,
	date: { type: Date, default: Date.now },
	cateId: ObjectId
})

NewsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('News',NewsSchema,'news');