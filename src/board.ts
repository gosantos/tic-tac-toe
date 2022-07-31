import { Empty, Player } from './player'

export const boardSize = 3

export const createBoard = (): Board =>
  [...Array<BoardItem>(boardSize)].map(() => [...Array<BoardItem>(boardSize)].fill('_'))

export const printBoard = (board: Board) => {
  for (let row = 0; row < boardSize; row++) {
    console.log(board[row])
  }
}
export type BoardItem = Player | typeof Empty
export type Board = BoardItem[][]
