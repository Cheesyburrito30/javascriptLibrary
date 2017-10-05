// Hoisting is when javascript puts variables at the top of the page automatically.
// Javascript automatically hoists everything except let variables.

//This example doesn't work because let variables do not hoist
// console.log(x)

(function fluff(){
	console.log('I am a teapot')
	let x=22
})();
let x=1

//this example, however, will... sort of. the variable gets hoisted to above console.log(y), but it doesn't get set to anything until after the javascript engine runs line 15, so it prints out undefined.
console.log(y)
var y=1;
(function fluffer (){
	console.log('What is the flight Velocity of an unladen swallow?')
	let y=123467
})()