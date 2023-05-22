import { useState } from "react";
import { CustomInput } from "./CustomInput";
import { Switch } from "@/components/Inputs/Switch";
import cn from "@/utils/cn";

export const ComentSelect = ({
  name,
  title,
  handleChange,
}: {
  name: string;
  title: string;
  handleChange: any;
}) => {
  const [value, setValue] = useState(false);
  return (
    <div
      className={cn(
        " w-full sm:w-[40vw] flex px-2 py-1.5 items-center gap-2 border bg-white",
        value ? " border-sky-200" : ""
      )}
    >
      <CustomInput
        name={name}
        title={title}
        HandleChange={(e: any) => {
          handleChange(e);
        }}
      />
      <div className="flex justify-center items-center w-[20vw]">
        <Switch value={value} set={setValue} id={name} />
      </div>
    </div>
  );
};
