const cont = require('../js/actions');
let ctrl = new cont.controller();

let assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let sinon = require('sinon');

let original_count = ctrl.getHeroes().length;

beforeEach('before', () => {
	ctrl =  new cont.controller();
});

describe('Array', function () {
	describe('Heroes Json has data', function () {
		it('Hero data json should contain entries', function () {
			assert.notEqual(0, original_count);
		});
	});

	describe('Controller Working', function () {

		describe('Add Function', function () {
			it('Add a hero', function () {
				ctrl.addHero('1000', 'test unit');
				let n_count = ctrl.getHeroes().length;

				assert.equal(original_count + 1, n_count);
			});
			it('Add a hero - already exist', function () {
				ctrl.addHero(1000, 'test unit');
				let count = ctrl.getHeroes().length;
				assert.equal(count , ctrl.getHeroes().length);
			});
		});

		describe('Delete Function',function () {
			it("Delete hero 'test unit'", function () {
				let Stubconst = {};
				Stubconst.getHeroByName = sinon.stub();
				let output = { "id": "1000", "name": "test unit" };
				Stubconst.getHeroByName.withArgs("test unit").returns(output);

				ctrl.getHeroByName = Stubconst.getHeroByName;
				ctrl.delHero("test unit");


				assert.equal(ctrl.getHeroes().length,original_count);
			});
		});

		describe('Update Function',function () {
			it('Update a hero', function () {
				const Stubcosnt = {};
				Stubcosnt.getHeroById = sinon.stub();
				let output = { "id": "2", "name": "Omer" };
				Stubcosnt.getHeroById.withArgs(2).returns(output);
				ctrl.getHeroById = Stubcosnt.getHeroById;
				ctrl.updateHero(2, 'kukuflitzu');


				assert.equal(output.name, 'kukuflitzu');
			});
		});
		describe('Get Functions',function () {
			it('Get hero by Id', function () {
				let hero = ctrl.getHeroById(1);
				assert.notEqual(hero, undefined);
			});
			it('Get hero by Name', function () {
				let hero = ctrl.getHeroByName("Saar");
				assert.notEqual(hero, undefined);
			});
		});

	});

	describe('Web GET requests', function () {

		describe('GET requests', function () {
			it('Get all heros', function () {
				chai.request('http://localhost:3000').get('/').end(function (err, res) {
					assert(ctrl.getHeroes(), res.body);
				});
			});
			it('Get specific hero', function () {
				chai.request('http://localohst:3000').get('/heroes/1').end(function (err, res) {
					assert.equal(ctrl.getHeroById(1), res.body);
				});
			});
			it('Get specific hero- not number', function () {
				chai.request('http://localohst:3000').get('/heroes/a').end(function (err, res) {
					assert.equal(undefined, res.body);
				});
			});
		});

		describe('DELETE requests', function () {
			it('Delete by name', function () {
				let hero_name = 'omer';
				chai.request('http://localohst:3000')
					.delete('/heroes')
					.query({name: hero_name})
					.end(function (err, res) {
						let original_count = ctrl.getHeroes().length;
						let hero = ctrl.getHeroByName(hero_name);
						ctrl.delHero(hero);
						assert.equal(original_count - 1, res.body.length);
					});
			});
			it('Delete by name- not a string', function () {
				let hero_name = 1;
				chai.request('http://localohst:3000')
					.delete('/heroes')
					.query({name: hero_name})
					.end(function (err, res) {
						assert.equal(original_count, res.body.length);
					});
			});
			it('Delete by id', function () {
				chai.request('http://localohst:3000')
					.delete('/heroes/1')
					.end(function (err, res) {
						assert(original_count -1, res.body.length);
				});
			});
			it('Delete by id- not number', function () {
				chai.request('http://localohst:3000')
					.delete('/heroes/a')
					.end(function (err, res) {
						assert(original_count, res.body.length);
					});
			});

		});

		describe('PUT requests',function () {
			it('Update hero name', function () {
				let hero_name = 'omer';
				chai.request('http://localohst:3000')
					.put('/heroes/1')
					.query({name: hero_name})
					.end(function (err, res) {
						assert.equal(ctrl.getHeroById(1).name, hero_name);
				});
			});
		});

		describe('POST requests',function () {
			it('Add hero', function () {
				let new_hero = {'id': '10', 'name': 'testing unit'};
				chai.request('http://localohst:3000')
					.post('/heroes')
					.set('Content-type','application/json')
					.send(new_hero)
					.end(function (err, res) {
						let hero = ctrl.getHeroByName(new_hero.name);
						assert.equal(hero, new_hero);
				});
			});
			it('Add hero- bad JSON', function () {
				let new_hero = {'id': 'asd', 'name': '222'};
				chai.request('http://localohst:3000')
					.post('/heroes')
					.set('Content-type','application/json')
					.send(new_hero)
					.end(function (err, res) {
						let hero = ctrl.getHeroByName(new_hero.name);
						assert.equal(hero, undefined);
				});
			});
		});
	});
});