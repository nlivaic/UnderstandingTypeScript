// string
let myName: string = 'Max';
// myName = 1;

// number
let age: number = 33;
// age = 'Max';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types explicitly
let myRealAge: number;
myRealAge = 33;
// myRealAge = 'Max';

// array any
let bunchOfStuff: any[] = ["Book", 100, "Bike"];
console.log(bunchOfStuff[0]);
bunchOfStuff = [45, "Airplane"]
console.log(bunchOfStuff[0]);
console.log(typeof bunchOfStuff);

// array strings
let hobbies: string[] = ["Cooking", "Sports"];
hobbies = ["Some hobby"];
console.log(hobbies[0]);

// tuple
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray,   // 0
    Green = 100,  // 100
    Blue    // 101
}
let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello world!");
}
sayHello();

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2, 10));

// function types - no criteria.
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// function types
let myMultiply1: (va1: number, val2: number) => number;
// myMultiply1 = sayHello;
// myMultiply1();
myMultiply1 = multiply;
console.log(myMultiply1(15, 3));