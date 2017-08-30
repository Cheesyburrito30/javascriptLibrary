//STATEMENTS
// --------------------------------
//let statements:
//var is going out of style now with js 6
//replace with let.
//let = var, except that let is not global
//if a let variable is in a curly bracket,
//that is the only place it will exist
let name = 'Vernon'
//    1  2    3
//initializes the variable
//(1) sets the variable's name as name
//(2) says that the variable is the expression
//(3) is the expression
	//expressions can be lots of things.
let example = function(parameters){

}
	//in this example we have the expression
	//that is a function, instead of a string.
	//another way to write this exact thing is
	//to just write a function
function example(parameters){

}
	//both of those codes say the same thing
//-------------------------------------------------

//BLOCKS
// ______________________________________________
//the {} after our example functions is the start
//and end of blocks.
//blocks are ...blocks... of multiple lines of code
//that will run where javascript only wants to run
//one line of code.
//blocks do not have their own scope with normal
//var variables.
//however, with let variables they do. This is why
//let is replacing var as best-practices

var x = 1 
{
	var x = 2
}
//this will print out as 2
//that's because var variables are GLOBAL scope
//instead of being block scope.
let x = 1
{
	let x = 2
}
//this will print out as 1
//let variables have block scope.
//that means that whenever a let variable is
//inside of a block, the variable stays in that
//block. the computer "forgets" the variable once
//it leaves the block.
//const variables have block scope too but I'm not
//going over them at this time


