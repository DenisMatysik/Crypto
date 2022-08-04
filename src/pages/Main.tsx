import Header from "../components/header/Header";
import Pagination from "../components/pagination/Pagination";
import PaginationBtns from "../components/pagination/PaginationBtns";

export default function Main() {
  return (
    <div className="App">
      <Header />
      <Pagination />
      <PaginationBtns />
    </div>
  );
}
