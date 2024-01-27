import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./containers/home";
import { QuemSomos } from "./containers/quemSomos";
import { SomosMais } from "./containers/somosMais";

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/quem-somos" element={<SomosMais />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
