export interface Card {
  name: string,
  value: number,
  isFav: boolean,
  inCart: boolean,
}

export type Cards = Card[]