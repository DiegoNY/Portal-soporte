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
  },
  reducers: {
    ChangeIssueView: (state) => {
      state.incident_record = !state.incident_record;
    },
  },
});

export const { ChangeIssueView } = Incidents.actions;

export default Incidents.reducer;
