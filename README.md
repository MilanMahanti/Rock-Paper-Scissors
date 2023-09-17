# Rock-Paper-Scissors

### Problem Statement:

Your challenge is to build out this Rock, Paper, Scissors game and get it looking as close to the design as possible.

### Features List:

1. The game is designed for two players, one is you as a player and the other opponent is your computer.
2. There will simultaneous turns given to you and your computer, as soon as you choose one option for yourself ie. stone/paper/scissor you opponent will also strike at the same time.
3. Show the respective scores on the screen for computer and human
4. Different message has been displayed on the screen as per the win of the participants.
5. There is a rules section at the bottom right, so as soon as you click on it, a pop up will open and you need to write the basic rule of the game, and there is a close button to close the pop up.
6. You need to store the scores in the local storage, and make sure that the scores are not lost on reloading the page.
7. You also need to show celebration animation if the human wins against the computer.
   
**NOTE**: For you turn in the game, you will have to choose the option manually by clicking on the one of the option, but for your computer it will be decided by the logic you write which will randomly decided.

---
### Approach:
The styling and structuring of the page is done with HTML and CSS. For the functionality I have used Javascript.
#### The functionality follows below mentioned steps-
+ Get the user input as soon as user clicks on any one option by adding an **eventlistner** to the element
+ Generate the computer input using **Random Number** function in javascript
+ Load the options with images according to the user and computer picks
+ Compare the picks to get the winner here I have used **Switch Case** for that
+ Display winner and add winner circles to the winner
+ Update the score and display it
+ To make sure the score does not reset every time we refresh the page I have used **LocalStroage API** provided by the browser
+ We will store the score in localStorage and get the scores as soon as we load the page
---
Here is the deployed link to checkout-
## Deployed Link- https://stone-paper-scissors-vanilla-js.netlify.app/
---
### Here is a snippet of the project-
<img width="922" alt="Screenshot 2023-09-17 084151" src="https://github.com/MilanMahanti/Rock-Paper-Scissors/assets/114055453/151e4eb8-8f57-4d98-a586-72774e7d3267">

  
