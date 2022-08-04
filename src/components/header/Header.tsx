import { useState } from "react";
import { useSelector } from "react-redux";
import ModalPortfolio from "../modal/ModalPortfolio";
import "./Header.scss";

export default function Header() {
  const [openPortfolio, setOpenPortfolio] = useState(false);
  const inf = useSelector((state: any) => state.crypto.cryptoList);
  const allInf = useSelector((state: any) => state.crypto.allCryptos);
  // старые цена всего портфлея
  const oldPricePortfolio = inf.reduce((accum: number, item: any) => {
    return accum + +item.inputInf * +item.cryptoInf.priceUsd;
  }, 0);

  const updatingArr = [];
  for (const item of allInf) {
    for (const el of inf) {
      if (el.id === item.name) {
        updatingArr.push({
          name: item.id,
          price: item.priceUsd,
          count: el.inputInf,
        });
      }
    }
  }

  // цена обновлённого портфлея
  const updatePricePortfolio = updatingArr.reduce(
    (accum: number, item: any) => {
      return accum + +item.count * +item.price;
    },
    0
  );
  return (
    <header>
      <div>
        Top 3 ratting cryptos : {} <span>{allInf[0].name}</span>,{" "}
        <span>{allInf[1].name}</span>,<span>{allInf[2].name}</span>
      </div>
      <div className="portfolio">
        <div className="inf">
          <span>Total:{updatePricePortfolio.toFixed(3)}$</span>
          <span>
            Difference:{(oldPricePortfolio - updatePricePortfolio).toFixed(3)}$
            (
            {(
              ((oldPricePortfolio - updatePricePortfolio) / oldPricePortfolio) *
              100
            ).toFixed(3)}
            %)
          </span>
        </div>
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
