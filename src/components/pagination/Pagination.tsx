import { useEffect, useState } from "react";
import AllCryptos from "../allCryptos/AllCryptos";
import { ICrypto } from "../../model";
import PaginationBtns from "./PaginationBtns";
import "./Pagination.scss";

export default function Pagination() {
  const [allCryptos, setAllCryptos] = useState<ICrypto[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cryptoPerPage = 10;

  async function fetctCryptos() {
    try {
      setLoading(true);
      const response = await fetch("https://api.coincap.io/v2/assets");
      let data = await response.json();
      setAllCryptos(data.data);
      setLoading(false);
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
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="container">
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
