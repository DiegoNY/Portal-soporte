export type Shift = {
    id: number;
    staff: number;
    start_date: Date;
    start_time: string;
    end_date: Date;
    end_time: string;
    shift_type: number;
    registration_date: Date;
    year: string;
    month: string;
    support_staff: number;
    support_start_date: Date;
    support_start_time: string;
    support_end_date: Date;
    support_end_time: string;
}

export type ShiftChange = {
    id?: number;
    staff?: number;
    start_date?: Date;
    start_time?: string;
    end_date?: Date;
    end_time?: string;
    shift_type?: number;
    registration_date?: Date;
    year?: string;
    month?: string;
    support_staff?: number;
    support_start_date?: Date;
    support_start_time?: string;
    support_end_date?: Date;
    support_end_time?: string;
}

export type Events = {
    title: string
    date: string
    end: string
} 
