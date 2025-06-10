const notesCont = document.querySelector('.notesContainer');
const createBtn = document.querySelector('.container button');
const notes = document.querySelectorAll('.note');

const displayNotes = async ()=>{
     notesCont.innerHTML = await localStorage.getItem("notes");
}

displayNotes();

const saveLocal = ()=>{
    localStorage.setItem("notes",notesCont.innerHTML);
}

function createNote(){
    const p = document.createElement('p');
    const img = document.createElement('img');
    p.setAttribute("contenteditable","true");
    p.className = "note";
    img.src = "images/delete-181.svg";
    img.alt = "delIcon";
    notesCont.appendChild(p).appendChild(img);
}

createBtn.addEventListener("click",()=>{
    createNote();
     saveLocal();})

notesCont.addEventListener('click',(e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        saveLocal();
    }else if(e.target.tagName === 'P'){
        notes.forEach((nt)=>{
            nt.onkeyup = function(){
                saveLocal();
            }
        })
    }
})