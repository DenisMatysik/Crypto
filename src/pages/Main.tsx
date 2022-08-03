import Header from "../components/header/Header";
import Pagination from "../components/pagination/Pagination";
import PaginationBtns from "../components/pagination/PaginationBtns";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function Main() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Pagination />
        <PaginationBtns />
      </div>
    </Provider>
  );
}
