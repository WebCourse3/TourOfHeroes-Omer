var express = require("express");
var app     = express();

app.use("/modules" , express.static(__dirname + '/node_modules'));

var http = require('http').Server(app);

app.get('/',function (req, res) {
	res.redirect('/heroes');
});

app.get('/heroes', function(req, res){
	res.sendFile(__dirname + '/html/index.html');
});

app.get('/heroes/:id', function(req, res){
	res.send(req.param("id"));
});


http.listen(3000, function(){
	console.log('listening on port:3000');
});/**/