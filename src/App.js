import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Academia from "./pages/Academia";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import About from "./pages/About";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/academia" element={<Academia/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cv" element={<CV/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
