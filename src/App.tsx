import About from "./components/About";
import Ads from "./components/Ads";
import Campaign from "./components/Campaign";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";
import Registration from "./components/Registration";
import ScreenTime from "./components/ScreenTime";
import TornBorder from "./components/TornBorder";

const App = () => {
  return (
    <div id="home" className="bg-[#0966A0] min-h-full">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <About />
      </div>
      <ScreenTime />
      <TornBorder src="/Vector4.png" bgClass="bg-[#0966A0]" />
      <Impact />
      <TornBorder src="/Vector2.png" bgClass="bg-[#FFFFC0]" />
      <Quotes />
      <TornBorder src="/Vector3.png" bgClass="bg-white" />
      <Campaign />
      <TornBorder src="/Vector4.png" bgClass="bg-[#0966A0]" />
      <Ads />
      <TornBorder src="/Vector2.png" bgClass="bg-white" />
      <Registration />
      <TornBorder src="/Vector4.png" bgClass="bg-[#FFFF85]" />
      <Footer />
    </div>
  );
};

export default App;
