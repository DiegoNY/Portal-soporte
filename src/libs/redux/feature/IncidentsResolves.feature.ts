import { createSlice } from "@reduxjs/toolkit";
import incidentsResolve from "../../../test/mock/incidentsResolve.json";
export const IncidentsResolves = createSlice({
  name: "incidents_resolve",
  initialState: {
    incidents: incidentsResolve,
    company: "",
    branch: 0,
    started: "",
    finished: "",
    view_detail_incidents: false,
    load: false,
    error: false,
  },
  reducers: {
    ChangeViewDetailIncidents: (state) => {
      state.view_detail_incidents = !state.view_detail_incidents;
    },
  },
});

export const { ChangeViewDetailIncidents } = IncidentsResolves.actions;

export default IncidentsResolves.reducer;
