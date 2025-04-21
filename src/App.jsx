import ButtonGradient from "./assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";

const App = () => {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
