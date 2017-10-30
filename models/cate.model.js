var mongoose = require('mongoose');
var materializedPlugin = require('mongoose-materialized');

var schema = new mongoose.Schema({
	text: String
});
schema.plugin(materializedPlugin);
var Cate = mongoose.model('Cate', schema, 'cate');
module.exports = Cate;
//暴露接口为cate，到时候：../cate/** 

