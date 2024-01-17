import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const DynamicList = () => {
  const [item, setItems] = useState([0, 1, 2, 3]);

  const [animateParent] = useAutoAnimate();

  function add() {
    setItems([...item, item.length]);
  }

  return (
    <>
      <h2 className="font-bold mt-8">Display List</h2>
      <ul ref={animateParent}>
        {item.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button
        onClick={add}
        className="bg-red-700 p-3 rounded-md text-white font-semibold"
      >
        Add Number
      </button>
    </>
  );
};

export default DynamicList;
