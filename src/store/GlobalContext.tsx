import React, { createContext, Dispatch, useReducer } from "react";

// Define the state shape
type GlobalState = {
  banner: boolean;
  cookies: boolean;
  brandName: string;
  brandImage: string;
};

type GlobalProviderProps = {
  children: React.ReactNode;
};

// Define the actions shape
type GlobalAction =
  | { type: "TOGGLE_BANNER"; payload: boolean }
  | { type: "TOGGLE_COOKIES"; payload: boolean };

// Create the context
export const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: Dispatch<GlobalAction>;
}>({
  state: {
    banner: true,
    cookies: true,
    brandName: "React Boilerplate",
    brandImage: "",
  },
  dispatch: () => {
    throw new Error(
      "Dispatch function must be initialized within GlobalProvider",
    );
  },
});

// Define the reducer
const globalReducer = (state: GlobalState, action: GlobalAction) => {
  switch (action.type) {
    case "TOGGLE_BANNER":
      return { ...state, banner: action.payload };
    case "TOGGLE_COOKIES":
      return { ...state, cookies: action.payload };
    default:
      throw new Error(`Unknown action type: ${action}`);
  }
};

// Create the GlobalProvider component
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const initialState: GlobalState = {
    banner: true,
    cookies: true,
    brandName: "React Boilerplate",
    brandImage: "",
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
