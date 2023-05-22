import cn from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const Switch = ({
  value,
  color = "bg-sky-200",
  set,
  id,
}: {
  value: boolean;
  set: any;
  color?: string;
  id: string;
}) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    set(!value);
  };

  return (
    <div className="flex">
      <label
        htmlFor={id}
        className={cn(
          " p-0.5 w-[50px] h-[15px] rounded-lg relative",
          isOn ? color : "bg-[#9E9E9E]"
        )}
      >
        <div className=" flex items-center  h-[13px] cursor-pointer">
          <p
            className={cn(
              "p-[0.6rem]  rounded-full absolute  transition-all border",
              isOn
                ? "translate-x-7 bg-sky-300 border-sky-300"
                : "translate-x-[-30%] bg-white"
            )}
          ></p>
        </div>
        <input
          className="hidden"
          type="checkbox"
          id={id}
          checked={isOn}
          onChange={handleToggle}
        />
        <span className="slider" />
      </label>
    </div>
  );
};
