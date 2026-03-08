import "../assets/styles/main.scss";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Service from "../components/Service";
import Work from "../components/Work";

interface MainProps {
  introFinished: boolean;
}

const Main = ({ introFinished }: MainProps) => {
  return (
    <main className="main-page">
      <Hero startAnimation={introFinished} />
      <Info />
      <Service />
      <Work />
      <Footer />
    </main>
  );
};

export default Main;
