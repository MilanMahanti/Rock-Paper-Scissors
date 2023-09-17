//////////////////////////////////////////////////////////////////////
// all querySelectors

const userPicks = document.querySelectorAll("#choice");

const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");

const gameContainer = document.querySelector(".game-container");
const resultContainer = document.querySelector(".result-container");
const userResultStyle = document.querySelector(".user-result");
const computerResultStyle = document.querySelector(".computer-result");
const resultText1 = document.querySelector(".result__text-1");
const resultText2 = document.querySelector(".result__text-2");
const pick = document.querySelectorAll(".pick");

const playAgainBtn = document.querySelector(".result__btn-1");
const replayBtn = document.querySelector(".result__btn-2");
const nextBtn = document.querySelector(".next-btn");
const winnignPageBtn = document.querySelector(".winning-btn");

const userBox = document.querySelectorAll(".user-box");
const computerBox = document.querySelectorAll(".computer-box");

const rulesBtn = document.querySelector(".rules-btn");
const closeRulesModal = document.querySelector(".close-modal");
const rulesContainer = document.querySelector(".rules-container");

const mainPage = document.querySelector(".container");
const winningPage = document.querySelector(".winner-container");

const options = ["rock", "paper", "scissor"];
let score = {
  user: 0,
  computer: 0,
};

//get result from local storage as page loads
const getResultFronLocal = function () {
  //update current score with localstorage score
  if (!localStorage.getItem("RPS-score")) return;
  score = JSON.parse(localStorage.getItem("RPS-score"));

  //display the scores
  userScore.textContent = score.user;
  computerScore.textContent = score.computer;
};
getResultFronLocal();

//////////////////////////////////////////////////////////////
//main game logic

const startgame = function (e) {
  //get the user pick
  const userpicked = e.target.closest(".choice").dataset["choice"];
  //get the computer pick
  const computerPicked = generateComputerChoice();

  showResultContainer();
  setStyle(userpicked, computerPicked);
  getResults(userpicked, computerPicked);

  //store the score in browser local storage
  localStorage.setItem("RPS-score", JSON.stringify(score));
};
//start the game as soon as user click on any of the options
userPicks.forEach((choice) => choice.addEventListener("click", startgame));

//compare the userpick and computer pick to decide winner
const getResults = function (userChoice, computerChoice) {
  switch (userChoice + computerChoice) {
    case "scissorpaper":
    case "paperrock":
    case "rockscissor":
      userWin();
      break;
    case "paperscissor":
    case "rockpaper":
    case "scissorrock":
      computerWin();
      break;
    case "paperpaper":
    case "rockrock":
    case "scissorscissor":
      tiedGame();
      break;
  }
};

///////////////////////////////////////////////////////
//game functions

//for user win
const userWin = function () {
  //update score
  score.user++;
  //display score
  userScore.textContent = score.user;
  //show winning text on result container
  resultText1.textContent = "You won";
  //add winner circle
  addWinnerCircle(userBox, computerBox);

  //show next botton
  nextBtn.classList.toggle("hidden");
};

//for computer win
const computerWin = function () {
  //update score
  score.computer++;
  //display result
  computerScore.textContent = score.computer;
  //show winning text on result container
  resultText1.textContent = "You lost";
  //add winner circle
  addWinnerCircle(computerBox, userBox);
};

//for tied game
const tiedGame = function () {
  //hide one result text
  resultText2.classList.add("hidden");
  //show tie message
  resultText1.textContent = "tie up";
  //hide the play again button
  playAgainBtn.classList.add("hidden");
  //show replay button
  replayBtn.classList.remove("hidden");
  pickTextPosition(24);
};

/////////////////////////////////////////////////////////////////
//callback functions

const playAgain = function () {
  // resetting the styles
  hideResultContainer();
  removeWinnerCircle();
  resultText2.classList.remove("hidden");
  playAgainBtn.classList.remove("hidden");
  replayBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");
};

const showWinningPage = function () {
  mainPage.classList.toggle("hidden");
  winningPage.classList.toggle("hidden");
  nextBtn.classList.add("hidden");
};
const hideWinningPage = function () {
  mainPage.classList.toggle("hidden");
  winningPage.classList.toggle("hidden");
  hideResultContainer();
  removeWinnerCircle();
};

//event listners
playAgainBtn.addEventListener("click", playAgain);
replayBtn.addEventListener("click", playAgain);
nextBtn.addEventListener("click", showWinningPage);
winnignPageBtn.addEventListener("click", hideWinningPage);

///////////////////////////////////////////////////////////////////
//styles applied as user/computer picks any option
const showResultContainer = function () {
  //hide games container
  gameContainer.classList.add("hidden");
  //show results container
  resultContainer.classList.remove("hidden");

  //reset the results options style
  removeResultOptionStyle();
};

const hideResultContainer = function () {
  gameContainer.classList.remove("hidden");
  //hide results container
  resultContainer.classList.add("hidden");
};

// set the styles of results contents
const setStyle = function (userPicked, computerPicked) {
  //setting the borders according the picks
  computerResultStyle.classList.add(`${computerPicked}-border`);
  userResultStyle.classList.add(`${userPicked}-border`);

  //setting the images according the picks
  userResultStyle.innerHTML = setImg(userPicked);
  computerResultStyle.innerHTML = setImg(computerPicked);

  pickTextPosition(32);
};

////////////////////////////////////////////////////////////////////////
//helper functions

//generate the computer pick
const generateComputerChoice = function () {
  return options[Math.floor(Math.random() * options.length)];
};

//return the image according the user/computer pick
const setImg = function (picked) {
  return `<img src="images/${picked}.svg" alt="${picked}" /> `;
};

//add the winner circle on winner
const addWinnerCircle = function (userBox, computerBox) {
  userBox.forEach((user, idx) => user.classList.add(`winner-box-${idx + 1}`));
  computerBox.forEach((user, idx) =>
    user.classList.remove(`winner-box-${idx + 1}`)
  );
};

//remove the winner circle from winner
const removeWinnerCircle = function () {
  userBox.forEach((user, idx) =>
    user.classList.remove(`winner-box-${idx + 1}`)
  );
  computerBox.forEach((user, idx) =>
    user.classList.remove(`winner-box-${idx + 1}`)
  );
};

//reseting the result options styles
const removeResultOptionStyle = function () {
  options.forEach((el) => userResultStyle.classList.remove(`${el}-border`));
  options.forEach((el) => computerResultStyle.classList.remove(`${el}-border`));
};

const pickTextPosition = function (num) {
  pick.forEach((el) => (el.style.top = `${num}rem`));
};
//////////////////////////////////////////////////////////
// rules modal
rulesBtn.addEventListener("click", function () {
  rulesContainer.classList.toggle("hidden");
});
closeRulesModal.addEventListener("click", () =>
  rulesContainer.classList.add("hidden")
);
