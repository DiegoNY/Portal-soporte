import { DeleteMaterialUsed } from "@/libs/redux/feature/ServiceOrder";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const UsedMaterialContentTable = ({
  name,
  amount,
  branch,
  model,
  id,
}: {
  id: number;
  name: string;
  amount: number;
  branch: string;
  model: string;
}) => {
  const [isViewDelete, setIsViewDelete] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {isViewDelete ? (
        <tr
          className="h-[60px] w-full col-span-3"
          onMouseLeave={() => setIsViewDelete(false)}
        >
          true delete
        </tr>
      ) : (
        <tr
          onClick={() => dispatch(DeleteMaterialUsed({ id }))}
          onMouseEnter={() => setIsViewDelete(true)}
        >
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
            {name}
          </td>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
            {amount}
          </td>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
            {branch}
          </td>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
            {model}
          </td>
        </tr>
      )}
    </>
  );
};
