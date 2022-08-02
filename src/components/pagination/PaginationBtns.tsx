import "./Pagination";

export default function Pag({ cryptoPerPage, totalCryptos, paginate }: any) {
  const pageCryptos = [];
  for (let i = 1; i <= Math.ceil(totalCryptos / cryptoPerPage); i++) {
    pageCryptos.push(i);
  }
  return (
    <div className="paginationBtns">
      {pageCryptos.map((el) => (
        <button
          key={el}
          onClick={() => {
            paginate(el);
          }}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
