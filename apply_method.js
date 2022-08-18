// # // The apply method take argument as an array.
// # const course={
// #     name:"Anjali Singh",
// #     age:"20",
// #     designation:"student",
// #     learn: function(years){
// #         console.log(`Hlo i am ${this.name}. I am ${this.age} years old and i am ${this.designation} of Navgurukul and here i spend ${years} year`)
// #     }
// # }
// # // course.learn();
// # let course2={
// #     name:"Dimple Kumari",
// #     age:"21",
// #     designation:"student",
// # }
// # course.learn.apply(course2,[1]);

// # a=int(input("enter your ist numbr"))
// # b=int(input("enter your second number"))
// # num1=int(input("Enter a number for num1: "))
// # num2=int(input("Enter a number for num2: "))
// # a=0
// # for i in range (1,num2+1):  
// #  a=a+num1       
// # print("Multiplication of numbers: ",a) 

// let n=require("readline-sync");
// let num=n.questionInt("enter the number:-")
// i=1
// while (i<=num){
//     j=1
//     while (j<=10){
//         console.log(i,"*",j,"=",j*i)
//         j++
//     }
//     i++
//     console.log()
// }

// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// uniques=[]
// duplicates=[]
// for(var i of number_list){
//   if(!uniques.includes(i)){
//       uniques.push(i)
//   }
// }
 
// for(var j of uniques){
//   count=0
//   for(var k of number_list){
//       if (j === k){
//           count+=1
//       }
//   }
//  if(count >1){
//    duplicates.push(j);
//  };
// }
 
// console.log(duplicates);
// var count=0
// for(var i of duplicates){
//     count=count+1
// }
// console.log(count)
