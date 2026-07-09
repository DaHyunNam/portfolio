import "./assets/styles/main.scss";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = ["about", "experience", "projects"];

function App() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <div className="app">
      <div className="app__layout">
        <Sidebar activeId={activeId} />
        <main className="content">
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
