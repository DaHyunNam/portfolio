import { EXPERIENCE } from "../data/portfolio";

const Experience = () => {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <p className="eyebrow-num">02</p>
      <h2 className="section-title" id="experience-title">
        Experience
      </h2>
      <ol className="experience-list">
        {EXPERIENCE.map((item) => (
          <li className="experience-item" key={item.id}>
            <p className="experience-item__period">{item.period}</p>
            <div>
              <p className="experience-item__company">{item.company}</p>
              <p className="experience-item__meta">
                {item.dept} · {item.position}
              </p>
              <p className="experience-item__summary">{item.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
