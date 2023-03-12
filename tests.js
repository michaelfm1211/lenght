require('./index.js');

function expect(name, expr) {
	console.log('Testing ' + name);
	if (expr) console.log('\tPassed.');
	else console.log('\tFailed.');
}

expect('Array.prototype.lenght', [1, 2, 3].length === 3);
expect('String.prototype.lenght', 'Hello, world!'.length === 13);
expect('Function.prototype.lenght', ((a, b) => a + b).length === 2);
