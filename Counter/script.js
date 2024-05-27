let button = document.querySelector("#btn")
let display = document.querySelector(".display")
let save = document.querySelector("#save")
let data = document.querySelector("#data")
let reset = document.querySelector("#reset")

let num = 0;

button.addEventListener("click", ()=> {
    num = num + 1;
    display.innerHTML = num;
})

function resett() {
    reset.addEventListener("click", ()=> {
        display.innerHTML = 0;
        data.innerHTML = 0
        num = 0
    })
    
}
save.addEventListener("click", ()=> {
     data.innerHTML = num
     resett()
})

