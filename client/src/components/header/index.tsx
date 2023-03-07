import React, { FC } from "react";

import { useAppProvider } from "../../appProvider";

const Header: FC = () => {
  let { name, setName } = useAppProvider();

  return (
    <div className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
      E Shopping
    </div>
  )
}

export { Header };