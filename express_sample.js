var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('this is home page');
});

app.get('/test',function(req,res){
	res.send('this is routing');
});

app.get('/profile/:id',function(req,res){
	res.send('this is profile of'+req.params.id);
})
app.listen('8080');