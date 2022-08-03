import React, { useState } from "react";
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
  const portfolioInf = useSelector((state: any) => state.crypto.cryptoList);
  const dispatch = useDispatch();

  return (
    <div className="wrapper ">
      <div className="containerMod">
        <div className="cryptos">
          <button
            className="closeButton "
            onClick={() => {
              setOpenPortfolio(false);
              console.log(portfolioInf);
            }}
          >
            X
          </button>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Count</td>
                <td>$</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {portfolioInf.map((el: any) => (
                <tr key={el.time}>
                  <td>{el.id}</td>
                  <td>{el.inputInf}</td>
                  <td>{(+el.inputInf * +el.cryptoInf.priceUsd).toFixed(4)}</td>
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
