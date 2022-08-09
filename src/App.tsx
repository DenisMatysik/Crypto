import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutCrypto from "./pages/AboutCrypto";
import Main from "./pages/Main";
import NotFoundPage from "./pages/NotFoundPage";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/Crypto" element={<Main />} />
        <Route path="/Crypto/:id" element={<AboutCrypto />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
