import React from "react";
import { CustomerSignature } from "./CustomerSignature";
import { TechnicianSignature } from "./TechnicianSignature";

export const Signatures = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between px-2 mt-2.5">
      <TechnicianSignature />
      <CustomerSignature />
    </div>
  );
};
