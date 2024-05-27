const fullImageContainer = document.querySelector(".full-image");
const fullImage = fullImageContainer.querySelector("img")
const images = document.querySelectorAll(".image-container img")
const closeImage = document.querySelector(".close-image")
const leftSide = document.querySelector(".left")
const rightSide = document.querySelector(".right")

images.forEach( (image)=> {
    image.addEventListener("click", (e)=> {
        fullImage.src = e.target.src
        fullImageContainer.classList.remove("open");
    })
})

closeImage.addEventListener("click", ()=> {
    fullImageContainer.classList.add("open");
})

let currentIndex = 0;

leftSide.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    fullImage.src = images[currentIndex].src;
});

rightSide.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    fullImage.src = images[currentIndex].src;
});

// leftSide Event Listener:

// Yeh code left button ke clicks ko handle karta hai. Jab left button click hota hai, currentIndex check karta hai ki yeh 0 hai ya nahi. Agar currentIndex 0 hai, matlab ki hum pehli image pe hain, toh currentIndex ko images.length - 1 se update karta hai, jo ki hamari last image ko point karta hai. Agar currentIndex 0 nahi hai, toh currentIndex ko ek kam karke peechli image pe move karta hai. Fir, fullImage.src ko update karke, full-size image ka source set kiya jata hai jo currentIndex ke corresponding hai.

// rightSide Event Listener:

// Yeh code right button ke clicks ko handle karta hai. Jab right button click hota hai, currentIndex check karta hai ki yeh images.length - 1 hai ya nahi. Agar currentIndex images.length - 1 hai, matlab ki hum last image pe hain, toh currentIndex ko 0 pe set karta hai, jo ki hamari pehli image ko point karta hai. Agar currentIndex images.length - 1 nahi hai, toh currentIndex ko ek badhakar agle image pe move karta hai. Fir, fullImage.src ko update karke, full-size image ka source set kiya jata hai jo currentIndex ke corresponding hai.


// const updateImage = (direction) => {
//     currentIndex = (currentIndex + direction + images.length) % images.length;
//     fullImage.src = images[currentIndex].src;
// };

// leftSide.addEventListener("click", () => updateImage(-1));
// rightSide.addEventListener("click", () => updateImage(1));
