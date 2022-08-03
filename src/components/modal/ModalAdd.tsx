import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCrypto } from "../../store/cryptoSlice";
import "./Modal.css";

export default function ModalAdd({ setOpen, cryptoInf }: any) {
  const [inputInf, setInputInf] = useState("");
  const [errorValid, setErrorValid] = useState(false);
  const dispatch = useDispatch();

  const add = () => {
    if (inputInf != "") {
      dispatch(
        addCrypto({
          id: cryptoInf.name,
          inputInf,
          cryptoInf,
          time: new Date().toLocaleString(),
        })
      );
    } else {
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
          </form>
          {errorValid && <div>Add some count</div>}
          <div className="modalBtns">
            <button
              className="addButton"
              onClick={() => {
                add();
                setOpen(false);
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
