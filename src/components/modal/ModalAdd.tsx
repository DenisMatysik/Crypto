import React from "react";
import "./Modal.css";

export default function ModalAdd() {
  return (
    <div className="wrapper ">
      <div className="containerMod">
        <div className="cryptos">
          <form>
            <input type="text" placeholder="Enter some cryptos" />
          </form>
          <button className="closeButton ">X</button>
        </div>
      </div>
    </div>
  );
}
