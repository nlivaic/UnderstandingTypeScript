"use strict";
// string
var myName = 'Max';
// myName = 1;
// number
var age = 33;
// age = 'Max';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types explicitly
var myRealAge;
myRealAge = 33;
// myRealAge = 'Max';
// array any
var bunchOfStuff = ["Book", 100, "Bike"];
console.log(bunchOfStuff[0]);
bunchOfStuff = [45, "Airplane"];
console.log(bunchOfStuff[0]);
console.log(typeof bunchOfStuff);
// array strings
var hobbies = ["Cooking", "Sports"];
hobbies = ["Some hobby"];
console.log(hobbies[0]);
// tuple
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello world!");
}
sayHello();
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10));
