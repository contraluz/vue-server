var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({ 
	name:String,
	password:String,
	email:String,
	age:Number,
	date: { type: Date, default: Date.now }
 });
schema.plugin(mongoosePaginate);
var User = mongoose.model('User',  schema,'user'); // Model.paginate()

module.exports = User;