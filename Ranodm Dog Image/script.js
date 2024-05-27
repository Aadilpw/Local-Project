const button = document.querySelector(".button")
const image = document.querySelector("img")

button.addEventListener("click", ()=> {

    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then((json) => {
        // console.log(json.message)
        image.src = json.message
    })

})