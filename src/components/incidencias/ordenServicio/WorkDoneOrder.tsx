import React from "react";
import { InfoFormOrder } from "./InfoFormOrder";

export const WorkDoneOrder = () => {
  return (
    <>
      <InfoFormOrder title="TRABAJO REALIZADO" />
      <div className="flex  flex-col justify-center items-center w-full ">
        <div className="sm:w-[40vw]">
          <h1 className="text-[14px] text-slate-500">Clasificacion Error</h1>
          <p className="text-[15px] text-center w-full p-1 border-b border-[#41414141] bg-[#4141]">
            PSIS-REM_01 - REINICIO DE SERVICIO COMPLETO{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full gap-4">
        <div className="w-1/2">
          <h1 className="text-[14px] text-slate-500">Observaciones</h1>
          <p className="text-[15px] w-full p-1 border-b border-[#41414141] bg-[#4141]">
            COESTI S.A.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="text-[14px] text-slate-500">Recomendaciones</h1>
          <p className="text-[15px] w-full p-1 border-b border-[#41414141] bg-[#4141]">
            E/S FRUTALES
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:justify-center sm:items-center w-full ">
        <div className="flex gap-2 flex-col sm:flex-row ">
          <div className=" w-full sm:w-[20vw]">
            <h1 className="text-[14px] text-slate-500">Inicio</h1>
            <p className="text-[15px] text-center w-full p-1 border-b border-[#41414141] bg-[#4141]">
              2023-05-13 07:10:45
            </p>
          </div>
          <div className=" w-full sm:w-[20vw]">
            <h1 className="text-[14px] text-slate-500">Fin</h1>
            <input
              type="time"
              className="text-[15px] text-center w-full p-1 border-b border-[#41414141] bg-[#4141]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
