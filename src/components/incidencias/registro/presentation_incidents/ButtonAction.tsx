import cn from "@/utils/cn";
import { MouseEventHandler } from "react";

export const ButtonAction = ({
  icon,
  title,
  style,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  style?: string | any;
  onClick?: MouseEventHandler;
}) => {
  return (
    <button
      className={cn(
        " flex items-center hover:bg-[#ededed] hover:rounded-sm p-0.5 gap-1 w-full ",
        style
      )}
      onClick={onClick}
    >
      <span className="">{icon}</span>
      <h1 className={cn("", style?.text)}>{title}</h1>
    </button>
  );
};
