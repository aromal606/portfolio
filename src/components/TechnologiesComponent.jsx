import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const TechnologiesComponent = () => {

  return (
    <div className="text-center border-neutral-900 border-b py-20">
      <h2 className="text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
        <motion.div
          className="rounded-2xl border-2 border-neutral-600 p-1"
          animate={{
            y: [0, -10, 0], // Moves up to -20px and then back to 0
          }}
          transition={{
            duration: 2, // Duration of one cycle
            repeat: Infinity, // Repeat infinitely
            repeatType: "loop", // Loop the animation
          }}
        >
          <RiReactjsLine className="text-4xl text-cyan-600" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-2 border-neutral-600 p-1"
          animate={{
            y: [0, -10, 0], // Moves up to -20px and then back to 0
          }}
          transition={{
            duration: 1.5, // Duration of one cycle
            repeat: Infinity, // Repeat infinitely
            repeatType: "loop", // Loop the animation
          }}
        >
          <SiMongodb className="text-4xl text-green-600" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-2 border-neutral-600 p-1"
          animate={{
            y: [0, -10, 0], // Moves up to -20px and then back to 0
          }}
          transition={{
            duration: 2, // Duration of one cycle
            repeat: Infinity, // Repeat infinitely
            repeatType: "loop", // Loop the animation
          }}
        >
          <FaNodeJs className="text-4xl text-yellow-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-2 border-neutral-600 p-1"
          animate={{
            y: [0, -10, 0], // Moves up to -20px and then back to 0
          }}
          transition={{
            duration: 1.8, // Duration of one cycle
            repeat: Infinity, // Repeat infinitely
            repeatType: "loop", // Loop the animation
          }}
        >
          <SiVite className="text-4xl text-yellow-200" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-2 border-neutral-600 p-1"
          animate={{
            y: [0, -10, 0], // Moves up to -20px and then back to 0
          }}
          transition={{
            duration: 2, // Duration of one cycle
            repeat: Infinity, // Repeat infinitely
            repeatType: "loop", // Loop the animation
          }}
        >
          <SiTailwindcss className="text-4xl text-cyan-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologiesComponent;
