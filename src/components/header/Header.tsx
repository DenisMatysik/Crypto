import "./Header.css";

export default function Header() {
  return (
    <header>
      <div>
        Top 3 ratting cryptos : <span>Bitcoin</span>, <span>Ethereum</span>,
        <span>Tether</span>
      </div>
      <div className="portfolio">
        <span>134,32 USD</span> <span>+-2,38</span> <span>(1,8%)</span>
        <img
          className="portfolio_img"
          src="http://cdn.onlinewebfonts.com/svg/img_543533.png"
          alt="you_portfolio"
          onClick={() => {
            console.log("modal opne");
          }}
        />
      </div>
    </header>
  );
}
