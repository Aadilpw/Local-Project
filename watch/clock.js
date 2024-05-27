// Selectors

const hourHand = document.querySelector(".hour")
const minuteHand = document.querySelector(".minute")
const secondHand = document.querySelector(".second")

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotation angles for each hand
    const hourAngle = (hours % 12) * 30 + minutes / 2; // Each hour is 30 degrees, and each minute is half a degree
    const minuteAngle = minutes * 6 + seconds / 10; // Each minute is 6 degrees, and each second is 1/10 of a degree
    const secondAngle = seconds * 6; // Each second is 6 degrees

    // Apply rotation to each hand
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Initial call to update the clock when the page loads
updateClock();
