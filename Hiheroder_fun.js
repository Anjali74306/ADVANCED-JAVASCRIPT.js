// const interviewQuestion=(name)=>{
//     if(name==="Anjali"){
//         return function(topic){
//             console.log(`Hii ${name},what is ${topic}? plz explain`);
//         }
//     }if(name==="Ankita"){
//         return function(topic){
//             console.log(`Hii ${name},what is ${topic} ? plz explain`);
//         }
//     }if (name==="Dimple"){
//         return function(topic){
//             console.log(`Hii ${name},what is ${topic} ? plz explain`);
//         }
//     }else{
//         return function(){
//             console.log("welcom to interview")
//         }
//     }
// }
// // interviewQuestion("Anjali") ("UI")
// // interviewQuestion("Ankita") (" Full stack devleoper")
// // interviewQuestion("Dimple") ("frontend devloper")
// const cand1= interviewQuestion("Anjali");
// cand1("UI");
// cand1("full stack devleoper");
// cand1("frontend devloper");
  

const interviewQuestion=(name)=>{
    if(name==="anjali"){
        return function(topic){
            console.log(`Hii ${name}.what is ${topic}? plz explain;`);
        }

    }if (name==="alima"){
        return function(topic){
            console.log(`Hii ${name}.what is ${topic}? plz explain: `);

        }
    }if(name=="ankita"){
        return function(topic){
            console.log(`Hii ${name}.what is ${topic} plz explain`)
        }
    }else{
        return function(){
            console.log("welcome to interview")
        }
    }
}
interviewQuestion ("anjali")("UI")
interviewQuestion ("ankita")("dsa")
