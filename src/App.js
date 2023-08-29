import "./App.css";
import { Nav } from "./Components/Nav";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import Tours from "./Components/Tours";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
