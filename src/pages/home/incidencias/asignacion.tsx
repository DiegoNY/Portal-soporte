import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { AssignmentInformation } from "@/components/incidencias/asignacion/AssignmentInformation";
import { ButtonSaveAssignment } from "@/components/incidencias/asignacion/ButtonSaveAssignment";
import { CardAsignacion } from "@/components/incidencias/asignacion/CardAsignacion";
import { Comment } from "@/components/incidencias/asignacion/Comment";
import { HeaderInformationAssignment } from "@/components/incidencias/asignacion/HeaderInformationAssignment";
import { InputSelectAssignment } from "@/components/incidencias/asignacion/InputSelectAssignment";
import { TechnicalTable } from "@/components/incidencias/asignacion/TechnicalTable";
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
          </div>
          <div className="flex flex-col justify-start gap-2 bg-[#ffffff] border px-3 mt-0.5">
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
            <HeaderInformationAssignment />

            <article className="grid  col-span-2  py-1 px-2">
              <InputSelectAssignment
                name="tipo_soporte"
                nombre="Tipo de soporte"
              />
              <div className="w-">
                <Comment title="Personal" />
              </div>
              <TechnicalTable />
              <Comment />
            </article>
            <ButtonSaveAssignment />
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
