const CardRegistroIncidencias = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="grid place-content-center ">
      <main className="grid max-w-6xl mx-1 grid-cols-2 place-content-center gap-4 gap-y-9 md:gap-0.5 sm:grid-cols-3 sm:gap-6 sm:gap-y-8 md:grid-cols-4 lg:grid-cols-6">
        {children}
      </main>
    </div>
  );
};

export default CardRegistroIncidencias;
