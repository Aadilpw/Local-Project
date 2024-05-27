const info = {
    home: "Heyy Aadill, What's upp !!  jhfdrbuhbfgebbfhgebrh sfjb vshb ",
    contact: "1234567",
    order: "Pending",
    tweets: "twitter@.com",
    history: "Since 1947"
};

const triggers = document.querySelectorAll("a");
const highlight = document.createElement("div");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    // Update highlight position
    highlight.style.width = `${coords.width}px + `;
    highlight.style.height = `${coords.height}px +`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px )`;

    // Get link's text content
    const linkText = this.textContent.toLowerCase();

    // Get corresponding info from the 'info' object
    const linkInfo = info[linkText];

    // Set text content of highlight to match link's info text
    highlight.textContent = linkInfo; 
} 


triggers.forEach(trigger => trigger.addEventListener("mouseenter", highlightLink));





//  Bilkul, shuruwat karne se pehle yeh samajhna zaroori hai ki yeh code kis tarah kaam karta hai aur isme kya ho raha hai. Is code mein hum ek webpage ko dekh rahe hain jisme kuch links hain (HTML mein <a> tags ke roop mein) aur hum chahte hain ki jab hum kisi link par mouse le jayein toh ek highlight ho jaye aur uss link ke saath jude hue kuch jaankariyaan dikhai dein.

// Sabse pehle, info naam ka ek object hai jisme har link ke saath ek jaankari rakhi gayi hai. Jaise ki, home link ke saath "Heyy Aadill, What's upp !!" hai, contact link ke saath "1234567" hai, aur aise hi sabhi links ke saath kuch na kuch jaankari hai.

// Fir, hum document.querySelectorAll("a") ka upyog karke sabhi links ko select karte hain. Isse humein wo saare links mil jaate hain jo HTML mein <a> tag ke roop mein hain.

// Uske baad, hum ek highlight div create karte hain jo ki humare webpage par highlight effect ko show karega jab hum link par mouse le jayenge. Is highlight div ko hum CSS ke madhyam se style karte hain jisse wo visible ho aur sahi jagah par aa sake.

// Fir, ek highlightLink function banaai gayi hai. Jab bhi koi link par mouse enter hota hai, yeh function trigger hoti hai. Is function mein, hum pehle uss link ka position (getBoundingClientRect() se milta hai) aur size calculate karte hain.

// Uske baad, hum uss link ke text content ko lowercase mein lete hain (this.textContent.toLowerCase()) taaki hum info object se corresponding jaankari ko dhoondh sakein.

// Phir hum highlight div ka size aur position update karte hain taki wo link ke saath chale jaye. Aur phir, hum info object se corresponding jaankari ko highlight div mein display karte hain.

// Toh, basically yeh code kaam yeh karta hai ki jab bhi hum kisi link par mouse le jaate hain, toh uss link ke saath jo jaankariyaan judi hain wo highlight div mein dikh jaati hain.

// const linkInfo = info[linkText]; ham ye infotext . se nhi le sakte aisa kyu ?
// ChatGPT
// Ji haan, aap bilkul info.linkText se jaankari nahi le sakte kyunki linkText ek variable hai jo link ka text content store karta hai. Jab aap [linkText] ka upyog karte hain, toh aap info object se linkText variable ke value ke corresponding key ko retrieve kar rahe hain.

// Yani, agar aap linkText mein "home" store karte hain, toh info[linkText] likhne se "home" key ke corresponding value retrieve hoti hai, jise aap "Heyy Aadill, What's upp !!" ke equal rakha gaya hai.

// Aise likhne se aap dynamic tareeke se info object ke keys ke hisaab se unke values ko access kar sakte hain. Agar aap .se ka upyog karenge toh, aapko unka naam directly specify karna padega, jo ki dynamic nahi hoga.

// function highlightLink() {
//     const linkCoords = this.getBoundingClientRect();
//     const coords = {
//         width: linkCoords.width,
//         height: linkCoords.height,
//         top: linkCoords.top + window.scrollY,
//         left: linkCoords.left + window.scrollX
//     };

//     // Update highlight position
//     highlight.style.width = `${coords.width}px`;
//     highlight.style.height = `${coords.height}px`;
//     highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`; mujhe ye calculation samjh nai aai
// ChatGPT
// The calculations in the highlightLink function are used to determine the position and size of the highlight element relative to the hovered link.

// getBoundingClientRect() retrieves the size and position of the hovered link relative to the viewport.
// linkCoords.width and linkCoords.height represent the width and height of the hovered link, respectively.
// linkCoords.top and linkCoords.left represent the distance of the top-left corner of the hovered link from the top and left edges of the viewport, respectively.
// window.scrollY and window.scrollX represent the amount by which the window has been scrolled vertically and horizontally, respectively. This is added to adjust the position of the hovered link relative to the document, taking into account any scrolling.
// Combining these values, the coords object contains the final position and size of the highlight element, which is then applied to the highlight element's CSS styles to visually highlight the hovered link.
