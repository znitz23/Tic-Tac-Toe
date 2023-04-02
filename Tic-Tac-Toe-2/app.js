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
titleElem.setAttribute('id','title')

body.appendChild(main);
main.id = 'board';


const renderPlayer = () => {
    
    if(!state.playerNames[0] || !state.playerNames[1]){
        
        
        playerInfo.appendChild(playerNames);
        
        playerNames.appendChild(nameBoxOne);
        nameBoxOne.setAttribute('type','text');
        nameBoxOne.setAttribute('name','player1');
        nameBoxTwo.setAttribute('id','nb')
        nameBoxOne.placeholder = 'Enter Player One';
        
        playerNames.appendChild(nameBoxTwo);
        nameBoxTwo.setAttribute('type','text');
        nameBoxTwo.setAttribute('name','player2');
        nameBoxTwo.setAttribute('id','nb')
        nameBoxTwo.placeholder = 'Enter Player Two';
        
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


const startingTurnRadomizer = () => {
    const firstPlayer = Math.floor(Math.random() * 2);
    return firstPlayer
  }

const randomSquareIndex = () => {
    randomNum = Math.floor((Math.random() * 9));
    return randomNum;
}


const checkForWinner = () => {
    
    if((state.main[0].value === 'X') && (state.main[1].value === 'X') && (state.main[2].value === 'X')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[3].value === 'X') && (state.main[4].value === 'X') && (state.main[5].value === 'X')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[6].value === 'X') && (state.main[7].value === 'X') && (state.main[8].value === 'X')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[0].value === 'X') && (state.main[3].value === 'X') && (state.main[6].value === 'X')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[1].value === 'X') && (state.main[4].value === 'X') && (state.main[7].value === 'X')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[2].value === 'X') && (state.main[5].value === 'X') && (state.main[8].value === 'X')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[0].value === 'X') && (state.main[4].value === 'X') && (state.main[8].value === 'X')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[2].value === 'X') && (state.main[4].value === 'X') && (state.main[6].value === 'X')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[0].value === 'O') && (state.main[1].value === 'O') && (state.main[2].value === 'O')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[3].value === 'O') && (state.main[4].value === 'O') && (state.main[5].value === 'O')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[6].value === 'O') && (state.main[7].value === 'O') && (state.main[8].value === 'O')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[0].value === 'O') && (state.main[3].value === 'O') && (state.main[6].value === 'O')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[1].value === 'O') && (state.main[4].value === 'O') && (state.main[7].value === 'O')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[2].value === 'O') && (state.main[5].value === 'O') && (state.main[8].value === 'O')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[0].value === 'O') && (state.main[4].value === 'O') && (state.main[8].value === 'O')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else if((state.main[2].value === 'O') && (state.main[4].value === 'O') && (state.main[6].value === 'O')){
        window.alert(state.playerNames[state.currentPlayerIndex] + " won the game");
    }
    else {
        console.log(state.main[0].value && state.main[1].value && state.main[2].value);
        state.currentPlayerIndex = Math.abs(state.currentPlayerIndex - 1);
        if(state.playerNames[state.currentPlayerIndex] === 'Computer'){
            computerTurn()
        };
    }

}
const computerTurn = () => {
    let randomCellIdx = randomSquareIndex();
    console.log(randomCellIdx);
    for(i = 0; i <= 8; i++){
        if(state.main[randomCellIdx].value === ''){
            if(state.whoGoesFirst === state.currentPlayerIndex){
                state.main[randomCellIdx].value = 'X';
                render();
            }else{state.main[randomCellIdx].value = 'O'
                render();
}
        }
        else{continue}
    }
    checkForWinner();
}

function takeATurn(cellIdx) {
    const squareElem = document.getElementById(cellIdx);
    if(state.whoGoesFirst === state.currentPlayerIndex){
        state.main[cellIdx].value = 'X';
        render();
    }else{state.main[cellIdx].value = 'O'
        render();
    }
    checkForWinner();
}





const hideInputShowNames = () => {
    const playerInputs = document.querySelector('h2');
    const displayName1 = document.createElement('h3');
    const displayName2 = document.createElement('h3');
    nameBoxOne.style.display = 'none';
    nameBoxTwo.style.display = 'none';
    startButton.style.display = 'none';
    playerInfo.appendChild(displayName1);
    playerInfo.appendChild(displayName2);
    displayName1.innerText = ('PLAYER 1 = ' + state.playerNames[0]);    
    displayName2.innerText = ('PLAYER 2 = ' + state.playerNames[1]);    
}

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
            hideInputShowNames();
            main.addEventListener('click', (event) => {
                let cellIdx = event.target.id;
                console.dir(event.target);
                if(event.target.classList.contains('cell') && !event.target.innerText){
                    takeATurn(cellIdx);
                }
            });
        };
        if(state.playerNames[state.currentPlayerIndex] === 'Computer'){
            computerTurn()
        };
    });


function render() {
    renderPlayer()
    renderBoard()
}


resetState()
render()







