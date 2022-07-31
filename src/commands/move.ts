import { Board, boardSize } from '../board'
import { Empty, Player } from '../player'

const MoveList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const

export type MoveCommand = typeof MoveList[number]

export const isMoveCommand = (m: string): m is MoveCommand => MoveList.includes(m.toUpperCase() as MoveCommand)

export const parseMoveCommand = (m: string): MoveCommand => {
  if (isMoveCommand(m)) return m.toUpperCase() as MoveCommand

  throw new Error('Invalid move command.')
}

export const executeMoveCommand = (board: Board, player: Player, command: MoveCommand): void => {
  const canMove = (board: Board, row: number, col: number): boolean => board[row][col] === Empty
  const mapMoveCommand = (command: MoveCommand): [number, number] => {
    let count = 0
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        count++
        if (count === parseInt(command)) return [row, col]
      }
    }

    throw new Error('Something crazy happened.')
  }

  const [row, col] = mapMoveCommand(command)

  if (!canMove(board, row, col)) throw new Error('Movement not allowed.')

  board[row][col] = player
}
