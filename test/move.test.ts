import { Board, boardSize } from '../src/main'
import { canMove, executeMoveCommand, MoveCommand, parseMoveCommand } from '../src/move'

let board: Board
beforeEach(() => {
  board = [
    ['X', '_', 'O'],
    ['X', '_', 'O'],
    ['_', '_', 'X'],
  ]
})

test('should return false when is taken up', () => {
  expect(canMove(board, 0, 0)).toBeFalsy()
  expect(canMove(board, 1, 0)).toBeFalsy()
  expect(canMove(board, 0, 2)).toBeFalsy()
  expect(canMove(board, 0, 2)).toBeFalsy()
})

test('should return true when is free', () => {
  expect(canMove(board, 2, 0)).toBeTruthy()
  expect(canMove(board, 0, 1)).toBeTruthy()
  expect(canMove(board, 1, 1)).toBeTruthy()
  expect(canMove(board, 2, 1)).toBeTruthy()
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

test('given a valid move, should be parsed', () => {
  expect(parseMoveCommand('9')).toEqual('9' as MoveCommand)
})
test('given a valid move, throw', () => {
  expect(() => parseMoveCommand('fooo')).toThrow()
})
test('should execute a move', () => {
  expect(() => parseMoveCommand('fooo')).toThrow()
})
