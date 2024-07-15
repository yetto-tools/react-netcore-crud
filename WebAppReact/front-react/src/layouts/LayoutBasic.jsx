import PropTypes from "prop-types";
import NavbarBasic from "../components/NavbarBasic";

const LayoutBasic = ({ children, className = "bg-white shadow rounded" }) => {
  return (
    <div className={"min-h-screen  bg-gray-100"}>
      <NavbarBasic />
      <div className="container mx-auto px-4 mt-4">
        <div className="flex justify-between items-center">
          <div className={`flex-1 p-4 ${className}`}>
            {/* Aquí se renderizará el contenido específico de cada página */}
            {children}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

LayoutBasic.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default LayoutBasic;
