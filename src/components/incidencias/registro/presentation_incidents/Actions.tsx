export const Actions = ({ incidence_id }: { incidence_id: number }) => {
  return (
    <div className=" grid grid-cols-2  items-center  gap-0.5 ">
      <button className="text-blue-400 border border-blue-400 rounded-lg flex items-center justify-center p-0.5 gap-1">
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
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h2.5"></path>
            <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M19.001 15.5v1.5"></path>
            <path d="M19.001 21v1.5"></path>
            <path d="M22.032 17.25l-1.299 .75"></path>
            <path d="M17.27 20l-1.3 .75"></path>
            <path d="M15.97 17.25l1.3 .75"></path>
            <path d="M20.733 20l1.3 .75"></path>
          </svg>
        </span>
      </button>
      <button className="p-0.5 flex border border-yellow-400 text-yellow-700 gap-1 rounded-lg items-center justify-center">
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
            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
            <path d="M9 17h6"></path>
            <path d="M9 13h6"></path>
          </svg>
        </span>
      </button>
      <button className="border border-blue-700 text-blue-700 rounded-lg p-0.5 flex items-center justify-center ">
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
        </span>
      </button>
      <button className="border border-emerald-500 p-0.5 text-emerald-500 rounded-lg flex items-center justify-center">
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
            <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z"></path>
            <path d="M16 7h4"></path>
            <path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3"></path>
          </svg>
        </span>
      </button>
      <button className="border border-red-400 text-red-400 p-0.5 rounded-lg flex items-center justify-center">
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
            <path d="M4 7l16 0"></path>
            <path d="M10 11l0 6"></path>
            <path d="M14 11l0 6"></path>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};
