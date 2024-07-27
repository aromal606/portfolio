import { CONTENT } from "../constants/index";
import profilePic from "../assets/profile.png";
import {motion} from 'framer-motion'
const NameSectionComponent = () => {
  return (
    <div className=" border-b border-neutral-900 pb-16 lg:mb-32 scrollbar-hide">
      <div className="flex flex-wrap ">
        <div className=" w-full lg:w-1/2 ">
          <div className=" flex flex-col items-center lg:items-start lg:ml-5">
            <motion.h1 initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1}} className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Aromal Mohan
            </motion.h1>
            <motion.span initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.5}} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              mern Stack Developer
            </motion.span>
            <motion.p initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:2}} className="my-2 max-w-xl py-5 tracking-tight ">{CONTENT}</motion.p>
          </div>
        </div>
        <div></div>
        <div className="w-full lg:w-1/2 lg:p-8">
          {/* <div className="flex justify-center">
            <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}}className="w-80 rounded" src={profilePic} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NameSectionComponent;
