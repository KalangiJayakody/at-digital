import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavigation from "./Components/TopNavigation/TopNavigation.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
