import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Actions } from "./Actions";
import { CardPresentationIncidents } from "./CardPresentationIncidents";
import { DataGrid, esES } from "@mui/x-data-grid";
import { RootState } from "@/libs/redux/store/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { CustoomToolbarPresentation } from "./CustoomToolbarPresentation";
import { fetchIncidents } from "@/libs/redux/feature/Incidents.feature";

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
  const incidents = useSelector(
    (state: RootState) => state.incidents,
    shallowEqual
  );
  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>();

  const columns = [
    { headerName: "ID", field: "id_incidencias" },
    { headerName: "Codigo", field: "codigo_incidencia", width: 98 },
    { headerName: "Empresa", field: "nombre_empresa", width: 140 },
    { headerName: "Sucursal", field: "sucursal", width: 120 },
    { headerName: "Contacto", field: "nombre_contacto" },
    { headerName: "Registrada", field: "fecha_informe" },
    { headerName: "Tecnico", field: "tecnico", width: 160 },
    { headerName: "Estacion", field: "tipo_estacion", width: 67 },
    { headerName: "Atencion", field: "tipo_incidencia", width: 120 },
    { headerName: "Informe", field: "informe", width: 280 },
    {
      headerName: "Estado",
      field: "state",
      width: 120,
      renderCell: (params: any) => {
        return (
          <>{params.row.estado_informe === 2 ? <Proceso /> : <Asignada />}</>
        );
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

  const rows = incidents?.show_incidents;

  useEffect(() => {
    dispatch(fetchIncidents());
  }, []);

  return (
    <CardPresentationIncidents>
      <div className="col-span-full h-full bg-white" style={{ height: "70vh" }}>
        <DataGrid
          loading={incidents?.load}
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id_incidencia}
          density="compact"
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          initialState={{
            columns: {
              columnVisibilityModel: {
                id_incidencias: false,
              },
            },
          }}
          getRowHeight={() => "auto"}
          slots={{
            toolbar: CustoomToolbarPresentation,
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
