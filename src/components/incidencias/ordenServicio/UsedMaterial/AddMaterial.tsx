import { Modal } from "@/components/Modal/Modal";
import { RootState } from "@/libs/redux/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsedMaterialContentTable } from "./UsedMaterialContentTable";
import { AddMaterialContentTable } from "./AddMaterialContetnTable";
import { InfoFormOrder } from "../InfoFormOrder";
import { ChangeViewAddUsedMaterials } from "@/libs/redux/feature/ServiceOrder";

const AddMaterial = () => {
  const { materials } = useSelector((state: RootState) => state.service_order);
  const materials_render = materials.map((material) => {
    return <AddMaterialContentTable {...material} />;
  });

  const dispatch = useDispatch();

  return (
    <Modal>
      <div className="fixed bottom-0 left-0 right-0 sm:left-auto sm:right-auto md:bottom-auto sm:top-10  top-16 rounded-t-xl sm:rounded-xl bg-white border p-2">
        <InfoFormOrder
          title="LISTADO DE MATERIALES"
          style="flex justify-between"
          button={
            <div
              className="p-1 hover:text-blue-700 cursor-pointer"
              onClick={() => dispatch(ChangeViewAddUsedMaterials())}
            >
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
                <path d="M5 9l4 0l0 -4"></path>
                <path d="M3 3l6 6"></path>
                <path d="M5 15l4 0l0 4"></path>
                <path d="M3 21l6 -6"></path>
                <path d="M19 9l-4 0l0 -4"></path>
                <path d="M15 9l6 -6"></path>
                <path d="M19 15l-4 0l0 4"></path>
                <path d="M15 15l6 6"></path>
              </svg>
            </div>
          }
        />
        <div className="flex w-full p-2 gap-2 items-center">
          <span>
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
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
          </span>
          <input
            className=" w-full outline-none text-[14px]"
            placeholder="Buscar por nombre o codigo"
          />
        </div>
        <table className="border-collapse table-auto w-full sm:w-[45vw] text-sm mt-4">
          <thead>
            <tr>
              <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Codigo
              </th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Material
              </th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Agregar
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            {materials_render}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};
export default AddMaterial;
