// // the promise has

// // I will only implement the Promise now
// // without the new Keyword;
// function promise(callback){

// }
// promise.resolve=function(){
//     console.log("the promise is resolved");
// }

// promise.reject=function (){
//     console.log("the promise is rejected");
// }

// let promise=new Promise((res,rej)=>{
//     if(1<2){
//         res("Hello this is resolved")
//     }
//     else{
//         rej("This is rejected")
//     }
// })


// function fun(one){
//     console.log(one);
// }

// function funnest(two, function fun(one){
//     console.log(one);
// }){
//     fun(two)
// }


// function fun((one)=>{
//    console.log("Hello")
// })
// {
//   one();
// }
// var two=()=>{
//     one();
// }

// function one(()=>{
//     console.log("Hello")
// },b){

// }

// two(one);

// setTimeout(()=>{
//     console.log("Hello World!")
// },1000);
// // console.log(typeof(setTimeout));



// function res(a){
//     console.log(a);
// }

// function rej(a){
//     console.log(a)
// }
// function fun(one){
//     one();
// }

// fun(()=>{
//     setTimeout(()=>{
//         res("hello this is resolved")
//     },2000);
// });




// function Student(name,age,place) {
//     this.name=name
//     this.age=age;
//     this.place=place;
// }

// let student1=new Student("vinay","haveri",23);
// console.log(student1);
// console.log(Student.prototype);
// console.log(student1.__proto__);
function res(a){
    console.log(a)
}
function rej(a){
    console.log(j);
}

function Pro(fun){
    this.fun=fun;
}

// let x=new Pro((res,rej)=>{
//     if(1<2){
//         res("Hello world")
//     }
//     else{
//         rej("Hello this is rejected");
//     }
// })
// console.log(x)
const myPromise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve('foo');
    // }, 0);
    resolve("hello");
});
console.log(myPromise);