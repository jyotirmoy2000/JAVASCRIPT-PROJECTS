const addButton = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes;

function showData() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notesContainer.innerHTML = storedNotes;
    }
    // Update the 'notes' variable after displaying stored data
    // notes = document.querySelectorAll(".input-box");
}

function updateData() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function createInputField() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateData(); // Update localStorage when creating a new input field
    // Update the 'notes' variable after creating a new input field
    // notes = document.querySelectorAll(".input-box");
}

function handleInputChange() {
    updateData(); // Update localStorage when the content of an input field changes
}

function handleDeleteClick(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateData();
        // Update the 'notes' variable after deleting a note
        // notes = document.querySelectorAll(".input-box");
    }
}

addButton.addEventListener("click", createInputField);
notesContainer.addEventListener("input", handleInputChange);
notesContainer.addEventListener("click", handleDeleteClick);
document.addEventListener("keydown" , (event)=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
// Initial display of data
showData();
