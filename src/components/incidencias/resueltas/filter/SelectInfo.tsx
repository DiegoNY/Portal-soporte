import {} from "react";

export const SelectInfo = ({
  title,
  options,
}: {
  title: string;
  options: any;
}) => {
  return (
    <div className="w-full sm:w-72 ">
      <h1 className="text-[13px] mb-1.5">{title}</h1>
      <select className="border cursor-pointer w-full rounded-md p-2 text-[14px] focus:border-double focus:border-4 focus:border-sky-200 outline-none">
        <option>Ver todo</option>
      </select>
    </div>
  );
};
