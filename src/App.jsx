import React from "react";
import About from "./components/about/About";
import {
  Header,
  Nav,
  Experience,
  Services,
  Portfolio,
  Testimonials,
  Contact,
  Footer,
} from "./components";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
