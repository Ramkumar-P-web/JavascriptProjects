const tableBody= document.getElementById("tBody");
const AddBtn= document.getElementById("AddBtn");

function Add_Row(){
    const Row= tableBody.insertRow(-1);
    for(let i=0;i<4;i++){
       const data= Row.insertCell(i);
       data.innerText= `Cell-${i+1}`;
    }

}