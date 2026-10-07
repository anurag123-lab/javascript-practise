const cont = document.querySelector('.container');

cont.addEventListener('click', function() {
    cont.textContent = 'You clicked the container!';
});


// arrow functions 

let exp = (a,b)=>{
    return a+b;

}
console.log(exp(5, 3));


// array and array methods

const numbers = [9,6,7,6,5,4,3,2,1];

console.log(numbers);


// // arr.of method
let a =10;
let b = 20;
let c = 30;

console.log(Array.of(a,b,c));

// forEach() method
const arr = ["debbie", "anu","dinesh"]
arr.forEach((element) =>{
    console.log(`hello,${element}`);
});

// map() method
let newarr = arr.map((element) =>{return element.toUpperCase()});
console.log(newarr);
// filter() method
let filterarr = arr.filter((element) =>{return element.length>4});
console.log(filterarr);


// find() method
let findarr = arr.find((element) =>{return element.length>4});
console.log(findarr);   

// includes() method
function isWeekend(day){
    const weekend = ['saturday', 'sunday'];
    return weekend.includes(day);

}
console.log(isWeekend('saturday'));
console.log(isWeekend('tuesday'));

// split() method, join() method
var date  = "2026-10-01";
const splitdate = (dates) => {
    const splits =  date.split('-')
    return splits;

};
const joindate = (splits) => {
    return splits.join('/');
}
console.log(splitdate());
console.log(joindate(splitdate()));

// object creation

const obj = {
    name:"anurag",
    rollno: 163,
    course: "btech"
}
// creating a function and accessing the keys of the object
const {name, rollno,course} = obj
const func = function(anything){
    `here is the ${anything.name} and class as ${anything.class}`

}
console.log(func(obj));

// functions global scope and local scope(done)

// IIFE immidiate invoked function expression 

(function anurag(){
    console.log("hello anurag");

})();
// this is the execution call
( () => {
    console.log(`hello`);

})()


// DOM practise and learning

const count = document.querySelector(".list");

const li = document.createElement("li")
count.append(li);
li.classList.add("done");

const button = document.querySelector(".btn");
const list = document.getElementById("ull");
const inputt = document.getElementById("input");



button.addEventListener("click" , () =>{
    const content = inputt.value.trim()
    if(content === ""){
        return
    }
    else{

        const li = document.createElement("li");
        li.textContent = `here is the content ${content}`
        list.append(li)

        inputt.value=""

    }

    
    
})




                          