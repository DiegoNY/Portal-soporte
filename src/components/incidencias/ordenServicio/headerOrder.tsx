import Image from "next/image";
import {} from "react";

export const HeaderOrder = () => {
  return (
    <section className="mt-1 border grid grid-cols-2 border-sky-200 sm:flex justify-between gap-5 items-center p-5 mb-0.5">
      <div className="w-full sm:w-[16vw] flex justify-center">
        <Image src={"/LogoRC.png"} width={70} height={70} alt="logo rc " />
      </div>
      <div className="sm:w-[42vw] text-center text-[14px] col-span-2">
        <h1 className="font-[700] text-[15px] text-blue-700">
          ORDEN DE SERVICIO
        </h1>
        <p>Av. Augusto B. Leguia 307 - Coop. Policial Lima - Lima - SMP</p>
        <p>Telefono : 711-0747 / 711-0746</p>
        <p>E-mail : ventas@rcingenieros.com / www.rcingenieros.com</p>
      </div>
      <div className="text-center  sm:w-[16vw] row-start-1">
        <h1 className="font-[500] text-[15px]">N° Orden</h1>
        <h1 className="text-[13px]">N° Orden</h1>
        <h1 className="text-[14px]">2023-ST02235</h1>
      </div>
    </section>
  );
};
