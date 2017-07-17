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