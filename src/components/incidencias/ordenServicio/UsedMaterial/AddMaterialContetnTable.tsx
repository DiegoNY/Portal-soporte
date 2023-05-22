import {
  AddUsedMaterial,
  DeleteMaterialUsed,
} from "@/libs/redux/feature/ServiceOrder";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const AddMaterialContentTable = ({
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
      <tr>
        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
          {amount}
        </td>
        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
          {name}
        </td>

        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
          <button
            className=" rounded-lg flex items-center"
            onClick={() =>
              dispatch(
                AddUsedMaterial({
                  material: { name, amount, branch, model, id },
                })
              )
            }
          >
            <span className="hover:bg-green-200 hover:text-green-600 p-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
                <path d="M15 6h6m-3 -3v6"></path>
              </svg>
            </span>
          </button>
        </td>
      </tr>
    </>
  );
};
