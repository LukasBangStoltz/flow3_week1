import { useState, useEffect } from "react";

function Count(props) {
  const { initCount, increments, decrements } = props;

  const [count, setCount] = useState(initCount);


    useEffect(() => {
        localStorage.setItem("count", count);

    }, [count])


  return (
    <div>
      <p>{count} værdi</p>

      <button onClick={() => setCount(count + increments)}>Increment</button>
      <button onClick={() => setCount(count - decrements)}>Decrement</button>
    </div>
  );
}

export default Count;
