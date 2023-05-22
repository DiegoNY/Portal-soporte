import React from "react";
import { ComentSelect } from "../ComentSelect";

export interface props {
  id: number;
  id_complementary_reviews: number;
  printers: boolean;
  printers_observation: string;
  reader_network: boolean;
  reader_network_observation: string;
  jack_tools: boolean;
  jack_tools_observation: string;
  hose_voltage: boolean;
  hose_voltage_observation: string;
  reader_protector_rubber: boolean;
  reader_protector_rubber_observation: string;
  pos_cabinet: boolean;
  pos_cabinet_observation: string;
  mr_450_dti_terminal: boolean;
  mr_450_dti_terminal_observation: string;
}

export const Reviews = ({
  id,
  hose_voltage,
  hose_voltage_observation,
  id_complementary_reviews,
  jack_tools,
  jack_tools_observation,
  mr_450_dti_terminal,
  mr_450_dti_terminal_observation,
  pos_cabinet,
  pos_cabinet_observation,
  printers,
  printers_observation,
  reader_network,
  reader_network_observation,
  reader_protector_rubber,
}: props) => {
  return (
    <>
      {id_complementary_reviews != 1 ? (
        <div className="p-0.5 bg-green-100 mt-2"></div>
      ) : (
        ""
      )}
      <h1 className="px-2 font-[500]">IMPRESORA {id_complementary_reviews} </h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="impresora"
          title="IMPRESORAS"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">RED DE LECTORES</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="red_lectores"
          title="RED DE LECTORES"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">JACK TOOLS</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="jack_tools"
          title="JACK TOOLS"
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <ComentSelect
          name="voltaje_manguera"
          title="VOLTAJE DE MANGUERA"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">CAUCHO PROTECTOR DE LECTORES</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="caoucho_protector_lectores"
          title="CAUCHO PROTECTOR DE LECTORES"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">MUEBLE DE POS</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="mueblo_pos"
          title="MUEBLO DE POS"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <h1 className="px-2 font-[500] mt-1">MR 350 / DTI / TERMINAL</h1>
      <div className="flex flex-wrap gap-0.5">
        <ComentSelect
          name="mr_dti_terminal"
          title="MR 350 / DTI / TERMINAL"
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>
    </>
  );
};
