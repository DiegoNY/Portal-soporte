import { Modal } from "@/components/Modal/Modal";
import { CardDetailIncident } from "./CardDetailIncident";

export const ViewDetailIncident = () => {
  return (
    <Modal>
      <CardDetailIncident>
        <div className="sm:w-[40vw]  m-2 p-2 rounded-sm flex gap-3 bg-[#EEEEEE]">
          <div className="flex items-center ">
            <span className="rounded-full p-2 bg-yellow-300">
              <svg
                version="1.1"
                viewBox="0 0 20 20"
                x="0px"
                y="0px"
                className="h-10"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z"
                    clip-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
          <div className="w-full">
            <div className="flex justify-between w-full items-center">
              <h1 className="text-[15px] font-[500] text-[#1362B8]">
                XENA LUCERO JAIMES PADILLA
              </h1>
              <p className="text-[12px]">2023-04-26 14:30:48</p>
            </div>
            <p className="text-[14px] font-[400]">
              Registro La Incidencia con codigo{" "}
              <span className="font-[500] text-[#1362B8]">23-7667</span>, de la
              Empresa :
            </p>
            <h1 className="text-[14px] font-[400] text-[#1362B8]">
              GRIFOS ESPINOZA S A
            </h1>
          </div>
        </div>
        <div className="sm:w-[40vw]  m-2 p-2 rounded-sm flex gap-3 bg-[#EEEEEE]">
          <div className="flex items-center ">
            <span className="rounded-full p-2 bg-yellow-300">
              <svg
                version="1.1"
                viewBox="0 0 20 20"
                x="0px"
                y="0px"
                className="h-10"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z"
                    clip-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
          <div className="w-full">
            <div className="flex justify-between w-full items-center">
              <h1 className="text-[15px] font-[500] text-[#1362B8]">
                XENA LUCERO JAIMES PADILLA
              </h1>
              <p className="text-[12px]">2023-04-26 14:30:48</p>
            </div>
            <p className="text-[14px] font-[400]">Asigno la Incidencia , a :</p>
            <h1 className="text-[14px] font-[500] text-[#1362B8]">
              - EDUARDO FRANKLIN ESCOBAR MUÑOZ :
            </h1>
            <p className="text-[14px] font-[400] flex items-center gap-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                </svg>
              </span>{" "}
              994037476 /
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              eescobar@rcingenieros.com
            </p>
          </div>
        </div>
      </CardDetailIncident>
    </Modal>
  );
};
