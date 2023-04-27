import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { AddIncidents } from "@/components/incidencias/registro/AddIncidents";
import { Button } from "@/components/incidencias/registro/Button";
import CardRegistroIncidencias from "@/components/incidencias/registro/CardRegistro";
import { InformationRegister } from "@/components/incidencias/registro/InformationRegister/InformationRegister";
import { ViewDetailIncident } from "@/components/incidencias/registro/ViewDetailIncident/ViewDetailIncident";
import { PresentationIncidents } from "@/components/incidencias/registro/presentation_incidents/PresentationIncidents";
import { RootState } from "@/libs/redux/store/store";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const Registro = () => {
  const incidents = useSelector((state: RootState) => state.incidents);

  return (
    <LayoutPrincipal>
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
