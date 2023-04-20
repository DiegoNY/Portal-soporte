import { CalendarUI } from "@/components/Calendar/Calendar"

export const Calendar = () => {
    return (
        <section className="px-2 hidden bg-slate-100 w-auto lg:col-span-4 md:flex flex-col ">
            <CalendarUI/>
            <br />
        </section>
    )
}
