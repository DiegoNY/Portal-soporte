import { RootState } from "@/libs/redux/store/store";
import React from "react";
import { useSelector } from "react-redux";
import { CardPresentationIncidents } from "../incidencias/registro/presentation_incidents/CardPresentationIncidents";
import { DataGrid, esES } from "@mui/x-data-grid";
import { CustomToolbar } from "../DataGrid/CustomToolbar";
import { ActionsTechnicalVisit } from "./ActionsTechnicalVisit";

export const TechnicalVisitPresentation = () => {
  const incidents = useSelector((state: RootState) => state.incidents_resolve);
  const columns = [
    { headerName: "#", field: "id", flex: 1 },
    { headerName: "N° Orden", field: "order_number", flex: 1 },
    { headerName: "Fecha Servicio", field: "service_date", flex: 1 },
    { headerName: "Tecnico", field: "technician", flex: 1 },
    { headerName: "Empresa", field: "company", flex: 1 },
    { headerName: "Sucursal", field: "branch", flex: 1 },
    { headerName: "Iniciada", field: "started", flex: 1 },
    { headerName: "Terminada", field: "finish", flex: 1 },
    {
      headerName: "Acciones",
      field: "actions",
      flex: 1,
      renderCell: (params: any) => {
        return <ActionsTechnicalVisit />;
      },
    },
  ];

  const rows = incidents.incidents;
  return (
    <CardPresentationIncidents title="Visitas Tecnicas Registradas">
      <div className="col-span-full h-full bg-white ">
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id}
          density="compact"
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: true,
              },
            },
          }}
          getRowHeight={() => "auto"}
          slots={{
            toolbar: CustomToolbar,
          }}
          sx={{
            "& .MuiDataGrid-cell": {
              fontSize: "13px",
              padding: "0.2rem",
              textAlign: "center",
            },
            "& .MuiDataGrid-columnHeaders": {
              textAlign: "center",
            },
          }}
        />
        <br />
        <br />
      </div>
    </CardPresentationIncidents>
  );
};
