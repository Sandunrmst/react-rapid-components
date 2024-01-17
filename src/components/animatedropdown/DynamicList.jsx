import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const DynamicList = () => {
  const [item, setItems] = useState([0, 1, 2, 3]);

  const [isEnabled, setIsEnabled] = useState(true);

  const [animateParent, setAnimateState] = useAutoAnimate();

  function toggleAnimation() {
    setAnimateState(!isEnabled);
    setIsEnabled(!isEnabled);
  }

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
      <div className="flex justify-center gap-4 mt-2">
        <button
          onClick={add}
          className="bg-red-700 p-3 rounded-md text-white font-semibold"
        >
          Add Number
        </button>
        <button
          onClick={toggleAnimation}
          className="bg-red-700 p-3 rounded-md text-white font-semibold"
        >
          {isEnabled ? "Disable" : "Enable"}
        </button>
      </div>
    </>
  );
};

export default DynamicList;
