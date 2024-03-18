//Create a funtion that returns the concatination of all strings
//in the agruments pass the all string string in the form of array and using funtion concatinate them
let str=["shubham","ranjane","16@gmail.com"];

let concatStr=(str)=>{
   let resultStr="";
   for(i=0;i<str.length;i++){
        resultStr=resultStr+str[i];
   }
   return resultStr;
}

console.log(concatStr(str));
