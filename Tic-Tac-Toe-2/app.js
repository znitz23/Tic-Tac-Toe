const state = {};



const resetState = () => {
    state.main = [
    { value: ''},
    { value: ''},
    { value: ''},
    { value: ''},
    { value: ''},
    { value: ''},
    { value: ''},
    { value: ''},
    { value: ''},
];
state.playerNames = ['', ''];
state.whoGoesFirst = '';
state.currentPlayerIndex = '';
state.currentPlayer =  () => {
    state.playerNames[state.currentPlayerIndex];
}
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

function removeChildNodes(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const renderBoard = () => {
    removeChildNodes(main);
    for(let i = 0; i < state.main.length; i++){
        const squareElem = document.createElement('div');
        main.appendChild(squareElem);
        squareElem.classList.add('cell');
        squareElem.id = i;
        squareElem.innerText = state.main[i].value;
    }
}


// need this to imput current player's character
// Evaluate whether that imput won the game
// Then add an if statement, if the answer is yes, alert that the player won the game, else change player turn and reset state


const startingTurnRadomizer = () => {
    const firstPlayer = Math.floor(Math.random() * 2);
    return firstPlayer
  }

const randomSquareIndex = () => {
    randomNum = Math.floor((Math.random() * 9));
    return randomIndex;
}

// const computerTurn = () => {
//     let randomCellIdx = randomOpenSquare()
//     if(state.whoGoesFirst === state.currentPlayerIndex){
//         state.main[randomCellIdx].value = 'X';
//         squareElem.innerText = 'X';
//         render();
//     }else{state.main[randomCellIdx].value = 'O'
//         squareElem.innerText = 'O';
//         render();
// }
// }

const checkForWinner = () => {

    if(document.getElementById("0").innerText && document.getElementById("1").innerText && document.getElementById("2").innerText){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if(document.getElementById("3").innerText && document.getElementById("4").innerText && document.getElementById("5").innerText){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if(document.getElementById("6").innerText && document.getElementById("7").innerText && document.getElementById("8").innerText){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if(document.getElementById("0").innerText && document.getElementById("3").innerText && document.getElementById("6").innerText){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if(document.getElementById("1").innerText && document.getElementById("4").innerText && document.getElementById("7").innerText){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if(document.getElementById("2").innerText && document.getElementById("5").innerText && document.getElementById("8").innerText){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if(document.getElementById("0").innerText && document.getElementById("4").innerText && document.getElementById("8").innerText){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if(document.getElementById("2").innerText && document.getElementById("4").innerText && document.getElementById("6").innerText){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else {
        state.currentPlayerIndex = Math.abs(state.currentPlayerIndex - 1);
    // if(state.playerNames[1] === 'Computer'){
    //     computerTurn()
    //     };
}
}




function takeATurn(cellIdx) {
    const squareElem = document.getElementById(cellIdx);
    if(state.whoGoesFirst === state.currentPlayerIndex){
        state.main[cellIdx].value = 'X';
        squareElem.innerText = 'X';
        render();
    }else{state.main[cellIdx].value = 'O'
        squareElem.innerText = 'O';
        render();
    }
    checkForWinner()
}



main.addEventListener('click', (event) => {
    let cellIdx = event.target.id;
    console.dir(event.target);
    if(event.target.classList.contains('cell') && !event.target.innerText){
        takeATurn(cellIdx);
    }

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
    if(state.playerNames[1] === ''){
        state.playerNames[1] = 'Computer'
    };
    let random = startingTurnRadomizer()
    state.whoGoesFirst = random;
    state.currentPlayerIndex = random;
    window.alert(state.playerNames[state.currentPlayerIndex] + " goes first!");
    }
    // If computer is first player, invoke computerTurn()
    //computerTurn()
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
// }