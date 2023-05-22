import { InfoFormOrder } from "@/components/incidencias/ordenServicio/InfoFormOrder";
import React from "react";

export const CustomerDataOrder = () => {
  return (
    <>
      <InfoFormOrder
        title="DATOS DEL CLIENTE"
        classs={"py-2 px-2 bg-teal-100 "}
        classText="text-teal-700 font-[600] "
      />
      <div className="flex justify-between w-full gap-4">
        <div className="w-1/2">
          <h1 className="text-[14px] text-slate-500">Razon social</h1>
          <p className="text-[15px] w-full p-1 border-b border-[#41414141] bg-[#4141]">
            COESTI S.A.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="text-[14px] text-slate-500">Sucursal</h1>
          <p className="text-[15px] w-full p-1 border-b border-[#41414141] bg-[#4141]">
            E/S FRUTALES
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full ">
        <h1 className="text-[14px] text-slate-500">Direccion</h1>
        <p className="text-[15px] w-full p-1 border-b border-[#41414141] bg-[#4141]">
          AV. LOS FRUTALES 994 URB. CAMINO REAL
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
        <div className="sm:w-1/2">
          <h1 className="text-[14px] text-slate-500">Contacto</h1>
          <p className="text-[15px] w-full p-1 border-b border-[#41414141] bg-[#4141]">
            ISABEL JUDITH VALVERDE AYALA
          </p>
        </div>
        <div className="sm:w-1/2">
          <h1 className="text-[14px] text-slate-500">Telefono</h1>
          <p className="text-[15px] w-full p-1 border-b border-[#41414141] bg-[#4141]">
            931798470
          </p>
        </div>
      </div>
    </>
  );
};
