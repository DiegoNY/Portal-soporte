import {} from "react";
import { InfoFormOrder } from "../InfoFormOrder";
import { UsedMaterialTable } from "./UsedMaterialTable";
import { useDispatch } from "react-redux";
import { ChangeViewAddUsedMaterials } from "@/libs/redux/feature/ServiceOrder";

const AddButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="flex gap-2 text-[14px] bg-blue-700 text-white px-4 py-0.5 rounded-sm"
        onClick={() => dispatch(ChangeViewAddUsedMaterials())}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
            <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
            <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
            <path d="M14 17h6m-3 -3v6"></path>
          </svg>
        </span>
        <p>Agregar</p>
      </button>
    </div>
  );
};

export const UsedMaterials = () => {
  return (
    <>
      <InfoFormOrder
        title="MATERIALES UTILIZADOS"
        button={<AddButton />}
        style="flex justify-between pr-2"
      />

      <UsedMaterialTable />
    </>
  );
};
