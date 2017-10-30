var mongoose = require('mongoose');
const DataModel = require('../models/cate.model');

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
	var ids = [];
	DataModel.findOne({_id: id},function(err,doc){
		if(doc){
			 ids = [doc._id];
			 doc.getChildren().then(function(docs){

		      for(var i=0;i<docs.length;i++){
		      	ids.push(docs[i]._id);
		      }

		      DataModel.remove({ _id : {$in : ids}})
		      .then(data=>{
		      	res.json({"msg":"deletes success","status":200});
		      })

		    });
		}
	})
}

function reverseTree(data, pid){

	var result = [],
	temp;

	var data = JSON.parse(JSON.stringify(data));  // 将一个DataModel的object转成了JS的Object

	for(var i in data){
		if(data[i].parentId == pid){
			result.push(data[i]);


			temp = reverseTree(data, data[i]._id);

			if(temp.length>0){
				data[i].children = temp;
			}
		}
	}

	return result;

}


exports.list = function(req,res,next){
	DataModel.find({},function(err,data){
		var rpTree = reverseTree(data, null);
		res.json(rpTree);
	})
	
}