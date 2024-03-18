//make the calculator using objects

let calculator={
    add:(a,b)=>{
        return a+b;
    },
    sub:(a,b)=>{
        return a-b;
    },
    mul:(a,b)=>{
        return a*b;
    },
    div:(a,b)=>{
        return a/b
    }
}
console.log(calculator.add(2,3));//here we can call any funtion that is inside the calulator