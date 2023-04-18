import { Shift } from '@/types/Shift.type';
import { createSlice } from '@reduxjs/toolkit';

export const turnoSlice = createSlice({
    name: 'navigation',
    initialState: {
        shift: {},
        view_edit_shift: false,

    },
    reducers: {

        ChangeViewEditShift: (state, actions: { type?: string, payload: { shift?: Shift } }) => {

            const { shift }: { shift?: Shift } = actions.payload;
            state.view_edit_shift = !state.view_edit_shift;
            // console.log(shift);
            if (shift) {
                state.shift = shift
            }
        }
    }
});

export const { ChangeViewEditShift } = turnoSlice.actions;

export default turnoSlice.reducer
