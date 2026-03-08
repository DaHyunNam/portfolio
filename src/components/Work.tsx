import "../assets/styles/work.scss";
import { ALL_PROJECTS } from "../utils/constants";
import { calculateDayCount } from "../utils/date";

const Work = () => {
  const dayCount = calculateDayCount();
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="work__header">
          <h2 className="sub-title">MY WORKS</h2>
          <h3 className="main-title">MY PROJECTS HISTORY</h3>
          <p className="sub-title period">
            PERIOD : 2022.01 ~ ING (D+{dayCount})
          </p>
        </div>

        <div className="work__list-wrap">
          <ul className="work-list">
            {ALL_PROJECTS.map((project) => (
              <li key={project.id} className="work-item">
                <div className="work-item__meta">
                  <span className="num">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>
                <div className="work-item__title-area">
                  <h4 className="title">{project.title}</h4>
                  <p className="period">{project.period}</p>
                </div>
                <div className="work-item__tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
