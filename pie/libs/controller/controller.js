function Controller(name) {
	this.name       = name;
	this[this.name] = require('../../../app/models/' + name.toLowerCase())[this.name];

	console.log('setting up controller', '"' + this.name + '"\n');

	events.EventEmitter.call(this);
};
util.inherits(Controller, events.EventEmitter);

Controller.prototype.set = function(response, data) {
	// response.render('ACTION NAME HERE', {
	// 	title: 'Example Page',
	// 	data: data
	// });
	response.send(data);
};

exports.Controller = Controller;