import React from "react";
import "./Modal.css";

export default function ModalPortfolio() {
  return (
    <div className="wrapper ">
      <div className="containerMod">
        <div className="cryptos">
          <button className="closeButton ">X</button>

          <div>
            Val1
            <button>-</button>
          </div>
          <div>
            Val2
            <button>-</button>
          </div>
          <div>
            Val3
            <button>-</button>
          </div>
          <div>
            Val4
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}
