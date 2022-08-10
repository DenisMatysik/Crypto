import { useEffect, useState } from "react";
import AllCryptos from "../allCryptos/AllCryptos";
import { ICrypto } from "../../model";
import PaginationBtns from "./PaginationBtns";
import "./Pagination.scss";
import { useDispatch } from "react-redux";
import { addAllCryptos } from "../../store/cryptoSlice";
import Header from "../header/Header";
import Refresh from "../../assets/refresh.png";

export default function Pagination() {
  const [allCryptos, setAllCryptos] = useState<ICrypto[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cryptoPerPage = 10; // количесвто элементов на странице
  const dispatch = useDispatch();

  async function fetctCryptos() {
    try {
      setLoading(true);
      const response = await fetch("https://api.coincap.io/v2/assets");
      const data = await response.json();
      setAllCryptos(data.data);
      setLoading(true);
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
  const currentCrypto: Array<ICrypto> = allCryptos.slice(
    firstCryptoIndex,
    lastCryptoIndex
  );

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

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <button onClick={refreshPage}>
        <img className="refresh" src={Refresh} />
      </button>
      <Header />
      <AllCryptos allCryptos={currentCrypto} loading={loading} />
      <div className="prevNextBtns">
        <button className="prevBtns" onClick={prevPage}>
          ←
        </button>
        <PaginationBtns
          cryptoPerPage={cryptoPerPage}
          totalCryptos={allCryptos.length}
          paginate={paginate}
        />
        <button className="nextBtns" onClick={nextPage}>
          →
        </button>
      </div>
    </div>
  );
}
