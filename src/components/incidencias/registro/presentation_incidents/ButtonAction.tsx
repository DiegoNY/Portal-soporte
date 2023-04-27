import { MouseEventHandler } from "react";

export const ButtonAction = ({
  icon,
  title,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <button
      className=" flex items-center hover:bg-[#ededed] hover:rounded-sm p-0.5 gap-1 w-full "
      onClick={onClick}
    >
      <span className="">{icon}</span>
      <h1>{title}</h1>
    </button>
  );
};
