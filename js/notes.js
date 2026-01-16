let titleInput = document.getElementById("noteTitle");
let descInput = document.getElementById("noteDesc");
let addBtn = document.getElementById("addNoteBtn");
let notesContainer = document.getElementById("notesContainer");
let searchBar = document.getElementById("searchBar");
showNotes();
addBtn.addEventListener("click", function () {
    let title = titleInput.value;
    let desc = descInput.value;

    if (title === "" || desc === "") {
        alert("Please enter title and note!");
        return;
    }
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: title,
        desc: desc
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    titleInput.value = "";
    descInput.value = "";
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div style="border: 2px solid #ccc; border-radius: 5px; padding: 10px; margin-bottom: 10px; background-color: #ffe4cc;" class="note-card">
            <h3 class="note-title">${element.title}</h3>
            <p class="note-desc">${element.desc}</p>
            <button style="margin-top: 10px; background-color: #ff4d4d; color: white; border: none; padding: 5px 10px; border-radius: 5px;" id="${index}" onclick="deleteNote(this.id)" class="delete-btn">Delete</button>
        </div>
    `;
    });
    if (notesObj.length != 0) 
    {
        notesContainer.innerHTML = html;
    } else {
        notesContainer.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
searchBar.addEventListener("input", function () {
    let inputVal = searchBar.value.toLowerCase();
    let noteCards = document.getElementsByClassName("note-card");
    for (let i = 0; i < noteCards.length; i++) {
        let noteTitle = noteCards[i].getElementsByClassName("note-title")[0].innerText.toLowerCase();
        let noteDesc = noteCards[i].getElementsByClassName("note-desc")[0].innerText.toLowerCase();
        if (noteTitle.includes(inputVal) || noteDesc.includes(inputVal)) {
            noteCards[i].style.display = "block";
        } else {
            noteCards[i].style.display = "none";
        }
    }
});

