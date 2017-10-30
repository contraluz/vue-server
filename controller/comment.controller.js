var mongoose = require('mongoose');
const DataModel = require('../models/comment.model');

exports.create = function(req,res,next){
	const dataModel = new DataModel(req.body);

	dataModel.save()
	.then(data=>{
		res.json(data);
	})
}

exports.get = function(req,res,next){
	var id = req.params.id;

	DataModel.findById(id, function (err, data) {
	  res.json(data);
	})
}


exports.update = function(req,res,next){
	const id = req.params.id;

	DataModel.findByIdAndUpdate(id, {$set: req.body}, {new:false})
	.then(data=>{
		res.json(data);
	})

}

exports.remove = function(req,res,next){
	const id = req.params.id;

	DataModel.findByIdAndRemove(id,function(err,data){
		res.json(data);
	})
	
}

exports.list = function(req,res,next){
	var page = (req.body.page) ? req.body.page : 1;
	var rows = (req.body.rows) ? req.body.rows : 5;

	var queryCondition = {};
	if(req.body.name && req.body.name.trim().length>0){
		name = req.body.name;
		queryCondition = {
			"name" : new RegExp(name, 'i')
		}
	}

	DataModel.paginate(queryCondition, {sort: { _id : -1 }, page: parseInt(page), limit: parseInt(rows) }, function(err, result) {
	 	result.rows = result.docs;
	 	delete result.docs;
	 	res.json(result)
	});
	
}

exports.deletes = function(req,res,next){
	var ids = req.body.ids;
	
	if(ids.length>0){
		console.log(ids.split(','))
		DataModel.remove({_id: {$in: ids.split(',')}})
		.then(data=>{
			res.json({"msg":"deletes success","status":200});
		})
	}else{
		res.json({"msg":"deletes fail","status":404});
	}
}