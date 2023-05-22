import React from "react";

export const ButtonSaveAssignment = () => {
  return (
    <div className="flex justify-end">
      <button className="flex gap-2 p-2 bg-green-500 text-white text-[14px] fixed sm:static bottom-2 right-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
          <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M14 4l0 4l-6 0l0 -4"></path>
        </svg>
        <h1>Guardar Asignacion</h1>
      </button>
    </div>
  );
};
