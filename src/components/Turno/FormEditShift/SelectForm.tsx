import cn from "@/utils/cn";
import { useRef, useState } from "react";

type Props = {
  name_form: string;
  name_input: string;
  children: React.ReactNode;
  onChange: any;
  value: string | number;
};

export const SelectForm = ({
  name_form,
  name_input,
  children,
  onChange,
  value,
}: Props) => {
  const [focus, setFocus] = useState(false);
  const ref = useRef<HTMLSelectElement>(null);
  return (
    <>
      <div
        className={cn(
          "gap-1 flex flex-col w-full border rounded-sm p-1 min-h-[54px] justify-center hover:border-double hover:border-sky-200  cursor-pointer",
          focus ? "border-sky-200" : ""
        )}
        onClick={() => {
          setFocus(true);
        }}
        onMouseLeave={() => {
          if (value == 0) {
            setFocus(false);
          } else {
            setFocus(true);
          }
        }}
      >
        <label className="px-1 text-[14px] cursor-pointer">
          <h1
            className={cn(
              "px-1  font-[400] transition-all",
              focus ? " text-[12px] text-sky-400" : ""
            )}
          >
            {focus ? "" : "Selecciona el "}{" "}
            {focus ? name_input : name_input.toLowerCase()}
          </h1>
          <select
            ref={ref}
            value={value}
            name={name_form}
            onChange={onChange}
            className={cn(
              " w-full outline-none text-black cursor-pointer",
              focus ? "" : "hidden"
            )}
            onBlur={() => {
              if (value == 0) {
                setFocus(false);
              } else {
                setFocus(true);
              }
            }}
          >
            {children}
          </select>
        </label>
      </div>
    </>
  );
};
