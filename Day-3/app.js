//to print something after sometime use Settimeout
// setTimeout(function test() {
//     console.log('hello');

// },1000);


// const user = fetch('https://fakestoreapi.com/products');

// console.log(user);
// // const data = JSON.stringify(user);
// user.then(response=>response.json())
//cant pass directly settimeout with .then have to pass to function and then setTimeout so it will work otherwise it wont work 
// .then(setTimeout(function(data){
//     setTimeout(function test(){

//         console.log('hello data updated');
//     },5000);



// },1000)
// )


// fetch('https://fakestoreapi.com/products')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     setTimeout(function() {
//       console.log('Fetched data:', data);
//       setTimeout(function test() {
//         console.log('hello data updated');
//       }, 5000);
//     }, 1000);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });


///////////////////////creating a promise///////////////////
// const cart = ['apple', 'banana', 'mango'];

// const promise = addtoCart(cart);
// console.log(promise);

// promise.then(function (ID) {
//     // console.log(ID);

//     console.log('Id printed');
//     proceedToPay(ID);
//     return ID;

// })
// // .then(function(ID){
// //     console.log(ID);

// //      proceedToPay(ID);

// // })
// .then(function(ID){
//     return delievery(ID);
// })
// .then(function(details){
//     console.log(details);

// })
// .catch(function(err){
//     console.log(err.message);

// })
// .then(function(){
//     console.log('Always executable');

// })

// function addtoCart(cart) {
//     //creating new promise 
//     const pr = new Promise(function (resolve, reject) {
//         //add a new item
//         const ID = '12345';
//         // console.log(ID);
//         if (ID) {
//             setTimeout(function () {    //if u pass ID here then it will work as local var thats why we have passed 67890 and it will promt that if u remian blank then it will print the global var 12345
//                 console.log(ID);

//                 resolve(ID);
//             }, 1000)

//         }
//         //check validation of ID

//         if (!validate(cart)) {
//             // console.log();
//             const err = new Error('not available cart');
//             reject(err);

//         }
//     })
//     return pr;
// }

// function validate() {
//     return 1;
// }

// function proceedToPay(ID){
//     console.log(`${ID}':Paid bill'`);

// }
// function delievery(ID){

//     return new Promise (function (resolve, reject){
//         // console.log('delievered');
//         resolve(`${ID}"product delievered"`);

//     })
// }


//===============================ASYNC/AWAIT=================================//
// always returns a promise 

//=========with use of promises only make promise and then call it using .then===========//
// const p = new Promise(function(resolve,reject){
//     console.log('hello');

//     setTimeout(()=>{

//         resolve("learning JS")
//     },5000);
//     console.log('there !');

// })

// p.then(response =>console.log(response));



//==================asyns await function using========================//

// const p = new Promise(function (resolve, reject) {
//     console.log('hello');

//     setTimeout(() => {

//         resolve("learning JS")
//     }, 5000);
// })

// const q = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         resolve('learning async/await');
//     }, 1000);
//     console.log('there !');

// })

// async function getPromise() {
//     // return 'hello';
//     // return p;

//     const data2 = await q;
//     console.log('vadhare pareshan karo');
//     console.log(data2);

//     const data = await p;
//     console.log('Herann karooo');
//     console.log(data);


//     const data3 = await q;
//     console.log(data3);
// }

// getPromise();
// const data = getPromise();
// console.log(data);

// data.then(res=>console.log(res));
 

//===========================Fetch==============================//
// const API_URL ="https://fakestoreapi.com/products";
//  async function fetchData(){
//     //fetch data from the url 
//     const user = await fetch(API_URL);
//     //that data will be converted to json
//     const data = await user.json();
//     //json data will be pronted
//     // console.log(data);
    

//  }
//  fetchData();


// "use strict";
//this as global object 
// console.log(this);
 
//if you use strict here and then run this function it gives u undefined and withput strict it returns something
// function x(){
//     console.log(this);
    
// }
// x();
// window.x();

// const obj = {
//     a:10,
//     x:function(){
//         // console.log(this);
//         console.log(this.a);         
//     }
// }
//here x is method of object obj so obj is called object and x is called method
// obj.x();
//here this referes to the obj itself and if we pass this.a then it will refer to the value a =10

///////////////=================override this value or calling(passing) one object value in another object========/////////////////
// const obj = {
//     a:10,
//     x:function(){
//         // console.log(this);
//         console.log(this.a);         
//     }
// }
// const obj2={
//     a:50000
// }
// obj.x.call(obj2);
 
// obj.x.apply(obj2);

// let value = obj.x.bind(obj2);
// console.log(value());

// value();



/////////////=======================this inside arrow function=================/////////////////////
// const obj3= {
//     a:10,
//     x: ()=>{
//         console.log(this);
        
//     },
// }
// obj3.x();

const obj4 ={
    a:100000,
    x: function(){
        //enclosing lexical context
        const y = ()=>{
            const z = ()=>{
                console.log(this);
                
            };
            z();
            console.log(this);
            
        };
        y();
    }
}
obj4.x();