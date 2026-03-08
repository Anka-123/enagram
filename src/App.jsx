import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TextCompare from "./pages/TextCompare";
import "./App.css";
import Menubar from "./components/MenuBar";

function App() {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <Menubar/>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<div>Welcome to the App</div>} />
            <Route
              path="/autocorector"
              element={<div>Autocorector Page</div>}
            />
            <Route path="/text-compare" element={<TextCompare />} />
            <Route
              path="/audio-to-text"
              element={<div>Audio To Text Page</div>}
            />
            <Route
              path="/text-to-audio"
              element={<div>Text To Audio Page</div>}
            />
            <Route path="/pdf" element={<div>PDF Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

