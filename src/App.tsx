import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import AboutCrypto from "./pages/AboutCrypto";
import Main from "./pages/Main";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/Crypto" element={<Main />} />
      <Route path="/about" element={<AboutCrypto />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
