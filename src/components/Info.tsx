import "../assets/styles/info.scss";
import { useInView } from "../hooks/useInView";

const CAREER = [
  {
    company: "SK렌터카",
    period: "2025.02 - ING",
    dept: "서비스개발팀",
    role: "매니저 / 팀원",
  },
  {
    company: "더피프티원엑스",
    period: "2024.02 - 2025.02",
    dept: "DT Group",
    role: "선임 / 팀원",
  },
  {
    company: "더피프티원",
    period: "2022.01 - 2024.02",
    dept: "DT Group",
    role: "선임 / 팀원",
  },
];

const Info = () => {
  const { ref: profileRef, isInView: profileInView } =
    useInView<HTMLDivElement>();
  const { ref: careerRef, isInView: careerInView } =
    useInView<HTMLDivElement>();

  return (
    <section className="info" id="info">
      <div className="container">
        <div className="info__header">
          <h2 className="sub-title">ABOUT ME</h2>
          <h3 className="main-title">사용자 중심 UI를 만드는 퍼블리셔</h3>
        </div>

        <div className="info-grid">
          <div
            ref={profileRef}
            className={`profile-card reveal-up ${profileInView ? "is-visible" : ""}`}
          >
            <span className="badge">PUBLISHER</span>
            <h4 className="name">남다현</h4>
            <p className="bio">
              인하우스 서비스 운영과 에이전시의 다양한 경험을 바탕으로 사용자
              중심의 UI를 구현하는 퍼블리셔입니다.
            </p>

            <ul className="strength-list">
              <li>유연한 커뮤니케이션</li>
              <li>프레임워크 기반 프로젝트</li>
              <li>지속 가능한 코드 유지보수</li>
              <li>웹 표준 & 접근성 준수</li>
            </ul>

            <dl className="contact-list">
              <div>
                <dt>Email</dt>
                <dd>dahyun123410@gmail.com</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>010-5528-5977</dd>
              </div>
              <div>
                <dt>Birth</dt>
                <dd>1995.11.28</dd>
              </div>
            </dl>
          </div>

          <div
            ref={careerRef}
            className={`career-card reveal-up ${careerInView ? "is-visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="badge">CAREER</span>
            <ul className="career-timeline">
              {CAREER.map((item) => (
                <li key={item.company}>
                  <span className="dot" />
                  <div className="career-content">
                    <div className="career-content__head">
                      <strong>{item.company}</strong>
                      <span className="period">{item.period}</span>
                    </div>
                    <p>
                      {item.dept} · {item.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
