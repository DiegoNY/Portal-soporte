import { Shift } from '@/types/Shift.type';
import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';


const shifts: Shift[] = []

export const turnoSlice = createSlice({
    name: 'navigation',
    initialState: {
        id: 0,
        staff: 0,
        start_date: new Date(),
        start_time: '00:00:00',
        end_date: new Date(),
        end_time: '00:00:00',
        shift_type: 0,
        registration_date: new Date(),
        year: '2023',
        month: '01',
        support_staff: 0,
        support_start_date: new Date(),
        support_start_time: '00:00:00',
        support_end_date: new Date(),
        support_end_time: '00:00:00',
        view_actions_shift: false,
        second_view_action: false,
        shifts: shifts
    },
    reducers: {

        ChangeViewActionsShift: (state, actions: { type?: string, payload: { shift?: Shift } }) => {

            const { shift }: { shift?: Shift } = actions.payload;
            state.view_actions_shift = !state.view_actions_shift;
            state.second_view_action = false;
            // console.log(shift);
            if (shift) {
                console.log(shift);
                shift.id = shift.id;
                shift.staff = shift.staff;
                shift.start_date = state.start_date;
                shift.start_time = state.start_time;
                shift.end_date = state.end_date;
                shift.end_time = state.end_time;
                shift.shift_type = state.shift_type;
                shift.registration_date = state.registration_date;
                shift.year = state.year;
                shift.month = state.month;
                shift.support_staff = state.support_staff;
                shift.support_start_date = state.support_start_date;
                shift.support_start_time = state.support_start_time
                shift.support_end_date = state.support_end_date;
                shift.support_end_time = state.support_end_time;
            }
        },
        ChangeSecondViewAction: state => {
            state.second_view_action = !state.second_view_action;
        }
    }
});

export const { ChangeViewActionsShift, ChangeSecondViewAction } = turnoSlice.actions;

export default turnoSlice.reducer
