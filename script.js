const cells = document.querySelectorAll('.cell');
const board = Array(9).fill(null);
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', handClick);
});

function handClick(event) {
    const cell = event.target;
    const index = cell.dataset.index;
     
    if (board[index] !==null) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
        setTimeout(() => alert(`${currentPlayer} wins!`), 100);
        resetBoard();
    } else if (board.every(cell => cell !==null)) {
        setTimeout(() =>alert('Draw'),100);
        resetBoard();
    } else {
        currentPlayer = currentPlayer === 'X' ? '0' : 'X';
    }
}

function checkWin(){
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}