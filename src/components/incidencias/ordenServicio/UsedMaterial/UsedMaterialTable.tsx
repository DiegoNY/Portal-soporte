import { RootState } from "@/libs/redux/store/store";
import { useCallback } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { UsedMaterialContentTable } from "./UsedMaterialContentTable";

export const UsedMaterialTable = () => {
  const { used_materials } = useSelector(
    (state: RootState) => state.service_order,
    shallowEqual
  );

  const materials = useCallback(
    () =>
      used_materials.map((material) => {
        return <UsedMaterialContentTable {...material} />;
      }),
    [used_materials]
  );

  return (
    <table className="border-collapse table-auto w-full text-sm mt-4">
      <thead>
        <tr>
          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
            Producto / Material
          </th>
          <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
            Cantidad
          </th>
          <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
            Marca
          </th>
          <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
            Modelo
          </th>
          <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
            Accion
          </th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-slate-800">
        {used_materials.length != 0 ? (
          materials()
        ) : (
          <tr>
            <td colSpan={5}>
              <div className="h-[10vh] flex items-center justify-center gap-1">
                <p>No se registraron materiales utilizados</p>
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
                  <path d="M3 21v-13l9 -4l9 4v13"></path>
                  <path d="M13 13h4v8h-10v-6h6"></path>
                  <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3"></path>
                </svg>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
