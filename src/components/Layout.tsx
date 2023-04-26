import { ChangeElementDelete } from "@/libs/redux/feature/NavigationSlice.feature";
import { RootState } from "@/libs/redux/store/store";
import { useDispatch, useSelector } from "react-redux";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { elementDeleted } = useSelector(
    (state: RootState) => state.navigation
  );
  const distpatch = useDispatch();
  const QuitarElementos = () => {
    elementDeleted(false);
    distpatch(ChangeElementDelete({ ref: () => {} }));
  };

  return (
    <div
      className="flex w-full flex-col min-h-screen "
      onClick={QuitarElementos}
    >
      {children}
    </div>
  );
};

export default Layout;
