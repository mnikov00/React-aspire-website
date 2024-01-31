import React from "react";
import Navbar from "./components/Navbar";
import Templates from "./components/Templates";
import Brands from "./components/Brands";
import About from "./components/About";
import Stats from "./components/Stats";
import Action from "./components/Action";
import Team from "./components/Team";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Templates />
      <Brands />
      <About />
      <Stats />
      <Action />
      <Team />
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;
