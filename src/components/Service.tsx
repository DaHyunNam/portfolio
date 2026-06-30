import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "../assets/styles/service.scss";
import { SERVICE_THEMES } from "../utils/constants";

const Service = () => {
  const [openId, setOpenId] = useState<string | null>(SERVICE_THEMES[0].id);

  const toggleOpen = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="services" id="service">
      <div className="container">
        <div className="services__header">
          <h2 className="sub-title">CORE KEYWORDS</h2>
          <h3 className="main-title">MY KEYWORD BOX</h3>
        </div>

        <ul className="keyword-list">
          {SERVICE_THEMES.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li
                key={item.id}
                className={`keyword-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="keyword-item__row"
                  onClick={() => toggleOpen(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="num">{item.id}</span>
                  <span className="title">{item.title}</span>
                  <span className="chevron" />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="keyword-item__detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <div className="keyword-item__content">
                        <p className="desc">{item.desc}</p>
                        <ul className="project-list">
                          {item.projects.map((proj, idx) => (
                            <li key={idx}>
                              <span className="bullet" />
                              {proj}
                            </li>
                          ))}
                        </ul>
                        <div className="tags">
                          {item.tags.map((tag) => (
                            <span key={tag} className="tag">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Service;
