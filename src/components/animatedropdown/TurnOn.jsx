import React, { useState } from "react";
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const TurnOn = () => {
  const [isBulbOn, setBlub] = useState(false);

  const [animateParent] = useAutoAnimate();

  function toggleBulb() {
    setBlub(!isBulbOn);
  }
  return (
    <div className="flex justify-center mt-5 gap-4">
      <div ref={animateParent} className="text-5xl border-2 w-fit rounded-md">
        {isBulbOn ? (
          <RiLightbulbFlashFill className="text-orange-400" />
        ) : (
          <RiLightbulbFlashLine />
        )}
      </div>
      <button
        onClick={toggleBulb}
        className="bg-blue-700 p-3 rounded-md text-white font-semibold"
      >
        {isBulbOn ? "Off" : "On"}
      </button>
    </div>
  );
};

export default TurnOn;
