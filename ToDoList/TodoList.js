//Retrive Todo from local storage or creat an empty array
let todo= JSON.parse(localStorage.getItem("todo")) || [];

const todoInput= document.getElementById("todoInput");
const todoList= document.getElementById("todoList");
const todoCount= document.getElementById("todoCount");
const add_btn= document.getElementById("btn-add");
const del_btn= document.getElementById("btn-del");

//Initialize project


document.addEventListener('DOMContentLoaded',()=>{
    add_btn.addEventListener('click',addTask);
    todoInput.addEventListener('keydown',(event)=>{
        if(event.key==='Enter'){
            event.preventDefault();
            addTask();
        }
    })
    del_btn.addEventListener('click',delTasks);
    displayTasks();
    
})


function addTask(){
    const newTask= todoInput.value.trim();
    if(newTask !== ""){
        todo.push({
            text: newTask,
            disabled: false
        })
        saveToLocalStorage();
        todoInput.value= '';
        displayTasks();
    }
}

function delTasks(){
    todo=[];
    saveToLocalStorage();
    displayTasks();
    
}

function displayTasks(){
    todoList.innerHTML="";
    todo.forEach((item,index)=> {
        const p=document.createElement('p');
    p.innerHTML=`<div class="todo-container">
         <input type="checkbox" class="todo-checkbox" id="input-${index}" ${item.disabled ? "checked": ""}>

         <p id="todo-${index}" class="${item.disabled ? "disabled":""}" onclick="editTask(${index})" >
             ${item.text}
         </p>
    </div> `
    
    p.querySelector(".todo-checkbox").addEventListener('change',()=>{
        toggleTask(index);
    })
    todoList.appendChild(p);
    }); 
    todoCount.textContent=todo.length;
}

function toggleTask(index){
    todo[index].disabled = !todo[index].disabled;
    saveToLocalStorage();
    displayTasks();
}

function saveToLocalStorage(){
    localStorage.setItem('todo',JSON.stringify(todo));
}

function editTask(index){
    const todoItem= document.getElementById(`input-${index}`);
    const existingText= todo[index].text;
    const inputElement= document.createElement('input');

    inputElement.value=existingText;
    todoItem.replaceWith(inputElement);
    inputElement.focus();
    inputElement.addEventListener('blur',()=>{
        todo[index].text=inputElement.value.trim();
        saveToLocalStorage();
        displayTasks();
    })
}