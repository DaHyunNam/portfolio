import { useScrollVisible } from "../hooks/useScrollVisible";

const BackToTop = () => {
  const visible = useScrollVisible(0);

  return (
    <a
      href="#"
      className={visible ? "back-to-top back-to-top--visible" : "back-to-top"}
      aria-label="맨 위로 이동"
    >
      TOP
    </a>
  );
};

export default BackToTop;
