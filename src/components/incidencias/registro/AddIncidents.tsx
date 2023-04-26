import { Modal } from "@/components/Modal/Modal";
import { ChangeIssueView } from "@/libs/redux/feature/Incidents.feature";
import { useDispatch } from "react-redux";

export const AddIncidents = () => {
  const dispatch = useDispatch();
  return (
    <Modal>
      <div className=" fixed bottom-0 sm:bottom-auto sm:top-10  top-16 rounded-t-xl sm:rounded-xl bg-white border p-2 ">
        <div className="flex p-2">
          <div
            className="px-1 py-2  hover:text-red-400 cursor-pointer"
            onClick={() => dispatch(ChangeIssueView())}
          >
            <svg
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
              <path d="M5 9l4 0l0 -4"></path>
              <path d="M3 3l6 6"></path>
              <path d="M5 15l4 0l0 4"></path>
              <path d="M3 21l6 -6"></path>
              <path d="M19 9l-4 0l0 -4"></path>
              <path d="M15 9l6 -6"></path>
              <path d="M19 15l-4 0l0 4"></path>
              <path d="M15 15l6 6"></path>
            </svg>
          </div>
          <h1 className="font-[500] text-center w-full p-1">
            Nueva Incidencia N°23-7635
          </h1>
        </div>
        <p className="text-[14px]">completar todos los campos obligatorios</p>
        <div className="flex  p-2 items-center">
          <h1 className="w-[170px] text-slate-500">Empresa*</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2  ">
            <input
              className="p-2 border-b bg-inherit outline-none"
              placeholder="RUC EMPRESA"
            />
            <input
              className="p-2 border-b bg-inherit outline-none"
              placeholder="RAZON SOCIAL"
            />
            <select className="p-2 border-b outline-none bg-inherit">
              <option>Seleccione sucursal</option>
            </select>
          </div>
        </div>
        <div className="flex  p-2 items-center">
          <h1 className="w-[170px] text-slate-500">Contacto*</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2  ">
            <input
              className="p-2 border-b bg-inherit outline-none"
              placeholder="NOMBRE"
            />
            <input
              className="p-2 border-b bg-inherit outline-none"
              placeholder="DNI"
            />
            <select className="p-2 border-b outline-none bg-inherit">
              <option>Seleccione</option>
            </select>
            <input
              className="p-2 border-b bg-inherit outline-none"
              placeholder="TELEFONO"
            />
            <input
              className="p-2 border-b bg-inherit outline-none"
              placeholder="CORREO"
            />
          </div>
        </div>
        <div className="flex  p-2 items-center">
          <h1 className="w-[170px] text-slate-500">Tipo estacion*</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2  ">
            <select className="p-2 border-b outline-none bg-inherit">
              <option>Seleccione sucursal</option>
            </select>
            <div>
              <p>Prioridad</p>
              <select className="p-2 border-b outline-none bg-inherit">
                <option>Seleccione sucursal</option>
              </select>
            </div>
            <select className="p-2 border-b outline-none bg-inherit">
              <option>Seleccione sucursal</option>
            </select>
          </div>
        </div>
      </div>
    </Modal>
  );
};
