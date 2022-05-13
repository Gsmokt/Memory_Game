import { Player } from "./Player.js";

export class Players extends Player {
  constructor(...props) {
    super(...props);
  }
  memorizedCards(board) {
    const x = Math.floor(Math.random() * board.length);
    if (this.memorizedPairs(board, x)) {
      const find = this.cards.find((e) => e[1] === board[x]);
      return board.map((e, i) => (i === x || i === find[0] ? "hit" : e));
    }
    return;
  }
  memorizedPairs(board, x) {
    if (
      this.cards.some((e) => e[0] !== x && e[1] !== "hit" && e[1] === board[x])
    ) {
      this.pairs.push(board[x]);
      return true;
    } else this.cards.push([x, board[x]]);
    return false;
  }
}
