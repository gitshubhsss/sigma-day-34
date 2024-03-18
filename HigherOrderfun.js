//Higher order funtion in js

let multipleGreet=(fun,count)=>{
    for(i=1;i<=count;i++){
        fun();
    }
}
let greet=()=>{
    console.log("Hello");
}
multipleGreet(greet,3)
