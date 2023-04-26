import { useDispatch, useSelector } from "react-redux";
import { CardInformationRegister } from "./CardInformationRegister";
import { ChangeIssueView } from "@/libs/redux/feature/Incidents.feature";

export const InformationRegister = () => {
  const dispatch = useDispatch();

  return (
    <div className=" min-h-[110px]  col-span-full grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4">
      <div className="hidden sm:flex items-center  flex-col p-1 gap-1 ">
        <p className="text-xs mt-0.5 text-green-700 text-center">
          Para registrar una nueva incidencia de click
        </p>
        <button
          className="flex w-[180px]  bg-sky-200  items-center justify-center rounded-lg py-1.5 px-2 text-blue-700 hover:font-[400] text-[15px] hover:bg-sky-200 hover:text-blue-500"
          onClick={() => dispatch(ChangeIssueView())}
        >
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
              <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
              <path d="M4 8h16"></path>
              <path d="M8 4v4"></path>
              <path d="M10 14h4"></path>
              <path d="M12 12v4"></path>
            </svg>
          </span>{" "}
          Nueva incidencia
        </button>
      </div>
      <CardInformationRegister
        title="Incidencias Registradas"
        amount={15120}
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
        title="Incidencias Asignadas"
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
        title="Incidencias en Proceso"
        amount={6}
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
        title="Incidencias Resueltas"
        amount={14109}
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
        title="Clientes Registrados"
        amount={222}
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
