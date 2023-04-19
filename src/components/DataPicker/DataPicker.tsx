import { days, generateDate, months } from "@/utils/CalendarTS"
import dayjs from "dayjs";
import cn from "@/utils/cn"
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween);

export const DataPicker = ({ firstDay, lastDate }: { firstDay: string, lastDate: string }): { component: React.ReactNode, daySelect: { firstDay?: string | boolean, lastDate?: string } } => {
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);
    const [isFirsSelection, setFirsSelection] = useState(true);

    const [dateInfo, setDateInfo] = useState<{ firstDay?: string, lastDate?: string }>({
        firstDay: firstDay,
        lastDate: lastDate
    })

    return {
        component: (
            <div className="w-full grid grid-cols-7 border rounded-lg p-1">
                <div className="flex justify-between w-full p-1.5 text-[14px] col-span-7">
                    <h1 className="font-semibold">
                        {months[today.month()]} , {today.year()}
                    </h1>
                    <div className="flex items-center gap-5 cursor-pointer">
                        <GrFormPrevious
                            className="h-5 w-5"
                            onClick={() => {
                                setToday(today.month(today.month() - 1))
                            }}
                        />
                        <h1
                            className="font-semibold"
                            onClick={() => {
                                setToday(currentDate)
                            }}
                        >
                            Hoy
                        </h1>
                        <GrFormNext
                            className="h-5 w-5 cursor-pointer"
                            onClick={() => {
                                setToday(today.month(today.month() + 1))
                            }}
                        />
                    </div>
                </div>
                <div className="col-span-7 grid grid-cols-7 text-gray-500 cursor-context-menu ">
                    {days.map((day, index) => {
                        return (
                            <h1 key={index} className="h-[28px] text-[14px] w-full grid place-content-center">
                                {day}
                            </h1>
                        )
                    })}
                </div>
                {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
                    return (
                        <div key={index}
                            className={cn(
                                dateInfo.firstDay === date.toDate().toDateString() ? "bg-sky-200 rounded-l-lg text-blue-700" : "",
                                dateInfo.lastDate === date.toDate().toDateString() ? "bg-sky-200 rounded-r-lg text-blue-700" : "",
                                "h-[38px] text-[13px] border-t grid place-content-center"
                            )
                            }
                        >
                            <h1
                                className={cn(
                                    currentMonth ? "" : "text-gray-400",
                                    today ? "bg-sky-200 text-blue-700" : "",
                                    dayjs(date).isBetween(dayjs(dateInfo.firstDay), dayjs(dateInfo.lastDate)) ? "bg-sky-200 text-blue-700" : "",
                                    selectDate.toDate().toDateString() === date.toDate().toDateString() ? "bg-sky-100 text-blue-700" : "",
                                    "h-[24px] w-[24px]  grid place-content-center  rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                                )}
                                onClick={() => {
                                    setSelectDate(date)
                                    isFirsSelection ?
                                        (
                                            setFirsSelection(false),
                                            setDateInfo({ firstDay: date.toDate().toDateString() })
                                        )
                                        :
                                        (
                                            setFirsSelection(true),
                                            setDateInfo({ ...dateInfo, lastDate: date.toDate().toDateString() })
                                        )

                                }}
                            >{date.date()}</h1>
                        </div>
                    )
                }) }
            </div >
        ),
        daySelect: {
            firstDay: dayjs(dateInfo.firstDay).format('DD/MM/YYYY'),
            lastDate: dayjs(dateInfo.lastDate).format('DD/MM/YYYY'),
        }
    }
}
