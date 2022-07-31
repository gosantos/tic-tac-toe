import { changePlayer, Empty, Player, PlayerX } from './player'
import { executeMoveCommand, isMoveCommand, parseMoveCommand } from './commands/move'
import { Board, boardSize, createBoard, printBoard } from './board'
import { executeGameCommand, isGameCommand, parseGameCommand } from './commands/game'
import { prompt } from './prompt'

export const startGame = () => {
  const board = createBoard()
  printBoard(board)

  let currentPlayer = PlayerX as Player
  while (true) {
    const c = prompt('Enter your command:')

    try {
      if (c != null && isGameCommand(c)) {
        executeGameCommand(parseGameCommand(c))
      } else if (c != null && isMoveCommand(c)) {
        executeMoveCommand(board, currentPlayer, parseMoveCommand(c))
        if (hasWinner(board)) break

        currentPlayer = changePlayer(currentPlayer)
        console.log('Next player', currentPlayer)
        printBoard(board)
      }
    } catch (e) {
      console.error(e)
    }
  }

  printBoard(board)
  console.log('Winner: ', currentPlayer)
  console.log(gameCommandInstructions)
}

export const gameCommandInstructions =
  'Main Commands:\n' +
  '* I - Instructions\n' +
  '* S - Start a new game\n' +
  '* R - Restart current game\n' +
  '* Q - Quit\n'

export const hasWinner = (board: Board): boolean => {
  for (let row = 0; row < boardSize; row++) {
    const first = board[row][0]
    let flag = true
    for (let col = 0; col < boardSize; col++) {
      if (board[row][col] != first || board[row][col] == Empty) {
        flag = false
        break
      }
    }
    if (flag) return true
  }

  for (let col = 0; col < boardSize; col++) {
    const first = board[0][col]
    let flag = true
    for (let row = 0; row < boardSize; row++) {
      if (board[row][col] != first || board[row][col] == Empty) {
        flag = false
        break
      }
    }
    if (flag) return true
  }

  let row = 0
  let col = 0
  let first = board[row][col]
  let flag = true
  while (row < boardSize && col < boardSize) {
    if (first != board[row][col] || board[row][col] == Empty) {
      flag = false
      break
    }
    row++
    col++
  }

  if (flag) return true

  row = 0
  col = boardSize - 1
  first = board[row][col]
  flag = true
  while (row < boardSize && col >= 0) {
    if (first != board[row][col] || board[row][col] == Empty) {
      flag = false
      break
    }
    row++
    col--
  }

  if (flag) return true

  return false
}
