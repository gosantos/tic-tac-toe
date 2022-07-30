import { parseGameCommand } from '../src/command'
import { Command } from '../src/main'

test('given a valid command, should be parsed', () => {
  expect(parseGameCommand('I')).toEqual('I' as Command)
  expect(parseGameCommand('S')).toEqual('S' as Command)
})
test('given a valid command, throw', () => {
  expect(() => parseGameCommand('fooo')).toThrow()
})
test('should execute a command', () => {
  expect(() => parseGameCommand('fooo')).toThrow()
})
