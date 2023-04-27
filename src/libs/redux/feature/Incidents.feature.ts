import { createSlice } from "@reduxjs/toolkit";

export const Incidents = createSlice({
  name: "navigation",
  initialState: {
    incident_record: false,
    incidents: [
      {
        id: 1,
        code: "23-231414",
        company: "COESTI S.A.",
        branch: "E/S ORRANTIA",
        contact: "admin",
        registered: "2023-04-24 11:08:47",
        technical: "OMAR FORTUNATO SAENZ QUISPE",
        season: "GNV",
        attention: "PRESENCIAL",
        report:
          "	PROBLEMA DE LECTURA -> VALIDACION FUENTE DE DISPOSITIVO LECTURA",
        state: 2,
      },
      {
        id: 2,
        code: "23-231414",
        company: "COESTI S.A.",
        branch: "E/S ORRANTIA",
        contact: "admin",
        registered: "2023-04-24 11:08:47",
        technical: "OMAR FORTUNATO SAENZ QUISPE",
        season: "GNV",
        attention: "PRESENCIAL",
        report:
          "	PROBLEMA DE LECTURA -> VALIDACION FUENTE DE DISPOSITIVO LECTURA",
        state: 1,
      },
    ],
    company: "",
    business_name: "",
    branch: 0,
    contact_name: "",
    dni: 0,
    post: 0,
    phone: 0,
    mail: "",
    station_type: 0,
    priority: 0,
    level: 0,
    category: 0,
    subcategory: 0,
    date: "",
    hour: "",
    view_detail: false,
    data_detail: {},
  },
  reducers: {
    ChangeIssueView: (state) => {
      state.incident_record = !state.incident_record;
    },
    ChangeViewDetail: (state, action) => {
      const { data } = action.payload;
      if (state.view_detail == false) {
        state.view_detail = true;
        state.data_detail = data;
      } else {
        state.view_detail = false;
      }
    },
  },
});

export const { ChangeIssueView, ChangeViewDetail } = Incidents.actions;

export default Incidents.reducer;
