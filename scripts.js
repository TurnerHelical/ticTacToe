// function createPlayer(name) {
//     const getName = (name) =>  
// }

function playerFactory() {
    let player1Name = 'Player 1';
    let player2Name = 'Player 2'
    let player1Score = 0;
    let player2Score = 0;

    const changeName = (user, newName) => (user === 'player1') ? player1Name = newName : player2Name = newName;

    const increaseWin = (winner) => (winner === 'player1') ? ++player1Score : ++player2Score;

    const getWins = (user) => (user === 'player1') ? player1Score : player2Score;

    const getPlayerName = (user) => (user === 'player1') ? player1Name : player2Name;

    const reset = () => {
        player1Name = 'Player 1';
        player2Name = 'Player 2';
        player1Score = '0';
        player2Score = '0';

    }

    return { increaseWin, changeName, getWins, getPlayerName, reset }
}


const player = playerFactory();
const utils = dom();
const game = gameBoard();

function dom() {
    const findElement = (selector) => document.querySelector(selector);
    const findAllElements = (selector) => document.querySelectorAll(selector);
    const createAndAppend = (parent, child) => {
        document.createElement(child);
        parent.appendChild(child);
    }
    const toggleClass = function (selector, className) {
        const element = findElement(selector);
        element.classList.toggle(className);
    }
    const toggleClassForAll = (selector, className) => {
        const elements = findAllElements(selector);
        elements.forEach(element => {
            element.classList.toggle(className);
        })
    }
    return { findElement, createAndAppend, toggleClass, findAllElements, toggleClassForAll };
}

function gameBoard() {
    let roundWinner = '';
    let turn = 1;
    let player1 = player.getPlayerName('player1');
    let player2 = player.getPlayerName('player2');
    const playerTurn = utils.findElement('#playerTurn');
    const startButton = utils.findElement('#startButton');
    const startGame = () => {
        console.log(turn);

        if (turn === 1) {
            playerTurn.innerHTML = (`${player1}'s Turn`)
        } else if (turn === 0) {
            playerTurn.innerHTML = (`${player2}'s Turn`)
        }
        utils.toggleClass('#board', 'blackBackground');
        utils.toggleClassForAll('.grid', 'disable');
        utils.toggleClass('#start', 'disable');
        const board = utils.findElement('#board');
        board.addEventListener('click', gamePlay);
    }
    const gamePlay = function (e) {
        if (turn === 1) {

            if (e.target.classList.contains('player1') || e.target.classList.contains('player2') || !e.target.classList.contains('grid'))  {
                return
            } else {
                utils.toggleClass(`#${e.target.id}`, 'player1');
                playerTurn.innerHTML = (`${player2}'s Turn`)
                evaluateBoard('player1');
                console.log(turn);

            }
        } else if (turn === 0) {

            if (e.target.classList.contains('player1') || e.target.classList.contains('player2') || e.target.id === 'board' || e.target.id === 'again') {
                return
            } else {
                utils.toggleClass(`#${e.target.id}`, 'player2');
                playerTurn.innerHTML = (`${player1}'s Turn`)
                evaluateBoard('player2');
                console.log(turn);

            }
        }
    }

    const playAgain = () => {
        const again = utils.findElement('#again');
        const done = utils.findElement('#done');
        utils.toggleClass('#winner', 'disable');
        again.removeEventListener('click', playAgain);
        utils.toggleClass('#start', 'disable');
        // done.removeEventListener('click', finalScore);
        startGame();
    }

    const evaluateBoard = (player) => {
        const grid1_1 = utils.findElement('#grid1-1');
        const grid1_2 = utils.findElement('#grid1-2');
        const grid1_3 = utils.findElement('#grid1-3');
        const grid2_1 = utils.findElement('#grid2-1');
        const grid2_2 = utils.findElement('#grid2-2');
        const grid2_3 = utils.findElement('#grid2-3');
        const grid3_1 = utils.findElement('#grid3-1');
        const grid3_2 = utils.findElement('#grid3-2');
        const grid3_3 = utils.findElement('#grid3-3');

        if (grid1_1.classList.contains(`${player}`) && grid1_2.classList.contains(`${player}`) && grid1_3.classList.contains(`${player}`)
            || grid2_1.classList.contains(`${player}`) && grid2_2.classList.contains(`${player}`) && grid2_3.classList.contains(`${player}`)
            || grid3_1.classList.contains(`${player}`) && grid3_2.classList.contains(`${player}`) && grid3_3.classList.contains(`${player}`)
            || grid1_1.classList.contains(`${player}`) && grid2_1.classList.contains(`${player}`) && grid3_1.classList.contains(`${player}`)
            || grid1_2.classList.contains(`${player}`) && grid2_2.classList.contains(`${player}`) && grid3_2.classList.contains(`${player}`)
            || grid1_3.classList.contains(`${player}`) && grid2_3.classList.contains(`${player}`) && grid3_3.classList.contains(`${player}`)
            || grid1_1.classList.contains(`${player}`) && grid2_2.classList.contains(`${player}`) && grid3_3.classList.contains(`${player}`)
            || grid1_3.classList.contains(`${player}`) && grid2_2.classList.contains(`${player}`) && grid3_1.classList.contains(`${player}`)) {

            
            roundWinner = `${player}`;
            winner(`${player}`);
            resetBoard();
            return

        } else if (turn === 1) {
            turn--;
        } else if (turn === 0) {
            turn++;
        }
    }

    const winner = (player) => {
        const board = utils.findElement('#board');
        utils.toggleClassForAll('.grid', 'disable');
        utils.toggleClass('#board', 'blackBackground')
        utils.toggleClass('#winner', 'disable');
        const again = utils.findElement('#again');
        const done = utils.findElement('#done');
        again.addEventListener('click', playAgain);
        // done.addEventListener('click', finalScore);

        if (roundWinner === 'player1') {
            playerTurn.innerHTML = ('Round Over!!');
            turn = 0;
        } else {
            playerTurn.innerHTML = ('Round Over!!');
            turn = 1;
        }
        console.log(`${player}`)
    }
    const resetBoard = () => {
        const board = utils.findElement('#board');
        const grids = utils.findAllElements('.grid');
        board.removeEventListener('click', gamePlay);
        grids.forEach((grid) => {
            if (grid.classList.contains('player1') || grid.classList.contains('player2')) {
                grid.classList.remove('player1');
                grid.classList.remove('player2');
                console.log('works')
            } else {
                return
            }
        })
        roundWinner = '';
    }


    startButton.addEventListener('click', startGame);
    return { startGame };
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
