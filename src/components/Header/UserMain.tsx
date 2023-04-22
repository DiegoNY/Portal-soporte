const UserMain = () => {
    const items = [
        {
            text: 'Mi perfil',
            icon: (
                <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" >
                    <g>
                        <path d="M10 8a2 2 0 100 4 2 2 0 000-4z"></path>
                        <path
                            fill-rule="evenodd"
                            d="M9 2h2a2.01 2.01 0 001.235 1.855l.53.22a2.01 2.01 0 002.185-.439l1.414 1.414a2.01 2.01 0 00-.439 2.185l.22.53A2.01 2.01 0 0018 9v2a2.01 2.01 0 00-1.855 1.235l-.22.53a2.01 2.01 0 00.44 2.185l-1.415 1.414a2.01 2.01 0 00-2.184-.439l-.531.22A2.01 2.01 0 0011 18H9a2.01 2.01 0 00-1.235-1.854l-.53-.22a2.009 2.009 0 00-2.185.438L3.636 14.95a2.009 2.009 0 00.438-2.184l-.22-.531A2.01 2.01 0 002 11V9c.809 0 1.545-.487 1.854-1.235l.22-.53a2.009 2.009 0 00-.438-2.185L5.05 3.636a2.01 2.01 0 002.185.438l.53-.22A2.01 2.01 0 009 2zm-4 8l1.464 3.536L10 15l3.535-1.464L15 10l-1.465-3.536L10 5 6.464 6.464 5 10z"
                            clip-rule="evenodd">
                        </path>
                    </g>
                </svg>
            )
        },
        {
            text: 'Cerrar sesion',
            icon: (
                <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                    <g>
                        <path d="M16 18h-4a2 2 0 01-2-2v-2h2v2h4V4h-4v2h-2V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z">
                        </path>
                        <path d="M7 5l1.5 1.5L6 9h8v2H6l2.5 2.5L7 15l-5-5 5-5z">
                        </path>
                    </g>
                </svg>
            )
        },
    ]
    return (
        <div className="fixed mt-[3.4rem] right-2 w-[220px]  p-2 bg-[#ffff] border-[1px] border-[#f5ededf8]  shadow-slate-100 shadow-sm rounded-lg flex flex-col gap-2">
            <ul className="flex gap-2 items-center px-1 my-3 ">
                <li className="bg-sky-200 rounded-full p-1">
                    <svg version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className=" h-[27px] w-max">
                        <g>
                            <path
                                fill-rule="evenodd"
                                d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z"
                                clip-rule="evenodd"
                            >
                            </path>
                        </g>
                    </svg>
                </li>
                <span className="text-[14px] font-[500] tracking-tight">
                    Bryan Polo Gomez
                </span>
            </ul>
            <div className="border-t-[1px]"></div>
            {items.map((item, index) => {
                return (
                    <ul key={index} className="flex gap-1 place-items-center hover:bg-[#81858133] p-1 rounded-sm cursor-pointer mx-1">
                        <li className="h-[1.1rem] ">
                            {item.icon}
                        </li>
                        <span className="text-sm text-[#4b4b4b] font-[400]">{item.text}</span>
                    </ul>
                )
            })

            }
        </div>
    )
}

export default UserMain