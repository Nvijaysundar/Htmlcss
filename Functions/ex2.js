var a = 10;
var b = 20;
//global variables
function f1(){
    console.log(a,b)
}

f1()

//local variables
function f2(){
    var x =10
    var y = 20
    return x+y;
}

console.log(f2())


