import cn from "@/utils/cn";
import { useState, useRef } from "react";

export const CustomInput = ({
  HandleChange,
  name,
  title,
  type,
}: {
  HandleChange: any;
  name: string;
  title: string;
  type?: string;
}) => {
  const [isFocus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn("p-1 relative w-full  ", isFocus ? "" : "")}
      onClick={() => {
        setFocus(true);
        if (ref != null) {
          ref?.current?.focus();
        }
      }}
    >
      <h1
        className={cn(
          isFocus
            ? "text-[12px] translate-y-[-60%] text-sky-400 "
            : "font-[500] text-[14px] translate-y-2 ",
          "text-[#717171]  transition-all absolute left-1.5"
        )}
      >
        {title} {isFocus ? "" : "OBSERVACION"}
      </h1>
      <input
        ref={ref}
        name={name}
        type={type}
        className={cn("outline-none w-full px-0.5 py-2")}
        onChange={(e) => {
          setValue(e.target.value);
          HandleChange(e);
        }}
        onBlur={() => {
          if (value.trim().length == 0) {
            setFocus(false);
          } else {
            setFocus(true);
          }
        }}
      />
    </div>
  );
};
