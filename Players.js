import { Player } from "./Player.js";

export class Players extends Player {
  constructor(...props) {
    super(...props);
  }
  memorizedCards(board) {
    const x = Math.floor(Math.random() * board.length);
    if (this.memorizedPairs(board, x)) {
      const find = this.cards.find((e) => e[1] === board[x]);
      return board.map((card, i) => (i === x || i === find[0] ? "hit" : card));
    }
    return;
  }
  memorizedPairs(board, x) {
    if (
      this.cards.some((card) => card[0] !== x && card[1] !== "hit" && card[1] === board[x])
    ) {
      this.pairs.push(board[x]);
      return true;
    } else this.cards.push([x, board[x]]);
    return false;
  }
}
