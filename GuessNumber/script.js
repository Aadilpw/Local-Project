
// let buttons = document.querySelectorAll(".buttons button")
// let newGamee = document.querySelector("#new")

// let chance = 5;
// let isGameOver = false;

// function num (){
//     buttons.forEach( (button)=> {
//         button.addEventListener("click", (e)=> {
//             if (!isGameOver){
//             let clickedValue = parseInt(e.target.textContent)
//             console.log(clickedValue); // Logging the clicked button's text content
//             checkWinner(clickedValue); // Calling checkWinner function here
//             e.target.style.backgroundColor = "red";
//             chance--;
//             if(chance === 0){
//                 console.log("You lost all chances ! Try again");
//                 reset()
//                 button.disabled
//             }
//            };
//         });
//     });
// }

// function randNum() {
//     return (Math.floor(Math.random() * 12) + 1)
// }


// function checkWinner(clickedValue) {
//     let number = randNum();
//     if (clickedValue === number) {
//         console.log("You won the game");
//         let clickedButton = document.querySelector('.buttons button:nth-child(' + clickedValue + ')');
//         clickedButton.style.backgroundColor = "green";
//         reset(); // Reset the game after changing button color
//     }
// }

// function loose() {
//     if(chance == 6) {
//         console.log("You loose the game");
        
//     }
// }
// loose()


// function reset (){
//     chance = 5;
//     isGameOver = false

//     buttons.forEach((button=> {
//         button.style.backgroundColor = ""
//     }))

// }

// num()

let buttons = document.querySelectorAll(".buttons button");
let newGameButton = document.querySelector("#new");
let displayMessage = document.querySelector(".showMessage")

let chances = 5;
let isGameOver = false;

function initializeGame() {
    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });
}

function handleButtonClick(e) {
    if (!isGameOver) {
        let clickedButton = e.target
        let clickedValue = parseInt(e.target.textContent);
        // console.log("Clicked Value:", clickedValue);
        // displayMessage.innerHTML =
        e.target.style.backgroundColor = "red";
        checkWinner(clickedValue);
        chances--;

        clickedButton.disabled = true

       

        
        if (chances == 0 && !isGameOver) {
            let winningNumber = getRandomNumber();
            //let displayMessage = document.querySelector(".showMessage")
            console.log("You lost all chances !!");
            displayMessage.textContent = `You lost all chances !! Your Number is ${winningNumber}`;
            reset();
        }
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 12) + 1;
}



let winningNumber = getRandomNumber();

function checkWinner(clickedValue) { // clickedValue se is function ko user ke input ke bare me pata chal raha hai
    // For example, agar player "7" number par click karta hai, to "handleButtonClick" function checkWinner(7) ko call karta hai, aur is tarah se checkWinner function ko player ke input ke baare mein zaroori jaankari milti hai.
    if (clickedValue === winningNumber) {
        // console.log("You won the game!");
        displayMessage.textContent = "Congrajulations !! You Won the Game "
        let clickedButton = document.querySelector(`.buttons button:nth-child(${clickedValue})`);
        clickedButton.style.backgroundColor = "green";
        isGameOver = true;
    }
}




function reset() {
    winningNumber = getRandomNumber()
    chances = 5;
    isGameOver = false;
    displayMessage.textContent = ""
    
   

    buttons.forEach((button) => {
        button.style.backgroundColor = "";
        button.disabled = false;

    });
}

newGameButton.addEventListener("click", reset);

initializeGame();






