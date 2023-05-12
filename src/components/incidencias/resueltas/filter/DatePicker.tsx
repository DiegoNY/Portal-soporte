import cn from "@/utils/cn";
import { useState } from "react";

export const DatePicker = ({ title }: { title: string }) => {
  const [isFocus, setFocus] = useState(true);
  return (
    <div
      className={cn(
        "border cursor-pointer w-[11rem] h-[3rem] rounded-md  p-2 text-[14px]  outline-none relative",
        isFocus ? "border-sky-200 border-4  border-double " : ""
      )}
      onClick={() => setFocus(!isFocus)}
    >
      <h1
        className={cn(
          "absolute z-10 translate-y-[-93%] bg-white p-0.5 transition-all text-[14px] font-[400]",
          isFocus ? "text-[12px] text-sky-300" : "translate-y-[0%]"
        )}
      >
        {title}
      </h1>
      {isFocus ? <input type="date" className="w-full h-full" /> : ""}
    </div>
  );
};
