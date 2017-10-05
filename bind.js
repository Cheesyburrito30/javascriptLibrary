//bind is declaring what object will be the subject for the 'this' keyword.
// bind is a function that takes arguments, and sets them to the this keyword

//here we're declaring that x = 9 and creating a function block 
x = "I don't know, african or european?";
var module = {
    x: 12345768,
    getX: function () {
        console.log(this.x);
    }
};
//calling the module function block's code of getx
module.getX()
//this will return 12354768, because it's still using the module code's x (it's 'this.x')
var getX = module.getX;
//but when we set a variable to the code that is module.getx and call it "outside" of the module
getX()
//it prints 'I don't know, african or european?'
// this is because it's calling the global x as this.x
var boundGetX = getX.bind(module);
//once we bind it to module, it prints back out 1234578
boundGetX();