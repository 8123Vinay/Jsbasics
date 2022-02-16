// var myVar = 1;

// // function myParam(){
// //    
// // }
// function foo(myParam = function() { return myVar + 3  } ) {
//   var myVar = 6;
//   console.log(myParam()) // log 4 :) 
// }
// foo()


// function fun(a,b){
//     console.log("This is vanilla js")
//     console.log(typeof(a)+" " +typeof(b))
// }
// (typofofglobal.fun())
// var x=10;
// console.log(global.x)
// function fun(){
//     console.log(this)
// }
// fun()

function fun(){
    function fun2(){
        x=10;
        function fun3(){
            y=100
        }
        fun3()
    }
    fun2()
}
fun()


var x = 1;
function fun(){
//   var x=10;
//   console.log(x)
//    return x;
x=10

  
}
 
fun();
console.log(x)

// function foo(x, y = fun) {
//    x = 3;
// //   console.log(y)

// }
 
// foo();
 
// and the outer `x` is also left untouched
console.log(x);


