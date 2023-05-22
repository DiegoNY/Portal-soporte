import { InfoFormOrder } from "@/components/incidencias/ordenServicio/InfoFormOrder";
import React from "react";
import { ComentSelect } from "./ComentSelect";

export const ServerRevision = () => {
  return (
    <div className="border rounded-lg px-2 pb-3 bg-white">
      <InfoFormOrder
        title="REVISION DEL SERVIDOR"
        classs={"py-2 px-2 "}
        classText="text-teal-700 font-[600] "
      />
      <h1 className="px-2 font-[500]">SISTEMA OPERATIVO</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="sistema_operativo"
          title="SISTEMA OPERATIVO"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">VENCIMIENTO DE ANTIVIRUS</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="vencimiento_antivirus"
          title="VENCIMIENTO DE ANTIVIRUS"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">DISCO DURO</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="disco_duro"
          title="DISCO DURO"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">REALIZAR BACKUP</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="backup"
          title="REALIZAR BACKUP"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
};
