import { ChangeEvent, useEffect, useCallback, useState } from "react";
import { SelectForm } from "./SelectForm";
import { DataPicker } from "@/components/DataPicker/DataPicker";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  ChangeSecondViewAction,
  ChangeShiftInformation,
} from "@/libs/redux/feature/TurnoSlice.feature";
import { RootState } from "@/libs/redux/store/store";
import cn from "@/utils/cn";
import dayjs from "dayjs";

export const FormShift = () => {
  const turno = useSelector((state: RootState) => state.shift, shallowEqual);
  const dispatch = useDispatch();

  const HandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(
      ChangeShiftInformation({ name: e.target.name, value: e.target.value })
    );
  };

  const { component, daySelect } = DataPicker({
    firstDay: dayjs(turno.firstDay).toDate().toDateString(),
    lastDate: dayjs(turno.lastDate).toDate().toDateString(),
  });

  useEffect(() => {
    if (turno.second_view_action == false) {
      dispatch(
        ChangeShiftInformation({
          name: "end_date",
          value: daySelect.lastDate || "",
        })
      );
      dispatch(
        ChangeShiftInformation({
          name: "start_date",
          value: daySelect.firstDay || "",
        })
      );
    } else {
      dispatch(
        ChangeShiftInformation({
          name: "support_end_date",
          value: daySelect.lastDate || "",
        })
      );
      dispatch(
        ChangeShiftInformation({
          name: "support_start_date",
          value: daySelect.firstDay || "",
        })
      );
    }
  }, [daySelect.lastDate, daySelect.firstDay]);

  return (
    <>
      <form className="flex flex-col gap-2 h-full">
        <SelectForm
          value={turno.shift_type}
          name_form="shift_type"
          name_input={
            turno.second_view_action ? "Turno Semanal Apoyo" : "Turno Semanal"
          }
          onChange={HandleChange}
        >
          {turno.second_view_action ? (
            <option value={2}>Turno semanal apoyo</option>
          ) : (
            <option value={1}>Turno semanal</option>
          )}
        </SelectForm>
        <SelectForm
          value={turno.second_view_action ? turno.support_staff : turno.staff}
          name_form={turno.second_view_action ? "support_staff" : "staff"}
          name_input="Personal"
          onChange={HandleChange}
        >
          <option>Nombre personal</option>
          <option value={2}>Bryan Polo Gomez</option>
        </SelectForm>
        <div className="border rounded-lg px-3 py-2">
          <h1 className="text-[14px] px-1 text-[#7E7E7E] ">Fecha</h1>
          <div className="flex  flex-col px-1 ">
            <div className="font-[14px] text-[15px] flex justify-between">
              <span className="w-[20px] text-[#222222]">Inicio</span>
              <span>:</span>
              <span>
                {turno.firstDay.toISOString().substring(0, 10)} 18:00:00
              </span>
            </div>
            <div className="font-[14px] text-[15px] flex justify-between">
              <span className="w-[20px] text-[#222222]">Fin</span>
              <span>:</span>
              <span>
                {turno.lastDate.toISOString().substring(0, 10)} 07:59:59
              </span>
            </div>
          </div>
        </div>
        {component}
      </form>
      <div
        className={cn(
          turno.second_view_action ? "gap-2 justify-between" : "",
          " w-full flex justify-end p-2   items-center  "
        )}
      >
        <button
          className="p-2 bg-sky-100 text-blue-300 hover:bg-sky-200 rounded-lg hover:text-blue-700 font-[400]"
          onClick={() => dispatch(ChangeSecondViewAction())}
        >
          {turno.second_view_action ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
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
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          ) : (
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
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          )}
        </button>
        {turno.second_view_action && (
          <button className=" p-2 rounded-lg bg-sky-200 text-blue-600 text-[14px] font-[400]">
            Registrar turno
          </button>
        )}
      </div>
    </>
  );
};
