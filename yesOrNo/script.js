// Get the 'no' button element
// const noButton = document.querySelector('.no');

// Add event listener for hover on 'no' button
// noButton.addEventListener('mouseenter', () => {
//     // Generate random x and y coordinates
//     const maxX = window.innerWidth - noButton.offsetWidth;
//     const maxY = window.innerHeight - noButton.offsetHeight;
//     const randomX = Math.floor(Math.random() * maxX);
//     const randomY = Math.floor(Math.random() * maxY);

//     // Move the 'no' button to the random coordinates
//     noButton.style.position = 'absolute'; // Set position to absolute
//     noButton.style.left = `${randomX}px`;
//     noButton.style.top = `${randomY}px`;
// });

// // Get the 'yes' button element
// const yesButton = document.querySelector('.yes');

// // Add event listener for click on 'yes' button
// yesButton.addEventListener('click', () => {
//     // Show alert message
//     alert('I love you too');
// });

// Jaise ki 'no' button ko 'mouseenter' event mein random taur par generate kiye gaye x aur y coordinates par move karne ke liye, hum window.innerWidth ka istemal karte hain taaki humein pata chale ki button ko kahan tak move kiya ja sakta hai taaki wo window ke andar rahe. Uske baad, hum offsetWidth ka istemal karte hain taaki humein pata chale ki button ka width aur height kya hai jisse hum usko sahi jagah par move kar sakein.

// const noButton = document.querySelector('.no');

// function move () {
//     noButton.addEventListener("mouseenter", ()=> {
//         // generate x and y
//         const maxX = window.innerHeight - noButton.offsetHeight // ye dene se ham bol rahe h ki tum screen ke 
//         const maxY = window.innerWidth - noButton.offsetWidth // andar move karo.

//         // const maxX = 500 //  ye dene usko ham ek particular space de rahe hai or bol rahe hai ki
//         // const maxY = 500 //  tum 500px ke andar move karo

//         const randomX = Math.floor(Math.random()* maxX)
//         const randomY = Math.floor(Math.random() * maxY)

//         // move nobutton to random
//         noButton.style.position = "absolute"
//         noButton.style.top = `${randomX}px`
//         noButton.style.right = `${randomY}px`
//     })
// }
// move()

// const yesButton = document.querySelector(".yes")

// yesButton.addEventListener("click", ()=> {
//     alert("Yes ! Vahab Bahut Bada Gaandu Hai !!!! ")
// })

const noButton = document.querySelector(".no")

noButton.addEventListener("mouseenter", ()=> {

 const maxX = window.innerHeight - noButton.offsetHeight
 const maxY = window.innerWidth - noButton.offsetWidth

 const randomX = Math.floor(Math.random() * maxX)
 const randomY = Math.floor(Math.random() * maxY)

 noButton.style.position = "absolute"
 noButton.style.top = `${randomX}px`
 noButton.style.left = `${randomY}px`
})

let yesButton = document.querySelector(".yes")

yesButton.addEventListener("click", ()=> {
    alert("Yes !! I Love You Soo Much 😘💖")
})
