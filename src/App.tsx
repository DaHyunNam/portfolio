import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import "./assets/styles/global.scss";
import Intro from "./components/Intro";
import Main from "./pages/Main";

function App() {
  // 인트로 애니메이션 종료 여부를 체크하는 상태
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="portfolio-app">
      <Intro onFinish={() => setIntroFinished(true)} />
      <Main introFinished={introFinished} />
    </div>
  );
}

export default App;
