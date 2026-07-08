import { ABOUT_PARAGRAPHS, CORE_COMPETENCIES, SKILL_GROUPS } from "../data/portfolio";

const About = () => {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <p className="eyebrow-num">01</p>
      <h2 className="section-title" id="about-title">
        About
      </h2>
      {ABOUT_PARAGRAPHS.map((paragraph) => (
        <p className="about__text" key={paragraph}>
          {paragraph}
        </p>
      ))}
      <div className="about__core">
        <p className="about__group-title">핵심 역량</p>
        <ul className="about__core-list">
          {CORE_COMPETENCIES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="about__tools">
        <p className="about__group-title">사용 가능 툴</p>
        <div className="about__skills">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category}>
              <p className="about__skill-category">{group.category}</p>
              <ul className="chip-list">
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
