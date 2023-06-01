import { ChangeIssueView } from "@/libs/redux/feature/Incidents.feature";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

export const Button = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className="fixed z-30 bottom-1 right-2 text-white rounded-lg sm:hidden px-2 py-3 bg-sky-500 cursor-pointer text-[14px] font-medium "
      onClick={() => dispatch(ChangeIssueView())}
    >
      Nueva incidencia
    </motion.div>
  );
};
