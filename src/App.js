import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tests from "./pages/Tests";
import StressTest from "./pages/StressTest";
import AnxietyTest from "./pages/AnxietyTest";
import DepressionTest from "./pages/DepressionTest";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tests" element={<Tests/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tests/stress" element={<StressTest/>}/>
          <Route path="/tests/anxiety" element={<AnxietyTest/>}/>
          <Route path="/tests/depression" element={<DepressionTest/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
