import PropTypes from "prop-types";
import Navbar from "../components/NavBar";

const LayoutDefault = ({ children, className = "bg-white shadow rounded" }) => {
  return (
    <div className={"min-h-screen  bg-gray-100"}>
      <Navbar />
      <div className="container mx-auto px-4 mt-4">
        <div className="flex justify-between items-center">
          <main className={`flex-1 p-4 ${className}`}>
            {/* Aquí se renderizará el contenido específico de cada página */}
            {children}{" "}
          </main>
        </div>
      </div>
    </div>
  );
};

LayoutDefault.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default LayoutDefault;
