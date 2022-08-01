import { Board } from '../../src/board'
import { executeMoveCommand, MoveCommand } from '../../src/commands/move'

let board: Board
beforeEach(() => {
  board = [
    ['X', '_', 'O'],
    ['X', '_', 'O'],
    ['_', '_', 'X'],
  ]
})

test('should make a move', () => {
  executeMoveCommand(board, 'O', '2')
  expect(board).toEqual([
    ['X', 'O', 'O'],
    ['X', '_', 'O'],
    ['_', '_', 'X'],
  ])
})
test('should make a move', () => {
  executeMoveCommand(board, 'X', '5')
  expect(board).toEqual([
    ['X', '_', 'O'],
    ['X', 'X', 'O'],
    ['_', '_', 'X'],
  ])
})
test('should throw when trying to make an ilegal move', () => {
  expect(() => executeMoveCommand(board, 'O', '3')).toThrowError('Movement not allowed.')
})
