import "./AllCryptos.scss";

export default function AllCryptos({ allCryptos, loading }: any) {
  return (
    <ul className="allCrypto">
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
          {allCryptos.map((crypto: any, index: any) => (
            <tr
              key={crypto.id}
              onClick={() => {
                console.log("+");
              }}
            >
              <td>{crypto.rank}</td>
              <td>{crypto.name}</td>
              <td>{crypto.priceUsd}</td>
              <td>{crypto.changePercent24Hr}</td>
              <td>
                <button className="cryptoBtn">+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ul>
  );
}
