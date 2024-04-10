let fruits = ["Bannana","Orange","Apple","Mango"];

console.log(fruits.toString());
console.log(fruits.join("*"));


fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.pop())

fruits.push("Kiwi");
console.log(fruits.push("Kiwi"));

console.log(fruits);
console.log(fruits.shift());

console.log(fruits.unshift("Grapes"));
console.log(fruits);


//Deleting elements from array
delete fruits[1];
console.log(fruits);

//merging arrays using concat()
let arr1 = [10,20];
let arr2 = ["A","B","C"];
console.log(arr1.concat(arr2));
let arr3 = ["X","Y","Z"];
console.log(arr1.concat(arr2,arr3));

//slice()
console.log(fruits.slice(1));
console.log(fruits.slice(2));

let nums = [100,500,200,800,300];
console.log(nums.sort());

//reverse()
console.log("Original array elements :" + fruits);
fruits.reverse();
console.log("After reversing Array : " +fruits);

