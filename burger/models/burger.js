var orm = require("../config/orm.js");

// create the burger variable that will be exported back to the controller
var burger = {
	// all for getting all the burgers
	all: function(cb) {
		orm.all('burger', function(res) {
			cb(res);
		});
	},
	// create a new burger
	create: function(cols, vals, cb) {
		orm.create('burger', cols, vals, function(res) {
			cb(res);
		});
	},
	// update for changing the burger status
	update: function(objColVals, condition, cb) {
		orm.update('burger', objColVals, condition, function(res) {
			cb(res);
		});
	}
};

// export burger back to the controller
module.exports = burger;