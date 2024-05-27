let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".opt")
let lastClicked = ""
let string = "";


numbers.forEach( (number)=> {
    number.addEventListener("click", (e)=> {
        if(e.target.textContent === "="){
            string = eval(string)
            document.getElementById("input").value = string;
        }
        else if(e.target.textContent === "AC"){
            string = ""
            document.getElementById("input").value = string;
    
        }
        else{
            string += e.target.textContent
            document.getElementById("input").value = string
        }
    })
})


