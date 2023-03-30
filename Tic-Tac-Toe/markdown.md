## What are the things that the user will itneract with
- starting state
- player input
- update state based on input
- go back to starting state based on input

## what is the board setup
- there will be two player inputs to create an 'id' or player name'
- the game will randomly chooses who goes first

## What will the game do
- WIll allow player 1 to click on any square 
    - if that square is vacant of a 'game piece' game will input their assigned 'game piece' (X or O)
    - if the square is occupied nothing will happen
- game will evaluate whether there is a winner
    - it will do this by checking the 8 winning combinations to see if any have three mathing 'game pieces'
    - if there is a winner an alert will state the game is over and reset
    - if there is not a winner it will reset to beginning state while retaining board inputs thus far and assign alternate to the second play which will cause the next input to be the other game piece

## Random things i need to build
- A function which takes player name input and assigns it a variable for use elsewhere, i.e. wondow alert of whose turn it is or who won