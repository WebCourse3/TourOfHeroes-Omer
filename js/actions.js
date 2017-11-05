import {heroes as hero_list} from '/js/data';

class Controller {
	constructor(){
		this.dt = hero_list;
	}

	getHeroes() {
		return this.dt;
	}

	getHeroByID(id) {
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
		this.dt.push({"id": id, "name": name});
	}

	delHero(hero) {
		let index =  this.dt.indexOf(hero);
		this.dt.splice(index,1);
	}

	updateHero(id,name){
		for (let i = 0; i < this.dt.length; i++) {
			if (this.dt.id == id) {
				thid.dt[i].name = name;
				break;
			}
		}
	}
}
module.exports(Controller);