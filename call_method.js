const youtuber={
    name:"Anjali singh",
    content:"programming language",
    features:function(rating){
        console.log(`My favourite youtuber name is ${this.name}. she make vedios on ${this.content}. I will love to give ${rating}.`)
    }
}
// youtuber.features();
const youtuber2={
    name:"Ankita kumari",
    content:"standup-comydy"
}
youtuber.features.call(youtuber2,5)