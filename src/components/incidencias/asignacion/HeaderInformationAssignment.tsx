import React from "react";
import { AssignmentInformation } from "./AssignmentInformation";

export const HeaderInformationAssignment = () => {
  return (
    <>
      <article className="flex flex-col sm:flex-row">
        <div>
          <div className="text-[14px] w-[80px] flex justify-between">
            <p className=" py-0.5 rounded-lg">Informado</p>
          </div>{" "}
          <AssignmentInformation
            name="Empresa"
            information="20127765279 - COESTI S.A."
          />
          <AssignmentInformation
            name="Sucursal"
            information="E/S TOMAS VALLE"
          />
          <AssignmentInformation
            name="Contacto"
            information="DINA ROSSMERY MURIEL TAPIA - (Jefe de Playa)"
          />
          <AssignmentInformation name="Telefono" information="" />
          <AssignmentInformation name="Correo" information="" />
        </div>
        <div>
          <div className="p-2.5 hidden sm:flex"></div>
          <AssignmentInformation name="Problema" information="12344152" />
        </div>
      </article>
    </>
  );
};
