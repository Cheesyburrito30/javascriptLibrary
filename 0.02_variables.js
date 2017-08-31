// variables
	//boxes that we can store data in

var name = "Madyson"
console.log(typeof(name))
console.log(name)

var lastName = "Ward"

console.log(name.length)
console.log(name.toUpperCase())

//CHALLENGE: "Create 2 variables 'firstName' and 'lastName' 
//and concat them together in a third variable called 'fullName' to the console."
var firstName = "Vernon"
var lastName = "Perry"
var fullName = firstName + " " + lastName
console.log(fullName)

//Variable module
//BRONZE
let age = 2
let bankNumber = 11111111
let bankBalance = -5
let ssn = 555555555
let siblings = 2
console.log("my age is " + age + ". and my bank number is " + bankNumber + 
	", with a balance of "+ bankBalance + ". My social security number is " + ssn + 
	". i have " + siblings + " siblings.")
//silver
console.log("long hand")
let myNumber = 0
console.log(myNumber)
myNumber = myNumber + 10
console.log(myNumber)
myNumber = myNumber - 1
console.log(myNumber)
myNumber = myNumber * 9
console.log(myNumber)
myNumber = myNumber / 7
console.log(myNumber)
//more elegant way fo making myNumber = myNumber + 10
console.log("shorthand")
myNumber = 0
myNumber += 10
console.log(myNumber)
myNumber -= 1
console.log(myNumber)
myNumber *= 9
console.log(myNumber)
myNumber /= 7
console.log(myNumber)

//gold
age = 2
let lifeExpectancy = Math.floor(Math.random()*(112-60)+60)
console.log(lifeExpectancy)
let estimatedAmount = (lifeExpectancy - age) * 365
console.log("you have " + estimatedAmount + " days left to live. Make the most of them!")
// variable data types




// variable scopes