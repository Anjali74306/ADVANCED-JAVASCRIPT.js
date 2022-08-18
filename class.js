
class pen{
    constructor(name,color,price){
        this.name=name;
        this.color=color;
        this.price=price
    }
    showprice(){
        console.log(`price of${this.name} is${this.price}`)
    }

}
// new (is a keyword)
const pen1=new pen("marker","blue","$3")
pen1.showprice()
