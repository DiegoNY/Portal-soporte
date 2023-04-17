import Link from "next/link";
import { useState, useEffect } from "react";

type Props = {
    name: string,
    path: string,
    icon: React.ReactNode,
}

const ItemMenu = ({ name, path, icon }: Props) => {
    const [isACtive, setActive] = useState(false)
    // const location = useLocation()

    // useEffect(() => {
    //     if (location.pathname == path) {
    //         setActive(true);
    //     } else {
    //         setActive(false);
    //     }
    // }, [location])

    return (
        <Link href={path}>
            <ul >
                <li className={` p-2 rounded-lg cursor-pointer flex ${isACtive ? 'bg-sky-100 text-blue-700' : 'hover:bg-sky-100 hover:text-blue-700 hover:font-[500]'}`}>
                    <div className="h-[20px] ml-3">
                        {icon}
                    </div>
                    <span className={`ml-3 ${isACtive ? 'font-[500]' : ''}`}>{name}</span>
                </li>
            </ul>
        </Link>
    )
}

export default ItemMenu;

