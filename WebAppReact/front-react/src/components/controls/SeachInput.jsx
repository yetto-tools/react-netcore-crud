import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const SearchInput = ({ searchValue, setSearchValue }) => {
  const { t } = useTranslation();
  const [typedValue, setTypedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(typedValue.trim());
    }, 500); // Ajusta el tiempo de debounce según tus necesidades

    return () => {
      clearTimeout(handler);
    };
  }, [typedValue]); // Ejecuta el efecto cuando `typedValue` cambia

  const handleChangeSearch = (event) => {
    event.preventDefault();
    setTypedValue(event.target.value);
  };

  return (
    <input
      type="text"
      className="border rounded-l pl-2 outline-none focus:border-sky-400"
      value={typedValue}
      onChange={handleChangeSearch}
      placeholder={t("categories.search")}
    />
  );
};

SearchInput.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default SearchInput;
