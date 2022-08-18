// object distructuring:-it makes it posible to unpack value from array ,or properties
// from object into distinct variables.

// const bioData={
    // name: "anjali",
    // age: 20,
    // deg: "BA",

// }
// let {name,age,deg}=bioData;
// we have to write key in oder.
// console.log(`my name ${name}.my age is ${age} and my heighest quali.is ${deg}`);

// object inside object

const bioData={
    name: "anjali",
    age: 20,
    deg: "BA",
    hobb:{
        first:"singing",
        second: "sleeping",
    }


}
let {name:myname,age:ages,deg,hobb}=bioData;
console.log(`my name is ${myname},my age is${ages},and my heigh qualification  is ${deg},i love to ${hobb.second}`);



