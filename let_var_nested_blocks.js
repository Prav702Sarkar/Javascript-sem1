let h=180; //It is the global variable. And it can be accessed inside and outside the block.
{
    let w=120;
    console.log(h); 
    console.log(w);
}
console.log(h);
console.log(w); //Error is occurred because the W can we only access inside the block.

let  a=  200;
{
    let  w  =  100;{
        let  i  =  "tall";
        console.log(a); 
        console.log(w);  
        console.log(i);  
        }
    console.log(a);  
    console.log(w);  
    console.log(i); //same as the above reason.
   }
