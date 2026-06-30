import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "../assets/styles/work.scss";
import { useInView } from "../hooks/useInView";
import { ALL_PROJECTS } from "../utils/constants";
import { calculateDayCount } from "../utils/date";

type Project = (typeof ALL_PROJECTS)[number];

interface WorkItemProps {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const WorkItem = ({ project, index, isOpen, onToggle }: WorkItemProps) => {
  const { ref, isInView } = useInView<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`work-item ${isInView ? "is-visible" : ""} ${
        isOpen ? "is-open" : ""
      }`}
      style={{ transitionDelay: `${Math.min(index, 4) * 0.06}s` }}
    >
      <div className="work-item__row">
        <div className="work-item__meta">
          <span className="num">{String(project.id).padStart(2, "0")}</span>
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
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span className="more-label">
            {isOpen ? "설명 접기" : "설명 더보기"}
          </span>
          <span className="chevron" />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="work-item__detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ul className="achievement-list">
              {project.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

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
            {ALL_PROJECTS.map((project, idx) => (
              <WorkItem
                key={project.id}
                project={project}
                index={idx}
                isOpen={openId === project.id}
                onToggle={() => toggleOpen(project.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
