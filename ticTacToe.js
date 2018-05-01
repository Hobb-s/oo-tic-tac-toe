// Minimal UI that redraws the board and makes clear whose turn it is, each turn.
// Players can submit moves ( assume, admittedly unrealistically, that both players are sitting at the same keyboard).
// Win detection - detect and display who won

class ticTacToeGame {
  constructor() {
    this.winner = null;
    this.board = new ticTacToeBoard();
    this.playerX = new player('X');
    this.playerO = new player('O');
    this.turn = 'player X';
  }
  gameStatus() {
    this.board.displayBoard();
    if (!this.winner) {
      console.log(`${this.turn} to move...`);
    } else {
      console.log(`${this.winner} is the winner!`);
    }
  }

  makeMove(column, row) {
    if (!this.winner) {
      if (this.board.board[row - 1][column - 1] === '_') {
        if (this.turn === 'player X') {
          this.playerX.placePiece(column, row, this.board.board);
          this.turn = 'player O';
          this.gameStatus();
        } else {
          this.playerO.placePiece(column, row, this.board.board);
          this.turn = 'player X';
          this.gameStatus();
        }
      } else {
        console.log(`invalid move! Please try again, ${this.turn}`);
      }
    }
    // check if move that was made wins the game
    // if move wins game ...
    // set this.winner
  }

  checkBoard() {
    // check win condition
  }
}

class ticTacToeBoard {
  constructor() {
    this.board = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];
  }
  displayBoard() {
    console.log('Current Game State:');
    this.board.forEach(row => {
      console.log(row);
    });
  }
}

class player {
  constructor(piece) {
    this.piece = piece;
  }
  placePiece(column, row, gameBoard) {
    gameBoard[row - 1][column - 1] = this.piece;
  }
}

const ticTacToe = new ticTacToeGame();
ticTacToe.gameStatus();
ticTacToe.makeMove(2, 2);
ticTacToe.makeMove(2, 1);
ticTacToe.makeMove(3, 3);
ticTacToe.makeMove(1, 1);
ticTacToe.makeMove(3, 1);
ticTacToe.makeMove(3, 2);
ticTacToe.makeMove(1, 3);
// player X should win!!!
