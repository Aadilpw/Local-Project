const questions = [
    {
        "que" : "What is your name",
        "a" : "Aadil",
        "b" : "Sameer",
        "c" : "Vahab",
        "d" : "riyaz",
        "correct" : "a"
    },
    {
        "que" : "What is your friend name",
        "a" : "babua",
        "b" : "Sameer",
        "c" : "Vahab",
        "d" : "sfvds",
        "correct" : "c"
    },
    {
        "que" : "What is your brother name",
        "a" : "Aadil",
        "b" : "Sameer",
        "c" : "Vahab",
        "d" : "riyaz",
        "correct" : "b"
    }
]

let index = 0;
const queLength = questions.length;
let right = 0;
let wrong = 0;  

const queBox = document.querySelector("#queBox");
const optionInputs = document.querySelectorAll(".option");
const submitBTN = document.querySelector(".submit")

function loadQuestion () {

    if(index == queLength){
        return showResults()
    }else{
    const data = questions[index]
    reset ()
    queBox.innerText = ` ${index + 1 })  ${data.que}`

    optionInputs[0].nextElementSibling.innerText = ` a) ${data.a}`;
    optionInputs[1].nextElementSibling.innerText = ` b) ${data.b}`;
    optionInputs[2].nextElementSibling.innerText = ` c) ${data.c}`;
    optionInputs[3].nextElementSibling.innerText = ` d) ${data.d}`;
    }
}


function submitQuiz () {
    const answ  = checkAnswer()
    const data = questions[index]
    if(answ == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++
    loadQuestion()
    return;
}

function checkAnswer () {
    let answer;
    optionInputs.forEach( (input)=> {
        if(input.checked) {
            answer =  input.value
        }
    })
    return answer;
}

function reset () {
    optionInputs.forEach( (input)=> {
        input.checked = false;
    })
}

// function showResults () {
//     document.getElementById("box").innerHTML = `
//        <h3>Thank You For Playing The Quiz</h3>
//        <h2> ${right} / ${queLength} are correct</h2>
//     `
// }

function showResults() {
    const box = document.getElementById("box");
    box.innerHTML = '';

    const thankYouMessage = document.createElement("h3");
    thankYouMessage.innerText = "Thank You For Playing The Quiz";

    const scoreMessage = document.createElement("h2");
    scoreMessage.innerText = `${right} / ${queLength} are correct`;

    box.appendChild(thankYouMessage);
    box.appendChild(scoreMessage);
}



submitBTN.addEventListener("click", submitQuiz)

loadQuestion()


