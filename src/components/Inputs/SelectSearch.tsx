import cn from "@/utils/cn";
import { useState } from "react";

export const SelectSearch = ({
  ClassName,
  options,
  title,
}: {
  ClassName: string;
  options: { id: number; name: string }[];
  title: string;
}) => {
  const [isViewOptions, setViewOptions] = useState(false);
  return (
    <div className={cn(ClassName, "")}>
      <h1>{title}</h1>
    </div>
  );
};
