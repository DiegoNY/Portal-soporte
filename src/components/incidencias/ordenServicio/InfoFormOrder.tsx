import cn from "@/utils/cn";
import React from "react";

export const InfoFormOrder = ({
  title,
  button,
  style,
  classs,
  classText,
}: {
  title: string;
  button?: React.ReactNode;
  style?: string;
  classs?: string;
  classText?: string;
}) => {
  return (
    <div className={cn(classs ? classs : "py-2 px-2 bg-sky-200", style)}>
      <h1 className={cn(classText ? classText : "text-blue-700 font-[600]")}>
        {title}
      </h1>
      {button}
    </div>
  );
};
