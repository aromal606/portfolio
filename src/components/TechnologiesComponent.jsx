import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import { SiVite } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si";
const TechnologiesComponent = () => {
  return (
    <div className="text-center border-neutral-900 border-b py-20">
      <h2 className="text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
        <div className="rounded-2xl border-2 border-neutral-600 p-1">
          <RiReactjsLine className="text-4xl text-cyan-600"/>
        </div>
        <div className="rounded-2xl border-2 border-neutral-600 p-1">
          <SiMongodb className="text-4xl text-green-600"/>
        </div>
        <div className="rounded-2xl border-2 border-neutral-600 p-1">
          <FaNodeJs className="text-4xl text-yellow-400"/>
        </div><div className="rounded-2xl border-2 border-neutral-600 p-1">
          <SiVite className="text-4xl text-yellow-200"/>
        </div><div className="rounded-2xl border-2 border-neutral-600 p-1">
          <SiTailwindcss className="text-4xl text-cyan-500"/>
        </div>
        
      </div>
    </div>
  );
};

export default TechnologiesComponent;
