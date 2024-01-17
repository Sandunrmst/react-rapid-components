import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const [animateParent] = useAutoAnimate();
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div ref={animateParent} className="border-2 rounded max-w-6xl p-2">
      <button
        onClick={handleClick}
        className="bg-orange-600 p-3 rounded-md text-white font-semibold flex items-center gap-1"
      >
        Click me to open!
      </button>
      {show && (
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat
          corporis, eaque aut maiores quod quam earum minus ipsum consequatur,
          perspiciatis, tempore beatae placeat! Expedita facilis aliquid dolor
          modi exercitationem.
        </p>
      )}
    </div>
  );
};

export default Dropdown;
