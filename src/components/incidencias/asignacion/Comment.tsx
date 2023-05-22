import cn from "@/utils/cn";
import { useState, useRef } from "react";

export const Comment = ({ title = "Comentario" }: { title?: string }) => {
  const [isFocus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const refInput = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col mt-2 ">
      <div
        className={cn(
          "border   p-1 rounded-md h-[5em] relative px-2",
          isFocus ? "border-sky-200" : "border-[#71717171]"
        )}
        onClick={() => {
          setFocus(true);
          if (refInput != null) {
            refInput?.current?.focus();
          }
        }}
      >
        <h1
          className={cn(
            " font-[400]  absolute bottom-7 transition-all ",
            isFocus
              ? "translate-y-[-120%] text-[13px] text-sky-500"
              : "text-[15px]"
          )}
        >
          {title}
        </h1>
        <input
          ref={refInput}
          className={cn(
            " outline-none resize-none w-full mt-6 ",
            isFocus ? "" : ""
          )}
          onBlur={() => {
            if (value.trim().length == 0) {
              setFocus(false);
            } else {
              setFocus(true);
            }
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
