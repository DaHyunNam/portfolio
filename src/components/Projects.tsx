import { PROJECT_TIMELINE } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <p className="eyebrow-num">03</p>
      <h2 className="section-title" id="projects-title">
        Projects
      </h2>
      <ul className="project-timeline">
        {PROJECT_TIMELINE.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
