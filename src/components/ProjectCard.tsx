import type { ProjectItem } from "../data/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__meta">
        <span>{project.org}</span>
        <span>{project.period}</span>
      </p>
      <ul className="project-card__achievements">
        {project.achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
      <ul className="chip-list project-card__stack">
        {project.stack.map((tech) => (
          <li className="chip" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectCard;
