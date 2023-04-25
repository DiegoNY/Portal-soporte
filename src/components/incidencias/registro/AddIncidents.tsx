export const AddIncidents = () => {
  return (
    <div className="absolute z-50 top-0 left-0 bg-transparent w-full h-full justify-center flex modal_style">
      <div className=" fixed top-10 rounded-xl bg-white border ">
        <div className="flex P-2">
          <span className="px-5">X</span>
          <h1 className="font-[500] text-center w-full">Nueva Incidencia N°23-7635</h1>
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
    </div>

  );
};
