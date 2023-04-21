import { ChangeViewActionsShift } from "@/libs/redux/feature/TurnoSlice.feature";
import { useDispatch } from "react-redux";

export const CardSearchTurno = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();

    return (
        <section className=" w-[400px] lg:w-[23rem] mx-2 col-span-2 p-2 ">
            <div className="w-full flex gap-2">
                <div className='w-full bg-slate-200 p-2 rounded-md flex gap-2 items-center '>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                            <path d="M21 21l-6 -6"></path>
                        </svg>
                    </span>
                    <input
                        className='outline-none bg-inherit w-full'
                        placeholder='Fecha - Descripcion - Nombre'
                    />
                </div>
                <button
                    className="text-[14px] px-2 text-center bg-white hover:bg-sky-100 hover:text-blue-700 hover:font-[500] rounded-lg p-1 items-center flex  "
                    onClick={() => dispatch(ChangeViewActionsShift({}))}
                >
                    Nuevo
                </button>
            </div>

            <div className="mt-2 bg-slate-200 h-[80vh] md:h-[100vh] lg:h-[80vh] overflow-y-scroll ">
                {children}
            </div>
        </section>
    )
}
