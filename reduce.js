#!/usr/bin/env node
var _ = require('lodash');
var newObj = {};

//Use reduce to transform an array of tuples into an object.
var pairs = [
    ['name', 'JSI'], 
    ['location', { city: 'Portland', 'state': 'OR' }], 
    ['school', 'PCS']
    ];

_.reduce(pairs, function(result,num){
    newObj[num[0]] = num[1];        
    console.log(newObj);
}, {});
//=> class{ 
//  name: 'JSI', 
//  location: { city: 'Portland', state: 'OR' }, 
//  school: 'PCS' 
//}, home {

//}

//examples
// var _ = require('lodash');

// var numbers = [1, 2, 3, 4, 5, 6];
// var sum = _.reduce(numbers, function(sum, n) { 
//     return sum + n; 
// }, 0);

// var strings = ['hello', ' ', 'world'];
// var string = _.reduce(strings, function(concatenated, s) { 
//     return concatenated + s; 
// }, '');

// var arrays = [[10], ['string'], [{}]];
// var array = _.reduce(arrays, function(concatenated, a) { 
//     return concatenated.concat(a); 
// }, []);