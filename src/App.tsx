import "./App.css";
import About from "./components/About";
import FarmRio from "./components/FarmRio";
import Footer from "./components/Footer";
import History from "./components/History";
import Navbar from "./components/NavBar";
import Surprise from "./components/Surprise";

function App() {
  return (
    <>
      <Navbar />
      <FarmRio />
      <Surprise />
      <About />
      <History />
      <Footer />
    </>
  );
}

export default App;
