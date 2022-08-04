import { useDispatch, useSelector } from "react-redux";
import { ICrypto } from "../../model";
import { deleteCrypto } from "../../store/cryptoSlice";
import "./Modal.css";

interface CrytoInfInterface {
  id?: string;
  inputInf: string | number;
  cryptoInf: ICrypto;
  time: string;
}

export default function ModalPortfolio({ setOpenPortfolio }: any) {
  const inf = useSelector((state: any) => state.crypto.cryptoList);
  const dispatch = useDispatch();

  return (
    <div className="wrapper ">
      <div className="containerMod">
        <div className="cryptos">
          <button
            className="closeButton "
            onClick={() => {
              setOpenPortfolio(false);
            }}
          >
            X
          </button>
          <table>
            <thead>
              <tr>
                <td>Name Crypto</td>
                <td>Count</td>
                <td>Price by one$ at the time of purchase</td>
                <td>Total cost at the time of purchase</td>
                <td>Delete from you portfolio</td>
              </tr>
            </thead>
            <tbody>
              {inf.map((el: any) => (
                <tr key={el.time}>
                  <td>{el.id}</td>
                  <td>{el.inputInf}</td>
                  <td>{(+el.cryptoInf.priceUsd).toFixed(3)}</td>
                  <td>{(+el.inputInf * +el.cryptoInf.priceUsd).toFixed(3)}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(deleteCrypto(el.id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
