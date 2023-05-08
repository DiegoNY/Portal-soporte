import axios from "axios";
import { useRouter } from "next/router";
import { useState, ChangeEvent, FormEvent } from "react";
export default function Home() {
  const [user, setUser] = useState({});
  const router = useRouter();

  const HandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("/api/user/login", user)
      .then((rta) => {
        const { data } = rta;
        console.log(router);
        router.push("/home/incidencias/registro");
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 sm:p-24">
      <div className="grid place-content-center">
        <div className="grid max-w-6xl mx-1 grid-cols-2 place-content-center gap-4 gap-y-9 md:gap-0.5 sm:grid-cols-3 sm:gap-6 sm:gap-y-8 md:grid-cols-4 lg:grid-cols-6">
          <form
            onSubmit={HandleSubmit}
            className="col-span-2 sm:col-span-4 lg:col-span-6 flex flex-col items-center p-3 sm:p-10 gap-2"
          >
            <h1 className=" text-lg font-[600] text-center text-[#222222]">
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
            <div className="border flex flex-col rounded-lg w-[370px] lg:w-[26vw] border-gray-300">
              <input
                name="user"
                placeholder="Usuario"
                className=" outline-none border-b p-2 text-[15px]"
                onChange={HandleChange}
              />
              <input
                name="password"
                placeholder="Contraseña"
                className="outline-none p-2 text-[15px]"
                onChange={HandleChange}
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <button className="border p-1  bg-blue-700 w-full sm:w-[17vw] text-white text-[15px]">
                Ingresar
              </button>
              <a className="text-[13px] text-[#919191] hover:text-blue-700 cursor-pointer hover:underline ">
                Olvidaste tu contraseña?
              </a>
              <h1 className="text-center text-[14px] text-[#919191]">
                ©2019 Derechos Reservados. Ricardo Calderon Ingenieros!
              </h1>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
