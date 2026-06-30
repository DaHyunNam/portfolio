import "../assets/styles/service.scss";
import { SERVICE_THEMES } from "../utils/constants";

const Service = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__header">
          <h2 className="sub-title">CORE KEYWORDS</h2>
          <h3 className="main-title">MY KEYWORD BOX</h3>
        </div>

        <div className="bento-grid">
          {SERVICE_THEMES.map((item) => (
            <article
              key={item.id}
              className={`bento-card card--${item.id}`}
              style={{ backgroundColor: item.color }}
            >
              <div className="bento-card__head">
                <span className="id-badge">ROLE {item.id}</span>
                <h4 className="title">{item.title}</h4>
              </div>
              <div className="bento-card__body">
                <p className="desc">{item.desc}</p>
                <ul className="project-list">
                  {item.projects.map((proj, idx) => (
                    <li key={idx}>
                      <span className="bullet"></span>
                      {proj}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bento-card__foot">
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Service;
