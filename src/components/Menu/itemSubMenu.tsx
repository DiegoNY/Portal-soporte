import { useState, useEffect } from "react";
import SubMenu from "./subMenu/subMenu";
import { useRouter } from "next/router";

type item = {
    submenu: {
        text: string,
        route: string
    }[],
    name: string,
    icon: React.ReactNode
}

const ItemSubMenu = ({
    submenu,
    name,
    icon
}: item) => {
    const [subMenuActive, setActive] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const isSubmenuActive = submenu.findIndex(item => item.route == router.asPath);
        if (isSubmenuActive != -1) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [router])

    return (
        <ul >
            <li
                className="hover:bg-sky-100 hover:text-blue-700 hover:font-[500] mb-1 p-2 rounded-lg cursor-pointer flex items-center justify-between"
                onClick={() => setActive(!subMenuActive)}
            >
                <div className="flex ml-3 gap-3">
                    <div className="h-[20px]">
                        {icon}
                    </div>
                    <span >{name}</span>
                </div>
                <svg className="fill:white h-6 w-6 will-change-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd">
                    </path>
                </svg>
            </li>
            <li className="hover:bg-slate-200   px-2 rounded-lg cursor-pointer flex  gap-1">

                <div className="flex flex-col ml-6   border-l-blue-100 gap-1.5 w-full">
                    {/* <span className="py-1 px-2  bg-sky-100 border-[#919191] text-blue-700 rounded-r-lg ">
                        Sub navigate
                    </span > */}
                    {subMenuActive &&
                        submenu.map((item, index) => {
                            return (
                                <SubMenu key={index} name={item.text} path={item.route} />
                            )
                        })
                    }

                </div>
            </li>

        </ul>
    )
}

export default ItemSubMenu;

