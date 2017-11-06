let hero_list = require('./data');

class Controller {
	constructor(){
		this.dt = hero_list.hero_list;
	}

	getHeroes() {
		return this.dt;
	}

	getHeroById(id) {
		for (let i = 0; i < this.dt.length; i++) {
			if (this.dt[i].id === id) {
				return this.dt[i];
			}
		}
	}

	getHeroByName(name) {
		for (let i = 0; i < this.dt.length; i++) {
			if (this.dt[i].name.toLowerCase() === name.toLowerCase()) {
				return this.dt[i];
			}
		}
	}

	addHero(id,name) {
		let hero = this.getHeroById(id);
		if (this.dt.indexOf(hero) === -1) {
			this.dt.push({"id": id, "name": name});
		}
	}

	delHero(hero) {
		let index =  this.dt.indexOf(hero);
		this.dt.splice(index,1);
	}

	updateHero(hero,new_name){
	    let index =  this.dt.indexOf(hero);
	    this.dt[index].name = new_name;
	}
}
module.exports.Controller = Controller;