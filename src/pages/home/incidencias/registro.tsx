import { AddIncidents } from "@/components/incidencias/registro/AddIncidents";
import { Button } from "@/components/incidencias/registro/Button";
import CardRegistroIncidencias from "@/components/incidencias/registro/CardRegistro";
import { InformationRegister } from "@/components/incidencias/registro/InformationRegister/InformationRegister";
import { PresentationIncidents } from "@/components/incidencias/registro/presentation_incidents/PresentationIncidents";
import { RootState } from "@/libs/redux/store/store";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const Registro = () => {
  const incidents = useSelector((state: RootState) => state.incidents);

  return (
    <>
      {/* {incidents.incident_record ? (
        <AddIncidents />
      ) : null} */}

      {incidents.incident_record &&
        createPortal(<AddIncidents />, document.body)}
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
    </>
  );
};

export default Registro;
