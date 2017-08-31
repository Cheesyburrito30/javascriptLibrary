// OBJECTS

// Every value that is not a string, number, boolean
// null or undefined is an object 

// Said types are object-like in that they have methods,
// however they are immutable(can't go through them')

// Objects are mutable. 

// arrays, functions, expressions, and objects are objects.

// An object is a container of properties that have a name and value.
let object1 = {
	name: "stuff" //property
}

// (think variables) properties can equal any value except for undefined,
// even an empty string ("") you can even put objects inside of objects.
// Properties inside of objects can also be named anything you want them to be. 

// objects are very useful for organizing data.

// Object literals are the way you're going to see objects most of the time.
// they are a pair of curly braces with stuff inside of them, and can be anywhere
// that an expression can be.

let person = {
	name: "Isaac",
	age: 18
}
// if your object's properties are reserved key words they need to be called like:
console.log(person["name"])
//however if your objects names are not reserved words they can be called with only a dot:
person.name

// you can use the || operator to make the default values (if it would come back as undefined, 
// 	it will come back as the value after the ||)
let middleName = person.middleName || "none"
//now that will return none instead of undefined

// to update objects, just call the object property and then set it to some other value

person.name = 'Vernon'

console.log(person.name)
