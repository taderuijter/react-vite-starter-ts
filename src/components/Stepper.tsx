import { useState } from "react";

function Stepper(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const handleDecrement = (): void => {
    setCount((prevCount: number) => prevCount - 1);
  };

  const handleIncrement = (): void => {
    setCount((prevCount: number) => prevCount + 1);
  };

  return (
    <div className="my-4">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l"
        data-cy="decrement"
        onClick={handleDecrement}
        type="button">
        -
      </button>
      <span className="bg-gray-200 px-4 py-2 font-bold text-xl">{count}</span>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
        data-cy="increment"
        onClick={handleIncrement}
        type="button">
        +
      </button>
    </div>
  );
}

export default Stepper;
