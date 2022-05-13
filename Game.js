import { Players } from "./Players.js";

export class Game {
  constructor(board) {
    this.board = board;
    this.numbersOfPlayers = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    this.players;
    this.results = {};
  }

  checkCell() {
    return this.board.every((e) => e === "hit");
  }

  getRandomPlayers() {
    this.players = this.board
      .slice(0, this.numbersOfPlayers)
      .flatMap((_, i) => new Players(i + 1));
  }

  checkIfGuess(x) {
    if(this.checkCell()) return true;
    if (x > this.players.length - 1) return;
    this.board = this.players[x].memorizedCards(this.board) ?? this.board;
    this.results = {
      ...this.results,
      [`Player ${this.players[x].name} - number_of_Hits`]:
        this.players[x].pairs.length,
    };
    return this.checkIfGuess(++x);
  }

  startGame() {
    !this.players && this.getRandomPlayers();
    if (this.checkIfGuess(0)) throw this.results;
    return this.startGame();
  }
}


