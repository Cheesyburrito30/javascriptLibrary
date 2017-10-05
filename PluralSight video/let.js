//BLOCK SCOPE
//-------------------------------------------------------------------------------------------------------------
/*
LET
----------
let is super similar to var, in fact it will do everything that var will do, just better
	let will stay inside of whatever block it is in instead of the function 
		This creates a whole new scope: Block Scope.
let is very helpful for not polluting the global scope with random variables
	*///for instance:
		//in this first for loop, you'll be able to access 'i' from the global scope, but in the second, where i
		//is declared by a let, you won't be able to access it unless you're in the for loop
		console.log("what will 'i' be? i = " + i)	//get undefined up here. We don't get an Error, like we should.
		console.log('For loop:')						//we need 'let' for that
		console.log('------------')					//this is because Javascript doesn't natively have block scope
		for (var i = 0; i<2; i++) {				
			console.log(i)
		}
		console.log('------------')												//it's in the global Scope
		console.log("what will 'i' be? i= " + i)//we actually print out a value here! since var i ISN'T in a function
		console.log('/////////////////////')					
		// console.log("what will 'i' be?")
		// console.log(j)						//If we run this code, we get an error! The code won't run!
		console.log('For loop:')				
		console.log('------------')					
		for (let j = 0; j<2; j++) {
			console.log(j)
		}
		console.log('------------')
		//console.log(j)						//we also get an error here!
//If 'let' variables are inside of a block of code, their scope will only be that block. Clean global scope!
//--------------------------------------------------------------------------------------------------------------
//PROBLEMS
//---------------
/* let does not hoist
	-if an if statement is 1000 lines long, and you put a let in the middle of it... that let variable will not 
	exist	until half way through the if statement
	-Makes you have to think a lot harder about your code, because you can't mess around with the blocks anymore
	-let IMPLICITLY block scopes, makes it harder to keep track of where your lets are declared
	*/ 
	//let blocks / statements. The block is explicit and you know for sure that that's where the let is
		//forces your declarations to top of the block & reduces mental tax
	function foo(bar) {
		let (baz = bar) {
			console.log(baz)		//THIS DOESN'T WORK  
		}
		console.log(baz)
	}
	foo("bar")
		//however there's a problem!
			//people who developed javascript don't want that to happen, so we're back where we started