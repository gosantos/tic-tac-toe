import { GameCommand } from './game'
import { MoveCommand } from './move'

export type Command = MoveCommand | GameCommand
