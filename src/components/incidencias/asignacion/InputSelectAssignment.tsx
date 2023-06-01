import cn from "@/utils/cn";
import { useState, useRef } from "react";

export const InputSelectAssignment = ({
  name,
  nombre,
}: {
  nombre: string;
  name: string;
}) => {
  const ref = useRef<HTMLSelectElement>(null);
  const [isFocus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div
      className="flex flex-col sm:flex-row gap-2  rounded-sm sm:items-center py-1 w-full "
      onClick={() => {}}
    >
      <div
        className={cn(
          "border  w-full px-2 relative  p-1 rounded-md",
          isFocus ? "border-sky-200" : ""
        )}
      >
        <h1
          className={cn(
            "font-medium leading-[20px] absolute   w-[20rem]  pointer-events-none transition-all",
            isFocus
              ? "text-[13px] text-sky-400 "
              : "text-[15px] translate-y-5 text-slate-400"
          )}
        >
          {" "}
          {nombre}
        </h1>
        <select
          ref={ref}
          className=" outline-none text-[14px] w-full h-[4rem] z-10"
          onClick={() => setFocus(true)}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={() => {
            if (value.trim().length == 0) {
              setFocus(false);
            } else {
              setFocus(true);
            }
          }}
        >
          <option></option>
          <option>SOPO</option>
          <option>SOPORT</option>
          <option>SOPRO</option>
        </select>{" "}
      </div>
    </div>
  );
};
