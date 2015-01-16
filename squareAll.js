#!/usr/bin/env node
var _ = require('lodash');


//Using partial application, define a function, squareAll, 
//that returns a //new array containing squares of the items in the array.

var origArray = [];
origArray = [3,4];

var squareAll = function(exponent,origArray) {
	console.log('origArray: ',origArray,' exp: ',exponent);
	return origArray.map(function(value){
		return Math.pow(value,exponent);
	});
	};

// var sq = function(base,exp){
// 	console.log(base,exp);
// };
var squareIt = _.partial(squareAll,2);

console.log(squareIt(origArray));
