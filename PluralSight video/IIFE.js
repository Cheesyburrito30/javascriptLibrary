/*
IIFEs
Kyle Simpson PluralSight
Immediately Invoked Function Expression
A function expression, named or anon,(you should name it though you savage) 
that immediately runs itself, with () at the end of the function block
to the compiler, IIFEs are more like the immediate values, we don't need to do a scope look-up for.
*/
var foo = "foo";

(function(){			//make this an expression could be ||'let iife = function iifeFun(){
	var foo = "foo2"
	console.log(foo)	// "foo2"								

})()					//() at the end of the code immediately invokes it || }()
//can put the invoke parentheses INSIDE of the wrapper parens
	//they're the same exact thing, just look different
console.log(foo);		//"foo"

//'http://benalman.com/news/2010/11/immediately-invoked-function-expression'

//------------------------------------------------------------------------------------------------------------
/*Important because of messy code
	It's a popular way of protecting functions from being in the global scope
		when we put an IIFE at the top with the end at the bottom, and all the rest of our code in between
			Everything will be in IIFE scope
		If you want a single function out of many to be global after you wrapped them all in an IIFE, all you have
		to do is wrap it in another IIFE 
			the rest will still be private
			can add window object to the function to make it in the global scope. 
				give window a nickname of global so it's obvious that's what you're doing

*/

