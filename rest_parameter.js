// the rest parameter syntax allows us to reprenst an indefinite number of argument 
// as an array.
// function sum(...inputs){
// console.log(...inputs);
// let total =0;
// for (let i of inputs){
//     total+=i
// }
// console.log(total);
// }
// sum(1,2,3,4,5)

// rest parameters  take inputs as as array.

// example 2

function fun (a,b,...c){
    console.log( '${a} {b}$');
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('edan'));
}
fun('ronaldo','neymar','pele','messi','edan');


