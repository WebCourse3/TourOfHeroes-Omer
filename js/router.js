var router  = express.Router();
const Controller = require('/js/actions');
let ctrl = new Controller();

router.get('/', function(req, res){
	res.send(ctrl.getHeroes());
});

router.delete('/', function (req,res) {
	let hero = ctrl.getHeroByName(req.query.name);
	ctrl.delHero(hero);

	res.send(ctrl.getHeroes());
});

router.post('/', function (req,res) {
	let id = req.body.id;
	let name = req.body.name;

	ctrl.addHero(id,name);

	res.send(ctrl.getHeroes());
});

router.get('/:id', function(req, res){
	let id = req.params.id;
	res.send(ctrl.getHeroByID(id));
});

router.put('/:id', function(req, res){
	let id = req.params.id;
	let name = req.param("name");

	ctrl.updateHero(id,name);
	res.send(ctrl.getHeroes());
});

router.delete('/:id', function (req, res) {
	var id = req.params.id;
	for (var i = 0; i < heroes.length; i++) {
		if (heroes[i].id == id){
			heroes.splice(i,1);
		}
	}
	res.send(heroes);
});
module.exports(router);