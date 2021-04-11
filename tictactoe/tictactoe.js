document.addEventListener("DOMContentLoaded", startGame);

const xPlayer = {symbol: "X", color: "red"};
const oPlayer = {symbol: "O", color: "black", nextPlayer: xPlayer};
let board = [["", "", ""], ["", "", ""], ["", "", ""]];

let currentPlayer = xPlayer;
xPlayer.nextPlayer = oPlayer;

function startGame() {
    document.getElementById("title").innerText = document.title;
    // display the board
    resetBoard();
}

const isCellAvailable = (line, column) => {
    if (board[line][column] !== "") {
        document.getElementById("description").innerText = "The cell (" + (1 + line) + ", " + (1 + column) +
                ") is already taken.\nStill " + currentPlayer.symbol + "'s turn to play !";
        return false;
    }
    return true;
}

const onPlayClick = (event) => {
    // look for id and parse into line l and column c
    const target = event.target;
    const coordinates = target.id.split("-");
    const l = parseInt(coordinates[0]);
    const c = parseInt(coordinates[1]);
    // check if board[l][c] is available for click
    if (isCellAvailable(l, c)) {
        // set board[l][c] to the player's symbol with his color
        const symbol = currentPlayer.symbol;
        board[l][c] = symbol;
        target.classList.add(currentPlayer.color);
        target.innerText = symbol;
        // check if the play is ended
        if (!isGameOverAfterPlaying(symbol, l, c)) {
            // if not, change player
            currentPlayer = currentPlayer.nextPlayer;
            document.getElementById("description").innerText = currentPlayer.symbol + "'s turn to play !";
        } else {
            alert(document.getElementById("status").innerText + "\n " + document.getElementById("description").innerText);
            resetBoard();
        }
    }
}

const resetBoard = () => {
    const displayBoard = document.getElementById("board");
    displayBoard.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("click", onPlayClick);
            cell.id = i + "-" + j;
            displayBoard.appendChild(cell);
        }
    }
    board = [["", "", ""], ["", "", ""], ["", "", ""]]
    document.getElementById("status").innerText = "Game in play...";
    document.getElementById("description").innerText = currentPlayer.symbol + "'s turn to play !";
}

const isGameOverAfterPlaying = (symbol, line, column) => {
    if (hasWon(symbol, line, column)) {
        document.getElementById("status").innerText = "Game has ended !";
        document.getElementById("description").innerText = "Player " + symbol + " has won !";
        return true;
    } else {
        return isBoardFull();
    }
}

const hasWon = (symbol, line, column) => {
    let cell = {l: line, c: column};
    if(!verticalMatch(symbol, cell) && !horizontalMatch(symbol, cell)) {
        return diagonalMatchesSymbol(symbol);
    }
    return true;
}

const verticalMatch = (symbol, cell) => {
    let newCell = down(cell);
    for (let i = 1; i < 3; i++) {
        if (symbol === board[newCell.l][newCell.c]) {
            newCell = down(newCell);
        } else {
            return false;
        }
    }
    return true;
}

const horizontalMatch = (symbol, cell) => {
    let newCell = right(cell);
    for (let i = 1; i < 3; i++) {
        if (symbol === board[newCell.l][newCell.c]) {
            newCell = right(newCell);
        } else {
            return false;
        }
    }
    return true;
}

const diagonalMatchesSymbol = (symbol) => {
    if (board[1][1] === symbol) {
        return (board[0][0] === symbol && board[2][2] === symbol)
                || (board[0][2] === symbol && board[2][0] === symbol);
    }
    return false;
}

const isBoardFull = () => {
    for (const line of board) {
        for (const cell of line) {
            if (cell === "") {
                return false;
            }
        }
    }
    document.getElementById("status").innerText = "Game has ended !";
    document.getElementById("description").innerText = "It's a cat's game !";
    return true;
}

const down = (cell) => {
    let line = cell.l + 1;
    if (line >= 3) {
        line = 0;
    }
    return {l: line, c: cell.c};
}

const right = (cell) => {
    let column = cell.c + 1;
    if (column >= 3) {
        column = 0;
    }
    return {l: cell.l, c: column};
}