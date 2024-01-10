const questions = [
    {
        question : "what is the largest animal in the world?",
        answers : [
            {text:"shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ] 
    },
    {
        question : "Which is the smallest continental in the world?",
        answers : [
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ] 
    },
    {
        question : "Which is the smallest country in the world?",
        answers : [
            {text:"Vatican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Sri Lanka",correct:false},
        ] 
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false },
        ]
    },
]

const questionElement = document.querySelector(".question");
const answerElement = document.querySelector(".answers");
const nextButton = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {

    resetState();

     let currentQuestion = questions[currentQuestionIndex];
     let questionNo = currentQuestionIndex+1;

     questionElement.innerHTML = questionNo + ". " +currentQuestion.question;

     currentQuestion.answers.forEach((answer) =>{
        const newbutton = document.createElement("button");
        newbutton.innerHTML = answer.text;
        newbutton.classList.add("btn");
        answerElement.appendChild(newbutton);

        if(answer.correct){
            newbutton.dataset.correct = answer.correct;
        }

        newbutton.addEventListener("click",selectAnswer);

     }) 

}

function resetState() {
    nextButton.style.display = "none";
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e){
    const selectButton = e.target;
    const isCorrect = selectButton.dataset.correct === "true";
    if(isCorrect){
        selectButton.classList.add("correct");
        score++;
    }
    else{
        selectButton.classList.add("incorrect"); 
    }

    Array.from(answerElement.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })

    nextButton.style.display = "block"
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();