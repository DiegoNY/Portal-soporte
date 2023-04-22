import { ChangeSelectShiftDateStaff } from '@/types/Shift.reducer.type';
import { Events, Shift } from '@/types/Shift.type';
import { createSlice, } from '@reduxjs/toolkit';

const shifts: Shift[] = []
const events: Events[] = [];

const ChangeSelectShiftDateStaff = (state: ChangeSelectShiftDateStaff, start_date: Date, end_date: Date) => {
    state.start_date = start_date;
    state.end_date = end_date;
    const index = state.events.findIndex(item => item.id == 1)
    if (index == -1) {
        state.events = [
            { title: "Turno principal", date: start_date.toISOString().substring(0, 10), end: end_date.toISOString().substring(0, 10), id: 1 },
            { title: "Turno apoyo", date: '', end: '', id: 2 }
        ]
    } else {
        state.events[index].date = start_date.toISOString().substring(0, 10);
        state.events[index].end = end_date.toISOString().substring(0, 10);
    }
}
const ChangeSelectShiftDateSupportStaff = (state: ChangeSelectShiftDateStaff, start_date: Date, end_date: Date) => {
    state.support_start_date = start_date;
    state.support_end_date = end_date;
    const index = state.events.findIndex(item => item.id == 2)
    if (index == -1) {
        state.events = [
            { title: "Turno principal", date: '', end: '', id: 1 },
            { title: "Turno apoyo", date: start_date.toISOString().substring(0, 10), end: end_date.toISOString().substring(0, 10), id: 2 }
        ]
    } else {
        state.events[index].date = start_date.toISOString().substring(0, 10);
        state.events[index].end = end_date.toISOString().substring(0, 10);
    }
}

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
        see_turn: false,
        shifts: shifts,
        error: false,
        load: false,
        firstDay: new Date(),
        lastDate: new Date(),
        events: events
    },
    reducers: {

        ChangeViewActionsShift: (state, actions: { type?: string, payload: { shift?: Shift } }) => {

            const { shift }: { shift?: Shift } = actions.payload;
            state.view_actions_shift = !state.view_actions_shift;
            state.second_view_action = false;
            // console.log(shift);
            if (shift) {
                shift.id = state.id;
                shift.staff = state.staff;
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

                state.events = [
                    { title: "Turno principal", date: '2023-04-23', end: '2023-04-30', id: 1 },
                    { title: "Turno apoyo", date: '2023-04-27', end: '2023-05-07', id: 2 }
                ]
            } else {
                state.id = 0
                state.staff = 0
                state.start_date = new Date()
                state.start_time = '00:00:00'
                state.end_date = new Date()
                state.end_time = '00:00:00'
                state.shift_type = 0
                state.registration_date = new Date()
                state.year = '2023'
                state.month = '01'
                state.support_staff = 0
                state.support_start_date = new Date()
                state.support_start_time = '00:00:00'
                state.support_end_date = new Date()
                state.support_end_time = '00:00:00'
                state.firstDay = new Date()
                state.lastDate = new Date()
                state.events = []
            }
        },
        ChangeSecondViewAction: state => {
            state.second_view_action = !state.second_view_action;

            /**True is Suport Info  */

            if (state.second_view_action == true) {
                state.firstDay = state.support_start_date;
                state.lastDate = state.support_end_date;
            } else {
                state.firstDay = state.start_date;
                state.lastDate = state.end_date;
            }
        },
        SeeTurn: (state, actions) => {
            const { support_end_date, support_start_date, start_date, end_date }: {
                support_start_date: string,
                support_end_date: string,
                start_date: string,
                end_date: string,
            } = actions.payload;

            state.see_turn = !state.see_turn;

            state.events = [
                { title: "Turno principal", date: start_date, end: end_date, id: 1 },
                { title: "Turno apoyo", date: support_start_date, end: support_end_date, id: 2 }
            ]

        },
        ChangeShiftInformation: (state, actions: { payload: { name: keyof Shift | string, value: string | Date | number }, type: string }) => {
            const { name, value } = actions.payload;

            switch (name) {
                case 'end_date':
                    state[name] = new Date(value);
                    state.lastDate = new Date(value);
                    break;
                case 'id':
                    state[name] = Number(value);
                    break;
                case 'registration_date':
                    state[name] = new Date(value);
                    break;
                case 'start_time':
                    state[name] = value.toString();
                    break;
                case 'end_time':
                    state[name] = value.toString();
                    break;
                case 'month':
                    state[name] = value.toString();
                    break;
                case 'shift_type':
                    state[name] = Number(value);
                    break;
                case 'staff':
                    state[name] = Number(value);
                    break;
                case 'start_date':
                    state[name] = new Date(value);
                    state.firstDay = new Date(value);
                    break;
                case 'support_end_date':
                    state[name] = new Date(value);
                    state.lastDate = new Date(value);

                    break;
                case 'support_end_time':
                    state[name] = value.toString();
                    break;
                case 'support_staff':
                    state[name] = Number(value);
                    break;
                case 'support_start_date':
                    state[name] = new Date(value);
                    state.firstDay = new Date(value);

                    break;
                case 'support_start_time':
                    state[name] = value.toString();
                    break;
                case 'year':
                    state[name] = value.toString();
                    break;
                default:
                    break;
            }
        },
        SelectShiftDates: (state, action: { payload: { start_date: Date, end_date: Date }, type: string }) => {
            const { start_date, end_date } = action.payload;
            state.view_actions_shift = true;

            if (state.second_view_action == true) {
                ChangeSelectShiftDateSupportStaff(state, start_date, end_date)
            } else {
                ChangeSelectShiftDateStaff(state, start_date, end_date);
            }
            state.lastDate = end_date;
            state.firstDay = start_date;
        }
    }
});

export const { ChangeViewActionsShift, ChangeSecondViewAction, SeeTurn, ChangeShiftInformation, SelectShiftDates } = turnoSlice.actions;

export default turnoSlice.reducer
