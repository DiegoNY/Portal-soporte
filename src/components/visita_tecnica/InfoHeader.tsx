import React from "react";
import { CardInformationRegister } from "../incidencias/registro/InformationRegister/CardInformationRegister";

export const InfoHeader = () => {
  return (
    <div className=" min-h-[110px]  col-span-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4">
      <CardInformationRegister
        title="Visitas programadas"
        amount={88}
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
            <path d="M4 16l6 -7l5 5l5 -6"></path>
            <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          </svg>
        }
      />
      <CardInformationRegister
        title="Visitas asignadas"
        amount={1}
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
            <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"></path>
            <path d="M14 19l2 2l4 -4"></path>
            <path d="M9 8h4"></path>
            <path d="M9 12h2"></path>
          </svg>
        }
      />
      <CardInformationRegister
        title="Visitas en proceso"
        amount={1}
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
            <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"></path>
            <path d="M17 12a5 5 0 1 0 -5 5"></path>
          </svg>
        }
      />
      <CardInformationRegister
        title="Visitas realizadas"
        amount={86}
        Class="md:col-start-2 lg:col-auto"
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
            <path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4"></path>
            <path d="M15 19l2 2l4 -4"></path>
          </svg>
        }
      />
      <CardInformationRegister
        title="Ordenes de visitas registradas"
        amount={5075}
        Class="flex col-span-2 sm:col-auto justify-center sm:justify-start flex-col items-center md:col-start-3 lg:col-auto"
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
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            <path d="M16 19h6"></path>
            <path d="M19 16v6"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
          </svg>
        }
      />
    </div>
  );
};
