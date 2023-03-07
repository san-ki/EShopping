import React, { FC } from "react";

import Card from './card'

const Cards: FC = () => {
  return <>
    {
      [1, 2, 3, 4].map(i => {
        return <Card key={i} />
      })
    }
  </>
}

export default Cards;
