import Menu from "./Menu/Menu";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex w-full  mt-14 min-h-screen">
      <Menu />
      <main className="w-full   max-h-screen overflow-scroll bg-slate-50">
        {children}
      </main>
    </div>
  );
};

export default Main;
