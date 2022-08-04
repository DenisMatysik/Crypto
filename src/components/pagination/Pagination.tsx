import { useEffect, useState } from "react";
import AllCryptos from "../allCryptos/AllCryptos";
import { ICrypto } from "../../model";
import PaginationBtns from "./PaginationBtns";
import "./Pagination.scss";
import { useDispatch } from "react-redux";
import { addAllCryptos } from "../../store/cryptoSlice";
import Header from "../header/Header";

export default function Pagination() {
  const [allCryptos, setAllCryptos] = useState<ICrypto[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cryptoPerPage = 10;
  const dispatch = useDispatch();

  async function fetctCryptos() {
    try {
      setLoading(true);
      const response = await fetch("https://api.coincap.io/v2/assets");
      let data = await response.json();
      setAllCryptos(data.data);
      setLoading(false);
      dispatch(addAllCryptos(data.data));
    } catch (error) {
      console.log("Fetch error: ", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetctCryptos();
  }, []);

  const lastCryptoIndex = currentPage * cryptoPerPage;
  const firstCryptoIndex = lastCryptoIndex - cryptoPerPage;
  const currentCrypto = allCryptos.slice(firstCryptoIndex, lastCryptoIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => {
    if (currentPage != Math.ceil(allCryptos.length / cryptoPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (currentPage != 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container">
      <Header />
      <AllCryptos allCryptos={currentCrypto} loading={loading} />
      <PaginationBtns
        cryptoPerPage={cryptoPerPage}
        totalCryptos={allCryptos.length}
        paginate={paginate}
      />
      <div className="prevNextBtns">
        <button className="prevBtns" onClick={prevPage}>
          Prev Page
        </button>
        <button className="nextBtns" onClick={nextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
}
