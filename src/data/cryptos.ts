import { ICrypto, IHistory, IPortCryptos } from "../model";

export const cryptos: Array<ICrypto> = [
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
];

export const cryptosPortfolio: Array<IPortCryptos> = [
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
];

export const historyCrypto: Array<IHistory> = [
  {
    priceUsd: "6379.3997635993342453",
    time: 1530403200000,
  },
  {
    priceUsd: "6466.3135622762295280",
    time: 1530489600000,
  },
  {
    priceUsd: "6601.0724971279524219",
    time: 1530576000000,
  },
  {
    priceUsd: "6581.0092630267574887",
    time: 1530662400000,
  },
  {
    priceUsd: "6629.1362927171773870",
    time: 1530748800000,
  },
  {
    priceUsd: "6549.1112450806328349",
    time: 1530835200000,
  },
  {
    priceUsd: "6655.9108972488685303",
    time: 1530921600000,
  },
];
