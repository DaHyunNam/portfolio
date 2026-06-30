import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../assets/styles/intro.scss";

// props 타입 정의
interface IntroProps {
  onFinish: () => void;
}

const Intro = ({ onFinish }: IntroProps) => {
  const [isHeaderMode, setIsHeaderMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderMode(true);
      onFinish(); // 여기서 App으로 완료 신호 전송!
    }, 1100);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <>
      <AnimatePresence>
        {!isHeaderMode && (
          <motion.div className="intro-overlay" exit={{ opacity: 0 }}>
            <motion.div
              className="initials"
              layoutId="logo"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              HYUN
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={`header ${isHeaderMode ? "active" : ""}`}>
        <div className="header__inner">
          {isHeaderMode && (
            <motion.div className="header__logo" layoutId="logo">
              HYUN
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
};

export default Intro;
