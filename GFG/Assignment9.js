let obj = { name: "Prakash", age: 111, hairColor: "black", likes: "food" };

let newObj= new Object();

//Looping using for of loop like array
function forOfLoop (){
    for(let [key,value] of Object.entries(obj)){
    newObj[value]= key;
}
console.log(newObj);}

//using for in loop as object

function forInLoop(){
    for(let key in obj){
        newObj[obj[key]]=key;
    }
    console.log(newObj);
}

forInLoop();
forOfLoop();