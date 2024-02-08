// Define the clues
const clues = [
  "The red house is to the left of the green house.",
  "The green house's owner drinks coffee.",
  "The person who smokes Pall Mall cigarettes owns birds.",
  "The owner of the yellow house smokes Dunhill cigarettes.",
  "The person living in the center house drinks milk.",
  "The Norwegian lives in the first house.",
  "The Blend smoker lives next to the one who keeps cats.",
  "The man who smokes Blue Master drinks beer.",
  "The man who keeps horses lives next to the man who smokes Dunhill.",
  "The German smokes Prince."
];

// Define the solution
const solution = [
  ["Norwegian", "Dunhill", "Water", "Cats", "1"],
  ["Blue", "Blend", "Tea", "Horses", "2"],
  ["Green", "Pall Mall", "Coffee", "Birds", "3"],
  ["Yellow", "Prince", "Milk", "Dogs", "4"],
  ["Red", "Blue Master", "Beer", "Fish", "5"]
];

// Function to check the solution and redirect if correct
function checkSolution() {
  const grid = document.getElementById('grid');
  let isCorrect = true;

  // Check each cell against the solution
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const cell = grid.rows[i].cells[j];
      if (cell.textContent.trim() !== solution[i][j]) {
        isCorrect = false;
        cell.style.color = 'red'; // Highlight incorrect cells
      } else {
        cell.style.color = 'black'; // Reset color
      }
    }
  }

  if (isCorrect) {
    alert('Congratulations! You solved the puzzle!');
    // Redirect to a new page
    window.location.href = "congratulations.html";
  } else {
    alert('Sorry, some of your answers are incorrect. Please try again.');
  }
}

// Function to initialize the puzzle
function initializePuzzle() {
  // Display clues
  const cluesList = document.getElementById('clues');
  clues.forEach(clue => {
    const li = document.createElement('li');
    li.textContent = clue;
    cluesList.appendChild(li);
  });

  // Create grid
  const grid = document.getElementById('grid');
  for (let i = 0; i < 5; i++) {
    const row = grid.insertRow();
    for (let j = 0; j < 5; j++) {
      const cell = row.insertCell();
      cell.contentEditable = 'true'; // Allow user input
    }
  }

  // Populate initial information
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      grid.rows[i].cells[j].textContent = '';
    }
  }
}

// Initialize the puzzle when the page loads
window.onload = initializePuzzle;

// Add click event listener to the button
document.getElementById('checkSolutionBtn').addEventListener('click', checkSolution);
