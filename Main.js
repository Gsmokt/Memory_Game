import { Board } from "./Board.js";
import { Game } from "./Game.js";

const game = new Game(new Board().createBoard());
game.startGame();
