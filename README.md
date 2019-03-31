This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Lights Out
In the 1990's Tiger Electronics made a hand-held game called [Lights Out](https://en.wikipedia.org/wiki/Lights_Out_(game)). This is my attempt to recreate that classic game.

## How to play
Click a light (red button). It will toggle the on/off status of that light and the lights above/below, left/right of that button. The aim is to turn all the lights off.

you can reset the board to the start of the current puzzle, or choose a new puzzle. The level rating of the puzzles is my subjective opinion.

Current state and start position are displayed so I can see what's going on as I develop the project. I can also copy and paste the current position to add another position into the database of challenges.

## Non-optimal solutions
At the moment: these are accepted. But, as shon on the wiki, there is a strategy that always gets a solution. But it generally involves re-pressing some buttons. I will, at some point, put in a feature to detect that a solution is not optimal. (This is already prepared in that the keys are the letters on the buttons).