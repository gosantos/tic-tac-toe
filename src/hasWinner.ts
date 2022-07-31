import { Board, boardSize } from './board'
import { Empty } from './player'

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
