import React, { FC } from "react";

import Cards from './Cards/cards';

const Body: FC = () => {
  return (
    <div className="d-flex">
      <Cards />
    </div>
  )
}

export { Body };