import { createContext, useReducer } from "react";

export const darkContext = createContext();
const initialState = { darkMode: false }
const DarkReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode }
      break;

    default:
      return state;
  }
}

export const DarkProvider = (props) => {
  const [state, dispatch] = useReducer(DarkReducer, initialState)
  return (
    <darkContext.Provider value={{ state, dispatch }}>{props.children}</darkContext.Provider>
  )
}