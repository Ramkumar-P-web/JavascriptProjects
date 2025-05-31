// Assignment 4: Write a JavaScript program to add items to favorites from the drop down list. If you select any item that should be added to the list and be displayed on the ui, if you click on the added item again then it should not add the same item again.

const foods= ["Biriyani","Idly","Veg meals","Non-veg meals","Pizza","Chapati","Dosai","Barrota!"];
const selectElement= document.getElementById("selectElement"); //we changed favoritefoods to selectelement as ID change if there any variable called favoriteFoods in this code to selectElement

foods.forEach((item,index)=>{
    const option= document.createElement("option");
    option.setAttribute("value",`${item}`);
    option.setAttribute("id",`food-${index}`)
    option.innerText= `${item}`;
    selectElement.appendChild(option);
})

const mtArray=[];  
document.getElementById("addBtn").addEventListener("click",()=>{

const option=selectElement.options[selectElement.selectedIndex].text;
if(!mtArray.includes(option)){
    mtArray.push(option);
displayList(option);
}else{
    alert(`${option} is already exist. choose another`);
}
})



function displayList(innerText){
    
        const listItem= document.createElement("li");
        listItem.innerText= innerText;
        document.getElementById("addedList").appendChild(listItem);
    
}

