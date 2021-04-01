// hoisting
/*
Hoisting is a particularity in Javascript which allows the code to execute functions or use variables that have been declared later in the program
(for functions, declarations imply their signature; for variables, declarations exclude initializations).
Technically this is possible in Javascript because the code is totally compiled before being executed. This specifity allows a contextual understanding of the code.
However, one shall keep in mind that initializations are part of using a variable as it is a way to assign a value to it.
Hence, initializing variables cannot precede any other form of manipulations.
*/

// var
/*
var keyword introduce the notion of variable stored in JS code up to ES5. This is made to store any data in a memory that can easily be accessed to a long as it is declared somewhere using this keyword.
Such variables' name are regulated by basic naming conventions and rules such as (now this part is common to var, let and const) :
    - containing alphanumerical characters (preceded or not by $) or _,
    - being unique,
    - being case sensitive,
    - deing different from other language keywords.
var keyword is extremely lax on rules. with hoisting, value assignments can be triggered anywhere as long as a declaration has taken place somewhere in the code.
In this measure, even scoping (encapsulating stored data within the boudaries defined by the closest curly brackets) has no effects. (1)
*/
// ex
aNumber = 0;
var aNumber;
console.log(++aNumber); // will log out 1

// let
/*
In order to tackle the issue mentionned (1), ES6 introduced the keyword let, which functionally is very close to var in that both are used to declare variables.
The main difference is that if a let variable is used out of scope, compilation will fail when it would succeed with a var variable.
*/
// ex
let aNumber = 0;
function plaWithNumber(n) {
    let index = 2;
    if (n > 5) {
        return n - index;
    } else {
        return n * index;
    }
}
// here index will never be useable


// const
/*
Variables declared with the keyword const cannot be reassigned a value more than once.
Hence once it has a value, it cannot hold any other value afterwards.
Then the only modifications that can be brought are those consisting of modifying the properties / elements that the value has.
This could be pushing, poping values from a const array, or setting properties of a const object (its name for exampe).
*/
// ex
const aNumber = 5;
// aNumber  = 7 will not work after the previous line
const anArray = [5];
let element = anArray.pop(); // will assign 5 to element, and anArray will now be empty
const person = {firstName:"Chris", lastName:"Forest"};
// person = {firstName:"Evan", lastName:"Johnson"}; won't work but
person.firstName = "Evans";
person.lastName = "Johnson"; // will.