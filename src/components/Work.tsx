import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "../assets/styles/work.scss";
import { ALL_PROJECTS } from "../utils/constants";
import { calculateDayCount } from "../utils/date";

const Work = () => {
  const dayCount = calculateDayCount();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

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
              <li
                key={project.id}
                className={`work-item ${openId === project.id ? "is-open" : ""}`}
              >
                <div className="work-item__row">
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
                  <button
                    type="button"
                    className="work-item__more"
                    onClick={() => toggleOpen(project.id)}
                    aria-expanded={openId === project.id}
                  >
                    <span className="more-label">
                      {openId === project.id ? "접기" : "더보기"}
                    </span>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {openId === project.id && (
                    <motion.div
                      className="work-item__detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <ul className="achievement-list">
                        {project.achievements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
