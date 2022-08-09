import { useState } from "react";
import { Link } from "react-router-dom";
import { ICrypto } from "../../model";
import ModalAdd from "../modal/ModalAdd";
import "./AllCryptos.scss";

interface IAllCryptos {
  allCryptos: Array<ICrypto>;
  loading?: boolean;
}

export default function AllCryptos({ allCryptos }: IAllCryptos) {
  const [open, setOpen] = useState(false);
  const [cryptoInf, setCryptoInf] = useState<ICrypto>({
    id: "bitcoin",
    rank: "1",
    symbol: "BTC",
    name: "Bitcoin",
    supply: "19110256",
    maxSupply: "21000000",
    marketCapUsd: "438337851832",
    volumeUsd24Hr: "11325632332",
    priceUsd: "22937",
    changePercent24Hr: "-0.9",
    vwap24Hr: "23063",
    explorer: "https://blockchain.info/",
  });

  return (
    <>
      <ul className="allCrypto">
        <table>
          <thead>
            <tr>
              <td>rank</td>
              <td>name</td>
              <td>priceUsd</td>
              <td>changePercent24Hr</td>
              <td>marketCapUsd</td>
              <td>Add to you portfolio</td>
            </tr>
          </thead>
          <tbody>
            {allCryptos.map((crypto: ICrypto) => (
              <tr key={crypto.id}>
                <td>{crypto.rank}</td>
                <td>
                  <Link key={crypto.id} to={`/Crypto/${crypto.id}`}>
                    {crypto.name}
                  </Link>
                </td>
                <td>{(+crypto.priceUsd).toFixed(3)}</td>
                <td>{(+crypto.changePercent24Hr).toFixed(3)}</td>
                <td>{(+crypto.marketCapUsd).toFixed(3)}</td>
                <td>
                  <button
                    onClick={() => {
                      setOpen(true);
                      console.log("-", cryptoInf);
                      setCryptoInf(crypto);
                      console.log("+", cryptoInf);
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {open && <ModalAdd setOpen={setOpen} cryptoInf={cryptoInf} />}
      </ul>
    </>
  );
}
