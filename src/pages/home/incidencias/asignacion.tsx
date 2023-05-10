import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { AssignmentInformation } from "@/components/incidencias/asignacion/AssignmentInformation";
import { CardAsignacion } from "@/components/incidencias/asignacion/CardAsignacion";
import { VerifyToken } from "@/helpers/auth";
import { GetServerSideProps } from "next";
import { Router, useRouter } from "next/router";

const Registro = ({ user }: any) => {
  const route = useRouter();
  const { query } = route;
  const BackToMainPanel = () => {
    route.push("/home/incidencias/registro");
  };

  return (
    <LayoutPrincipal user={user}>
      <CardAsignacion>
        <section className=" col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-full ">
          <div className="flex flex-col w-[77vw] justify-start gap-2 mt-3 mb-1">
            <div>
              <button
                className=" text-[14px] flex p-2 items-center justify-center gap-1 rounded-xl border bg-[#007bff] text-white"
                onClick={BackToMainPanel}
              >
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
                  <path d="M5 12l14 0"></path>
                  <path d="M5 12l6 6"></path>
                  <path d="M5 12l6 -6"></path>
                </svg>
                Volver al panel principal
              </button>
            </div>
            <h1 className="text-[16px] font-[400] text-[#313131]">
              Asignar Personal Incidencia {query.Incidencia}
            </h1>
          </div>
          <div className="flex flex-col w-[94vw] sm:w-[80vw] justify-start gap-2 bg-[#ffffff] border px-3 mt-0.5">
            <div className="py-2 flex gap-1 text-[15px]">
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
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M4 9h6l1 -2l2 4l1 -2h6"></path>
                <path d="M4 14h16"></path>
                <path d="M14 17v.01"></path>
                <path d="M17 17v.01"></path>
              </svg>{" "}
              <h1 className="font-[500]">
                Incidencia Informada 2023-05-08 13:58:46
              </h1>
            </div>
            <article className="flex flex-col sm:flex-row">
              <div>
                <div className="text-[14px] w-[80px] flex justify-between">
                  <p className=" py-0.5 rounded-lg">Informado</p>
                </div>{" "}
                <AssignmentInformation
                  name="Empresa"
                  information="20127765279 - COESTI S.A."
                />
                <AssignmentInformation
                  name="Sucursal"
                  information="E/S TOMAS VALLE"
                />
                <AssignmentInformation
                  name="Contacto"
                  information="DINA ROSSMERY MURIEL TAPIA - (Jefe de Playa)"
                />
                <AssignmentInformation name="Telefono" information="" />
                <AssignmentInformation name="Correo" information="" />
              </div>
              <div>
                <div className="p-2.5 hidden sm:flex"></div>
                <AssignmentInformation name="Problema" information="12344152" />
              </div>
            </article>
            <article className="grid  col-span-2  py-1 px-2">
              <div className="flex flex-col sm:flex-row gap-2  rounded-sm sm:items-center py-1 ">
                <h1 className="text-[14px] font-[400] leading-[20px] w-[80px]">
                  Tipo soporte
                </h1>
                <select className="border sm:w-64 p-2 outline-none text-[14px] border-[#71717171]">
                  <option>SELECCIONE</option>
                  <option>SOPO</option>
                  <option>SOPORT</option>
                  <option>SOPRO</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row gap-2  rounded-sm sm:items-center py-1 ">
                <h1 className="text-[14px] font-[400] leading-[20px] w-[80px] ">
                  Personal
                </h1>
                <input className="border sm:w-64 p-2 text-[14px]  border-[#71717171]" />
              </div>
              <div className="w-full text-[14px] p-2">
                <div className="grid grid-cols-3 border-y p-3 font-[500]">
                  <h1>Identificación</h1>
                  <h1>Nombres y Apellidos</h1>
                  <div className=" flex justify-center">
                    <h1>Eliminar</h1>
                  </div>
                </div>
                <div className="grid grid-cols-3 p-3 font-[400] bg-slate-200">
                  <h1>76517283</h1>
                  <h1 className="w-full"> JHONATAN MARTIN PECHO COAGUILA</h1>
                  <div className=" flex justify-center">
                    <h1>
                      <span className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="#B91C1C"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M4 7l16 0"></path>
                          <path d="M10 11l0 6"></path>
                          <path d="M14 11l0 6"></path>
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                        </svg>
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <h1 className="text-[15px] font-[400]">Comentario</h1>
                <textarea className="border  border-[#71717171] p-2 resize-none"></textarea>
              </div>
            </article>
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
            <br />
          </div>
        </section>
      </CardAsignacion>
      <br />
      <br />
      <br />
      <br />
      <br />
    </LayoutPrincipal>
  );
};

export default Registro;

export const getServerSideProps: GetServerSideProps = async (req) => {
  const { token } = req.req.cookies;
  const user_info = await VerifyToken(token);
  const user = user_info?.payload;
  return {
    props: { user },
  };
};
