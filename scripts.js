// function createPlayer(name) {
//     const getName = (name) =>  
// }

const player = player();
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