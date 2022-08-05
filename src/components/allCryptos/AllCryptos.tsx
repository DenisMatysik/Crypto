import { useState } from "react";
import { Link } from "react-router-dom";
import ModalAdd from "../modal/ModalAdd";
import "./AllCryptos.scss";

export default function AllCryptos({ allCryptos }: any) {
  const [open, setOpen] = useState(false);
  const [cryptoInf, setCryptoInf] = useState({});
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
            {allCryptos.map((crypto: any) => (
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
                      setCryptoInf(crypto);
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
