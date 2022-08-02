import "./App.css";
import Header from "./components/header/Header";
import ModalAdd from "./components/modal/ModalAdd";
import ModalPortfolio from "./components/modal/ModalPortfolio";

import Pagination from "./components/pagination/Pagination";
import PaginationBtns from "./components/pagination/PaginationBtns";

function App() {
  return (
    <div className="App">
      <Header />
      <Pagination />
      <PaginationBtns />
      {/* <ModalAdd /> */}
      {/* <ModalPortfolio /> */}
    </div>
  );
}

export default App;
