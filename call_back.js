const perOne=(friend,callfrnd)=>{
    console.log(`hey i am busy now.i am talking to ${friend}.i will call you back.`)
    callfrnd();
}
const perTwo=()=>{
    console.log('hey whatsap. i call back you dekha: ')
}
perOne("reema",perTwo);