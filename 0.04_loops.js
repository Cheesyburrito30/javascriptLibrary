// Loops

/*
	for loop
	------------------
		for (let = i; i <= 10; i += 1){
			 console.log(i)
		}
		// Must: (initialize variable; boolean expression; increase or decrease variable) 
		// loop will run intil boolean expression stated is false
	while loop 
	------------------
		//intitialize variable OUTSIDE of loop
		let j = 0
		//set boolean expression
		while ( j <= 5 ){
			//change variable
			j++
			code to run 
			console.log(j)
		}

		while(true){
			//code to run
			return false
			//will stop the code
		}

	for in loop 
	------------------
		var studentName= "smita";

		for (let l in studentName) {
			console.log(l)
				//returns numbers
			console.log(studentName[l])
				//returns letters
		}

	do while loop
	------------------
		do {
    		text += "The number is " + i;
    		i++;
		} while (i < 10);
		//do while loops will run code in the 'do' brackets once before 
		//checking to see if the while statement is true, then check if while statement
		//is true and run until it is false
		//Make sure that the variable increases or 
*/
//CHALLENGES:
//"Using a for loop count to 20 by 2's"
console.log('For loop challenge')
for (let i = 2; i <= 20; i += 2) {
	console.log(i)
}


//"Create a while loop that counts to 100 by 10's"
console.log("While loop challenge")
let i = 0
while (i<100){
	i += 10
	console.log(i)
}

//"captitalize first letter and append each letter after"
		let studentName= "smita"
		let capSN = ''
		for (let l in studentName) {
			if (l == 0){
				capSN = studentName[l].toUpperCase();
			} else {
				capSN += studentName[l]
			}
		}

console.log(capSN)