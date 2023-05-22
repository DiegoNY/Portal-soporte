import { CustomerDataOrder } from "./CustomerDataOrder";
import { InfoFormOrder } from "@/components/incidencias/ordenServicio/InfoFormOrder";
import { ServerRevision } from "./ServerRevision";
import { CabinetReview } from "./CabinetReview";
import { ComplementaryReviews } from "./complementary_reviews/ComplementaryReviews";

export const TechnicalServiceInformation = () => {
  return (
    <section className="flex flex-col p-1 gap-2">
      <div className="flex justify-between w-full">
        <div className="w-1/2">
          <h1 className="text-[14px] text-slate-500">Tecnicos</h1>
          <p className="text-[15px] p-1 bg-[#4141]">JOSÉ RAÚL DAVILA AGUILAR</p>
        </div>
        <div className="w-[30vw] sm:w-[15vw]">
          <h1 className="text-[14px] text-slate-500">Fecha</h1>
          <input
            className="text-[15px] w-full"
            type="date"
            value="2023-05-15"
          />
        </div>
      </div>
      <CustomerDataOrder />
      <InfoFormOrder
        title="DESCRIPCION DE EQUIPOS REVISION OBSERVACIONES"
        classs={"py-2 px-2 bg-teal-100 "}
        classText="text-teal-700 font-[600] "
      />
      <CabinetReview />
      <ServerRevision />
      <ComplementaryReviews />

      <div className="flex justify-end rounded-lg absolute sm:static mt-2 bottom-2 right-4">
        <button className="bg-sky-300 text-blue-700 gap-2 font-[500] p-2 rounded-sm  flex  ">
          <span>
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
              <path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4"></path>
              <path d="M15 19l2 2l4 -4"></path>
            </svg>
          </span>
          <h1> Registrar Orden</h1>
        </button>
      </div>
    </section>
  );
};
