import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LangSelector from "../components/controls/LangSelector";
const NavbarBasic = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Cambiamos el nombre de la función para mejorar la claridad
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white px-2">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto">
        <div className="w-2/12">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.svg" className="h-8" alt={t("app.name")} />
            <span className="self-center hidden lg:flex text-xl font-semibold whitespace-nowrap">
              {t("app.name")}
            </span>
          </Link>
        </div>
        <div className="w-7/12">
          <div
            className={`${
              isOpen ? "flex w-full" : "hidden w-0"
            } flex-col justify-end md:flex md:flex-row md:items-center w-full md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex-col md:flex-row flex justify-center items-center md:space-x-4 p-4 mt-4 md:mt-0 border-b md:border-none">
              {["/", "/About"].map((path, index) => (
                <li key={index} className="mb-2 md:mb-0">
                  <Link
                    to={path}
                    className="hover:bg-gray-700 px-0.5 py-1 rounded block"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`${path.substring(1).toLowerCase() || "home"}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-2.5">
          <button
            onClick={toggleNavbar}
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBasic;
