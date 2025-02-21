//lexical
// Higher order function
// functions that operate on other functions, either by taking them as an arguents or by returning them:

// function a(x){
//     console.log('Inside a');
//     x();
// }

// function b(){
//     console.log('Inside b');
// }
// a(b);

// function a(){
//     console.log('Inside a');
// }

// function b(x){
//     console.log('Inside b');
//     x();
// }
// b(a); //b is the higher order function whereas a is the callback function.

// callback function - it is the function passed into another function, which is then invoked inside another function.

// lexical scope
// function a(){
//     console.log('Hello a');
//     let x = 10;
//     function b(){
//         console.log('Hello b');
//         let y = x + 20;
//         console.log(y);
//     }
//     function c(){
//         console.log('Hello c');
//         let z = x + 30; // child cannot access another child's variable but child can access from the parent function.
//         console.log(z);
//     }
//     b();
//     c();
// }
// a();
