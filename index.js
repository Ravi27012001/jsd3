// not defined, undefined, null
//not defined - Any variable which we try to access but not declared will throw us a reference Error: variable not defined
// console.log(myAge);//not defined

// undefined - If a variable is declared but not assigned any value yet, but if we try to access that variable then we will get the errror as undefined.
let myHobbies;
console.log(myHobbies);
myHobbies = "Skating";
console.log(myHobbies);

// null - Its a default value assigned by a user to the variable as long as th variable  has not been assigned its original /updated value

let amIadult = null;
console.log(amIadult)//null
amIadult = true;
console.log(amIadult)//true


// global scope and local/block scope
// variable outside the block({}) is called global
// varible inside the block ({}) is called block scope
// in global scope we cant able to access local scope except var ,it will give us the reference error of not defined 


//     let mine = "ravi";
// const your = "shashi";
// var age = 21;
// console.log(mine,your,age);




{
    let mine = "ravi";
const your = "shashi";
var age = 21;
}
// console.log(mine); in js if we not correct the error in this line it will not check the nexts line after this line.
// console.log(age);
// Hoisting...

// let and const cant be accessed before initialised.
// Cannot access 'place' before initialization
// var variable are hoisting..
// *******function are also hoisted,means we can call function before declearing the function
// console.log(place);
// let place = "ranchi";
console.log(where);
var where = "delhi";


add(2,3);
function add(a,b){
    let result = a+b;
    console.log(result);
}

