import React from "react";
import { CardPresentationIncidents } from "../registro/presentation_incidents/CardPresentationIncidents";
import { DataGrid, esES } from "@mui/x-data-grid";
import { CustomToolbar } from "@/components/DataGrid/CustomToolbar";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store/store";
import { Actions } from "../registro/presentation_incidents/Actions";
import { ActionsIncidentsResolve } from "./ActionsIncidentsResolve";

export const PresentationIncidentsResolve = () => {
  const incidents = useSelector((state: RootState) => state.incidents_resolve);
  const columns = [
    { headerName: "#", field: "id", width: 40 },
    { headerName: "Tipo Orden", field: "order_type" },
    { headerName: "N° Orden", field: "order_number", width: 120 },
    { headerName: "Tecnico", field: "technician" },
    { headerName: "Fecha Servicio", field: "service_date" },
    { headerName: "Empresa", field: "company" },
    { headerName: "Sucursal", field: "branch" },
    { headerName: "Informe", field: "report", width: 110 },
    { headerName: "Iniciada", field: "started", width: 110 },
    { headerName: "Terminada", field: "finish", width: 120 },
    {
      headerName: "Acciones",
      field: "actions",
      width: 80,
      renderCell: (params: any) => {
        return <ActionsIncidentsResolve />;
      },
    },
  ];

  const rows = incidents.incidents;
  return (
    <CardPresentationIncidents>
      <div className="col-span-full h-full bg-white" style={{ height: "70vh" }}>
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
