import { useState } from "react";
import { useDispatch } from "react-redux";
import { ICrypto } from "../../model";
import { addCrypto } from "../../store/cryptoSlice";
import "./Modal.scss";

interface IModalAdd {
  setOpen: (x: boolean) => void;
  cryptoInf: ICrypto;
}

export default function ModalAdd({ setOpen, cryptoInf }: IModalAdd) {
  const [inputInf, setInputInf] = useState("");
  const [errorValid, setErrorValid] = useState(false);
  const dispatch = useDispatch();

  const add = () => {
    if (inputInf != "" && +inputInf > 0) {
      dispatch(
        addCrypto({
          id: cryptoInf.name,
          inputInf,
          cryptoInf,
          time: new Date().toLocaleString(),
        })
      );
      setOpen(false);
    } else {
      setOpen(true);
      setErrorValid(true);
    }
  };
  return (
    <div className="wrapper ">
      <div className="containerMod">
        <div className="cryptos">
          <form>
            <div className="modalTitle">Enter you {cryptoInf.name} count:</div>
            <input
              type="number"
              placeholder="Enter some cryptos"
              className="modalInput"
              value={inputInf}
              onChange={(e) => {
                setInputInf(e.target.value);
              }}
            />
            {errorValid && (
              <div className="errorMes">Invalid count (must be {">"} 0)</div>
            )}
          </form>
          <div className="modalBtns">
            <button
              className="addButton"
              onClick={() => {
                add();
              }}
            >
              Add
            </button>
            <button
              className="closeButton"
              onClick={() => {
                setOpen(false);
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
