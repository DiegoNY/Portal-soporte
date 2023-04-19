import { FormEvent, useState } from "react"
import { SelectForm } from "./SelectForm"
import { DataPicker } from "@/components/DataPicker/DataPicker";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ChangeSecondViewAction } from "@/libs/redux/feature/TurnoSlice.feature";
import { RootState } from "@/libs/redux/store/store";
import cn from "@/utils/cn";
import dayjs from "dayjs";


export const FormShift = () => {
    const turno = useSelector((state: RootState) => state.shift, shallowEqual);
    const dispatch = useDispatch();

    const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget)
        const values = Object.fromEntries(data.entries())

        console.log(values);

    }
    

    const { component, daySelect } = DataPicker({ firstDay: dayjs(new Date).toDate().toDateString(), lastDate: dayjs(new Date).toDate().toDateString() })

    return (
        <>
            {/* <h2 className="mb-2   text-[16px]">Personal</h2> */}
            <form onSubmit={HandleSubmit} className="flex flex-col gap-2 h-full">
                <SelectForm name_form="shift" name_input="Turno" >
                    {turno.second_view_action ? (
                        <option value={2}>
                            Turno semanal apoyo
                        </option>
                    ) : (
                        <option value={1}>
                            Turno semanal
                        </option>
                    )}
                </SelectForm>
                <SelectForm name_form="staff" name_input="Personal" >
                    <option>
                        Nombre personal
                    </option>
                    <option value={2} >Bryan Polo Gomez</option>
                </SelectForm>
                <input name="initial_date" value={""} hidden={true} />
                <h1 className="text-[15px] px-1 text-slate-500 mt-1">Fecha de inicio y Fin del Turno</h1>
                <div className="flex gap-8 px-1">
                    <h1>{daySelect.firstDay}</h1>
                    <h1>{daySelect.lastDate}</h1>
                </div>
                {component}

            </form>
            <div className={cn(
                turno.second_view_action ? "gap-2 justify-between" : "",
                " w-full flex justify-end p-2   items-center  "
            )}>
                <button
                    className="p-2 hover:bg-sky-200 rounded-lg hover:text-blue-700"
                    onClick={() => dispatch(ChangeSecondViewAction())}
                >
                    {turno.second_view_action ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M5 12l4 4"></path>
                            <path d="M5 12l4 -4"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                        </svg>
                    )}

                </button>
                {turno.second_view_action && (
                    <button className="bg-sky-200 p-2 rounded-lg text-blue-700 text-[14px] font-[500]">
                        Registrar turno
                    </button>
                )
                }
            </div >
        </>
    )
}
