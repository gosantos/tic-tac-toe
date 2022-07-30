import { executeGameCommand, parseGameCommand } from './command'
import { MoveCommand } from './move'
const prompt = require('prompt-sync')()

export const boardSize = 3

export const PlayerX = 'X'
export const PlayerO = 'O'
export const Empty = '_'
export type Player = typeof PlayerX | typeof PlayerO
export type BoardItem = Player | typeof Empty
export type Board = BoardItem[][]
export type GameCommand = 'I' | 'S' | 'R' | 'Q' | 'U'
export type Command = MoveCommand | GameCommand

export const createBoard = (): Board =>
  [...Array<BoardItem>(boardSize)].map(() => [...Array<BoardItem>(boardSize)].fill('_'))

export const printBoard = (board: Board) => {
  for (let row = 0; row < boardSize; row++) {
    console.log(board[row])
  }
}

const gameStartMessage = 'Tic-tac-toe started.'
export const gameCommandInstructions =
  'Main Commands:\n' +
  '* I - Instructions\n' +
  '* S - Start a new game\n' +
  '* R - Restart current game\n' +
  '* Q - Quit\n'

const startGame = () => {
  console.log(gameStartMessage)
  console.log(gameCommandInstructions)

  while (true) {
    try {
      const input = prompt('Enter your command:')
      executeGameCommand(parseGameCommand(input))
    } catch (e) {
      console.error(e)
    }
  }
}

if (process.env?.TEST !== 'TEST') startGame()
