import React from "react";
import { CardPresentationIncidents } from "../registro/presentation_incidents/CardPresentationIncidents";
import { DataGrid, esES } from "@mui/x-data-grid";
import { CustomToolbar } from "@/components/DataGrid/CustomToolbar";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store/store";
import { Actions } from "../registro/presentation_incidents/Actions";

export const PresentationIncidentsResolve = () => {
  const incidents = useSelector((state: RootState) => state.incidents);
  const columns = [
    { headerName: "ID", field: "id" },
    { headerName: "#", field: "code", width: 60 },
    { headerName: "Tipo Orden", field: "company", width: 98 },
    { headerName: "N° Orden", field: "branch", width: 120 },
    { headerName: "Tecnico", field: "contact" },
    { headerName: "Fecha Servicio", field: "registered" },
    { headerName: "Empresa", field: "technical", width: 160 },
    { headerName: "Sucursal", field: "season", width: 67 },
    { headerName: "Informe", field: "attention", width: 120 },
    { headerName: "Iniciada", field: "report", width: 120 },
    {
      headerName: "Terminada",
      field: "state",
      width: 120,
    },
    {
      headerName: "Acciones",
      field: "actions",
      width: 110,
      renderCell: (params: any) => {
        return <Actions incidence_id={params.id} />;
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
                id: false,
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
