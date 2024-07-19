import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const AboutComponent = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 ml-5">
      <h1 className="my-20 text-neutral-500 text-center text-4xl">
        About <span className="text-neutral-200">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          className="w-full lg:w-1/2 lg:p-3"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay:0.5}}
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={about} alt="" />
          </div>
        </motion.div>
        <motion.div
          className=" w-full lg:w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay:0.5 }}
        >
          <p className=" my-2 max-w-xl ">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutComponent;
