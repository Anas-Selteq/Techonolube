import logo from './logo.svg';
import './App.css';
import Home from './Pages/Homepage/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comparision from './Pages/Comparison/Comparision';
import Ec123 from './Pages/Ec123/Ec123';
import Expl from './Pages/Expl/Expl';
import Digital from './Pages/Digital/Digital';
import M123 from './Pages/M123/M123';
import Msb123 from './Pages/Msb123/Msb123';
import Plc from './Pages/Plc/Plc';
import Nonind from './Pages/Non-incendive/Non-incendive';
import Oilol from './Pages/Oilol500/Oilol500';
import SP1 from './Pages/Spring/Spring';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Comparision />} />
          <Route path="/ec1-ec2-ec3" element={<Ec123 />} />
          <Route path="/expl-non-explosive" element={<Expl />} />
          <Route path="/digital-d1-d2" element={<Digital />} />
          <Route path="/m1-m2-m3" element={<M123 />} />
          <Route path="/msb1-msb2-msb3" element={<Msb123 />} />
          <Route path="/plc" element={<Plc />} />
          <Route path="/non-incendive" element={<Nonind />} />
          <Route path="/oil-ol500" element={<Oilol />} />
          <Route path="/spring-1" element={<SP1 />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
