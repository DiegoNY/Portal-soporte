import { useState } from "react";
import { SelectInfo } from "./SelectInfo";
import { DatePicker } from "./DatePicker";

export const Filter = () => {
  const [starDate, setSartDate] = useState("");
  const [finshDate, setFinishDate] = useState("");

  return (
    <div className="col-span-full p-3">
      <div className="bg-white p-3 border-[1px] flex flex-col">
        <div className="flex gap-1 items-center">
          <h1 className="text-[14px] font-[400] text-[#313131]">
            Filtros de busqueda{" "}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M6 4v4"></path>
            <path d="M6 12v8"></path>
            <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M12 4v10"></path>
            <path d="M12 18v2"></path>
            <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M18 4v1"></path>
            <path d="M18 9v11"></path>
          </svg>
        </div>
        <div className="p-2 flex gap-5 flex-wrap">
          <SelectInfo title="Empresa" options={""} />
          <SelectInfo title="Sucursal" options={""} />
          <p className="p-2"></p>
          <div className="flex gap-3 ">
            <DatePicker title="Fecha de inicio" />
            <DatePicker title="Fecha de fin" />
          </div>
        </div>
      </div>
    </div>
  );
};
