import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./SearchAndSelectedItem.css";
import { IconClose, IconRefresh } from "../../icons/Icon";

const SearchAndSelectedItem = ({
  data,
  setFormValue,
  handleProductsSearch,
  isModalOpen,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    if (!isOpen && data.length === 0) {
      handleProductsSearch();
    }
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOptions((currentOptions) => {
      const isAlreadySelected = currentOptions.some(
        (selectedOption) => selectedOption.id_producto === option.id_producto
      );
      let selected = isAlreadySelected
        ? currentOptions.filter(
            (selectedOption) =>
              selectedOption.id_producto !== option.id_producto
          )
        : [...currentOptions, option];

      return selected;
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setFormValue((prev) => ({
      ...prev,
      ["linea"]: selectedOptions,
    }));
  }, [selectedOptions]);

  useEffect(() => {
    if (!isModalOpen) {
      setSelectedOptions([]);
      setSearchTerm("");
    }
  }, [isModalOpen]);

  const filteredOptions = data.filter((option) =>
    option.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="multi-select-container">
      <div className="selected-items">
        {selectedOptions.map((option) => (
          <span key={option.id_producto} className="selected-tag">
            {option.nombre}
            <button
              type="button"
              onClick={() => handleSelect(option)}
              className="close-button"
            >
              <IconClose />
            </button>
          </span>
        ))}
        <button
          type="button"
          onClick={toggleDropdown}
          className="dropdown-button font-semibold text-sm"
        >
          {isOpen ? "Close" : "Open"}
        </button>
        <span className="pl-2">
          <button
            className="bg-orange-400 text-white p-1 shadow hover:scale-95"
            value={"refresh"}
            onClick={handleProductsSearch}
          >
            <IconRefresh />
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="dropdown-content">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar..."
            className="search-input"
          />
          <ul className="options-list">
            {filteredOptions.map((option) => (
              <li
                key={option.id_producto}
                onClick={() => handleSelect(option)}
                className={
                  selectedOptions.some(
                    (o) => o.id_producto === option.id_producto
                  )
                    ? "selected"
                    : ""
                }
              >
                <span>{option.nombre}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

SearchAndSelectedItem.propTypes = {
  handleProductsSearch: PropTypes.func,
  setFormValue: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id_producto: PropTypes.number,
      nombre: PropTypes.string,
    })
  ),
  isModalOpen: PropTypes.bool,
};

export default SearchAndSelectedItem;
