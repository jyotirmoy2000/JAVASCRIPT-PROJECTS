const gameInfo = document.querySelector(".game-info");
const boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;
const winningpositios = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// function to initialize the game from the start
function initGame(){
    currentPlayer = "X";
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
    gameGrid = ["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        box.classList = `box box-${index+1}`;
    })
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
        gameInfo.innerText = `Current Player - ${currentPlayer}`;
    }
    else{
        currentPlayer = "X"
        gameInfo.innerText = `Current Player - ${currentPlayer}`;
    }
}

function checkGameOver(){

     let answer = "";

     winningpositios.forEach((position) => {
        // all three boxes should be non-empty and same in value
        if((gameGrid[position[0]] !== "" && gameGrid[position[1]] !== "" && gameGrid[position[2]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){

            // checking the winner 
            if(gameGrid[position[0]] ==="X"){
                answer = "X";
            }
            else{
                answer ="O";
            }

            // disable pointer evevnt
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })

            // changine the background color of winning cells
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");

        }
     })
    //  it means we have a winner and updating in gameInfo
     if(answer !== ""){
        gameInfo.innerHTML = `Winner Player -${answer}`;
        newGameBtn.classList.add("active");
        return;
     }

    //  taking the count of non-empty cells 
     let fillCount = 0 ;
     gameGrid.forEach((box) => {
        if(box !== ""){
            fillCount++;
        }
     });

    //  Handeling the tie case
     if (fillCount === 9){
        gameInfo.innerHTML = "Game Tied !";
        newGameBtn.classList.add("active");
     }

     
}

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        swapTurn();
        checkGameOver();
    }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",() => {
        handleClick(index);
    })
})

newGameBtn.addEventListener("click",initGame);