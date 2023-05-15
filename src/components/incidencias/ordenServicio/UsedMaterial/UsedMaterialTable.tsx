import { RootState } from "@/libs/redux/store/store";
import {} from "react";
import { useSelector } from "react-redux";
import { UsedMaterialContentTable } from "./UsedMaterialContentTable";

export const UsedMaterialTable = () => {
  const { used_materials } = useSelector(
    (state: RootState) => state.service_order
  );
  const materials = used_materials.map((material) => {
    return <UsedMaterialContentTable {...material} />;
  });

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
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-slate-800">{materials}</tbody>
    </table>
  );
};
