import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutCrypto from "./pages/AboutCrypto";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/Crypto" element={<Main />} />
      <Route path="/about" element={<AboutCrypto />} />
    </Routes>
  );
}

export default App;
