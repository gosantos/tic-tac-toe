export const PlayerX = 'X'
export const PlayerO = 'O'
export const Empty = '_'
export type Player = typeof PlayerX | typeof PlayerO

export const changePlayer = (currentPlayer: Player) => (currentPlayer === PlayerX ? PlayerO : PlayerX)
