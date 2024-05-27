// Selectors

let checkbox1 = document.querySelector("#form-1 .checkBox")
let checkbox2 = document.querySelector("#form-2 .checkBox")
let checkbox3 = document.querySelector("#form-3 .checkBox")

let myGoal1 = document.querySelector("#form-1 .goal")
let myGoal2 = document.querySelector("#form-2 .goal")
let myGoal3 = document.querySelector("#form-3 .goal")


checkbox1.addEventListener("click", ()=>{
    if(myGoal1.value === "" ){
        checkbox1.disabled = true;
    }else{
        checkbox1.disabled = false
    }
})

// checkbox1.addEventListener("input", (e)=> {
//     console.log("11111111111");
 
//     if(myGoal1.value !== "" && checkbox1.checked){
//         myGoal1.classList.add("underline")
//     }else{
//         myGoal1.classList.remove("underline")
//     }
// })

checkbox1.addEventListener("click", () => {
    if (myGoal1.value !== "" && checkbox1.checked) {
        myGoal1.classList.add("underline");
    }else {
        myGoal1.classList.remove("underline");
    }
});


checkbox2.addEventListener("click", (e)=> {

    if(checkbox2.checked){
        myGoal2.classList.add("underline")
    }else{
        myGoal2.classList.remove("underline")
    }
})

checkbox3.addEventListener("click", (e)=> {
    console.log("33333333333");

    if(checkbox3.checked){
        myGoal3.classList.add("underline")
    }else{
        myGoal3.classList.remove("underline")
    }
})