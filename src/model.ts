export interface ICrypto {
  id: string;
  rank: string | number;
  symbol: string;
  name: string;
  supply: string | number;
  maxSupply: string | null | number;
  marketCapUsd: string | number;
  volumeUsd24Hr: string | number;
  priceUsd: string | number;
  changePercent24Hr: string | number;
  vwap24Hr: string | number;
  explorer: string;
}

export interface IPortCryptos {
  cryptoInf: ICrypto;
  id: string;
  inputInf: string | number;
  time: string;
}

export interface IHistory {
  priceUsd: string;
  time: number;
}

interface IStateInf {
  allCryptos: Array<ICrypto>;
  cryptoList: Array<IPortCryptos>;
}

export interface IState {
  crypto: IStateInf;
}
