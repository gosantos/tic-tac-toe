import { executeGameCommand, parseGameCommand } from './commands/game'
import { gameCommandInstructions } from './game'
import { prompt } from './prompt'

const loop = () => {
  console.log('Tic-tac-toe started.')
  console.log(gameCommandInstructions)

  while (true) {
    try {
      const input = prompt('Enter your command:')
      const gameCommand = parseGameCommand(input)
      executeGameCommand(gameCommand)
    } catch (e) {
      console.error(e)
    }
  }
}

if (process.env?.TEST !== 'TEST') loop()
