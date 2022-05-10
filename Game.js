import { Players } from "./Players.js";

export class Game {
  constructor(board) {
    this.board = board;
    this.numbersOfPlayers = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    this.players;
    this.results = {};
  }
  getRandomPlayers() {
    this.players = this.board
      .slice(0, this.numbersOfPlayers)
      .flatMap((_, i) => new Players(i + 1));
  }
  checkIfGuess(x) {
    if (x > this.players.length - 1 || this.board.length === 0) return;
    const random = this.players[x].memorizedCards(this.board);
    this.board = random !== false ? random : this.board;
    this.results = {
      ...this.results,
      [`Player ${this.players[x].name} number_of_Hits`]:
        this.players[x].pairs.length,
    };
    return this.checkIfGuess(++x);
  }

  startGame() {
    !this.players && this.getRandomPlayers();
    if (this.board.length === 0) {
      throw this.results;
    }
    this.checkIfGuess(0);
    return this.startGame();
  }
}







// this.results = this.players.map((player) => {
//   const random = player.memorizedCards(this.board);
//   this.board = random !== false ? random : this.board;
//   return { Player: player.name, Number_of_Hits: player.pairs.length };
// });
// .slice(this.results.length - this.players.length, this.results.length);
