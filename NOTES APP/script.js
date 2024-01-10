const notesContainer = document.querySelector(".notes-container");
const addButton = document.querySelector(".btn");


function createInputField(){
   let inputBox = document.createElement("p");
   let img = document.createElement("img");

   inputBox.className = "input-box";
   inputBox.setAttribute("contenteditable","true");
   img.src = "images/delete.png";

   notesContainer.appendChild(inputBox).appendChild(img);
   
}

notesContainer.addEventListener("click" , (e)=>{
   if(e.target.tagName === "IMG"){
      e.target.parentElement.remove();
   }
   
})


addButton.addEventListener("click" , createInputField);

