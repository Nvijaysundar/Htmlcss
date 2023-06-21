//default values
function f1(a = 10,b =20)
{
    return a+b;
}

f1()

f1(100,200)

//key&value
function f2(a,b)
{
    console.log(a,b)
}

f2(a=10,b=20)

f = f1

console.log(typeof(f))
console.log(f())