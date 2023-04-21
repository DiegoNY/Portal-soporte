import { ChangeViewActionsShift, SeeTurn } from "@/libs/redux/feature/TurnoSlice.feature";
import { RootState } from "@/libs/redux/store/store";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export const ItemTurno = () => {
    const [viewEdit, setViewEdit] = useState(false);
    const dispatch = useDispatch();

    const editShift = () => {
        dispatch(ChangeViewActionsShift({
            shift: {
                id: 1,
                staff: 1,
                start_date: new Date('2023-03-02'),
                start_time: '00:00:00',
                end_date: new Date('2023-03-06'),
                end_time: '00:00:00',
                shift_type: 0,
                registration_date: new Date('2023-03-02'),
                year: '2023',
                month: '01',
                support_staff: 0,
                support_start_date: new Date('2023-03-08'),
                support_start_time: '00:00:00',
                support_end_date: new Date('2023-03-16'),
                support_end_time: '00:00:00',
            }
        }))
    }

    const SeeTurnUI = () => {
        dispatch(SeeTurn())
    }

    return (

        <div
            className=" bg-white mb-1 min-h-[46px] flex items-center text-[14px] justify-center font-[400] cursor-pointer "
            onMouseLeave={() => setViewEdit(false)}
            onMouseEnter={() => setViewEdit(true)}
        >
            <h1 className={viewEdit ? "hidden" : ""}>SEMANA DESDE 2023-01-30 AL 2023-02-06</h1>
            <div
                className={viewEdit ? " flex items-center justify-between  w-full" : "hidden"}

            >
                <div
                    className="text-green-900 rounded-lg hover:text-green-700 hover:bg-green-100 gap-1 bg-green-50 w-full flex items-center justify-center h-[46px]"
                    onClick={editShift}
                >
                    <h1 className="font-[500] " >
                        Editar
                    </h1>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2"></path>
                        </svg>
                    </span>
                </div>
                <div
                    className="text-blue-900 hover:text-blue-600 gap-1 bg-sky-50 rounded-lg hover:bg-sky-100 w-full items-center flex justify-center h-[46px]"
                    onClick={SeeTurnUI}
                >
                    <h1 className="font-[500] " >
                        Ver
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M12 21l0 .01"></path>
                        <path d="M3 9l0 .01"></path>
                        <path d="M21 9l0 .01"></path>
                        <path d="M8 20.1a9 9 0 0 1 -5 -7.1"></path>
                        <path d="M16 20.1a9 9 0 0 0 5 -7.1"></path>
                        <path d="M6.2 5a9 9 0 0 1 11.4 0"></path>
                    </svg>
                </div>

            </div>
        </div>
    )
}
