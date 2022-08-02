import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Header.scss";

export default function Header() {
  const inf = useSelector((state: any) => state.crypto.cryptoAll);
  const asd = window.localStorage.getItem("cryptoAll");
  return (
    <header>
      <div>
        Top 3 ratting cryptos : {} <span>Bitcoin</span>, <span>Ethereum</span>,
        <span>Tether</span>
      </div>
      <div className="portfolio">
        <span>134,32 USD</span> <span>+-2,38</span> <span>(1,8%)</span>
        <img
          className="portfolio_img"
          src="http://cdn.onlinewebfonts.com/svg/img_543533.png"
          alt="you_portfolio"
          onClick={() => {
            console.log(asd);
          }}
        />
      </div>
    </header>
  );
}
