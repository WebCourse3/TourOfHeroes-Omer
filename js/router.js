let express = require("express");
let router  = express.Router();


const cont = require('./actions');
let ctrl =  new cont.controller();

router.get('/', function(req, res){
	res.send(ctrl.getHeroes());
});

router.delete('/', function (req,res) {
	let hero = ctrl.getHeroByName(req.query.name);
	ctrl.delHero(hero);

	res.send(ctrl.getHeroes());
});

router.post('/', function (req,res) {
	let id,name;
	try{
		id = parseInt(req.body.id);
		name = req.body.name;
	}
	catch (e){
		console.log(e);
		res.send("bad JSON");
	}

	ctrl.addHero(id,name);

	res.send(ctrl.getHeroes());
});

router.get('/:id', function(req, res){
	let id = req.params.id;
	res.send(ctrl.getHeroById(id));
});

router.put('/:id', function(req, res){
	let id = req.params.id;
	let new_name = req.query.name;

	ctrl.updateHero(id,new_name);
	res.send(ctrl.getHeroes());
});

router.delete('/:id', function (req, res) {
    let hero = ctrl.getHeroById(req.query.id);
    ctrl.delHero(hero);
	res.send(ctrl.getHeroes());
});

module.exports = router;