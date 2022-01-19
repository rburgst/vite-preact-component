import { FunctionalComponent } from "preact";
import { useState } from "preact/compat";

export const TestComponent: FunctionalComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Counter: {counter}
      <button onClick={() => setCounter((oldVal) => oldVal + 1)}>
        Increment
      </button>
    </div>
  );
};
