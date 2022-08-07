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
  {
    id: "ethereum",
    rank: "2",
    symbol: "ETH",
    name: "Ethereum",
    supply: "121869989.5615000000000000",
    maxSupply: null,
    marketCapUsd: "208889567806.2947916670820192",
    volumeUsd24Hr: "4485847299.9210362668513406",
    priceUsd: "1713.8380514849713198",
    changePercent24Hr: "0.0370152653897264",
    vwap24Hr: "1697.3539295730976802",
    explorer: "https://etherscan.io/",
  },
  {
    id: "tether",
    rank: "3",
    symbol: "USDT",
    name: "Tether",
    supply: "66476525454.1947200000000000",
    maxSupply: null,
    marketCapUsd: "66436017126.1978475518930675",
    volumeUsd24Hr: "12439822185.3505616833798148",
    priceUsd: "0.9994016766467543",
    changePercent24Hr: "-0.0719831087821891",
    vwap24Hr: "1.0005842448306161",
    explorer: "https://www.omniexplorer.info/asset/31",
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
