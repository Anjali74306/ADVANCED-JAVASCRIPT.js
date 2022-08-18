const singh={
    name: "anjali singh",
    qualif:"BA",
    sum: function(){
        var add=2+2;
        console.log("sum of two no.is"+add);
        console.log(this);
    }
}
singh.sum()