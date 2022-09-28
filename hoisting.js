// //dif bettwwn var let and cost
// //with var we can redeclare variables
// //let = we can not redcaler same variables.

// // let name= "man"; //declaration
// // let name="tan";

// // console.log(name); 

// // var z1;
// // console.log(z1, typeof z1);// op undefined and string
// // // declared but value is not assigned

// // console.log(z2); // op Not defined
// // //not declared AND NOt even declare

 

// // {
// //     var a="amn and you are"
// // }
// // console.log(a);



// // function nice1(){
// //     for(var i=0;i< 10 ; i++){}
// //     console.log(i);
// // }



// // function nice2(){
// //     for(let i=0;i< 10 ;  i++){}
// //     console.log(i);
// // }


// // nice1(); //op 10 as i = 10 
// // nice2(); // udefined


// // //////Hoisting


// // function fun(){
// //     console.log("before",a);
// //     var a =10;
// //     console.log("after" , a);
// // }
// // fun();


// // // console.log("before",a);
// // let a =10;
// // console.log("after" , a);

// // console.log("before",c);
// // const c =10;
// // console.log("after" , c);

// function getParameter(length, breadth){
//    let parameter = 2 *(length+breadth);
//     console.log("parameter of rectangle is " + parameter);
// }
// //caller function
// getParameter(2,3)
// getParameter(5,6)


// ////////

// function Sayhi(name= "mandar"){
//     console.log(`hi ${name}`);
// }

// Sayhi();
// Sayhi('guvi')
// Sayhi("rambo")

// ///function with return key word
// //it is used to return the o p

// function getSun(num1,num2){
//     return (num1 + num2);
// }

// console.log(getSun(10,20))

// ///passing an object as a parameter through the function
// //json= javascript object notation

// let mobile = {
//    "brand":"apple",
//    "color":"white",
//    "price":100,
//    "isInsured":true
// }

// function displayData(obj){
//       console.log( `
//       brand:${obj.brand}

//        color:${obj.color}`
//       )
// }

// displayData(mobile);


// /////////////////datatypes


// //premetive             nonpremitive
// //dat atypes             array
// //number                   object
// //string                   symbol
// // Boolean
// // null
// // undefined

// //Annonymous function
// //it does not not any name
// // let getSum = function(num1,num2){
// //     let sum= num1+num2;
// //     return sum;
//  // }
// // console.log(getSum(2,3));

// // //ief = immidiately revoked functions

// // //  (function getSum(num1,num2){
// // // //     let sum= num1+num2;
// // // //      console.log(sum);
// // // // })(50,60)
// // // //it executes once in the lfe time
// // // //prevent global scope of the data

// // // // (function(){
// // // //     console.log("I am function ..")
// // // // })()

 
// // // //variable scoping

// // // // let num=1;
// // // // let num=20;

// // // // console.log(num);
// // // //const i sread only


// // // let course="MERN";
// // // if(course==="MERN"){
// // //     var dep1="react";
// // //     let dep2="full"
// // // }
// // // console.log(course);//MERN as it is 
// // // console.log(dep1);//react
// // // console.log(dep2);//error as it is not defined


// // /////

// // function myFun(){
// //     var num1=1;
// //     let num2=2;
// //     const num3=3;
// //     {
// //         var num1=100;
// //         let num2=200;
// //         const num3=300;
// //         console.log("inside block", num1);
// //         console.log("inside block", num2);
// //         console.log("inside block", num3);

// //     }
// //     console.log("out block", num1);
// //     console.log("out block", num2);
// //     console.log("out block", num3);
// // }


// //array destructuring and object destructuring

// let array=[10,20,30,40,50,60,70,80,90]
// console.log(array.length);

// //array destructuring
// let num1,num2,num3;
// [num1,num2,num3]=array

// console.log(num1,num2);

// //object desturutring
// //crate a simple list of elemet thet should contain below data
// //firstname
// //latname
// //gender
// //age
// //location
// //assign the array item to position each value 
// //assecc them with the help of aray destructing

// let array1=["Mandar","Kulkarni","male","24","parbhani"];



// let [name2,surname1,gender1,age1,address]= array1;

// console.log(`
// name:${name2},
// surname:${surname1},
// gender:${gender1},
// age:${age1},
// location:${address}
// `)


//destructuring of the function

// function Displaydata({firstname,lastname,age}){
// return `Name: ${firstname} ${lastname}
//         Age:${age}`;
// }

// const person={
//     firstname:'mandar',
//     lastname:'kulkarni',
//     age:'25'
// };
// console.log(Displaydata(person));


//spread operator

//... is used as spread operator

// let array1=["apple","banana","orange","grapes"]
// let aray2=[...array1];

// aray2.push("pinapple")
// console.log(aray2);
// console.log(array1);
//using spraed operator we are preventing orignal array to get update

///////////rest parameter****
// ... 3  dots at the end of the array
// if you want to skip first few element
// always used in function


// function getSorteddata(...data){
//     let sorteddata=data.sort(((a, b) => a - b));
//     return sorteddata; 
// }
// console.log(getSorteddata(12,13,5,48,65,2,69,8,26,7,4));

// ******OOPs Concept
 
// class Vehicle{

// }
// //create an object
//  let vehicleObj = new Vehicle();


//null and zero is different


//JSON
//objects
//aray of object
//object of object


var employees = [
    {
      id: 101,
      name: "Lavish",
      Designation: "Manager",
      year: 10,
    },
    {
      id: 102,
      name: "Raj",
      Designation: "Sr. Developer",
      year: 11,
    },
    {
      id: 103,
      name: "Raju",
      Designation: "Developer",
      year: 12,
    },
    {
      id: 104,
      name: "Rajesh",
      Designation: "Sr. Developer",
      year: 13,
    },
  ];


let data=employees.filter((emp)=>{
    if (emp.year>=11){
        return emp.name
    }
    else{
    return false;
}
})  

console.log(data);
















