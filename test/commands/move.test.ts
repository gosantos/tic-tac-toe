import { Board } from '../../src/board'
import { executeMoveCommand, MoveCommand, parseMoveCommand } from '../../src/commands/move'

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

test('given a valid move, should be parsed', () => {
  expect(parseMoveCommand('9')).toEqual('9' as MoveCommand)
})
test('given a valid move, throw', () => {
  expect(() => parseMoveCommand('fooo')).toThrow()
})
test('should execute a move', () => {
  expect(() => parseMoveCommand('fooo')).toThrow()
})
