let box = document.querySelector(".box1")
let input = document.querySelector("input")

input.addEventListener("input", ()=> {
    box.style.backgroundColor = input.value
    box.style.borderRadius = input.value + "px"

});