// console.log("Hello world!");

// var a=10
// var b=20
// console.log(a);

// var c="Praveen";
// console.log(c);

//LET VAR CONSTANT DIFFERENT

// const c=30;
// console.log(c);

// let a
// a=10;
// console.log(a);

// var b
// b=20;
// console.log(b);

// var a=10;
// var b=20;
// var a=30;
// var a;
// console.log(a);

// let a; //declaration
// a=20; //assignment
// let a = 30; //redeclaration
// console.log(a);

// const c=10;
// c = 30;
// console.log(c);


// let a = 10;
// let b = 20;
// console.log(a+b);
// const c = "Praveen ";
// const d = "Sarkar";
// console.log(c+d); //concatenation

// function abc(){
//     //code to run

// }
// abc(); //calling function

// const abc = function(){
//     //code to run
// }

// const xyz = () =>{
//     //code to run
//     //arrow function
// }

// function sum(){
//     let a = 10;
//     let b = 20;
//     console.log(a+b);
// }
// sum(); 

// function sum(c){
//     let a = 10;
//     let b = 20;
//     console.log(a+b+c);
// }
// sum(40); 
// sum(100);
// sum(60);
// sum(50);

// function multiplication(){
//     let a = 10;
//     let b = 20;
//     let c = a*b;
//     console.log(c);
//     return c; // return will only return the value but it will not give the output needs to be stored!
// }

// let ans=multiplication();
// console.log(ans);

// function sum(num1,num2){
//     let ans=num1+num2
//     return ans;
// }
// let result=sum(10,20)
// console.log(result);

//Logical operators
// 1. AND(&&)
// let score=90
// let attendence=82;
// if(score>90 && attendence>75){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }

// 2. OR(||)

// if(score>90 || attendence>75){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }

//3. NOT(!!) logical not operator
// let score=20
// let isPassed=score>33;
// if(isPassed){
//     console.log("Fail");
// }
// else{
//     console.log("Pass");
// }

//objects
// Objects represent a similar kind of groups
// they are colection of key-value pairs, starting with curly braces {}.

// const user = {
//     fname: "Praveen",
//     lname: "Sarkar",
//     age : 24,
//     city : "New Delhi"
// }
// console.log(user);
// console.log(user.age); //old
// console.log(user['age']); //new
// user.city = "Bihar";
// console.log(user);

// function intro(a){
//     console.log(`My name is ${a.name}. I live in ${a.city}`);
// }

// const person1 = {
//     name: "Praveen",
//     city: "New Delhi"
// }

// const person2 = {
//     name: "Sheela",
//     city: "Mumbai"
// }

// intro(person1);
// intro(person2);

//Methods
//Methods are functions that belongs to an object

//this keyword
// const marks = {
//     phy: 90,
//     chem: 80,
//     maths: 100,
//     totalMarks : function(detainFees){
//         console.log(this);
//         return this.phy + this.chem + this.maths - detainFees;
//     } 
// }
// console.log(marks.totalMarks(70)); 

// let fname='Praveen';
// console.log(fname.length);
// console.log(fname.toUpperCase());

// let fname = '         Praveen Sarkar        '
// console.log(fname.trim());

// let frame = 'Praveen';
// console.log(frame.includes('ee'));

// number methods
//console.log(Math.PI); //3.14
// console.log(Math.ceil(3.6)); //4
// console.log(Math.floor(3.6)); //3
// console.log(Math.random()*100000);

//Arrays

// let todo = ['Class Lena','Assignment karna','Sutta Marna']
// console.log(todo.length);
// todo.push('So jana')
// todo.pop()
// console.log(todo)
// todo.unshift('Subha uthna');
// todo.shift();
// console.log(todo.join(' <-> '))
// console.log(todo.includes('Sutta Marna'))
