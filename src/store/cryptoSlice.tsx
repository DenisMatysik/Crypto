import { createSlice } from "@reduxjs/toolkit";

const getInitialCryptos = () => {
  const localCryptoList = window.localStorage.getItem("cryptoList");
  if (localCryptoList) {
    return JSON.parse(localCryptoList);
  }
  window.localStorage.setItem(
    "cryptoList",
    JSON.stringify([
      {
        cryptoInf: {
          id: "bitcoin",
          rank: "1",
          symbol: "BTC",
          name: "Bitcoin",
          supply: "19110256.0000000000000000",
          maxSupply: "21000000.0000000000000000",
          marketCapUsd: "438337851832.0349102147690064",
          volumeUsd24Hr: "11325632332.5571368746723394",
          priceUsd: "22937.3092559322549219",
          changePercent24Hr: "-0.8895917257909614",
          vwap24Hr: "23062.7554814613343880",
          explorer: "https://blockchain.info/",
        },
        id: "Bitcoin",
        inputInf: "123",
        time: "04.08.2022, 23:01:59",
      },
    ])
  );
  return [];
};

const getAllCryptos = () => {
  const allCryptos = window.localStorage.getItem("AllCryptos");
  if (allCryptos) {
    return JSON.parse(allCryptos);
  }
  window.localStorage.setItem(
    "AllCryptos",
    JSON.stringify([
      {
        id: "bitcoin",
        rank: "1",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "19110256.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "438337851832.0349102147690064",
        volumeUsd24Hr: "11325632332.5571368746723394",
        priceUsd: "22937.3092559322549219",
        changePercent24Hr: "-0.8895917257909614",
        vwap24Hr: "23062.7554814613343880",
        explorer: "https://blockchain.info/",
      },
      {
        id: "bitcoin",
        rank: "1",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "19110256.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "438337851832.0349102147690064",
        volumeUsd24Hr: "11325632332.5571368746723394",
        priceUsd: "22937.3092559322549219",
        changePercent24Hr: "-0.8895917257909614",
        vwap24Hr: "23062.7554814613343880",
        explorer: "https://blockchain.info/",
      },
      {
        id: "bitcoin",
        rank: "1",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "19110256.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "438337851832.0349102147690064",
        volumeUsd24Hr: "11325632332.5571368746723394",
        priceUsd: "22937.3092559322549219",
        changePercent24Hr: "-0.8895917257909614",
        vwap24Hr: "23062.7554814613343880",
        explorer: "https://blockchain.info/",
      },
    ])
  );
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
