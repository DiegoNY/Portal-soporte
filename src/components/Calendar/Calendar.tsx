import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store/store";
import { useEffect, useState } from 'react';

export const CalendarUI = () => {
    const shift = useSelector((state: RootState) => state.shift, shallowEqual);
    const [events, setEvents] = useState(shift.events)

    useEffect(() => {
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
                selectOverlap={false} // deshabilita la superposición de eventos en las fechas seleccionadas
                select={(e) => {
                    console.log(e.start)
                    console.log(e.end)
                }}


            />



        </>

    )
}


