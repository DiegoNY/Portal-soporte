import { days, generateDate } from "@/utils/CalendarTS"
import { useState } from "react";
import dayjs from "dayjs";
import cn from "@/utils/cn";

export const CalendarUI = () => {
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);
    return (
        <>
            <div className="grid grid-cols-7 w-full  p-1 h-full border"     >
                <div className="flex justify-between col-span-7 px-6 items-center bg-slate-100">
                    <div>
                        move 
                    </div>
                    <div>
                        move 
                    </div>
                    <div>
                        move 
                    </div>
                </div>
                <div className="col-span-7 grid grid-cols-7 w-full  ">
                    {days.map(day => {
                        return (
                            <h1 className="grid place-content-center">
                                {day}
                            </h1>
                        )
                    })}
                </div>
                {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
                    return (
                        <div
                            key={index}
                            className="grid place-content-center border-t"
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

        </>

    )
}
