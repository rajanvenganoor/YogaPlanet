import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Menu from "./components/Menu";
//import Poses from "./components/Poses";
import Guru from "./public/pages/Guru";
import Home from "./public/pages/Home";
//import Lineage from "./components/Homes";
import LineageShow from "./public/pages/LineageShow";
import Poses from "./public/pages/Poses";
import Menu from "./public/pages/Menu";


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
       <Route path="about/LineageShow" element={<LineageShow />} />
      </Routes>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/learn/asanas" element={<Poses />} />
      </Routes>
      <Routes>
        <Route path="/about/Guru" element={<Guru />} />
      </Routes>
      <Routes>
       <Route path="/poses" element={<Poses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

