import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  //   useEffect( () => {
  //     console.log("Mounting + Updating");
  //     setTimeout(() => {
  //         alert("Data Fetched");
  //     },1000);
  //   }, [count]);
  //   console.log("Render");
  const fetchData = () => {
    console.log("Clean-up");
  }
  useEffect(() => {
    console.log("mounting");
    const timerId = setInterval(fetchData, 1000);
    return () => {
      clearInterval(timerId);
      console.log("Unmounting");
    };
  }, []);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Effect;
