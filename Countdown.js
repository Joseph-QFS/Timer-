// countdown.js

// Function to initialize countdown timer
function initializeCountdownTimer() {
    // Retrieve countdown timer element
    var countdownTimer = document.getElementsByClassName("countdown-timer")[0];

    // Retrieve countdown timer attributes
    var width = countdownTimer.getAttribute("data-width");
    var timezone = countdownTimer.getAttribute("data-timezone");
    var textColor = countdownTimer.getAttribute("data-textcolor");
    var targetDate = countdownTimer.getAttribute("data-date");
    var background = countdownTimer.getAttribute("data-background");
    var digitsColor = countdownTimer.getAttribute("data-digitscolor");
    var unitsColor = countdownTimer.getAttribute("data-unitscolor");

    // Initialize countdown timer with retrieved attributes
    countdownTimer.innerHTML = '<div class="lw_countdown" data-width="' + width + '" data-timezone="' + timezone + '" data-textcolor="' + textColor + '" data-date="' + targetDate + '" data-background="' + background + '" data-digitscolor="' + digitsColor + '" data-unitscolor="' + unitsColor + '"></div>';
}

// Call the initializeCountdownTimer function when the page loads
window.onload = initializeCountdownTimer;
