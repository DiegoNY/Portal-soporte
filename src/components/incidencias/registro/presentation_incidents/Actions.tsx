import { useEffect, useRef, useState } from "react";
import { ActionsButtons } from "./ActionsButtons";
import { useDispatch, useSelector } from "react-redux";
import { ChangeElementDelete } from "@/libs/redux/feature/NavigationSlice.feature";
import { RootState } from "@/libs/redux/store/store";

export const Actions = ({ incidence_id }: { incidence_id: number }) => {
  const { elementDeleted } = useSelector(
    (state: RootState) => state.navigation
  );
  const [viewACtions, setViewActions] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      className="w-full flex justify-center cursor-pointer items-center"
      onClick={(e) => {
        e.stopPropagation();
        elementDeleted(false);
        setViewActions(!viewACtions);
        dispatch(ChangeElementDelete({ ref: setViewActions }));
      }}
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
        <path d="M4 3h16"></path>
        <path d="M4 9h16"></path>
        <path d="M4 15h16"></path>
        <path d="M4 21h16"></path>
      </svg>
      {viewACtions ? <ActionsButtons /> : ""}
    </div>
  );
};
