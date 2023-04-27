import { ChangeViewDetail } from "@/libs/redux/feature/Incidents.feature";
import { useDispatch } from "react-redux";

export const CardDetailIncident = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch();

  return (
    <div className=" fixed bottom-0 left-0 right-0 sm:left-auto sm:right-auto md:bottom-auto sm:top-10  top-16 rounded-t-xl sm:rounded-xl bg-white border p-2 ">
      <div className="flex justify-between items-center gap-2 p-2">
        <h1 className=" font-[600] text-[15px] ">
          Detalle de Incidencia 23-7667
        </h1>
        <span
          className="cursor-pointer hover:border-red-300 hover:border hover:text-red-500 p-0.5 rounded-sm"
          onClick={() => dispatch(ChangeViewDetail({}))}
        >
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
            <path d="M5 9l4 0l0 -4"></path>
            <path d="M3 3l6 6"></path>
            <path d="M5 15l4 0l0 4"></path>
            <path d="M3 21l6 -6"></path>
            <path d="M19 9l-4 0l0 -4"></path>
            <path d="M15 9l6 -6"></path>
            <path d="M19 15l-4 0l0 4"></path>
            <path d="M15 15l6 6"></path>
          </svg>
        </span>
      </div>
      {children}
    </div>
  );
};
