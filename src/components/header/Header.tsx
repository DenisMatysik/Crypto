import { useState } from "react";
import { useSelector } from "react-redux";
import ModalPortfolio from "../modal/ModalPortfolio";
import "./Header.scss";
import { IPortCryptos, IState } from "../../model";

interface IUpdatingArr {
  name: string;
  price: string | number;
  count: string | number;
}

export default function Header() {
  const [openPortfolio, setOpenPortfolio] = useState(false);
  const inf = useSelector((state: IState) => state.crypto.cryptoList);
  const allInf = useSelector((state: IState) => state.crypto.allCryptos);

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

  const oldPricePortfolio = inf.reduce((accum: number, item: IPortCryptos) => {
    return accum + +item.inputInf * +item.cryptoInf.priceUsd;
  }, 0);

  const updatePricePortfolio = updatingArr.reduce(
    (accum: number, item: IUpdatingArr) => {
      return accum + +item.count * +item.price;
    },
    0
  );

  return (
    <header>
      {allInf.length != 0 ? (
        <div>
          Top 3 ratting cryptos : <span>{allInf[0].name}</span>,{" "}
          <span>{allInf[1].name}</span>, <span>{allInf[2].name}</span>
        </div>
      ) : (
        <div>
          Top 3 ratting cryptos :<span>BNB</span>,<span>XRP</span>,
          <span>USD Coin</span>
        </div>
      )}
      {inf.length != 0 ? (
        <div className="portfolio">
          <div className="inf">
            <span>Total:{updatePricePortfolio.toFixed(3)}$</span>
            <span>
              Difference:{(oldPricePortfolio - updatePricePortfolio).toFixed(3)}
              $ (
              {(
                ((oldPricePortfolio - updatePricePortfolio) /
                  oldPricePortfolio) *
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
      ) : (
        <div className="portfolio">
          <div className="inf">
            <span>Add some cryptos to your portfolio</span>
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
      )}
      {openPortfolio && <ModalPortfolio setOpenPortfolio={setOpenPortfolio} />}
    </header>
  );
}
