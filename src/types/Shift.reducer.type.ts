import { Events, Shift } from "./Shift.type";

export interface ChangeSelectShiftDateStaff extends Shift {
    events: Events[]
}