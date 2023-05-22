import React from "react";
import { ComentSelect } from "./ComentSelect";
import { InfoFormOrder } from "@/components/incidencias/ordenServicio/InfoFormOrder";

export const CabinetReview = () => {
  return (
    <div className="border rounded-lg px-2 pb-3 bg-white">
      <InfoFormOrder
        title="REVISION DEL GABINETE"
        classs={"py-2 px-2 "}
        classText="text-teal-700 font-[600] "
      />
      <h1 className="px-2 font-[500]">UPS</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="ups"
          title="UPS"
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <ComentSelect
          name="bateria_ups"
          title="BATERIA UPS"
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <ComentSelect
          name="salida_energia_ups"
          title="SALIDA DE ENERGIA"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">ESTABILIZADOR</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="estabilizador"
          title="ESTABILIZADOR"
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <ComentSelect
          name="ingreso_energia"
          title="INGRESO DE ENERGIA"
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <ComentSelect
          name="salida_energia"
          title="SALIDA DE ENERGIA"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">INTERFAZ</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="interfaz"
          title="INTERFAZ"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">MONITOR</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="monitor"
          title="MONITOR"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">TARJETA MULTIPUERTO</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="tarjeta_multipuerto"
          title="TARJETA MULTIPUERTO"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
};
