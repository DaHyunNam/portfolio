import "../assets/styles/info.scss";

const Info = () => {
  return (
    <section className="info" id="info">
      <div className="container">
        <div className="info-table">
          <div className="info-table__left">
            <div className="left-top">
              <div className="title-box">
                <h2>ABOUT ME</h2>
              </div>
              <div className="contact-box">
                <p>남다현</p>
                <p>웹퍼블리셔</p>
                <p>dahyun123410@gmail.com</p>
                <p>010-5528-5977</p>
                <p>1995.11.28</p>
              </div>
            </div>
            <div className="left-bottom">
              <div>
                <p>
                  인하우스 서비스 운영과 에이전시의 다양한 경험을 바탕으로
                  사용자 중심의 UI를 구현하는 퍼블리셔 남다현입니다.
                </p>
              </div>
              <ul>
                <li>유연한 커뮤니케이션</li>
                <li>프레임워크 기반 프로젝트</li>
                <li>지속 가능한 코드 유지보수</li>
                <li>웹 표준 & 접근성 준수</li>
              </ul>
            </div>
          </div>
          <div className="info-table__right">
            <ul className="career-list">
              <li>
                <div className="career-info">
                  <strong className="company">SK렌터카</strong>
                  <span className="period">2025.02 - ING</span>
                </div>
                <div className="career-role">
                  <span className="dept">서비스개발팀</span>
                  <span className="role">매니저 /팀원</span>
                </div>
              </li>

              <li>
                <div className="career-info">
                  <strong className="company">더피프티원엑스</strong>
                  <span className="period">2024.02 - 2025.02</span>
                </div>
                <div className="career-role">
                  <span className="dept">DT Group</span>
                  <span className="role">선임 /팀원</span>
                </div>
              </li>

              <li>
                <div className="career-info">
                  <strong className="company">더피프티원</strong>
                  <span className="period">2022.01 - 2024.02</span>
                </div>
                <div className="career-role">
                  <span className="dept">DT Group</span>
                  <span className="role">선임 /팀원</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
