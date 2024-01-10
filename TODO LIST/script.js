const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");

function addTask() {
    if(inputBox.value == ""){
        alert("You must write something");
    }
    else{
        let newElement = document.createElement("li");
        newElement.innerHTML = inputBox.value;
        listContainer.appendChild(newElement);
        let crossicon = document.createElement("span");
        crossicon.innerHTML = "\u00d7";
        newElement.appendChild(crossicon);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    sessionStorage.setItem("data",listContainer.innerHTML);
}

function displayTask() {
    listContainer.innerHTML = sessionStorage.getItem("data");
}
displayTask();