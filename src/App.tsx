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

const App = () => {
  return (
    <div className="bg-linear-to-b from-[#3292CD] via-[#1F7EB8] to-[#0A67A0] min-h-full">
      <Navbar />
      <Hero />
      <About />
      <ScreenTime />
      <Impact />
      <Quotes />
      <Campaign />
      <Ads />
      <Registration />
      <Footer />
    </div>
  );
};

export default App;
