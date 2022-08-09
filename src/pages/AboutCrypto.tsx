import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "./AboutCrypto.scss";
import GrafInf from "../components/graf/GrafInf";
import { ICrypto, IPortCryptos } from "../model";

interface IStateInf {
  allCryptos: Array<ICrypto>;
  cryptoList: Array<IPortCryptos>;
}

interface IState {
  crypto: IStateInf;
}

export default function AboutCrypto() {
  const allInf = useSelector((state: IState) => state.crypto.allCryptos);
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const singleCryptoInf = allInf.filter((el: ICrypto) => {
    return el.id == id;
  });

  return (
    <>
      <div className="cryptoContainer">
        <div className="cryptoInf">
          <h1>Main inf about {singleCryptoInf[0].name}</h1>
          <table>
            <thead>
              <tr>
                <td>rank</td>
                <td>name</td>
                <td>symbol</td>
                <td>priceUsd</td>
                <td>supply</td>
                <td>maxSupply</td>
                <td>volumeUsd24Hr</td>
                <td>changePercent24Hr</td>
                <td>vwap24Hr</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{singleCryptoInf[0].rank}</td>
                <td>{singleCryptoInf[0].name}</td>
                <td>{singleCryptoInf[0].symbol}</td>
                <td>{(+singleCryptoInf[0].priceUsd).toFixed(5)}</td>
                <td>{(+singleCryptoInf[0].supply).toFixed(5)}</td>
                {singleCryptoInf[0].maxSupply != null ? (
                  <td>{(+singleCryptoInf[0].maxSupply).toFixed(5)}</td>
                ) : (
                  <td>null</td>
                )}
                {/* <td>{(+singleCryptoInf[0].maxSupply).toFixed(5)}</td> */}
                <td>{(+singleCryptoInf[0].volumeUsd24Hr).toFixed(5)}</td>
                <td>{(+singleCryptoInf[0].changePercent24Hr).toFixed(5)}</td>
                <td>{(+singleCryptoInf[0].vwap24Hr).toFixed(5)}</td>
              </tr>
            </tbody>
          </table>
          <>
            <GrafInf />
          </>
          <div className="link">
            Explorer:{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={`${singleCryptoInf[0].explorer}`}
            >
              {singleCryptoInf[0].explorer}
            </a>
          </div>
          <button onClick={goBack}>Back</button>
        </div>
      </div>
    </>
  );
}
