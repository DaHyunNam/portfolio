import "../assets/styles/footer.scss";

const Footer = () => {
  // 맨 위로 부드럽게 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="copyright">
            &copy; 2026 Nam Dahyun. All rights reserved.
          </p>

          <button className="btn-top" onClick={scrollToTop}>
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
