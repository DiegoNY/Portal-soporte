import { useState } from "react";
import { SelectInfo } from "./SelectInfo";
import { DatePicker } from "./DatePicker";

export const Filter = () => {
  const [starDate, setSartDate] = useState("");
  const [finshDate, setFinishDate] = useState("");

  return (
    <div className="col-span-full p-3">
      <div className="bg-white p-3 border-[1px] flex flex-col">
        <div className="flex gap-1 items-center text-slate-600">
          <h1 className="text-[14px] font-medium ">Filtros de busqueda </h1>
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
        <div className="p-2 flex gap-6 flex-wrap justify-center ">
          <SelectInfo title="Empresa" options={""} />
          <SelectInfo title="Sucursal" options={""} />
          <div className="flex flex-col gap-1.5">
            <h1 className="text-[13px] font-[400] text-slate-400">
              Filtrar por Fechas
            </h1>
            <div className="flex gap-3 ">
              <DatePicker title="Fecha de inicio" />
              <DatePicker title="Fecha de fin" />
            </div>
          </div>
          <div>
            <h1 className="text-[13px] mb-1.5 font-[300] text-slate-400">
              Buscar
            </h1>
            <span className="flex items-center justify-center h-[2.3rem] bg-blue-200 rounded-lg cursor-pointer">
              <svg
                className="text-blue-700"
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
          </div>
        </div>
      </div>
    </div>
  );
};
