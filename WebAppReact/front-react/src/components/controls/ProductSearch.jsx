import { useState } from "react";
import PropTypes from "prop-types";
import "./ProductSearch.css"; // Asegúrate de agregar estilos según sea necesario
import useDetailLines from "../../stores/useDetailLines";
import { convertToDecimal } from "../../helpers/Validated";

const ProductSearch = ({ onSelectProduct }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { lines, setLines } = useDetailLines((state) => ({
    lines: state.lines,
    setLines: state.setLines,
  }));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    // Aquí se debe llamar a la API para buscar productos
    const response = await fetch(
      `http://localhost:5193/api/Product/search?nombre=${searchTerm}`
    );
    const data = await response.json();
    setProducts(data.content);
    setSearchTerm("");
  };

  const handleSelect = (product) => {
    setSelectedProduct(product);
    onSelectProduct(product);
    setLines(product);
    console.log(product);
    setProducts([]);
  };

  return (
    <div className="product-search-container">
      <div className="flex justify-between items-center gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar producto..."
          className="search-input"
        />
        <button
          onClick={handleSearch}
          className="bg-sky-600 text-white font-semibold text-sm px-2 py-1.5"
        >
          Buscar
        </button>
      </div>

      {products.length > 0 && (
        <ul className="products-list">
          {products.map((product) => (
            <li
              key={product.id_producto}
              onClick={() => handleSelect(product)}
              className={
                selectedProduct?.id_producto === product.id_producto
                  ? "selected"
                  : ""
              }
            >
              <span>{product.nombre}</span>
              <span>{product.precio.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}

      {selectedProduct && (
        <div className="selected-product hidden">
          <article>
            <h3>Producto seleccionado:</h3>
            <p>Nombre: {selectedProduct.nombre}</p>
            <p>Precio: ${selectedProduct.precio.toFixed(2)}</p>
          </article>
        </div>
      )}
    </div>
  );
};

ProductSearch.propTypes = {
  onSelectProduct: PropTypes.func.isRequired,
};

export default ProductSearch;
