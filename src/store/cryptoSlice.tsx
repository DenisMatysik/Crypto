import { createSlice } from "@reduxjs/toolkit";
import { cryptos, cryptosPortfolio } from "../data/cryptos";
import { IPortCryptos } from "../model";

const getInitialCryptos = () => {
  const localCryptoList = window.localStorage.getItem("cryptoList");
  if (localCryptoList) {
    return JSON.parse(localCryptoList);
  }
  window.localStorage.setItem("cryptoList", JSON.stringify([]));
  return [];
};

const getAllCryptos = () => {
  const allCryptos = window.localStorage.getItem("AllCryptos");
  if (allCryptos) {
    return JSON.parse(allCryptos);
  }
  window.localStorage.setItem("AllCryptos", JSON.stringify([]));
  return [];
};

const initialState = {
  cryptoList: getInitialCryptos(),
  allCryptos: getAllCryptos(),
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: initialState,
  reducers: {
    addCrypto: (state, action) => {
      const cryptoList = window.localStorage.getItem("cryptoList");
      state.cryptoList.push(action.payload);
      if (cryptoList) {
        const cryptoListArr = JSON.parse(cryptoList);
        cryptoListArr.push({ ...action.payload });
        window.localStorage.setItem(
          "cryptoList",
          JSON.stringify(cryptoListArr)
        );
      } else {
        window.localStorage.setItem(
          "cryptoList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
    deleteCrypto: (state, action) => {
      const cryptoList = window.localStorage.getItem("cryptoList");
      if (cryptoList) {
        const cryptoListArr = JSON.parse(cryptoList);
        cryptoListArr.forEach((crypto: IPortCryptos, index: number) => {
          if (crypto.id === action.payload) {
            cryptoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem(
          "cryptoList",
          JSON.stringify(cryptoListArr)
        );
        state.cryptoList = cryptoListArr;
      }
    },
    addAllCryptos: (state, action) => {
      window.localStorage.setItem("AllCryptos", JSON.stringify(action.payload));
    },
    // updateCrypto: (state, action) => {
    //   const cryptoList = window.localStorage.getItem("cryptoList");
    //   if (cryptoList) {
    //     const cryptoListArr = JSON.parse(cryptoList);
    //     cryptoListArr.forEach((crypto: any) => {
    //       if (crypto.id === action.payload.id) {
    //         crypto.inputInf = action.payload.inputInf;
    //       }
    //     });
    //     window.localStorage.setItem(
    //       "cryptoList",
    //       JSON.stringify(cryptoListArr)
    //     );
    //     state.cryptoList = cryptoListArr;
    //   }
    // },
  },
});

export const { addCrypto, deleteCrypto, addAllCryptos } = cryptoSlice.actions;

export default cryptoSlice.reducer;
