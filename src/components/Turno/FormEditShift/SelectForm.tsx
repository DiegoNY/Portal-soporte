import { useState } from "react"

type Props = {
    name_form: string,
    name_input: string
    children: React.ReactNode
}

export const SelectForm = ({ name_form, name_input, children }: Props) => {
    const [focus, setFocus] = useState(false);
    return (
        <>
            <div
                className="gap-1 flex flex-col w-full border rounded-lg p-1 min-h-[54px] justify-center hover:border-double hover:border-blue-300 hover:text-blue-700 cursor-pointer"
                onMouseEnter={() => setFocus(true)}
            >
                {focus ?
                    (
                        <>
                            <label className="px-1 text-[14px] cursor-pointer">
                                <span className="text-slate-400">{name_input}</span>
                                <select
                                    name={name_form}
                                    className=" w-full outline-none text-black cursor-pointer"
                                >
                                    {children}
                                </select>
                            </label>

                        </>
                    )
                    :
                    <h1 className="px-1 text-center">{name_input}</h1>
                }

            </div>
        </>

    )
}
