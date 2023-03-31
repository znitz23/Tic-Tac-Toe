const state = {};


const resetState = () => {
    state.main = [
    { value: '', isOccupied: false },
    { value: '', isOccupied: false },
    { value: '', isOccupied: false },
    { value: '', isOccupied: false },
    { value: '', isOccupied: false },
    { value: '', isOccupied: false },
    { value: '', isOccupied: false },
    { value: '', isOccupied: false },
    { value: '', isOccupied: false },
];
state.playerNames = ['', ''];
state.whoGoesFirst = '';
}


const body = document.querySelector('body');
const main = document.createElement('main');
const titleElem = document.createElement('h1');
const playerInfo = document.createElement('h2');
const nameBoxOne = document.createElement('input');
const nameBoxTwo = document.createElement('input');
const playerNames = document.createElement('p');

body.appendChild(titleElem);
titleElem.innerText = 'Tic-Tac-Toe';

body.appendChild(main);
main.id = 'board';


const renderPlayer = () => {
    
    if(!state.playerNames[0] || !state.playerNames[1]){

        
        playerInfo.appendChild(playerNames);
        
        playerNames.appendChild(nameBoxOne);
        nameBoxOne.setAttribute('type','text');
        nameBoxOne.setAttribute('name','player1');
        nameBoxOne.placeholder = 'Enter Player One Name';
        
        playerNames.appendChild(nameBoxTwo);
        nameBoxTwo.setAttribute('type','text');
        nameBoxTwo.setAttribute('name','player2');
        nameBoxTwo.placeholder = 'Enter Player One Name';
        
        const startButton = document.createElement('button');
        playerNames.appendChild(startButton);
        startButton.innerText = 'Start Game';
        startButton.setAttribute('id','startButton');
        // startButton.setAttribute('disabled', 'disabled');
    }

    body.appendChild(playerInfo);
}

const renderBoard = () => {
    for(let i = 0; i < state.main.length; i++){
        const squareElem = document.createElement('div');
        console.log(squareElem)
        main.appendChild(squareElem);
        squareElem.classList.add('cell');
        squareElem.dataset = i;
        squareElem.innerText = state.main[i].value;
        console.log('Hello',state.main[i]);
    }
}


// need this to imput current player's character
// Evaluate whether that imput won the game
// Then add an if statement, if the answer is yes, alert that the player won the game, else change player turn and reset state


const startingTurnRadomizer = () => {
    const firstPlayer = Math.floor(Math.random() * 2);
    return firstPlayer
  }

function switchPlayer() {
    state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
}
function takeATurn(boxIndex) {
    state.main[boxIndex] = state.whoGoesFirst;
    const clickedBox = document.querySelector(`[data-index="${boxIndex}"]`)
    clickedBox.innerText = state.whoGoesFirst;
}

main.addEventListener('click', (event) => {
    if(event.target.classList.contains('cell') && !event.target.innerText){
        const boxIndex = parseInt(event.target.dataset.index);
        takeATurn(boxIndex);     
    };
    render();
        // const takeATurn = () => {
    //             const currentPlayer = state.whoGoesFirst % 2;
    //             const boxIndex = parseInt(event.target.dataset);
    //             const currentPlayerChar = currentPlayer === 0 ? 'X' : 'O';
    //             state.main[boxIndex] = currentPlayerChar;
    //         }
    //     // }
    //     takeATurn();
    //     // need this to imput current player's character
    //     // Evaluate whether that imput won the game
    //     // Then add an if statement, if the answer is yes, alert that the player won the game, else change player turn and reset state
    // }else{
    //     return
    // }
});


playerInfo.addEventListener('click',(event) => {
    const player1Input = document.querySelector('input[name="player1"]');
    const player2Input = document.querySelector('input[name="player2"]');
    if(event.target.id === 'startButton'){
    //     if (nameBoxOne.value.length > 0){
    //         startButton.removeAttribute('disabled');
    //     // }else {startButton.setAttribute('disabled', 'disabled');
    // }
    state.playerNames[0] = player1Input.value;
    state.playerNames[1] = player2Input.value;
    state.whoGoesFirst = startingTurnRadomizer();
    }
// render();
}
);


function render() {
    renderPlayer()
    renderBoard()
}


resetState()
render()











// function createBoard() {
//     const div = 
//     for (let i = 0; i <= 9; i++){
//         main.appendChild(gameSquare);
        
//     }
//}