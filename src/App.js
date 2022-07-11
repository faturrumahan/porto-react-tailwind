import React, { useState } from "react";
import Works from "./data/Works.json";
import Home from "./component/home/Home";
// import Nav from "./component/navbar/Nav";
import About from "./component/about/About";
import Services from "./component/services/Services";
import Portos from "./component/porto/Portos";
import Footer from "./component/footer/Footer";
// import Contact from "./component/contact/Contact";

const App = () => {
  const [data, setData] = useState(Works);

  return (
    <div>
      {/* <Nav /> */}
      <Home />
      <About />
      <Services />
      <Portos items={data} />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
