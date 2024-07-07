import { PROJECTS } from "../constants/index";

const ProjectsComponent = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <h2 className="text-4xl lg:my-20 mb-10 text-center">Projects</h2>
      <div>
        {PROJECTS.map((project) => {
          return (
            <div
              className="flex flex-wrap mb-7 gap-2 lg:justify-center"
              key={project.id}
            >
              <div className="w-full lg:w-1/4 ">
                <img
                  className=" rounded"
                  width={150}
                  height={150}
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className=" w-full max-w-xl lg:w-3/4">
                <h5 className="mb-2 font-semibold">{project.title}</h5>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <p className="text-neutral-400">
                  {project.technologies.map((techs, index) => {
                    return (
                      
                        <span  key={index} className="text-purple-900 text-sm font-medium mr-2 px-2 ">
                          {techs}
                        </span>
                      
                    );
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsComponent;
