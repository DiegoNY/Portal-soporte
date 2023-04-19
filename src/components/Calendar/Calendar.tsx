import { generateDate } from "@/utils/CalendarTS"
import { useState } from "react";
import dayjs from "dayjs";
import cn from "@/utils/cn";

export const CalendarUI = () => {
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);
    return (
        <div className="grid grid-cols-7 w-full border p-1"     >
            {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
                return (
                    <div
                        key={index}
                    >
                        <h1
                            className={cn(
                                currentMonth ? "" : "text-gray-400",
                                today ? "bg-sky-200 text-blue-700" : "",
                                selectDate.toDate().toDateString() === date.toDate().toDateString() ? "bg-sky-100 text-blue-700" : "",
                                "h-[24px] w-[24px]  grid place-content-center  rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                            )}
                        >{date.date()}</h1>
                    </div>
                )
            })}

        </div>
    )
}
