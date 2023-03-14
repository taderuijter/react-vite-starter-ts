import { useContext } from "react";
import { CounterContext } from "@/store/CounterContext";

const Stepper = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div className="my-4">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l"
        data-cy="decrement"
        onClick={() => dispatch({ type: "decrement" })}
        type="button">
        -
      </button>
      <span className="bg-gray-200 px-4 py-2 font-bold text-xl">
        {state.count}
      </span>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
        data-cy="increment"
        onClick={() => dispatch({ type: "increment" })}
        type="button">
        +
      </button>
    </div>
  );
};

export default Stepper;
