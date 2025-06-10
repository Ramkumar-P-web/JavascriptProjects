const notesCont = document.querySelector('.notesContainer');
const createBtn = document.querySelector('.container button');

function displayNotes() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notesCont.innerHTML = storedNotes;
        attachEventListeners();
    }
}

function saveLocal() {
    localStorage.setItem("notes", notesCont.innerHTML);
}

function createNote() {
    const p = document.createElement('p');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    p.setAttribute("contenteditable", "true");
    p.className = "note";
    img1.src = "images/delete-181.svg";
    img1.className = 'deleteBtn';
    img2.src = "images/save-85.svg";
    img2.className = "saveBtn";
    p.appendChild(img2);
    p.appendChild(img1);
    notesCont.appendChild(p);
    attachEventListeners();
}

function attachEventListeners() {
    const deleteBtns = document.querySelectorAll('.deleteBtn');
    const saveBtns = document.querySelectorAll('.saveBtn');

    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            saveLocal();
        });
    });

    saveBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            saveLocal();
        });
    });
}

createBtn.addEventListener("click", () => {
    createNote();
    saveLocal();
});

displayNotes();