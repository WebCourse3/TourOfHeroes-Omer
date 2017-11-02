var express = require("express");
var app     = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/modules" , express.static(__dirname + '/node_modules'));

var http = require('http').Server(app);

var heroes = [
	{
		"name" : "Saar Ziv",
		"id" : "1"
	},
	{
		"name" : "Omer Roth",
		"id" : "2"
	},
	{
		"name" : "AvivMahan",
		"id" : "3"
	},
	{
		"name" : "Tal Natanya",
		"id" : "4"
	}
];

app.get('/',function (req, res) {
	res.redirect('/heroes');
});

app.get('/heroes', function(req, res){
	res.send(heroes);
});

app.delete('/heroes', function (req,res) {
	var name = req.query.name;
	for (var i = 0; i < heroes.length; i++) {
		if (heroes[i].name.toString().toLowerCase() === name.toString().toLowerCase()) {
			heroes.splice(i,1);
			break;
		}
	}
	res.send(heroes);
});

app.post('/heroes', function (req,res) {
	var id = req.body.id;
	var name = req.body.name;

	console.log(id + " + " + name);
	heroes.push({"name": name, "id":id});

	res.send(heroes);
});

app.get('/heroes/:id', function(req, res){
	var id = req.params.id;
	for (var i = 0; i < heroes.length; i++) {
		if (heroes[i].id === id) {
			var hero = heroes[i];
			break;
		}
	}
	res.send(hero);
});

app.put('/heroes/:id', function(req, res){
	var id = req.params.id;
	var name = req.param("name");

	for (var i = 0; i < heroes.length; i++) {
		if (heroes[i].id === id) {
			heroes[i].name = name;

			var hero = heroes[i];
			break;
		}
	}
	res.send(hero);
});

app.delete('/heroes/:id', function (req, res) {
	var id = req.params.id;
	for (var i = 0; i < heroes.length; i++) {
		if (heroes[i].id == id){
			heroes.splice(i,1);
		}
	}
	res.send(heroes);
});



http.listen(3000, function(){
	console.log('listening on port:3000');
});