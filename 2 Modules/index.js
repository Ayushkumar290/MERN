const greet = require("./greet");
// require is use to get those methods or 
// variables which is gonna need inside this file 

const {person1 ,person2 ,person3} = require("./people")

greet(person1)
greet(person2)
greet(person3)
