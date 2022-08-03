import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ModalPortfolio from "../modal/ModalPortfolio";
import "./Header.scss";

export default function Header() {
  const [openPortfolio, setOpenPortfolio] = useState(false);
  const inf = useSelector((state: any) => state.crypto.cryptoList);

  const sumPortfolio = inf.map((item: any) => {
    const count = item.inputInf;
    const name = item.cryptoInf.id;
    return { name, count };
  });

  // старые цена всего портфлея
  const totalCount = inf.reduce((accum: number, item: any) => {
    const inf = +item.inputInf * item.cryptoInf.priceUsd;
    return accum + inf;
  }, 0);

  return (
    <header>
      <div>
        Top 3 ratting cryptos : {} <span>Bitcoin</span>, <span>Ethereum</span>,
        <span>Tether</span>
      </div>
      <div className="portfolio">
        <span>{totalCount.toFixed(3)}</span> <span>+-2,38</span>{" "}
        <span>(1,8%)</span>
        <img
          className="portfolio_img"
          src="http://cdn.onlinewebfonts.com/svg/img_543533.png"
          alt="you_portfolio"
          onClick={() => {
            setOpenPortfolio(true);
          }}
        />
      </div>
      {openPortfolio && <ModalPortfolio setOpenPortfolio={setOpenPortfolio} />}
    </header>
  );
}
