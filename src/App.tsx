import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CirclePage } from "./pages/CirclePage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/circle" element={<CirclePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
