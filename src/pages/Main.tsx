import Header from "../components/header/Header";
import Pagination from "../components/pagination/Pagination";
import PaginationBtns from "../components/pagination/PaginationBtns";
import ModalAdd from "../components/modal/ModalAdd";
import ModalPortfolio from "../components/modal/ModalPortfolio";

export default function Main() {
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
