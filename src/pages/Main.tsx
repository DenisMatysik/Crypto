import Header from "../components/header/Header";
import Pagination from "../components/pagination/Pagination";
import PaginationBtns from "../components/pagination/PaginationBtns";
import ModalAdd from "../components/modal/ModalAdd";
import ModalPortfolio from "../components/modal/ModalPortfolio";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function Main() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Pagination />
        <PaginationBtns />
        {/* <ModalAdd /> */}
        {/* <ModalPortfolio /> */}
      </div>
    </Provider>
  );
}
