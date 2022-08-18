function fun(){
    return{
        model:'galaxy',
        price:function(){return("price Rs.3000")}
    }
}
obj1=fun()
console.log(obj1.model+" "+obj1.price())
