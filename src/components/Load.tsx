import {} from "react";
import { Modal } from "./Modal/Modal";
import { motion } from "framer-motion";

export const Load = () => {
  return (
    <Modal>
      <div className="flex justify-center items-center gap-5">
        <motion.div
          className="w-[30px] h-[30px] bg-sky-200"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["10%", "10%", "50%", "50%", "10%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <motion.div
          className="w-[30px] h-[30px] bg-blue-400"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["10%", "10%", "50%", "50%", "10%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        />
        <motion.div
          className="w-[30px] h-[30px] bg-orange-500"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["10%", "10%", "50%", "50%", "10%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </div>
    </Modal>
  );
};
