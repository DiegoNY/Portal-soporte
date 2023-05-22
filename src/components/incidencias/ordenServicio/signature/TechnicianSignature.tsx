import Image from "next/image";
import React from "react";

export const TechnicianSignature = () => {
  return (
    <div className="w-1/2 flex gap-1 flex-col items-center mb-2 sm:mb-0">
      <div className="border border-sky-200 h-[16vh] w-[17vh]">
        <img src="http://3a8c0f8.online-server.cloud/INC/Vistas/images/empleados/firmas/juan firma.jpeg" />
      </div>
      <h1 className="text-[14px] text-[#414141] text-center">
        Firma de tecnico
      </h1>
      <h1 className="text-[14px] text-center">
        RICARDO CALDERON INGENIEROS SAC
      </h1>
      <h1 className="text-[14px] text-center">OMAR FORTUNATO SAENZ QUISPE</h1>
    </div>
  );
};
