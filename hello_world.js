const hello = () =>{
    console.log("Hello World");
}

let nums = [1,2,3,4,5];
let newArray = nums.map((element)=>{
    let temp = Math.floor(Math.random()*100);
    return element+temp;
});

console.log(newArray);

hello();