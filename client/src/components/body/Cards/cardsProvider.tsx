import React, { FC, createContext, useState, useContext, useEffect } from "react";

import { WithChildren } from '@utils/models/appModel';

import { Card, Cards } from "@utils/models/cardModel";
import cardsData from '@fakeData/cardsData';

const cardsContext = createContext({
  cardList: [] as Cards,
  setCardList: (Cards: Cards) => {}
})

export const useCardsProvider = () => {
  return useContext(cardsContext);
}

const CardsProvider: FC<WithChildren> = ({ children }) => {
  let [cardList, setCardList] = useState<Cards>([])
  useEffect(() => {

  })
  // let cardsContext = createContext()
  let value = {
    cardList, setCardList
  }
  return <cardsContext.Provider value={value}>{children}</cardsContext.Provider> 
}

export default CardsProvider;