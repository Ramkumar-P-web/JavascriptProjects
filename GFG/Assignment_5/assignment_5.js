
const para = document.getElementById('para');
const paraArray= para.innerText.split(/\s+/);  //doubt

function changeBG(){

const highlightedPara= paraArray.map((word)=>{
        const wordLength= word.replace(/[,.!;:?]/g,'').length;
        if(wordLength > 5){
             return `<span style="background-color: green; color:white" >${word}</span>`
            }
         return word;
    })

    para.innerHTML= highlightedPara.join(" ");
    // para.innerText= newPara.join(" ");
    // para.style.backgroundColor= "green";
console.log(paraArray);
console.log("gell");
}
