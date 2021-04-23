//start

console.log('Welcome TO Statwig');

// Variables Let and Var(Before ES6)
// cannot be a reserverd Keyword like (if****)
//Names Should Meaning ful
//cannot statrt at number

let firstname='vinod';
let secondname='Reddy';

let interestrate=0.9;
interestrate=1;
console.log(name);
console.log(interestrate);

const pi=3.14;


//I____________primitive /Value Types
//1. String  2. Number, Boolean, 4.undefined, 5. null
let name='ravi'; //String Literal
let age=21;//Number Literal
let isaaprroved=true;// Boolean Literal
let firstnum=undefined;
let high=null;
//undefined And Null

//II) --------------Reference Types
//1.object  2.Array  /// Function
let name='mosh';
let age='30';
let person={
    name: 'Mosh',
    Age:30
};
//Dot Method4
console.log(person.Age);
//Braces Method
console.log(person['name']);


//Arrays
//length is dynemic 
// Array is typeof object 

let selectedcolors=['red','blue','red'];
console.log(selectedcolors);
console.log(selectedcolors[1]); 

//Functions

function greet()
{
    console.log("Welcome function");
}
//calling Function
greet();

//parameter function

function greet(name)
{
    console.log("Welcome function"+name);
}
//calling Function
greet('vinod');

function square(number)
{
    return number*number;
}
let res=square(4);
console.log(res);

