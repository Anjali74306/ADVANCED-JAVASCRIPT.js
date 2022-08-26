const pobj1 =new Promise((resolve,reject)=>{ 
    setTimeout( ()=>{
        let roll_no=[1,2,3,4,5];
        resolve(roll_no);
    },2000);
} );

const getbiodata=(indexdata)=>{
    return new Promise((resolve, reject)=>{
        setTimeout((indexdata)=>{
            let biodata={
                name:"anjali",
                age: 26
            }
            resolve(`my roll no. is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age}years old.`);

        },2000,indexdata)
    });
}

// pobj1.then((roll_no) =>{
//     console.log(roll_no);
//     return getbiodata(roll_no[1]);

// }).then((kuchbhi)=>{
//     console.log(kuchbhi);
// }).catch((error)=>{
//     console.log(error);
// })

async function getdata(){
    const rollnodata = await pobj1;
    console.log(rollnodata);

    const biodatas = await getbiodata(rollnodata[1]);
    console.log(biodatas);

    // return biodatas;
}
getdata()

