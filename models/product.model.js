var mongoose = require('mongoose');
var materializedPlugin = require('mongoose-materialized');

var schema = new mongoose.Schema({
	title: String,
	name:String,
	price:Number,
	content:String,
	date: { type: Date, default: Date.now },
	

	//type:Number,//1.新闻2.上传3.产品
});
schema.plugin(materializedPlugin);
var Product = mongoose.model('Product', schema, 'product');
module.exports = Product;
//暴露接口为Product，到时候：../Product/** 

