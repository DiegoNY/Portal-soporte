import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import CardRegistroIncidencias from "@/components/incidencias/registro/CardRegistro";
import { Filter } from "@/components/incidencias/resueltas/filter/Filter";
import { VerifyToken } from "@/helpers/auth";
import { GetServerSideProps } from "next";
import { InfoHeader } from "@/components/visita_tecnica/InfoHeader";
import { TechnicalVisitPresentation } from "@/components/visita_tecnica/TechnicalVisitPresentation";

const VisitaTecnica = ({ user }: any) => {
  return (
    <LayoutPrincipal user={user}>
      <CardRegistroIncidencias>
        <InfoHeader />
        <Filter />
        <TechnicalVisitPresentation />
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
export default VisitaTecnica;

export const getServerSideProps: GetServerSideProps = async (req) => {
  const { token } = req.req.cookies;
  const user_info = await VerifyToken(token);
  const user = user_info?.payload;
  return {
    props: { user },
  };
};
