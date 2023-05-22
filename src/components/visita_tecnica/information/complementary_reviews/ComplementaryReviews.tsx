import { InfoFormOrder } from "@/components/incidencias/ordenServicio/InfoFormOrder";
import React, { ChangeEvent, useMemo } from "react";
import { ComentSelect } from "../ComentSelect";
import { Reviews } from "./Reviews";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store/store";
import {
  AddComplementaryReviews,
  DeleteComplementaryReviews,
} from "@/libs/redux/feature/TechnicalVisits.feature";

export const ComplementaryReviews = () => {
  const { ComplementaryReviews } = useSelector(
    (state: RootState) => state.technical_visits_reducer
  );
  const dispatch = useDispatch();

  const reviews = useMemo(
    () => ComplementaryReviews.map((review) => <Reviews {...review} />),
    [ComplementaryReviews]
  );

  const AddComplementary = () => {
    dispatch(AddComplementaryReviews());
  };

  const DeleteComplementary = () => {
    dispatch(DeleteComplementaryReviews());
  };

  return (
    <div className="border rounded-lg px-2 pb-3 bg-white">
      <InfoFormOrder
        title="REVISION DEL POS, LECTORES, JACK TOOLS IMPRESORAS Y CONEXIONES"
        classs={"py-2 px-2 flex justify-between"}
        classText="text-teal-700 font-[600] "
        button={
          <div className="w-[12vw] p-0.5 flex gap-2">
            <button
              onClick={AddComplementary}
              className="text-teal-700 bg-emerald-100 px-2 py-1 font-[600] rounded-sm text-[14px] "
            >
              Agregar
            </button>
            <button
              onClick={DeleteComplementary}
              className="px-2 text-[14px] hover:bg-red-200 hover:text-red-700 rounded-sm flex items-center"
            >
              Remover
              <span>
                {ComplementaryReviews.length > 1 ? (
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
                    <path d="M4 7l16 0"></path>
                    <path d="M10 11l0 6"></path>
                    <path d="M14 11l0 6"></path>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                  </svg>
                ) : (
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
                    <path d="M3 3l18 18"></path>
                    <path d="M4 7h3m4 0h9"></path>
                    <path d="M10 11l0 6"></path>
                    <path d="M14 14l0 3"></path>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923"></path>
                    <path d="M18.384 14.373l.616 -7.373"></path>
                    <path d="M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                  </svg>
                )}
              </span>
            </button>
          </div>
        }
      />
      {reviews}
    </div>
  );
};
