//create a funtion that returns the sum of numbers form 1 to n;
let sum=0;
let sumOf=(num)=>{
    for(let i=1;i<=num;i++){
         sum=sum+i;
    }
    console.log(sum);
}
sumOf(5);