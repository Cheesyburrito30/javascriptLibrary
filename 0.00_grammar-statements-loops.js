//Loop Statements
//-----------------------------------------------
//values that equal false:
	//false, null, undefined, empty string, 
	//number 0,NaN
//all other values will equal true.


//SWITCH STATEMENTS
//_______________________________________________
switch(example) {
	case caseexample1 :
		//code to run
		break;
	case caseexample2 :
		//code to run
		break;
	default:
		//code to run
		//default DOES NOT need a break.
		//if default is at the beginning instead
		//of the end then it needs a break
}
//Switch statements are usefull if you have pre-
//defined expressions that are choices
//like if you had a radio button and wanted
//to run specific code based on what the user
//picked.

//switch statements are close to if/else, however
//switch statements CANNOT compare expressions

//WHILE LOOPS
//_______________________________________________
while(example){
	//code to run
	//way to end loop: return false//break
							  //example=false
}
//while loops just run simple loops
//they will run until their expression = false

//DO WHILE LOOPS
//_______________________________________________
do {
	//code to run AT LEAST once
} while(expression) {
	//code to run until expression = false
	//way to end loop
}
//do while loops are the same as while loops,
//except regardless of if the expression is true
//or not the code in the do block will always 
//run at least one time

//FOR LOOPS
//______________________________________________
for (let i = 0; i < 10; i++) {
	//code to run 		^ i = i+1 // i += 1
}
//for loops let you loop a set number of times 
//as long as the middle expression is true.
//the first expression marks the starting point
//second marks ending point
//third defines how it will progress and end


//another style of for loops is a for in loop.
for (let i in Object) {
	//code to run
}
//loop will re-iterate object.length amount
//of times and stop when it reaches the end.