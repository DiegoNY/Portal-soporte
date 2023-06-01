import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import CardRegistroIncidencias from "@/components/incidencias/registro/CardRegistro";
import { CardHeader } from "@/components/incidencias/resueltas/CardHeader";
import { Filter } from "@/components/incidencias/resueltas/filter/Filter";
import { PresentationIncidentsResolve } from "@/components/incidencias/resueltas/PresentationIncidentsResolve";
import { VerifyToken } from "@/helpers/auth";
import { GetServerSideProps } from "next";
import { DetailOfResolvedIncidents } from "@/components/incidencias/resueltas/detalle/DetailOfResolvedIncidents";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store/store";
import { createPortal } from "react-dom";

const Resueltas = ({ user }: any) => {
  const { view_detail_incidents } = useSelector(
    (state: RootState) => state.incidents_resolve
  );
  return (
    <LayoutPrincipal user={user}>
      <CardRegistroIncidencias>
        <CardHeader />
        <Filter />
        <PresentationIncidentsResolve />
      </CardRegistroIncidencias>
      {view_detail_incidents
        ? createPortal(<DetailOfResolvedIncidents />, document.body)
        : ""}
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
