import {
  ChangeUsedMaterial,
  DeleteMaterialUsed,
} from "@/libs/redux/feature/ServiceOrder";
import { RootState } from "@/libs/redux/store/store";
import { ChangeEvent, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export const UsedMaterialContentTable = ({
  name,
  amount,
  branch,
  model,
  id,
  id_add_material,
}: {
  id: number;
  name: string;
  amount: number;
  branch: string;
  model: string;
  id_add_material: number;
}) => {
  const materials = useSelector(
    (state: RootState) => state.service_order,
    shallowEqual
  );
  const dispatch = useDispatch();
  const [values, setValues] = useState<any>({ amount, name, branch, model });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ [e.target.name]: e.target.value });
    dispatch(
      ChangeUsedMaterial({
        id: id_add_material,
        values: { [e.target.name]: e.target.value },
      })
    );
  };

  useEffect(() => {
    const material = materials.used_materials.find(
      (material) => material.id_add_material === id_add_material
    );
    setValues({ ...material });
  }, [materials.used_materials]);

  return (
    <>
      <tr>
        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
          {name}
        </td>
        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
          <input
            value={values.amount}
            className="outline-none w-full"
            name="amount"
            onChange={onChange}
          />
        </td>
        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
          <input
            className="outline-none resize-none w-full"
            value={values.branch}
            name="branch"
            onChange={onChange}
          />
        </td>
        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
          <input
            className="outline-none resize-none w-full"
            value={values.model}
            name="model"
            onChange={onChange}
          />
        </td>
        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
          <button
            className=" rounded-lg flex items-center w-full"
            onClick={() =>
              dispatch(DeleteMaterialUsed({ id: id_add_material }))
            }
          >
            <span className="hover:bg-red-200 hover:text-red-600 p-1 rounded-md">
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
                <path d="M4 7l16 0"></path>
                <path d="M10 11l0 6"></path>
                <path d="M14 11l0 6"></path>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
              </svg>
            </span>
          </button>
        </td>
      </tr>
    </>
  );
};
