import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useAuthStore from "../../stores/useAuthStore";
import { API } from "../../stores/API/Endpoints";
import APIFetchData from "../../stores/useFetchDataStore";
import useProductsStore from "../../stores/useProductsStore";
import useLoading from "../../stores/useLoading";
import ProductSearch from "../controls/ProductSearch";
import useDetailLines from "../../stores/useDetailLines";
import { IconTrash } from "../../icons/Icon";

const SalesForm = ({
  formValues,
  setFormValue,
  handleChange,
  handleSubmit,
  isModalOpen,
}) => {
  const { t } = useTranslation();
  const { auth } = useAuthStore((state) => ({
    auth: state.auth,
  })); // Extrae la función de login
  const { isLoading, setIsLoading } = useLoading((state) => ({
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading,
  }));
  const { products, setProducts, removeLineById, setLineQuantity } =
    useProductsStore((state) => ({
      products: state.products,
      setProducts: state.setProducts,
      removeLineById: state.removeLineById,
      setLineQuantity: state.setLineQuantity,
    }));

  useEffect(() => {
    let userID = auth?.userData?.id_usuario;
    setFormValue((prev) => ({
      ...prev,
      ["uid_creacion"]: userID,
    }));
  }, []);

  const handleProductsSearch = async (event) => {
    event ? event.preventDefault() : null;
    await APIFetchData({
      setStore: setProducts,
      url: `${API.product.products.url}?page_size=25&page_number=${1}`,
      method: API.product.products.method,
      setIsLoading: setIsLoading,
    });
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const { lines, setLines } = useDetailLines((state) => ({
    lines: state.lines,
    setLines: state.setLines,
  }));

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleRemove = (id) => {
    console.log(id);
    removeLineById(id);
  };

  const handleChangeQuantity = (e, id) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setLineQuantity(id, newQuantity);
    }
  };

  return (
    <>
      <section className="md:w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border">
        <form className="w-full flex-1 justify-center items-center mx-4 p-10">
          <div className="flex justify-between items-center gap-4 w-full">
            <section className="w-10/12 mx-auto inline-flex justify-start">
              <button
                className={`max-w-24 w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${
                  !isLoading
                    ? "bg-green-600 active:scale-95 shadow"
                    : "bg-green-600/50"
                }`}
                onClick={handleSubmit}
                type="submit"
                disabled={isLoading}
              >
                {t("products.save")}

                <div
                  className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                    isLoading
                      ? "animate-shineInfinity"
                      : "group-hover:animate-shine"
                  } `}
                />
              </button>
            </section>
            <label className="inline-flex flex-1 flex-col cursor-pointer">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("products.form.field.state")}
              </span>
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  name="estado"
                  className="px-2 py-1.5 border outline-none focus:border-sky-500 w-5 h-10 bg-slate-50"
                  placeholder={t("products.form.field.state")}
                  onChange={handleChange}
                  checked={formValues.estado === 1}
                  required={true}
                />
                <span className="font-semibold text-sm px-2 py-1.5 w-16">
                  {formValues.estado === 1
                    ? t("state.active")
                    : t("state.inactive")}
                </span>
              </div>
            </label>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-4  ">
            <label className="flex-1 flex-col hidden">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("products.form.field.id")}
              </span>
              <input
                type="hidden"
                name="id"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("products.form.field.id")}
                onChange={handleChange}
                value={formValues.id}
                disabled={true}
              />
            </label>

            <label className="inline-flex flex-1 flex-col">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("products.form.field.name")}
              </span>
              <input
                type="nombre"
                name="nombre"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("products.form.field.name")}
                onChange={handleChange}
                value={formValues.nombre}
                required={true}
              />
            </label>

            <label className="inline-flex flex-1 flex-col max-w-28">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("products.form.field.price")}
              </span>
              <input
                type="number"
                min={1.0}
                step={1}
                name="precio"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50 text-right"
                placeholder={t("products.form.field.price")}
                onChange={handleChange}
                value={formValues.precio}
                required={true}
              />
            </label>

            <label className="inline-flex flex-1 flex-col max-w-28">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("products.form.field.cost")}
              </span>
              <input
                type="number"
                min={1.0}
                step={1.0}
                name="costo"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50 text-right"
                placeholder={t("products.form.field.cost")}
                onChange={handleChange}
                value={formValues.costo}
                required={false}
              />
            </label>

            <label className="inline-flex flex-1 flex-col hidden">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("products.form.field.created")}
              </span>
              <input
                type="hidden"
                name="uid_creacion"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("products.form.field.created")}
                value={formValues.uid_creacion || auth?.userData?.id_usuario}
                onChange={handleChange}
                required={true}
                disabled={true}
              />
            </label>
          </div>
          <div className="w-full py-4 my-4 border rounded">
            <ProductSearch onSelectProduct={handleProductSelect} />
          </div>

          <div className="w-full py-4">
            {lines &&
              lines.length > 0 &&
              lines.map((item, index) => (
                <article
                  key={item.id_producto}
                  className="w-full grid grid-cols-10"
                >
                  <span className="col-span-1">{index + 1}</span>
                  <span className="col-span-3">{item.nombre}</span>
                  <span className="col-span-3">
                    <input
                      type="number"
                      min={1}
                      defaultValue={1}
                      className="border w-16 text-right outline-none focus:border-sky-500 bg-sky-50 px-1.5"
                      onChange={(event) => {
                        handleChangeQuantity(event.target.value);
                      }}
                    />
                  </span>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="p-4 bg-red-500 border"
                  >
                    <IconTrash />
                  </button>
                </article>
              ))}
          </div>
          <div className="w-full hidden">
            <label className="w-full inline-flex flex-1 flex-col">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("products.form.field.description")}
              </span>
              <textarea
                type="text"
                name="descripcion"
                rows="4"
                cols="50"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("products.form.field.description")}
                onChange={handleChange}
                value={formValues.descripcion}
                required={true}
              />
            </label>
            <label className="w-full inline-flex flex-1 flex-col">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("products.form.field.comment")}
              </span>
              <textarea
                rows="3"
                cols="50"
                name="comentario"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("products.form.field.comment")}
                onChange={handleChange}
                value={formValues.comentario}
              />
            </label>
          </div>
        </form>
      </section>
    </>
  );
};

SalesForm.propTypes = {
  isLoading: PropTypes.bool,
  formValues: PropTypes.object,
  setFormValue: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isModalOpen: PropTypes.bool,
};

export default SalesForm;
