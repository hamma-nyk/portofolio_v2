import { Fragment } from "react";
import ProjectCard from "../elements/ProjectCard";
const Projects = (props) => {
  const { goto } = props;
  return (
    <Fragment>
      <section
        id="projects"
        ref={goto}
        className="flex flex-col mx-auto justify-center mb-18 lg:mb-0 xl:mb-0"
      >
        <div className="flex flex-col h-full px-2 md:px-10 w-full items-start justify-center mt-26">
          <h1 className="text-4xl font-[700] mx-auto">PROJECTS</h1>
          <div className="flex flex-wrap w-11/12 sm:w-full gap-4 mt-6 mx-auto justify-center">
            <ProjectCard
              img="./assets/image/qrnbi.png"
              title={"QR-NBI"}
              link={"https://qrnbi.web.id/"}
            />
            <ProjectCard
              img="./assets/image/konekobot.png"
              title={"KonekoBot"}
              link={"https://konekobot.web.id/"}
            />
            <ProjectCard
              img="./assets/image/konekocert.png"
              title={"KonekoCert"}
              link={"https://konekocert.web.id/"}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
