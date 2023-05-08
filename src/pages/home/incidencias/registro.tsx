import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { AddIncidents } from "@/components/incidencias/registro/AddIncidents";
import { Button } from "@/components/incidencias/registro/Button";
import CardRegistroIncidencias from "@/components/incidencias/registro/CardRegistro";
import { InformationRegister } from "@/components/incidencias/registro/InformationRegister/InformationRegister";
import { ViewDetailIncident } from "@/components/incidencias/registro/ViewDetailIncident/ViewDetailIncident";
import { PresentationIncidents } from "@/components/incidencias/registro/presentation_incidents/PresentationIncidents";
import { VerifyToken } from "@/helpers/auth";
import { RootState } from "@/libs/redux/store/store";
import { GetServerSideProps } from "next";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const Registro = ({ user }: any) => {
  const incidents = useSelector((state: RootState) => state.incidents);

  return (
    <LayoutPrincipal user={user}>
      {/* {incidents.incident_record ? (
        <AddIncidents />
      ) : null} */}

      {incidents.incident_record &&
        createPortal(<AddIncidents />, document.body)}
      {incidents.view_detail &&
        createPortal(<ViewDetailIncident />, document.body)}
      <CardRegistroIncidencias>
        <InformationRegister />
        <PresentationIncidents />
      </CardRegistroIncidencias>
      <Button />
      <br />
      <br />
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
