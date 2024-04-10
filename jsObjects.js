let person = 
{
    firstname : "John",
    lastName : "Kennedy",
    age :50,
    weight:60
}

//Accessing Object Properties
console.log(person["firstname"]);
console.log(person["age"]);
console.log(person.weight);


//add new property the existing object
person["height"]=5.5;

console.log(person["height"]);


//update existing property
person.weight=65;

console.log(person.weight);

for(let x in person){
   console.log(x+" "+person[x])
}