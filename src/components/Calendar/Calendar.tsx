import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store/store";
import { useEffect, useState } from 'react';
import { SelectShiftDates } from "@/libs/redux/feature/TurnoSlice.feature";

export const CalendarUI = () => {
    const shift = useSelector((state: RootState) => state.shift, shallowEqual);
    const [events, setEvents] = useState(shift.events)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(shift)
        setEvents(shift.events);
    }, [shift.events])

    return (
        <>
            <FullCalendar
                height='100%'
                plugins={
                    [
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin,
                    ]
                }

                headerToolbar={
                    {
                        left: "prev,next today",
                        center: "title",
                        end: ""
                    }
                }
                allDayClassNames={"red"}
                events={events}
                locale={esLocale}
                selectable={true} // habilita la selección de fechas
                select={(e) => {
                    dispatch(SelectShiftDates({ start_date: new Date(e.start), end_date: new Date(e.end) }))
                }}

            />



        </>

    )
}


