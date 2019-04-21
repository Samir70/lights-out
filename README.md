This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Lights Out
In the 1990's Tiger Electronics made a hand-held game called [Lights Out](https://en.wikipedia.org/wiki/Lights_Out_(game)). This is my attempt to recreate that classic game.

## How to play
Click a light (red button). It will toggle the on/off status of that light and the lights above/below, left/right of that button. The aim is to turn all the lights off.

You can reset the board to the start of the current puzzle, or (if you have solved a challenge) you can choose a new puzzle. The level rating of the puzzles is my subjective opinion. 

Current state and keys-pressed can be displayed by a developer so they can see what's going on during play. This can be useful because, currently, the only way to add new challenges is to copy and paste the current position into the challenges database.

## Non-optimal solutions
At the moment: these are accepted. But, as shown on the wiki, there is a strategy that always gets a solution. It generally involves re-pressing some buttons. The congrats module will call you a monkey if you pressed the same light twice -- or a genius if you only pressed lights once. But those latter solutions are not guaranteed to be the shortest. 

## Future development
* I would like the app to be more chatty. 
* The congrats messages should be chosen from a database of responses. 
* If the user has pressed more than 25 keys, they should start getting messages that this is taking too long, they've pressed the same button over and over.
* The app to be able to rate the current position by seeing if it is in the database of challenges. Play often leads to positions which are known. Wrong choices from an easy position can turn it into a much tougher challenge -- if the user is told this, they can reset and try again. 
* If the user gets back to a position they've been in before, they should be told that they are going round and round in circles (or sim).
* Clicking on lights should be possible by typing the letter on the light.
* An option to choose positions from a menu that shows a preview of the positions. The preview image should be easy because I can re-use the code which converts boardlights-binary-string to a board.
* Create a login system for users and rate their play over the long term (perhaps by using solution types and time to solve).
* Eventually: I would like to do away with the subjective rating of the positions and use a rating system based on how often (and how quickly) the challenge is solved. One idea is to use a system based on the chess ELO rating and count solving a challenge as winning the game. But points scored would vary based on type of solution and time taken.
* A button to add positions which the app doesn't have in the database.
* Make the challenges a little more flexable by rotating/reflecting the known positions. It would be interesting to compare the rating of such positions. 