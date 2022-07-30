import { hasWinner } from './hasWinner'
import { Command, createBoard, gameCommandInstructions, Player, PlayerO, PlayerX, printBoard } from './main'
import { executeMoveCommand, isMoveCommand, parseMoveCommand } from './move'
const CommandList = ['I', 'S', 'R', 'Q'] as const

const prompt = require('prompt-sync')()

export type GameCommand = typeof CommandList[number]

const isGameCommand = (c: string): c is GameCommand => CommandList.includes(c.toUpperCase() as GameCommand)

export const parseGameCommand = (c: string): Command => {
  if (isGameCommand(c)) return c.toUpperCase() as Command

  throw new Error('Invalid game command.')
}

export const printGameInstructions = () => {
  console.log(gameCommandInstructions)
}

export const startGame = () => {
  const board = createBoard()
  printBoard(board)

  let currentPlayer = PlayerO as Player
  while (true) {
    const c = prompt('Enter your command:')

    try {
      if (c != null && isGameCommand(c)) {
        executeGameCommand(parseGameCommand(c))
      } else if (c != null && isMoveCommand(c)) {
        executeMoveCommand(board, currentPlayer, parseMoveCommand(c))
        if (hasWinner(board)) break

        currentPlayer = currentPlayer === PlayerO ? PlayerX : PlayerO
        console.log('Next player', currentPlayer)
        printBoard(board)
      }
    } catch (e) {
      console.error(e)
    }
  }
  console.log('Winner: ', currentPlayer)
  printGameInstructions()
}

export const executeGameCommand = (c: Command) => {
  switch (c) {
    case 'I': {
      printGameInstructions()
      break
    }
    case 'S':
    case 'R': {
      startGame()
      break
    }
    case 'Q': {
      process.exit()
    }
  }
}
