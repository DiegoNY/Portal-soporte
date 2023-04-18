import { InputForm } from "./InputForm"

export const Form = () => {
    
    return (
        <>
            {/* <h2 className="mb-2   text-[16px]">Personal</h2> */}
            <form className="flex flex-col gap-2">
                <div className="gap-1 flex flex-col w-full">
                    <label className="text-slate-400 text-[14px]">
                        Tipo
                    </label>
                    <select
                        className=" w-full px-1 outline-none border border-gray-200 p-1 "

                    >
                        <option>
                            Turno semanal
                        </option>
                    </select>
                </div>
                <div className="gap-1 flex flex-col w-full">
                    {/* <label className="text-slate-400 text-[14px]">
             Personal
         </label> */}
                    <select
                        className=" w-full px-1 outline-none border border-gray-200 p-1 "

                    >
                        <option>
                            Selecciona un personal
                        </option>
                    </select>
                </div>
                <InputForm />
            </form>
        </>
    )
}
