import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tests from "./pages/Tests";
import StressTest from "./pages/StressTest";
import AnxietyTest from "./pages/AnxietyTest";
import Phq2DepressionTest from "./pages/Phq2DepressionTest";
import StressScore from "./pages/score/StressScore";
import Phq9DepressionTest from "./pages/Phq9DepressionTest";
import DepressionScore from "./pages/score/DepressionScore";
import AnxietyScore from "./pages/score/AnxietyScore";
import Info from "./pages/Info";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
          <Route path="/tests" element={<Tests/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tests/stress" element={<StressTest/>}/>
          <Route path="/tests/anxiety" element={<AnxietyTest/>}/>
          <Route path="/tests/phq2depression" element={<Phq2DepressionTest/>}/>
          <Route path="/tests/phq9depression" element={<Phq9DepressionTest/>}/>
          <Route path="/tests/stressscore" element={<StressScore/>}/>
          <Route path="/tests/depressionscore" element={<DepressionScore/>}/>
          <Route path="/tests/anxietyscore" element={<AnxietyScore/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
