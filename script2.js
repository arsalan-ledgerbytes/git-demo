// Get references to the buttons
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

let timer; // Variable to store the timer interval

// Event handlers for the buttons
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Function to start the timer
function startTimer() {
  // Start the timer logic here
  timer = setInterval(() => {
    // Timer logic
    console.log("Timer is running...");
  }, 1000);
}

// Function to pause the timer
function pauseTimer() {
  // Pause the timer logic here
  clearInterval(timer);
  console.log("Timer paused.");
}

// Function to reset the timer
function resetTimer() {
  // Reset the timer logic here
  clearInterval(timer);
  console.log("Timer reset.");
}
