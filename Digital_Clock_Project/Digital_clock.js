// Function to update the digital clock
function updateClock() {
    const now = new Date();

    // Get current date parts
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-based
    const year = now.getFullYear();

    // Get current time parts
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time to always show two digits
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    // Update the DOM elements
    document.querySelector('.day').textContent = day;
    document.querySelector('.month').textContent = month;
    document.querySelector('.year').textContent = year;
    document.querySelector('.time_container').textContent = `${hours}:${minutes}:${seconds}`;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Call the function once to set the initial time
updateClock();
