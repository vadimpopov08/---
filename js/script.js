let currentPlayer = "X";
let gameEnded = false
let board = ["", "", "", "", "", "", "", "", ""]
let winPainters = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]]
function sellClicked(sellIndex) {
    if (!gameEnded && board[sellIndex] === "") {
        console.log("!")
        let cell = document.getElementById(`cell${sellIndex}`)
        cell.textContent = currentPlayer;
        cell.setAttribute('data-value', currentPlayer)
        board[sellIndex] = currentPlayer
        if (winChecked(currentPlayer)) {
            document.getElementById('message').textContent = `Игрок ${currentPlayer} победил`
            cell.setAttribute('disabled')
            gameEnded = true
        }
        else if (isBoardFull()) {
            document.getElementById('message').textContent = 'Ничья'
        }
        else {
            currentPlayer = currentPlayer === "X" ? "O" : "X"

        }
        // if (currentPlayer == "X") {
        //     currentPlayer.classList.add('cross')
        // }
        // else if (currentPlayer.textContent == "0") {
        //     currentPlayer.style.color = "blue"
        // }
    }
}

function winChecked(player) {
    for (const pattern of winPainters) {
        const [a, b, c] = pattern
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true
        }

    }
    return false
}
function isBoardFull() {
    return board.every(cell => cell !== "")
}