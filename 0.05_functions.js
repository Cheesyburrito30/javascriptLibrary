// functions

// greeting()
function greeting(){
	console.log('Good morning!')
}
greeting()

function day4(){
	console.log("day four, feeling great!")
}
day4()

//functions with parameters
function greeting2(name, age, height){
	console.log("Time to start coding " + name + age + height)

}
greeting2('Vernon', 21, '78in')

// function sum(num1, num2) {
// 	console.log(num1+num2)
// }
// sum(1,3)

//scope

var fname = "AJ"

function hello(fname){
	lname="HEPHNER"
	console.log(fname + ' ' + lname)
}
hello()

if (1 == 1) {
	let sum = 1+ 1
	console.log(sum)
}
//console.log(sum)


function function_name(argument) {
	// body...
}
function capitalize(name) {
	
	let capSN = ''
		for (let l in name) {
			if (l == 0){
				capSN = name[l].toUpperCase();
			} else {
				capSN += name[l]
			}
		}
		return capSN
}
console.log(capitalize('andrew'))






