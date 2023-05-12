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
    load: false,
    error: false,
  },
  reducers: {},
});

export const {} = IncidentsResolves.actions;

export default IncidentsResolves.reducer;
