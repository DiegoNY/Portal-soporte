import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store/store";
import React, { useEffect, useState } from 'react';
import { SelectShiftDates } from "@/libs/redux/feature/TurnoSlice.feature";
const CalendarUI = () => {
    const shift = useSelector((state: RootState) => state.shift, shallowEqual);
    const [events, setEvents] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(shift)
        const event_custom: any = []
        shift.events.map(event => {
            event_custom.push({
                title: event.title,
                date: event.date,
                end: event.end
            })
        })
        setEvents(event_custom);
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
                        start: "prev",
                        center: "title",
                        end: "next"
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

export default React.memo(CalendarUI)