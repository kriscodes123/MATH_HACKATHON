// Define the equation and its solution
const equation = "SEND + MORE = MONEY";
const solution = { 'S': 9, 'E': 5, 'N': 6, 'D': 7, 'M': 1, 'O': 0, 'R': 8, 'Y': 2 };

// Function to prompt user for a code at the start
function enterCode() {
  const code = prompt("Please enter the code to start the game:");
  if (code !== "82") {
    alert("Incorrect code. Game will not start.");
    return;
  }
  alert("Correct code! Game will start.");
  document.getElementById('submitButton').addEventListener('click', checkAnswer);
}

// Call the function to enter the code at the start
enterCode();

// Function to check the user's answer
function checkAnswer() {
  const userInput = document.getElementById('userInput').value.toUpperCase();

  if (userInput.length !== 8) {
    alert("Please enter a valid 8-character answer!");
    return;
  }

  let isCorrect = true;
  for (let i = 0; i < userInput.length; i++) {
    const userChar = userInput[i];
    const solutionChar = equation[i];
    if (!(userChar in solution) || solution[userChar] !== parseInt(solutionChar)) {
      isCorrect = false;
      break;
    }
  }

  if (isCorrect) {
    alert("Congratulations! You've solved the puzzle!");

    // Display message for unlocking level 4
    alert("You have unlocked level 4, and the code is 26");

    window.location.href = "congratulations.html"; // Redirect to congratulations page
  } else {
    alert("Sorry, the answer is incorrect. Please try again.");
    document.getElementById('userInput').value = ''; // Clear the input field
  }
}

// Display the equation
document.getElementById('equation').textContent = equation;