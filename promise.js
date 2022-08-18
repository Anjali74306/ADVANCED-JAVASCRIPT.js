const a=require('readline-sync');
const b=a.question("enetr your number")
var promise=new Promise(function(reject,resolve){
    if(b%2===0){
        resolve("even")
    }
    else{
        reject("odd")
    }

})
promise.then(function(result){
    console.log(result)
})
.catch(function(result){
    console.log(result)
})