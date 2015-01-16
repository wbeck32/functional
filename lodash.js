#!/usr/bin/env node
var _ = require('lodash');

//partial
var greet = function(greeting,name) { 
	console.log(greeting+' : '+name);
	return greeting + ' ' + name; 
};

var hi = _.partial(greet, 'hi');
hi('fred'); //=> 'hi fred'


//curry
var greet = function(greeting,name) { 
	console.log(greeting+' : '+name);
	return greeting + ' ' + name; 
};

var hi = _.curry(greet)('hi');
hi('fred'); //=> 'hi fred'