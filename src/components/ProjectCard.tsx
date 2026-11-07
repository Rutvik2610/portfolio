import { ArrowUpRight, ChevronDown } from "lucide-react";
import { type Project } from "../data/projects";
import { validExternal } from "../data/socials";
import { ProjectVisual } from "./ProjectVisual";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectVisual kind={project.id} />
      <div className="project-content">
        <div className="project-category">
          {project.category}
          <span>PERSONAL PROJECT · {project.status.toUpperCase()}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label={`${project.name} technologies`}>
          {project.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <details>
          <summary>
            Inside the engineering
            <ChevronDown size={18} />
          </summary>
          <div className="case-study">
            <h4>The problem</h4>
            <p>{project.problem}</p>
            <h4>Implementation</h4>
            <ul>
              {project.architecture.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <h4>Technical decisions</h4>
            <div className="decision-list">
              {project.decisions.map((d) => (
                <div key={d.title}>
                  <strong>{d.title}</strong>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </details>
        {((project.github && validExternal(project.github)) ||
          (project.demo && validExternal(project.demo))) && (
          <div className="project-links">
            {project.github && validExternal(project.github) && (
              <a href={project.github} target="_blank" rel="noreferrer">
                View source
                <ArrowUpRight size={17} />
              </a>
            )}
            {project.demo && validExternal(project.demo) && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live demo
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
