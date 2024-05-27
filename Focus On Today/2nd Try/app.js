// const input = document.querySelectorAll(".goals")
// const inputCheck = document.querySelector(".checked")
// const checkboxes = document.querySelectorAll(".checkbox")



// checkboxes.forEach( (checkbox)=> {
//     checkbox.addEventListener("click", (e)=> {
//         checkbox.parentElement.classList.toggle("checked")
//         console.log("heelo");
//     })
// })

const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        const form = checkbox.parentElement;
        form.classList.toggle("checked");
        const input = form.querySelector(".goals");
        input.classList.toggle("checked");
        const image = form.querySelector("img");
        if (image) {
            image.classList.toggle("hidden");
        }
        

    });
});