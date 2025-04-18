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
    const changeAttribute = function (selector, attr, attrValue) {
        const element = findElement(selector);
        element.setAttribute(attr, attrValue);
    }

    const changeClassForAll = (selector, attr, attrValue) => {
        const elements = findAllElements(selector);
        elements.forEach(element => {
            if (element.classList.contains(!attrValue)) {
                element.add(attrValue);
            } else {
                element.classList.remove(attrValue);
            }
        })
    }
    return { findElement, createAndAppend, changeAttribute, findAllElements, changeClassForAll };
}

function gameBoard() {
    let turn = 1;
    const startGame = () => {
        utils.changeClassForAll('.grid', 'class', 'disable');
        utils.changeAttribute('#start', 'class', 'disable');
        utils.changeAttribute('#board', 'class', 'blackBackground');
        const board = utils.findElement('#board');
        board.addEventListener('click', gamePlay);
    }
    const gamePlay = function (e) {
        if (turn === 1) {
            if (e.target.classList.contains('player1') || e.target.classList.contains('player2')) {
                console.log(e.target.id)
            } else {
                utils.changeAttribute(`#${e.target.id}`, 'class', 'player1');
                turn--;
            }
        } else if (turn === 0) {
            if (e.target.classList.contains('player1') || e.target.classList.contains('player2')) {
                console.log(e.target.id)
            } else {
                utils.changeAttribute(`#${e.target.id}`, 'class', 'player2');
                turn++;
            }
        }
    }
    const checkWin = () => {
        const grids = utils.findAllElements('.grid');
        console.log(grids);
        let gridArray = Array.from(grids);
        let testGrid = gridArray.filter
        // console.log(player2);
        // let selections = Array.from(player1);
        // console.log(selections);
        // let testGrid = selections.filter((grid) => grid.id = 'grid1-1' && grid.id = 'grid1-2' && grid.id);
        // return testGrid
        // grid.id.includes('grid1-1') && grid.id.includes('grid1-2') && grid.id.includes('grid1-3')
        // || grid.id.includes('grid2-1') && grid.id.includes('grid2-2') && grid.id.includes('grid2-3')
        // || grid.id.includes('grid3-1') && grid.id.includes('grid3-2') && grid.id.includes('grid3-3')
        // || grid.id.includes('grid1-1') && grid.id.includes('grid2-1') && grid.id.includes('grid3-1')
        // || grid.id.includes('grid1-2') && grid.id.includes('grid2-2') && grid.id.includes('grid3-2')
        // || grid.id.includes('grid1-3') && grid.id.includes('grid2-3') && grid.id.includes('grid3-3')
        // || grid.id.includes('grid1-1') && grid.id.includes('grid2-2') && grid.id.includes('grid3-3')
        // || grid.id.includes('grid1-3') && grid.id.includes('grid2-2') && grid.id.includes('grid3-1')}
       
        // let player1Choices = playerPicks(player);
        // console.log(player1Choices);
    }

    // const playerPicks = (player) => {
    //     let selections = Array.from(player).filter(grid => {
    //         grid.id.includes('grid1-1') && grid.id.includes('grid1-2') && grid.id.includes('grid1-3')
    //         || grid.id.includes('grid2-1') && grid.id.includes('grid2-2') && grid.id.includes('grid2-3')
    //         || grid.id.includes('grid3-1') && grid.id.includes('grid3-2') && grid.id.includes('grid3-3')
    //         || grid.id.includes('grid1-1') && grid.id.includes('grid2-1') && grid.id.includes('grid3-1')
    //         || grid.id.includes('grid1-2') && grid.id.includes('grid2-2') && grid.id.includes('grid3-2')
    //         || grid.id.includes('grid1-3') && grid.id.includes('grid2-3') && grid.id.includes('grid3-3')
    //         || grid.id.includes('grid1-1') && grid.id.includes('grid2-2') && grid.id.includes('grid3-3')
    //         || grid.id.includes('grid1-3') && grid.id.includes('grid2-2') && grid.id.includes('grid3-1')

    //     }
    //     )
        
    // }
    return { startGame, checkWin };
};

// On page load add event listener to the start button
// also add event listerners to the change name and reset button
// when change name is clicked, pop a modal and allow users to put in their names
// when reset is clicked, reset the gameboard back to start and default names
// when start button is pushed, add disable class to it and remove disable class from the grid's
// when hover over the grids change background color to gray
//when grid is clicked change the display to show an X (player1) or an O (player2)
// when either player has 3 of their icons in a row, increment the win score under their name
// change the board display to say name of winner and win message
// add a play again button to display and add an event listerner to it to play the game again without resetting scores or name
