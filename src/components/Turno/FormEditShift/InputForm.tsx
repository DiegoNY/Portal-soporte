import { useState } from "react"

export const InputForm = () => {
    const [isSelect, setSelect] = useState(false);
    const [focus, setFocus] = useState(false);
    return (
        <>
            <div
                className="gap-1 flex flex-col w-full border-2 rounded-lg p-1 min-h-[54px] justify-center hover:border-double hover:border-blue-300 hover:text-blue-700 cursor-pointer"
                onMouseEnter={() => setFocus(true)}
            >
                {focus ?
                    (
                        <>
                            <label className="  text-[14px] cursor-pointer">
                                Personal
                            </label>
                            <select
                                className=" w-full outline-none text-black cursor-pointer"
                            >
                                <option>
                                    Nombre personal
                                </option>
                                <option >Bryan Polo Gomez</option>
                            </select>
                        </>
                    )
                    :
                    <h1>Personal</h1>
                }

            </div>
        </>

    )
}
