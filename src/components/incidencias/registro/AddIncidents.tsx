import { Modal } from "@/components/Modal/Modal";
import { ChangeIssueView } from "@/libs/redux/feature/Incidents.feature";
import { useDispatch } from "react-redux";

export const AddIncidents = () => {
  const dispatch = useDispatch();
  return (
    <Modal>
      <div className=" fixed bottom-0 left-0 right-0 sm:left-auto sm:right-auto md:bottom-auto sm:top-10  top-16 rounded-t-xl sm:rounded-xl bg-white border p-2 ">
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
          <h1 className="font-[500] text-center w-full p-1 text-[#222222]">
            Nueva Incidencia N°23-7635
          </h1>
        </div>
        <p className="text-[14px] px-3 text-[#7E7E7E]">
          Completar todos los campos obligatorios (*)
        </p>
        <div className="overflow-y-scroll sm:overflow-auto max-h-[70vh]">
          <div className="flex flex-col sm:flex-row p-1 mt-1 sm:mt-0 sm:p-2 mx-[18px]  items-center gap-2">
            <h1 className=" w-full ml-1 sm:ml-0 sm:w-[170px] font-[16px] text-[#222222]">
              Empresa*
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3  border rounded-md w-full  ">
              <input
                className="p-2 h-full bg-inherit border-r border-b col-span-full sm:border-b-0 sm:col-span-1 "
                placeholder="RUC EMPRESA"
              />
              <input
                className="p-2 bg-inherit border-r border-b sm:border-b-0 col-span-full sm:col-span-1"
                placeholder="RAZON SOCIAL"
              />
              <select className="p-2 w-full bg-inherit col-span-full  sm:col-span-1">
                <option>Seleccione sucursal</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row p-1 sm:px-2 mx-[18px] gap-2  items-center">
            <h1 className=" w-full ml-1 sm:ml-0 sm:w-[170px] font-[16px]   text-[#222222]">
              Contacto*
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3  border rounded-md w-full">
              <input
                className="p-2 border-b border-r bg-inherit col-span-2 sm:col-span-1 "
                placeholder="NOMBRE"
              />
              <input
                className="p-2 border-b bg-inherit col-span-2 sm:col-span-1 sm:border-r"
                placeholder="DNI"
              />
              <select className="p-2 border-b col-span-2 sm:col-span-1 bg-inherit">
                <option>Tipo contacto</option>
              </select>
              <input
                className="p-2 border-b sm:border-r sm:border-b-0 bg-inherit col-span-2 sm:col-span-1"
                placeholder="TELEFONO"
              />
              <input
                className="p-2  bg-inherit col-span-2 "
                placeholder="CORREO"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row p-1 sm:p-2  mx-[18px]  items-center">
            <h1 className="w-full ml-1 sm:ml-0 sm:w-[176px] font-[16px]   text-[#222222]">
              Estacion*
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3  border rounded-md w-full">
              <select className="p-2 col-span-full sm:col-span-1  border-b sm:border-r sm:border-b-0  bg-inherit">
                <option>tipo</option>
              </select>
              <select className="p-2 border-b col-span-full sm:col-span-1 sm:border-r sm:border-b-0  bg-inherit">
                <option>prioridad</option>
              </select>
              <select className="p-2 col-span-full sm:col-span-1   bg-inherit">
                <option>nivel</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row p-1 sm:p-2  mx-[18px]  items-center">
            <h1 className="w-full ml-1 sm:ml-0 sm:w-[176px] font-[16px]   text-[#222222]">
              Problema*
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4  border rounded-md w-full">
              <select className="p-2 col-span-full sm:col-span-2  border-b sm:border-r sm:border-b-0  bg-inherit">
                <option>Categoria</option>
              </select>
              <select className="p-2 border-b col-span-full sm:col-span-2 sm:border-r sm:border-b-0  bg-inherit">
                <option>SubCategoria</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  p-1 sm:p-2  mx-[18px]  items-center">
            <h1 className="w-full ml-1 sm:ml-0 sm:w-[176px] font-[16px]   text-[#222222]">
              Extras*
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4  border rounded-md w-full">
              <input
                className="p-2 col-span-full sm:col-span-2  border-b sm:border-r sm:border-b-0  bg-inherit w-full"
                type="date"
                defaultValue={new Date().toDateString()}
              />
              <input
                className="p-2 border-b col-span-full sm:col-span-2 sm:border-r sm:border-b-0  bg-inherit w-full"
                type="time"
              />
            </div>
          </div>
          <div className="w-full  flex justify-center sm:justify-end py-[16px] px-6 gap-2">
            <button className="border  rounded-md p-2 w-full sm:w-auto sm:px-4 bg-blue-600 hover:bg-blue-700 text-[#ffff]">
              Registrar Incidencia N° 23-7635
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
