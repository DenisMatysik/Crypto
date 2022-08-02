import React, { useEffect, useState } from "react";
import { ICrypto } from "../../model";

export default function Table() {
  const [arrCryptos, setArrCryptos] = useState<ICrypto[]>([]);

  function fetctCryptos() {
    fetch("https://api.coincap.io/v2/assets?limit=15")
      .then((res) => res.json())
      .then((data) => {
        setArrCryptos(data.data);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    fetctCryptos();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>rank</td>
            <td>name</td>
            <td>priceUsd</td>
            <td>changePercent24Hr</td>
            <td>Add to you </td>
          </tr>
        </thead>
        <tbody>
          {arrCryptos &&
            arrCryptos.map((el) => (
              <tr>
                <td>{el.rank}</td>
                <td>{el.name}</td>
                <td>{el.priceUsd}</td>
                <td>{el.changePercent24Hr}</td>
                <td>
                  <button>+</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
