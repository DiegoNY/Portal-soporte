import {} from "react";
import { ButtonAction } from "../registro/presentation_incidents/ButtonAction";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ChangeViewDetail } from "@/libs/redux/feature/Incidents.feature";

export const ActionsButtonsResolve = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  return (
    <div
      className=" border py-6 px-3 fixed mt-44 font-[14px] bg-white w-[240px] mr-40 z-20 rounded-lg actions-flotant border-[#EEEDED] shadow-xl"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ButtonAction
        onClick={() => {
          route.push("/home/incidencias/orden_servicio?numero=" + "23-23255");
        }}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
            <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
            <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
            <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
            <path d="M7 12c3.333 -4.667 6.667 -4.667 10 0"></path>
            <path d="M7 12c3.333 4.667 6.667 4.667 10 0"></path>
            <path d="M12 12h-.01"></path>
          </svg>
        }
        style={{
          text: "text-[12px]",
        }}
        title="Visualizar orden"
      />
      <ButtonAction
        style={{
          text: "text-[12px]",
        }}
        icon={
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
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
            <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M19.001 15.5v1.5"></path>
            <path d="M19.001 21v1.5"></path>
            <path d="M22.032 17.25l-1.299 .75"></path>
            <path d="M17.27 20l-1.3 .75"></path>
            <path d="M15.97 17.25l1.3 .75"></path>
            <path d="M20.733 20l1.3 .75"></path>
          </svg>
        }
        title="Detalle de incidencia"
      />
      <ButtonAction
        onClick={() => {
          dispatch(ChangeViewDetail({}));
        }}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"></path>
            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"></path>
            <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z"></path>
          </svg>
        }
        style={{
          text: "text-[12px]",
        }}
        title="Imprimir orden de servicio"
      />
      <ButtonAction
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 5l0 2"></path>
            <path d="M15 11l0 2"></path>
            <path d="M15 17l0 2"></path>
            <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
          </svg>
        }
        style={{
          text: "text-[12px]",
        }}
        title="Imprimir ticket de orden de servicio"
      />
      <ButtonAction
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2"></path>
          </svg>
        }
        style={{
          text: "text-[12px]",
        }}
        title="Añadir firma"
      />
    </div>
  );
};
