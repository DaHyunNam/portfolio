import "../assets/styles/footer.scss";
import { useInView } from "../hooks/useInView";
import Magnetic from "./Magnetic";

const Footer = () => {
  const { ref, isInView } = useInView<HTMLElement>(0.4);

  // 맨 위로 부드럽게 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={ref}
      className={`footer reveal-fade ${isInView ? "is-visible" : ""}`}
    >
      <div className="container">
        <div className="footer__inner">
          <p className="copyright">
            &copy; 2026 Nam Dahyun. All rights reserved.
          </p>

          <Magnetic>
            <button className="btn-top" onClick={scrollToTop}>
              BACK TO TOP ↑
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
