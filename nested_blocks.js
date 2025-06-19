let counter;
console.log(counter); //this line will be undefined as because the variable is declared, but not assigned.
{
    counter=1;
    console.log(counter);
}
counter=counter+1;
console.log(counter);

let c;
console.log(c); 
{
    c=1;{
        console.log(c); //the programme will be executed in the same way as the previous one but in this one, it has two nested blocks.
    }
}
c=c+1;
console.log(c);