import { Board } from '../src/board'
import { hasWinner } from '../src/game'

test('should return false when no winner', () => {
  const board: Board = [
    ['X', '_', 'O'],
    ['X', '_', 'O'],
    ['_', '_', 'X'],
  ]

  expect(hasWinner(board)).toBeFalsy()
})

test('should return false when game has recently started', () => {
  const board: Board = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_'],
  ]

  expect(hasWinner(board)).toBeFalsy()
})
test('should return true when row is filled with X', () => {
  const board: Board = [
    ['X', 'X', 'X'],
    ['X', '_', 'O'],
    ['_', '_', 'X'],
  ]

  expect(hasWinner(board)).toBeTruthy()
})
test('should return true when col is filled with X', () => {
  const board: Board = [
    ['X', '_', 'O'],
    ['X', 'O', 'O'],
    ['X', '_', 'X'],
  ]

  expect(hasWinner(board)).toBeTruthy()
})
test('should return true when diagonal is filled with X', () => {
  const board1: Board = [
    ['X', '_', 'O'],
    ['X', 'X', 'O'],
    ['O', '_', 'X'],
  ]

  expect(hasWinner(board1)).toBeTruthy()

  const board2: Board = [
    ['X', '_', 'O'],
    ['X', 'O', 'O'],
    ['O', '_', 'X'],
  ]
  expect(hasWinner(board2)).toBeTruthy()
})
