// Prototypes:
// the "bones" of objects. ("The 'building blocks' of objects": maybe better?)
// objects take properties of the prototype that they're made from'.
// the 'Object' prototype is the highest level of prototype.
// Every object has the prototype from 'Object'.


// Object Constructor:
// This creates a new prototype that will be the base for multiple objects.
//Best practices: name object prototypes with a capital first letter!
const Person = function(first, last, age, gender, interests) {
	this.first = first,
	this.last = last,
	this.age = age,
	this.gender = gender,
	this.interests = interests
}

console.log(typeof Person)
//from now on any Person object that we make will have the function of fullName()

// any new Object that we make using Person will have the parameters set as what the prototype set them as
let person1 = new Person('vernon', 'perry', 21, 'male', ['coding', 'video games', 'art']);
//So when we console.log(person1), it has first, last, age, gender, and interests as it's properties
console.log(person1.valueOf())
console.log(person1.__proto__)
//Object + prototype + newPropertyName = whatever
//this is how you add a property to an Object's prototype.

Person.prototype.fullName = function(){
	return this.first + " " + this.last
}
Person.prototype.nationality = "English"
console.log(person1.nationality)
console.log(person1.fullName())
// Note that EVEN THOUGH we added to the prototype after the new object was already created,
// it STILL HAD the new prototype properties that we set.

//check the prototype of your object by using .__proto__
console.log(person1.__proto__)
// let person2 = Object.create(person1)
