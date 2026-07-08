import { CONTACT_EMAIL } from "../data/portfolio";

const Contact = () => {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow-num">04</p>
      <h2 className="section-title" id="contact-title">
        Contact
      </h2>
      <p className="contact__text">
        새로운 프로젝트나 협업 제안은 언제든 환영합니다. 편하게 연락 주세요.
      </p>
      <a className="contact__link" href={`mailto:${CONTACT_EMAIL}`}>
        {CONTACT_EMAIL}
      </a>
    </section>
  );
};

export default Contact;
