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


// event delegation 
// removing the button


container.onclick = function(event) {

      if (event.target.className != 'remove-button') return;

      let pane = event.target.closest('.pane');
      pane.remove();

    };

const remove = document.querySelector('#container');

remove.addEventListener("click", (event) => {
  if(event.target.className !== 'remove-button') return;

  let hello = event.target.closest('.pane');
  hello.remove();
  });

// asyncronous programming (callbacks, promises, async, await):

// lets take an example of loading  a page 
// let src = "hello.js"
// function loadscript(src){
//   const scriptt = document.createElement('script');
//   scriptt.src = src
//   document.head.append(scriptt);

// }
function newfunc(){
  alert(`image loadeed succesfully`);

}
let src = "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
function generator(src){
  const img = document.createElement('img');
  img.src= src
  document.body.append(img)


}
generator();

promises
const promise = new Promise((resolve,reject) =>{
  console.log("hello");
  // resolve("succesfull")
  reject("some error")


});

// small promise that resolves after 2 seconds and handle it with .then and .catch

function hey1(){
  return new Promise((resolve,reject)=>{
    setTimeout(() =>{
      console.log("hello");
      resolve("succees");
    }, 4000);
  
  });
}

function hey2(){
  return new Promise((resolve,reject)=>{
    setTimeout(() =>{
      console.log("hello");
      resolve("succees");
    }, 4000);
  
  });
}
console.log(" fetching hey1 ....");
hey1().then(() =>{
  console.log("done it in 10sec");
  hey2().then(() => {
    
  })

});  
// async function usage and the await keyword usage

function hello(dataint){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      console.log(dataint);
      resolve(200);

    },4000);
  })
}
hello(2).then(() =>{
  console.log("understood the promises");
  hello(0).then(()=>{
    alert("used the promise chain");
  })

})

// now using the async and await to improve the code efficiency
// IIFE function syntax
// (fuction(){})();

(async function() {
  await hello(3);
  await hello(alert("hello"));
  await hello(4)
  
})();


