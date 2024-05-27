const meme = document.querySelector(".meme")
const button = document.querySelector("button")
const category = document.getElementsByClassName("category")[0]


function generateMeme (){

    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        console.log(json.joke);
        console.log(json.category);
        meme.innerText = json.joke
        category.innerHTML = `Category : ${json.category}`
    })

}

button.addEventListener("click", generateMeme)
document.addEventListener("DOMContentLoaded", generateMeme)


// const meme = document.querySelector(".meme");
// const button = document.querySelector("button");
// const category = document.querySelector(".category");  // Corrected selector

// function generateMeme() {
//     fetch('https://v2.jokeapi.dev/joke/Any?type=single')
//         .then(response => response.json())
//         .then((json) => {
//             console.log(json);
//             console.log(json.joke);
//             console.log(json.category);
//             meme.innerText = json.joke;
//             category.innerHTML = `Category: ${json.category}`;  // Corrected property
//         });
// }

// button.addEventListener("click", generateMeme);
// document.addEventListener("DOMContentLoaded", generateMeme);


