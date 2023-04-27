import { ChangeViewActionsShift } from "@/libs/redux/feature/TurnoSlice.feature";
import { RootState } from "@/libs/redux/store/store";
import cn from "@/utils/cn";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export const CardFormShift = ({ children }: { children: React.ReactNode }) => {
  const turno = useSelector((state: RootState) => state.shift, shallowEqual);
  const dispatch = useDispatch();

  return (
    <section className="w-[340px] sm:w-[400px] lg:w-[23rem] bg-white col-span-2 p-2 mx-2">
      <div className=" grid grid-cols-2 w-full mb-1">
        <div
          className={cn(
            turno.second_view_action ? "bg-gray-300" : "bg-green-200",
            "p-[0.1px] "
          )}
        ></div>
        <div
          className={cn(
            turno.second_view_action ? "bg-green-200" : "bg-gray-300",
            "p-[0.1px] "
          )}
        ></div>
      </div>
      <div className=" w-full px-2 flex items-center justify-between">
        <div className=" mt-1 font-[600] text-[15px]">
          {turno.second_view_action ? "Personal de Apoyo" : "Turno Principal"}
        </div>
        <span
          className="cursor-pointer hover:text-red-600 hover:bg-red-200 hover:rounded-lg p-1"
          onClick={() => dispatch(ChangeViewActionsShift({}))}
        >
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

      <div className="min-h-[77vh] mt-3 px-3">{children}</div>
    </section>
  );
};
