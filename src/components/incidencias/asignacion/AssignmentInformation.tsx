import {} from "react";

export const AssignmentInformation = ({
  name,
  information,
}: {
  name: string;
  information: string | number;
}) => {
  return (
    <div className="flex gap-2  items-baseline">
      <div className="text-[14px] w-[80px] flex justify-between">
        <p>{name}</p> <span>:</span>
      </div>{" "}
      <p className="text-[13px]">{information}</p>
    </div>
  );
};
