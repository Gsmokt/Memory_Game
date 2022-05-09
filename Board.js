export class Board {
  constructor() {
    this.letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
    ];
  }
  createBoard() {
    const lettersCopy = [...this.letters];
    const board = [...this.letters].flatMap((_) =>
      lettersCopy.splice(Math.floor(Math.random() * lettersCopy.length), 1)
    );
    return board;
  }
}
