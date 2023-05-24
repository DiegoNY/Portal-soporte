export const CardPresentationIncidents = ({
  children,
  title = "Incidencias Registradas Clientes - Tecnicos",
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="  mx-3 h-[70vh]  col-span-full flex flex-col gap-3 ">
      <h1 className="text-[14px] text-[#7E7E7E] mt-1 font-[400]">{title}</h1>
      <div className="min-h-[95%] ">
        <div className="h-full gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {children}
        </div>
      </div>
    </div>
  );
};
