import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./MultiSelect.css";
import { IconClose, IconRefresh } from "../../icons/Icon";

const MultiSelect = ({
  data,
  setFormValue,
  handleCategoriesRefresh,
  isModalOpen,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (!isOpen && data.length == 0) {
      handleCategoriesRefresh();
    }
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOptions((currentOptions) => {
      const isAlreadySelected = currentOptions.some(
        (selectedOption) => selectedOption.id_categoria === option.id_categoria
      );
      let selected = isAlreadySelected
        ? currentOptions.filter(
            (selectedOption) =>
              selectedOption.id_categoria !== option.id_categoria
          )
        : [...currentOptions, option];

      return selected;
    });
  };
  useEffect(() => {
    setFormValue((prev) => ({
      ...prev,
      ["categorias"]: selectedOptions,
    }));
  }, [selectedOptions]);

  useEffect(() => {
    if (!isModalOpen) {
      setSelectedOptions([]);
    }
  }, [isModalOpen]);

  return (
    <div className="multi-select-container">
      <div className="selected-items">
        {selectedOptions.map((option) => (
          <span key={option.id_categoria} className="selected-tag">
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
            onClick={handleCategoriesRefresh}
          >
            <IconRefresh />
          </button>
        </span>
      </div>

      {isOpen && (
        <ul className="options-list">
          {data.map((option) => (
            <li
              key={option.id_categoria}
              onClick={() => handleSelect(option)}
              className={
                selectedOptions.some(
                  (o) => o.id_categoria === option.id_categoria
                )
                  ? "selected"
                  : ""
              }
            >
              <span>{option.nombre}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

MultiSelect.propTypes = {
  handleCategoriesRefresh: PropTypes.func,
  setFormValue: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id_categoria: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  isModalOpen: PropTypes.bool,
};

export default MultiSelect;
