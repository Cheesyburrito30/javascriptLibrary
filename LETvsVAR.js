// Variables can now be declared in multiple ways!
// with ES6's release, two new variable declarations have been added

// let and const

// var is fading out because it, for some reason, has a function scope.
// that means that instead of only having the scope of the block it's in,
// it has the scope for the entire function that it's in

// let and const do not have this problem
console.log(i)
for (var i = 0; i <10; i++){
	console.log(i)
}
console.log(i)
//Notice that the console.log before the for loop where var i is declared comes back as undefined!
//it should break, throw an error, stop working, etc. but since var has a funky scope, it doesn't!
//same for the console.log after the for loop. It should throw an error, but instead it prints out 
// the last value of i!


// console.log(j)
for (let j = 0; j <10; j++){
	console.log(j)
}
// console.log(j)
//Now that we declared 'j' with a let instead of a var, our console.logs out side of the for loop
// throw errors instead of playing nice. This protects the data and uses less computing power.

// variables declared by const will not change
// they will always stay const -- ant. So const declared variables will not run for loops
//so this loop will not work:

// for (const j = 0; j <10; j++){
// 	console.log(j)
// }

//however they protect your data by not letting it be changed accidentally anywhere in your code.

const person = 'Person'

console.log(person)

person = 'Person2'
//See? we get an error that says that we can't change a const variable.


//don't use var anymore, it sucks.