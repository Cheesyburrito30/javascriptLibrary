//Arrays

let students = ['Thomas', 'Madyson', 'Brandon', 'leon', 23, true, ['Jackson', 'Perry']];
console.log(typeof(students))

//grab the nested array out of the students array and grab 'perry'
console.log('Hello', students[6][1], 'the platypus')
let foodArr = ['quesadilla', 'pecan pie','potato', 'cheesecake', 'shrimp pasta']

// for (let i in foodArr) {
// 	console.log(foodArr[i])
// }
//---------------
//SHORTHAND FOR FOR/IN LOOPS:
foodArr.forEach(function(i) {
	console.log(i)
})
//the function in .forEach is a callback function
//has parameters (values, index, array)
