const foods= ["Biriyani","Idly","Veg meals","Non-veg meals","Pizza","Chapati","Dosai","Barrota!"];
const selectElement= document.getElementById("selectElement");

//Add foods array to select element options and create the dropdown list using this array  
for(let food of foods){
    const Option= document.createElement('option');
    Option.innerText=food;
    selectElement.appendChild(Option);
}
const favoriteFoods= new Set();

function addToFavorite(){
    const favoriteList=document.getElementById("favoriteList");
   
    const favoriteFood= document.createElement("li");
    const optionText= selectElement.options[selectElement.selectedIndex].text;

    if(!favoriteFoods.has(optionText)){
        favoriteFoods.add(optionText);
        favoriteFood.innerText=optionText;
        favoriteList.appendChild(favoriteFood);
    }else{
        alert(`${optionText} is already exist in your favoritefoods.`)
    }

}

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("addBtn").addEventListener("click",addToFavorite);
    selectElement.addEventListener("keydown",(event)=>{
        if(event.key === "Enter"){
            event.preventDefault();
            addToFavorite();
        }
    })
})
