import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
const AboutComponent = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 ml-5">
      <h1 className="my-20 text-neutral-500 text-center text-4xl">
        About <span className="text-neutral-200">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-3">
          <div className="flex items-center justify-center">

          <img className="rounded-2xl" src={about} alt="" />
          </div>
        </div>
        <div className=" w-full lg:w-1/2">
          <p className=" my-2 max-w-xl ">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
