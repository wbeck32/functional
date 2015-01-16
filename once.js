#!/usr/bin/env node
var once = function(fn) {
	var calledFunctions = {};
	return function() {
		if (!calledFunctions[fn]) {
			calledFunctions[fn] = true;
			return fn();
		}
	return console.log('too late for you!');
	}	
}

var findTrueLove = once(function(){
	console.log('find'); 	
});

findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();

