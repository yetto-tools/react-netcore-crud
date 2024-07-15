import PropTypes from "prop-types";

const PaginationFooter = ({ page, totalPages, setPage, loading }) => {
  return (
    <footer className="relative bottom-0 w-full sm:w-10/12  lg:w-7/12 mx-auto flex justify-between items-center mt-4">
      <div className="w-8/12 mx-auto flex justify-between items-center">
        <div className="">
          <button
            className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group  ${
              page > 1 && !loading
                ? "bg-sky-600 active:scale-95 shadow"
                : "bg-sky-600/50"
            }`}
            type="button"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={loading || page === 1}
          >
            {"<"}
            <div
              className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                loading ? "animate-shineInfinity" : "group-hover:animate-shine"
              } `}
            />
          </button>
        </div>
        <div className="">
          <button
            className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${
              page > 1 && !loading
                ? "bg-sky-600 active:scale-95 shadow"
                : "bg-sky-600/50"
            }`}
            type="button"
            onClick={() => setPage(1)}
            disabled={loading || page === 1}
          >
            {"<<"}
            <div
              className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                loading ? "animate-shineInfinity" : "group-hover:animate-shine"
              } `}
            />
          </button>
        </div>
        <div className="border text-center inline-flex">
          <select
            className="max-w-16 h-10 px-2.5 py-1.5 text-sm font-semibold border-none focus:border-sky-400 text-center"
            value={page}
            onChange={(event) => setPage(parseInt(event.target.value, 10))}
          >
            {[...Array(totalPages).keys()].map((page) => (
              <option key={page + 1} value={page + 1}>
                {page + 1}
              </option>
            ))}
          </select>

          <span className="w-16 h-10 px-2.5 py-1.5 text-sm ">/</span>
          <input
            className="w-16 h-10 px-2.5 py-1.5 text-sm outline-none text-center"
            value={totalPages}
            readOnly={true}
            disabled={true}
          />
        </div>

        <div className="">
          <button
            className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${
              page < totalPages && !loading
                ? "bg-sky-600 active:scale-95 shadow"
                : "bg-sky-600/50"
            }`}
            type="button"
            onClick={() => setPage(totalPages)}
            disabled={loading || page == totalPages}
          >
            {">>"}
            <div
              className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                loading ? "animate-shineInfinity" : "group-hover:animate-shine"
              } `}
            />
          </button>
        </div>
        <div className="">
          <button
            className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${
              page < totalPages && !loading
                ? "bg-sky-600 active:scale-95 shadow"
                : "bg-sky-600/50"
            }`}
            type="button"
            onClick={() => {
              console.log(page);
              setPage((prev) => Math.min(totalPages, prev + 1));
            }}
            disabled={loading || page == totalPages}
          >
            {">"}
            <div
              className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                loading ? "animate-shineInfinity" : "group-hover:animate-shine"
              } `}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

PaginationFooter.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  setPage: PropTypes.func,
  loading: PropTypes.bool,
};

export default PaginationFooter;
