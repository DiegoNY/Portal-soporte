import { createSlice } from '@reduxjs/toolkit';

export const turnoSlice = createSlice({
    name: 'navigation',
    initialState: {
        turno: false
    },
    reducers: {
        EditTurno: (state, actions) => {
            state.turno = actions.payload;
        },

    }
});

export const { EditTurno } = turnoSlice.actions;

export default turnoSlice.reducer
