export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid place-content-center">
        <div className="grid max-w-6xl mx-1 grid-cols-2 place-content-center gap-4 gap-y-9 md:gap-0.5 sm:grid-cols-3 sm:gap-6 sm:gap-y-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-6 flex flex-col items-center p-3 sm:p-10 gap-2">
            <h1 className=" text-lg font-[400] text-center text-[#222222]">
              RC INICIO DE SESION
            </h1>
            <span className="text-[#73A5D4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
              </svg>
            </span>
            <div className="border flex flex-col rounded-lg w-[370px] sm:w-[26vw] border-gray-300">
              <input
                placeholder="Usuario"
                className=" outline-none border-b p-2 text-[15px]"
              />
              <input
                placeholder="Contraseña"
                className="outline-none p-2 text-[15px]"
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <button className="border p-1  bg-blue-700 w-full sm:w-[17vw] text-white text-[15px]">
                Ingresar
              </button>
              <a className="text-[13px]">Olvidaste tu contraseña?</a>
              <h1 className="text-center text-[14px]">
                ©2019 Derechos Reservados. Ricardo Calderon Ingenieros!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
