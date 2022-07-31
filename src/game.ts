import { hasWinner } from './hasWinner'
import { Player, PlayerO, PlayerX } from './player'
import { executeMoveCommand, isMoveCommand, parseMoveCommand } from './commands/move'
import { createBoard, printBoard } from './board'
import { executeGameCommand, isGameCommand, parseGameCommand } from './commands/game'
import { prompt } from './prompt'

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
  console.log(gameCommandInstructions)
}

export const gameCommandInstructions =
  'Main Commands:\n' +
  '* I - Instructions\n' +
  '* S - Start a new game\n' +
  '* R - Restart current game\n' +
  '* Q - Quit\n'
