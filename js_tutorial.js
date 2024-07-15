console.log("hello")
// primitive or value types
//dynamically typed

// let x = "dipesh"
// console.log(x)
// x = null
// console.log(x)
// console.log(typeof(x))

// let w;
// console.log(w)

// let course = {
//     title: "HHLD",
//     description:"projects",
//     rating:5
// };
// console.log(course)
// console.log(typeof(course))
// console.log(course.title)

// primitive/value type -> string, int, bool , null, undefined, symbol

// reference type->objects, arrays, functions

// value type vs reference types
// let x = 20;
// let y = x;
// x = 30
// console.log(x)
// console.log(y)

// let p ={name:"dipesh"}
// let q = p;
// p.name = "joshi"
// console.log(p)
// console.log(q)

// Arrays
// arrays are actually objects

// function

// function createCourse(courseName){
//     console.log('creating: ' +  courseName)
// }
// createCourse('dipesh')

// Execution context
//1.memory phase - variable environment
//2.code phase- thread of execution

//Hoisting
// createCourse('dipesh')
// function createCourse(courseName){
//     console.log('creating: ' +  courseName)
// }

// // this and window
// console.log(a)
// var a = 10;
// console.log(a)
// console.log(this.a)
// console.log(window.a)
// console.log(this)

// declare variable ways:
// > lexical scope
// function hello(){
//    let x = 100;
// }
// hello()
// console.log(x)

// function - first class citizen
// higher order function
// function + lexical scope = closure

// Arrow function

// let sum = (a,b) =>{
//     return a+b;
// }
// let sum1 = (a,b)=> a+b;

// function outer(){
//     function inner(){
//         console.log('hello');

//     }
//     return inner;
// }
// let returnedFuncVar = outer();
// console.log(returnedFuncVar)

// CALLBACK
// event loop
// event queue
// callback hell

// function fetchData(callback){
//     setTimeout(()=>{
//         let data = "fetched data";
//         callback(data,'server error');
//     },5000);

// }

// function handleData(data,error){
//     if(error){
//         console.error(error);
//     }
//     else{
//         console.log(data);
//     }

// }
// fetchData(handleData);

//Promises -> object

// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('data fetched')
//         }, 5000);
//     });
// }
// async function fetchData(){
//     try{
//         const result = await getData();
//         console.log(result);
//     }
//     catch(error){
//         console.error(error)
//     }
// }

// 1.Map
// const nums =[1,2,3];
// const doubleeNums = nums.map((nums)=>2*nums);
// console.log(doubleeNums)

//2 .filter
// const nums =[1,2,3];
// const doubleeNums = nums.filter((nums)=> nums%2 === 0);
// console.log(doubleeNums)


//3.reduce
const nums =[1,2,3];
const doubleeNums = nums.reduce((accumulator,nums)=> accumulator+nums,0);
console.log(doubleeNums)