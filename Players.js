import { Player } from "./Player.js";

export class Players extends Player {
  constructor(...props) {
    super(...props);
  }
  memorizedCards(board) {
    const x = Math.floor(Math.random() * board.length);
    if (this.memorizedPairs(board, x)) {
      const newBoard = board.filter((e) => e !== board[x]);
      return newBoard;
    } else return false;
  }
  memorizedPairs(board, x) {
    if (this.cards.includes(board[x])) {
      this.pairs.push(board[x]);
      return true;
    } else this.cards.push(board[x]);
    return false;
  }
}
