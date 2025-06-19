var gg="Good"; //it is a global variable

function test(){
    var lg="Morning";
    console.log("Function");
    console.log(gg);
    console.log(lg);
}

test();
console.log("Function");
console.log(gg);
// console.log(lg);  Error, this is because it's a local variable inside the function and it's not accessible outside the function.