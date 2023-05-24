export const CardTurno = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid place-content-center ">
      <main className="flex gap-2 mt-3">{children}</main>
    </div>
  );
};
