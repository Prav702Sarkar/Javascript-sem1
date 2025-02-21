//loops
// for(let i = 0; i<=5; i=i+1){
//     console.log(i);
// }

// for(let i = 0; i <=5; i++){
//     console.log(i);
// }

//looping through array
// let todo = ['class karna','Assignmen karna','Study Karna'];
// for(let i = 0; i < todo.length; i++){
//     console.log(todo[2]);
// }

//for....of loop
// let todo = ['class karna','Assignmen karna','Study Karna'];
// for(let myTodo of Todo){
//     console.log(myTodo);
// }

// for of loop (strictly for arrays)
// for (let myArr of arr){
//     console.log(myArr);
// }

// let obj = {
//     phy: 80,
//     chem: 90,
//     maths: 100
// }

// for (let key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }

let arr = [90,80,56,30,100]
for (let i = 0; i < arr.length; i++){
    if (arr[i]<33){
        break;
    }
    console.log(arr[i]);
}
