// function createPlayer(name) {
//     const getName = (name) =>  
// }

function playerFactory() {
    let player1Name = 'Player 1';
    let player2Name = 'Player 2'
    let player1Score = 0;
    let player2Score = 0;

    const changeName = (user, newName) => (user === player1Name) ? player1Name = newName : player2Name = newName;

    const increaseWin = (winner) => (winner === player1Name) ? ++player1Score : ++player2Score;

    const getWins = (user) => (user === player1Name) ? player1Score : player2Score;

    const getPlayerName = (user) => (user === player1Name) ? player1Name : player2Name;

    const reset = () => {
        player1Name = 'Player 1';
        player2Name = 'Player 2';
        player1Score = '0';
        player2Score = '0';
    }

    return {increaseWin, changeName, getWins, getPlayerName, reset}
}


const player = playerFactory();
const utils = dom();
const game = gameBoard();

function dom() {
    const findElement = (el1) => document.querySelector(el1);
    const createElement = (el1) => document.createElement(el1);
    const appendElement = (el1, el2) => el1.appendChild(el2);
    const changeAttribute = function(el1, attr, attrValue) {
        const element = findElement(el1);
        element.setAttribute(attr, attrValue);
    }
    return {findElement, createElement, appendElement, changeAttribute};
}

function gameBoard() {
    
}

// On page load add event listener to the start button
// also add event listerners to the change name and reset button
    // when change name is clicked, pop a modal and allow users to put in their names
    // when reset is clicked, reset the gameboard back to start and default names
// when start button is pushed, add disable class to it and remove disable class from the grid's
// when hover over the grids change background color to gray
    //when grid is clicked change the display to show an X (player1) or an O (player2)
// when either player has 3 of their icons in a row, increment the win score under their name
    // change the board display to say name of winner and win message
    // add a play again button to display and add an event listerner to it to play the game again without resetting scores or names
