import { configureStore } from "@reduxjs/toolkit";
import NavigationReducer from "../feature/NavigationSlice.feature";
import turnoReducer from "../feature/TurnoSlice.feature";
const store = configureStore({
    reducer: {
        navigation: NavigationReducer,
        shift: turnoReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

