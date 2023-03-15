import React, { createContext, useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "increment" } | { type: "decrement" };

type Dispatch = (action: Action) => void;

export const CounterContext = createContext<{
  state: State;
  dispatch: Dispatch;
}>({
  state: { count: 0 },
  dispatch: () => {
    console.log("Default dispatch called!");
  },
});

const countReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const dispatchAction = (action: Action) => {
    dispatch(action);
  };

  return (
    <CounterContext.Provider value={{ state, dispatch: dispatchAction }}>
      {children}
    </CounterContext.Provider>
  );
};
