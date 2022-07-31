import { GameCommand, parseGameCommand } from '../../src/commands/game'

test('given a valid command, should be parsed', () => {
  expect(parseGameCommand('I')).toEqual('I' as GameCommand)
  expect(parseGameCommand('S')).toEqual('S' as GameCommand)
})
test('given a valid command, throw', () => {
  expect(() => parseGameCommand('fooo')).toThrow()
})
test('should execute a command', () => {
  expect(() => parseGameCommand('fooo')).toThrow()
})
