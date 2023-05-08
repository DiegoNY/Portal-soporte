import { configureStore } from "@reduxjs/toolkit";
import NavigationReducer from "../feature/NavigationSlice.feature";
import turnoReducer from "../feature/TurnoSlice.feature";
import incidentsReducer from "../feature/Incidents.feature";
import userReducer from "../feature/UserSlice.feature";

const store = configureStore({
  reducer: {
    navigation: NavigationReducer,
    shift: turnoReducer,
    incidents: incidentsReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
