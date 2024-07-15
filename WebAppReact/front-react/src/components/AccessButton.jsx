import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AccessButton = ({
  title = "Title Name app",
  url,
  src = "https://via.placeholder.com/150",
}) => {
  return (
    <div className="max-w-36 m-2">
      <Link to={url}>
        <article className="grid grid-cols-1 grid-rows-6 place-content-between place-items-center bg-white rounded shadow max-w-36 max-h-36 cursor-pointer relative overflow-hidden group active:scale-95 hover:scale-105 transform transition-transform duration-300">
          <div className="row-span-4">
            <div className="w-full justify-center items-center gap-4 mt-4">
              <img
                src={src}
                className="object-cover object-center"
                width={92}
                height={92}
              />
            </div>
          </div>
          <div className="row-span-2 ">
            <p className="text-md font-semibold text-center text-wrap truncate w-40 h-5">
              {title}
            </p>
          </div>
          <div
            className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-sky-400/50 opacity-40 group-hover:animate-shine`}
          />
        </article>
      </Link>
    </div>
  );
};

AccessButton.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  src: PropTypes.string,
};

export default AccessButton;
