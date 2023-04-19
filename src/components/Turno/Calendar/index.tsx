import { CalendarUI } from "@/components/Calendar/Calendar"

export const Calendar = () => {
    return (
        <section className="p-10 hidden bg-slate-100 w-auto lg:col-span-4 md:flex">
            <CalendarUI/>
        </section>
    )
}
