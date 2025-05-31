//Retrive Tasks from local storage or creat an empty array if this is the first time
let tasks= JSON.parse(localStorage.getItem("tasks") || '[]');

//Save tasks and changes on Local storage so you don't lose them on page refresh
function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
};

document.addEventListener('DOMContentLoaded',()=>{
    displayTasks();
});

//Add Task  Function

function addTask(){
    const taskText= document.getElementById('taskInputText').value.trim();  
    if(taskText !==""){
        tasks.push(taskText);
        saveTasks();
        displayTasks();
        document.getElementById('taskInputText').value= "";
    }
};


//Delete Task Function
function deleteTask(index){
    document.getElementById(`delBtn-${index}`).addEventListener('click',()=>{
        tasks.splice(index,1);
    saveTasks();
    displayTasks();
    })
}


//Display Tasks Function
const taskContainer= document.getElementById('taskContainer');
function displayTasks(){
  
    taskContainer.innerHTML= "";
    tasks.forEach((task,index)=>{
        const div= document.createElement('div');
        div.setAttribute('id',`task_${index}`);
        div.setAttribute('class','task');
        div.innerHTML= `
                <p class="taskText orbitron-font" id="taskText-${index}" ><span class="Sno orbitron-font" id="Sno">${index+1} </span>${task}</p><button title="delBtn" class="delBtn" id="delBtn-${index}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg></button> <button class="editBtn" id="editBtn-${index}" title="editBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg></button>
              
                `;
        // taskContainer.innerHTML= taskContainer.innerHTML + div.outerHTML;
        taskContainer.appendChild(div);
        editBtn(index);
        deleteTask(index);
            });
           
}


//open taskcontainer on Plus button click and close on Addtaskbutton click

const addTaskBtn= document.getElementById('addTaskBtn');
const addTaskContainer= document.getElementById('addTask');
const addTextBtn= document.getElementById('addBtn');
addTaskBtn.addEventListener('click',()=>{
    addTaskContainer.style.display= 'flex';
    addTextBtn.addEventListener('click',()=>{
        addTask();
        addTaskContainer.style.display= 'none';
        
    })
document.getElementById('taskInputText').addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        event.preventDefault();
        addTask();
        addTaskContainer.style.display= 'none';
    }
})
})


//Open editContainer on edit button click and close on editTask button click
const EditTextInput= document.getElementById('editTaskText');
function editBtn(index){const editBtn= document.getElementById(`editBtn-${index}`);
const editTaskContainer= document.getElementById('editTaskContainer');
const editTaskTextBtn= document.getElementById('editTaskTextBtn');

editBtn.addEventListener('click',()=>{
    editTaskContainer.style.display= 'flex';
    // document.getElementById('editTaskText').value= tasks[index];
    editTaskTextBtn.onclick= ()=>{
        editTask(index)
        editTaskContainer.style.display= 'none';
    };

   EditTextInput.onkeydown= (event)=>{
        if(event.key === 'Enter'){
            event.preventDefault();
            editTask(index);
            editTaskContainer.style.display= 'none';
        }
    };
})}

//Edit Task Function

function editTask(index){
    const editedTaskText = document.getElementById('editTaskText').value.trim();
    if(editedTaskText !== ""){
        tasks[index]= editedTaskText;
        saveTasks();
        displayTasks();
        document.getElementById('editTaskText').value= "";
    }
};




