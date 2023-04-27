import { useSelector } from "react-redux";
import { Actions } from "./Actions";
import { CardPresentationIncidents } from "./CardPresentationIncidents";
import { DataGrid, esES, GridToolbar } from "@mui/x-data-grid";
import { RootState } from "@/libs/redux/store/store";
import { CustomToolbar } from "@/components/DataGrid/CustomToolbar";

const Proceso = () => {
  return (
    <div className="rounded-full flex items-center cursor-context-menu text-[13px] w-full border px-1 border-[#EE791A] text-[#EE791A]">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
          <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
        </svg>
      </span>
      <p> en proceso</p>
    </div>
  );
};

const Asignada = () => {
  return (
    <div className="rounded-full flex items-center cursor-context-menu  border px-1 border-blue-700 text-blue-500 gap-0.5">
      <span className="bg-[]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z"></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        </svg>
      </span>
      <p> Asignada</p>
    </div>
  );
};

export const PresentationIncidents = () => {
  const incidents = useSelector((state: RootState) => state.incidents);
  const columns = [
    { headerName: "ID", field: "id" },
    { headerName: "Codigo", field: "code", width: 98 },
    { headerName: "Empresa", field: "company", width: 140 },
    { headerName: "Sucursal", field: "branch", width: 120 },
    { headerName: "Contacto", field: "contact" },
    { headerName: "Registrada", field: "registered" },
    { headerName: "Tecnico", field: "technical", width: 160 },
    { headerName: "Estacion", field: "season", width: 67 },
    { headerName: "Atencion", field: "attention", width: 120 },
    { headerName: "Informe", field: "report", width: 280 },
    {
      headerName: "Estado",
      field: "state",
      width: 120,
      renderCell: (params: any) => {
        return <>{params.row.state === 1 ? <Asignada /> : <Proceso />}</>;
      },
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
