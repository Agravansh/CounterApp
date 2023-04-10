// Get the elements from the DOM
const countEl = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");
const incrementByUserBtn = document.querySelector(".increment-by-user-btn");
const userInputEl = document.querySelector("#userInput");

// Define a variable to hold the current count
let count = 0;

// Function to update the count element in the DOM
function updateCount() {
  countEl.innerHTML = count;
}

// Function to increment the count
function incrementCount() {
  count++;
  updateCount();
}

// Function to decrement the count
function decrementCount() {
  count--;
  updateCount();
}

// Function to reset the count to zero
function resetCount() {
  count = 0;
  updateCount();
}

// Function to increment the count by user value
function incrementCountByUser() {
  const userValue = parseInt(userInputEl.value);
  if (!isNaN(userValue)) {
    count += userValue;
    updateCount();
  }
  userInputEl.value = "";
}

// Add event listeners to the buttons
incrementBtn.addEventListener("click", incrementCount);
decrementBtn.addEventListener("click", decrementCount);
resetBtn.addEventListener("click", resetCount);
incrementByUserBtn.addEventListener("click", incrementCountByUser);
