//new creates a new object
function person (name, age)  {
	this.name = name	
	this.age = age
}
let rachel = new person('rachel', 21)
console.log (rachel)
//this is handy because it lets us make multiple of the same objects without needing to type the same crud over and over and over again.