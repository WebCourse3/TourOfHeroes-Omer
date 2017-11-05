import {heroes as hero_list} from '/js/data';

var express = require("express");
var app     = express();
var router  = require('/js/router');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/modules" , express.static(__dirname + '/node_modules'));



app.use('/heroes',router);







http.listen(3000, function(){
	console.log('listening on port:3000');
});

module.exports = heroes;