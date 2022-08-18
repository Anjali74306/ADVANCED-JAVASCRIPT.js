const getroll_no=()=>{
    setTimeout( ()=>{
        console.log('api getting roll_no');
        let roll_no=[1,2,3,4,5];
        console.log(roll_no);
        setTimeout((roll_no)=>{
            const biodata={
                name:"anjali",
                age:20
            }
            console.log(`my roll no is ${roll_no}my name is ${biodata.name}and i am ${biodata.age}years old`);
            setTimeout((name)=>{
                biodata.gender=='male';
                console.log(`my roll no.is ${roll_no}.my name id ${biodata.name}and i am ${biodata.age} years old`);
            },2000,biodata.name);
        },2000,roll_no[1])
        
    },2000);
}
getroll_no()

