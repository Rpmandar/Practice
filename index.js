console.log(4+5);
console.log("hi , hello");
var a = 3;
var b ="5";

//+
// addition 
// addition of String
// increment

console.log(a + b);


console.log(a-b);
console.log(typeof null);
var t = "xyz" - 3;
console.log(t , typeof t);

//explicit 
//u tell that convert into number
console.log(a + parseInt(b));

console.log(a + +b)
//data type  of nan is number

//nan is the only value which is not equal to it self.
console.log(Number.isNaN(t));


//*
var g1 =5;
var g2= "5";

console.log(g1==g2);
console.log(g1===g2);
// == checks for value
//it allows typecasting

// ===checks for value and data type
//it is faster than==
//to covert number into string use 9 + ''

var v1=4;
var v2=4;

var y1 =[100 , 200];
var y2=[100 , 200];
var y3=y1;// copy by reference.
//primitives are checkde by value
//number , string and booleans are checked by value

console.log(v1===v2);
//arrays are checked by memory address/refernce
console.log(y1===y2);
console.log(y1===y3);
 
y2.push(5);
y1.push(10);
y3.push(40);

console.log(y1);
console.log(y2);
console.log(y3);


var q1=[100,200];
var q5=[700,800];
// ... spread operator.
console.log([...q1,...q5]);


//itterate an aarry / looping

var marks=[10,20,30,40,50,60];
for(var i =0; i< g1.length; i++){
   console.log("i is" ,i , "value is "[i])

}

//for of

for(var mark of marks){
    console.log("mark is", mark)
}

//for in

for(var index in marks){
    console.log("index is", index , "marks are",marks[index]);
}

//joining

console.log(marks.join());

//looping of object
  
var student= {
name: "vani",
batch:"B31",
gender:"f",
};
console.log(student.name);

//for in loop will work for object

for(var key in student){
    console.log('key is' , key, 'value is', student[key])
}

//function
//reuse the code


var o1=4;
var o2=10;
var result= o1+o2;

//function , return is the keyword
//between curly braces is called function body

function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(100,200));

//task
var marks=[40,30,89,20,50];
//maximum marks
//op should be 89
//var max = marks[0]
var max=-Infinity  
for (var mark of marks){
if (mark>max){
    max =mark
}
   }   console.log(max);

   //math . max method

   console.log(Math.max(9,20,30));
   console.log(Math.max(...marks));


//write a function to find the avarage

//let marks=[10,20,30,40,50,60,7,80,90];

// function avg(marks) {
//     fn 

//     var sum= 0
//     for (var mark of marks){
//         sum = sum + mark; 
//     }
//     var noofstudents= marks.length;
//     var avarage= sum / noofstudents; 
//     return avarage;
// }
  
// console.log(avg [10,30], avg[50,20,6,2]); 









