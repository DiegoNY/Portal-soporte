import { RootState } from "@/libs/redux/store/store";
import UserMain from "./UserMain";
import { useSelector, useDispatch } from "react-redux";

import {
  ChangeUserMain,
  changeMain,
} from "@/libs/redux/feature/NavigationSlice.feature";

const Header = () => {
  /**Reducers */
  const navigation = useSelector((state: RootState) => state.navigation);
  const dispatch = useDispatch();
  const ChangeMenuUser = (e: any) => {
    e.stopPropagation();
    dispatch(ChangeUserMain());
  };

  return (
    <header className=" fixed z-40 h-14 bg-gradient-to-b from-white to-transparent w-full px-2 flex border-b">
      <div
        className="swap-rotate btn swap btn-circle border-none bg-transparent hover:bg-transparent lg:hidden items-center flex cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(changeMain());
        }}
      >
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"></path>
        </svg>
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
        <div
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
        </div>
      </div>
      {navigation.user == true && <UserMain />}
    </header>
  );
};

export default Header;
