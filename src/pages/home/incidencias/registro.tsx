import { AddIncidents } from "@/components/incidencias/registro/AddIncidents";
import CardRegistroIncidencias from "@/components/incidencias/registro/CardRegistro";
import { InformationRegister } from "@/components/incidencias/registro/InformationRegister/InformationRegister";
import { PresentationIncidents } from "@/components/incidencias/registro/presentation_incidents/PresentationIncidents";
import { RootState } from "@/libs/redux/store/store";
import { useSelector } from "react-redux";

const Registro = () => {
  const incidents = useSelector((state: RootState) => state.incidents);

  return (
    <CardRegistroIncidencias>
      {incidents.incident_record ? (
        <>
          <AddIncidents />
        </>
      ) : (
        <>
          <InformationRegister />
          <PresentationIncidents />
        </>
      )}
    </CardRegistroIncidencias>
  );
};

export default Registro;
