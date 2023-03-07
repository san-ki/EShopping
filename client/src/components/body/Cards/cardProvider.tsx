import React, { FC, createContext, useState, useContext } from "react";

import { WithChildren } from '@utils/models/appModel';

export interface appModel {
  name?: string,
  setName?: (name: string) => void
}

const appContext = createContext({
  name: '',
  setName: (name: string) => {}
})

export const useAppProvider = () => {
  return useContext(appContext);
}

const AppProvider: FC<WithChildren> = ({ children }) => {
  let [name, setName] = useState('')
  // let AppContext = createContext()
  let value = {
    name, setName
  }
  return <appContext.Provider value={value}>{children}</appContext.Provider> 
}

export default AppProvider;