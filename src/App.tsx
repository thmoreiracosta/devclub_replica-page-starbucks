import { Routes, Route } from 'react-router-dom';
import "./App.css";
import About from "./components/About";
import FarmRio from "./components/FarmRio";
import Footer from "./components/Footer";
import History from "./components/History";
import Navbar from "./components/NavBar";
import Surprise from "./components/Surprise";
import DevClub from './page/devClub';

function HomePage() {
  return (
    <>
      <FarmRio />
      <Surprise />
      <About />
      <History />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/devclub" element={<DevClub />} />
        {/* outras rotas... */}
      </Routes>
    </>
  );
}

export default App;
