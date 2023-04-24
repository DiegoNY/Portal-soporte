export const CardPresentationIncidents = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="  mx-3 h-[70vh]  col-span-full flex flex-col gap-3">
      <h1 className="text-[14px] text-slate-400 mt-1">
        Incidencias Registradas Clientes / Tecnicos
      </h1>
      <div className="min-h-[95%] ">
        <div className="h-full gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {children}
        </div>
      </div>
    </div>
  );
};
