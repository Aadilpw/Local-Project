// let triggers = document.querySelectorAll("a")
// const highlight = document.createElement("span")
// highlight.classList.add("highlight")
// document.body.append(highlight)

// function highlightLink () {
//     const linkcoord = this.getBoundingClientRect()
//     console.log(linkcoord);
// }

// triggers.forEach( (trigger)=> {
//     trigger.addEventListener("mouseenter", (e)=> {
//         highlightLink()
//     })
// })

let triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
    const linkCoord = triggers.getBoundingClientRect();
    console.log(linkCoord);
}

triggers.forEach((trigger) => {
    trigger.addEventListener("mouseenter", ()=> {
        highlightLink()
    });
});
