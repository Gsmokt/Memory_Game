import { Players } from "./Players.js";

export class Game {
  constructor(board) {
    this.board = board;
    this.numbersOfPlayers = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    this.players = [];
    this.results;
  }
  getRandomPlayers() {
    this.players = this.board
      .slice(0, this.numbersOfPlayers)
      .flatMap((_, i) => new Players(i + 1));
  }
  startGame() {
    if (this.players.length === 0) this.getRandomPlayers();
    if (this.board.length === 0) {
      throw this.results;
    }
    this.results = this.players.map((player) => {
      const random = player.memorizedCards(this.board);
      this.board = random !== false ? random : this.board;
      return { Player: player.name, Number_of_Hits: player.pairs.length };
    });
    return this.startGame();
  }
}
