import cn from "@/utils/cn";
import React from "react";
import { Style } from "util";

export const InfoFormOrder = ({
  title,
  button,
  style,
}: {
  title: string;
  button?: React.ReactNode;
  style?: string;
}) => {
  return (
    <div className={cn("py-2 px-2 bg-sky-200", style)}>
      <h1 className="text-blue-700 font-[600]">{title}</h1>
      {button}
    </div>
  );
};
