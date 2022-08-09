import "./Pagination";

interface IPaginationBtns {
  cryptoPerPage: number;
  totalCryptos: number;
  paginate: (x: number) => void;
}

export default function PaginationBtns({
  cryptoPerPage,
  totalCryptos,
  paginate,
}: IPaginationBtns) {
  const pageCryptos = [];
  for (let i = 1; i <= Math.ceil(totalCryptos / cryptoPerPage); i++) {
    pageCryptos.push(i);
  }

  return (
    <div className="paginationBtns">
      {pageCryptos.map((el) => (
        <button
          className="cryptoBtn"
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
