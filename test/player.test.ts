import { PlayerO, PlayerX, changePlayer } from '../src/player'

test('change player', () => {
  expect(changePlayer(PlayerX)).toEqual(PlayerO)
  expect(changePlayer(PlayerO)).toEqual(PlayerX)
})
