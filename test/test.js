let hero_list = require('../js/data');

let assert = require('assert');

describe('Array', function() {
	describe('Heroes Json has data', function() {
		it('count should be above 0', function() {
			assert.notEqual(0,hero_list.hero_list.length)
		});
	});
});