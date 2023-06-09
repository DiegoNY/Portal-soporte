import { RootState } from "@/libs/redux/store/store";
import UserMain from "./UserMain";
import { useSelector, useDispatch } from "react-redux";

import {
  ChangeUserMain,
  changeMain,
} from "@/libs/redux/feature/NavigationSlice.feature";
import { MenuToggle } from "./MenuToggle";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<any>(null);

  /**Reducers */
  const navigation = useSelector((state: RootState) => state.navigation);
  const dispatch = useDispatch();
  const ChangeMenuUser = (e: any) => {
    e.stopPropagation();
    dispatch(ChangeUserMain());
  };

  return (
    <header className=" fixed z-40 h-14 bg-gradient-to-b from-white to-transparent w-full px-2 flex border-b">
      <div className="swap-rotate btn swap btn-circle border-none bg-transparent hover:bg-transparent lg:hidden items-center flex cursor-pointer">
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
        >
          <MenuToggle
            toggle={(e: any) => {
              toggleOpen();
              e.stopPropagation();
              dispatch(changeMain());
            }}
          />
        </motion.nav>
      </div>

      <a className="inline-flex items-center  h-full w-32 px-2 font-[600]  hover:opacity-80 sm:px-6 cursor-pointer ">
        {/**Nombre de empresa */}
      </a>
      <div className="flex-1"></div>
      <div className="flex h-full  justify-center flex-shrink-0 flex-wrap items-center flex-row">
        <div className="p-2 hover:bg-[#81858133] rounded-lg cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 notification"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </div>
      </div>
      <div className="flex h-full items-center justify-center ">
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.8 }}
          className="p-2 hover:bg-[#81858133] rounded-lg cursor-pointer "
          onClick={(e) => ChangeMenuUser(e)}
        >
          <svg
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
            className="h-5 "
          >
            <g>
              <path
                fill-rule="evenodd"
                d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z"
                clip-rule="evenodd"
              ></path>
            </g>
          </svg>
        </motion.div>
      </div>
      {navigation.user == true && <UserMain />}
    </header>
  );
};

export default Header;
