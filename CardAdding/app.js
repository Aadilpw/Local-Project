// let container = document.querySelector(".container")
// let add = document.querySelector(".add")


// let count = 1

// function addCard () {
//     let card = document.createElement("div")
//     card.classList.add("card")
//     card.textContent = `Card ${count++}`
//     container.appendChild(card)
//     console.log("ok");
// }

// add.addEventListener("click", addCard)


let container = document.querySelector(".container");
let add = document.querySelector(".add");
let count = 1;

function addCard() {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <span class="remove">&times;</span>
        <p>Card ${count++}</p>
    `;
    container.appendChild(card);


    // Add event listener to the remove button
    let removeButton = card.querySelector('.remove');
    removeButton.addEventListener("click", function() {
        container.removeChild(card);
    });
}

container.addEventListener("click", (e)=> {
    // console.log(e.target.className);

    if(e.target.className == "card") {
        let removeButton = e.target;
        removeButton.remove()

    }

})





add.addEventListener("click", addCard);

add.addEventListener("click", addCard);



