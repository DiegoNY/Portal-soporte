import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import CardRegistroIncidencias from "@/components/incidencias/registro/CardRegistro";
import { CardHeader } from "@/components/incidencias/resueltas/CardHeader";
import { Filter } from "@/components/incidencias/resueltas/filter/Filter";
import { PresentationIncidentsResolve } from "@/components/incidencias/resueltas/PresentationIncidentsResolve";
import { VerifyToken } from "@/helpers/auth";
import { GetServerSideProps } from "next";

const Resueltas = ({ user }: any) => {
  return (
    <LayoutPrincipal user={user}>
      <CardRegistroIncidencias>
        <CardHeader />
        <Filter />
        <PresentationIncidentsResolve />
      </CardRegistroIncidencias>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </LayoutPrincipal>
  );
};
export default Resueltas;

export const getServerSideProps: GetServerSideProps = async (req) => {
  const { token } = req.req.cookies;
  const user_info = await VerifyToken(token);
  const user = user_info?.payload;
  return {
    props: { user },
  };
};
