import { PROJECTS } from "../constants/index";

const ProjectsComponent = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <h2 className="text-4xl lg:my-20 mb-10 text-center">Projects</h2>
      <div>
        {PROJECTS.map((project) => {
          return (
            <div
              className="flex flex-wrap mb-8 gap-2 lg:justify-start "
              key={project.id}
            >
              <div className="w-full lg:w-1/4 flex flex-col justify-center items-start ml-5">
                <div className="flex flex-col">
                  <img
                    className="mx-auto lg:mx-0 mb-4"
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="w-full lg:w-3/4">
                    <h5 className="mb-2 font-semibold">{project.title}</h5>
                    <p className="mb-4 text-neutral-400">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-purple-900 text-sm font-medium mr-2 px-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsComponent;
