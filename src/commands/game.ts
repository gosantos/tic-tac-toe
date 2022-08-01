import { gameCommandInstructions, startGame } from '../game'

const CommandList = ['I', 'S', 'R', 'Q'] as const

export type GameCommand = typeof CommandList[number]

export const isGameCommand = (c: string): c is GameCommand => CommandList.includes(c.toUpperCase() as GameCommand)

export const parseGameCommand = (c: string): GameCommand => {
  if (isGameCommand(c)) return c.toUpperCase() as GameCommand

  throw new Error('Invalid game command.')
}

export const executeGameCommand = (c: GameCommand) => {
  const gameCommand = parseGameCommand(c)
  switch (gameCommand) {
    case 'I': {
      console.log(gameCommandInstructions)
      break
    }
    case 'S':
    case 'R': {
      startGame()
      break
    }
    case 'Q': {
      process.exit()
    }
  }
}
