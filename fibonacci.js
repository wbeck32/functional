/**
 * Find the nth (zero-indexed) Fibonacci number.
 */

 //
var fibonacci = function(n) {
	console.log('fib called with: ',n);
	if(n > 1){
		return fibonacci(n - 1) + fibonacci(n - 2);
	} else {
		return 1;
	}
};

var memoize = function(fn) {
	var inputs = [];
	return function memoizedVersion (n) {
		
		if (inputs[n] === undefined){
			inputs[n] = fn(n);
			console.log('memoize called with: ',n);
			console.log('saved values: ',inputs);
		}
			
		return inputs[n];
	}
}

fibonacci = memoize(fibonacci);

console.log("next fib: ",fibonacci(Number(process.argv[2])));