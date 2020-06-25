//Global variable

let playerOne = "X";
let playerTwo = "O";
let playerTurn = playerOne;
let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 9]
];
let boardState = [false, false, false, false, false, false, false, false, false];
let interval;
let clockCount = 0;


//Elements that need to be targeted
let start = document.getElementById("start");
let cells = Array.from(document.getElementsByClassName("cell"));
let playerOneName = document.getElementById("playerOne");
let playerTwoName = document.getElementById("playerTwo");
let clock = document.getElementById("clock")


//Function to begin the game
start.addEventListener("click", () => {

  start.disabled = true;
  displayStatusArea();
  interval = setInterval(() => {
    updateClock()
  }, 1000)
  cells.forEach((cell) => {
    cell.addEventListener("click", clicked);
  });
});

//Function to add a mark to a cell when clicked
function clicked(event) {
  event.target.textContent = playerTurn;
  event.target.removeEventListener("click", clicked);
  event.target.addEventListener("click", clickedBefore)
  if (playerTurn === playerOne) {
    playerTurn = playerTwo;
  } else playerTurn = playerOne;
  displayStatusArea();


}

//Function to alert the user that they have selected the cell before
function clickedBefore() {
  statusArea.textContent = "Please select an empty cell";
}

//Function to display status area
function displayStatusArea() {
  let statusArea = document.getElementById("statusArea");
  statusArea.textContent = "It is " + playerTurn + "'s turn!";
}

//Updates the timer
function updateClock() {
  clock.textContent = clockCount;
  clockCount += 1;
}

//Resets the Board
function boardReset() {
  cells.forEach((cell) => {
    cell.removeEventListener('click', clicked)
    cell.removeEventListener('click', clickedBefore)
  })

  boardState = [false, false, false, false, false, false, false, false, false]

  start.disabled = false;
  start.textContent = 'Play Again!'
} 