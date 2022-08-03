import { createSlice } from "@reduxjs/toolkit";

const getInitialCryptos = () => {
  const localCryptoList = window.localStorage.getItem("cryptoList");
  if (localCryptoList) {
    return JSON.parse(localCryptoList);
  }
  window.localStorage.setItem("cryptoList", JSON.stringify([]));
  return [];
};

const initialState = {
  cryptoList: getInitialCryptos(),
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
        cryptoListArr.forEach((crypto: any, index: any) => {
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

export const { addCrypto, deleteCrypto } = cryptoSlice.actions;

export default cryptoSlice.reducer;
