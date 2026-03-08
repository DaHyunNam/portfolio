import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../assets/styles/hero.scss";

interface HeroProps {
  startAnimation: boolean;
}

const Hero = ({ startAnimation }: HeroProps) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 인트로가 끝나기 전에는 타이머를 돌리지 않음!
    if (!startAnimation) return;

    const timer = setTimeout(() => {
      setStep((prev) => (prev < 2 ? prev + 1 : 0));
    }, 2000);
    return () => clearTimeout(timer);
  }, [step, startAnimation]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__title-wrapper">
          <motion.div layout className="sliding-box">
            <AnimatePresence mode="popLayout">
              {step === 0 && (
                <motion.span
                  layout
                  key="h"
                  className="word"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                  HELLO I'M
                </motion.span>
              )}
              {step === 1 && (
                <motion.span
                  layout
                  key="p"
                  className="word highlight"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                  PUBLISHER
                </motion.span>
              )}
              {step === 2 && (
                <motion.span
                  layout
                  key="w"
                  className="word"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                  WELCOME TO
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div layout className="static-box">
            <span className="word bold">DAHYUN</span>
          </motion.div>

          <motion.div layout className="sliding-box">
            <AnimatePresence mode="popLayout">
              {step === 2 && (
                <motion.span
                  layout
                  key="my"
                  className="word gray"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                  PORTFOLIO SITE
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
