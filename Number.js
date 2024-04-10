let x=102;
let y=102.7;
let z=10e2;

console.log(x,y,z);

//is Integer()
x=10;
y=1.8;
z="x";

console.log(Number.isInteger(x));
console.log(Number.isInteger(y));
console.log(Number.isInteger(z));

s="12345";
console.log(typeof(Number.parseInt(s)));

s= "123.567";
console.log(typeof(s));
console.log(Number.parseFloat(s));

let n= "1234";
console.log(typeof(n));
console.log(Number.parseInt(n));
console.log(n);
console.log(typeof(n));
console.log(typeof(Number.toString(n)));
