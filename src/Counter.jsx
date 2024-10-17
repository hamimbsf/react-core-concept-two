import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
    }
  };

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
