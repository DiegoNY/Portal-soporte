import { configureStore } from "@reduxjs/toolkit";
import NavigationReducer from "../feature/NavigationSlice.feature";
import turnoReducer from "../feature/TurnoSlice.feature";
import incidentsReducer from "../feature/Incidents.feature";
import userReducer from "../feature/UserSlice.feature";
import incidentsResolveReducer from "../feature/IncidentsResolves.feature";
import serviceOrderReducer from "../feature/ServiceOrder";
import technicalVisitsReducer from "../feature/TechnicalVisits.feature";
const store = configureStore({
  reducer: {
    navigation: NavigationReducer,
    shift: turnoReducer,
    incidents: incidentsReducer,
    user: userReducer,
    incidents_resolve: incidentsResolveReducer,
    service_order: serviceOrderReducer,
    technical_visits_reducer: technicalVisitsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
