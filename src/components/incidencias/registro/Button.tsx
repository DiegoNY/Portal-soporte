import { ChangeIssueView } from "@/libs/redux/feature/Incidents.feature";
import { useDispatch } from "react-redux";

export const Button = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="fixed z-30 bottom-1 right-2 text-white rounded-lg sm:hidden px-2 py-3 bg-sky-500 "
      onClick={() => dispatch(ChangeIssueView())}
    >
      Nueva incidencia
    </button>
  );
};
