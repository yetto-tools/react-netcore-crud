import PropTypes from "prop-types";
import { IconEdit } from "../../icons/Icon";
import { useTranslation } from "react-i18next";

export const ListViewCategories = ({ children }) => {
  const { t } = useTranslation();

  return (
    <>
      <article className="w-full flex mx-auto border justify-between items-center gap-4 px-4 bg-gray-800 text-white">
        <div className="w-4/12 text-left">
          <span className="capitalize font-semibold">
            {t("categories.form.field.name")}
          </span>{" "}
        </div>
        <div className="w-4/12 text-center">
          <span className="capitalize font-semibold">
            {t("categories.form.field.description")}
          </span>{" "}
        </div>
        <div className="w-2/12 text-center">
          <span className="capitalize font-semibold">
            {t("categories.form.field.state")}
          </span>{" "}
        </div>
        <div className="w-2/12 text-center">
          <span className="capitalize font-semibold">
            {t("categories.change")}
          </span>{" "}
        </div>
      </article>
      <article className="overflow-y-scroll h-96 w-full">{children}</article>
    </>
  );
};

export const ItemViewCategories = ({
  t,
  categories,
  handleUpdate,
  loading,
}) => {
  return (
    <>
      {categories.map((item, index) => (
        <div
          key={`${item.id_categoria}${index}`}
          className={`w-full flex mx-auto border justify-between items-center  gap-4 px-4 py-2.5 text-slate-800 ${
            index % 2 == 0 ? "bg-slate-100" : "bg-white"
          } `}
        >
          <div className="w-4/12 text-left">
            <span className="capitalize font-semibold">{item.nombre}</span>{" "}
          </div>
          <div className="w-4/12 text-center">
            <span className="capitalize font-semibold">
              {item.descripcion || "-"}
            </span>{" "}
          </div>
          <div className="w-2/12 text-center">
            <span className="capitalize text-center font-semibold inline-flex justify-center w-full items-center">
              {item.estado == 1 ? (
                <span className="text-center border rounded-full px-2 text-xs text-sky-700 bg-sky-200 border-sky-700 font-semibold">
                  {t("state.active")}
                </span>
              ) : (
                <span className="text-center border rounded-full px-2 text-xs text-gray-700 bg-gray-200 border-gray-700 font-semibold">
                  {t("state.inactive")}
                </span>
              )}
            </span>
          </div>
          <div className="w-2/12 text-center">
            <span className="capitalize font-semibold">
              <button
                value={item.id_categoria}
                className={`max-w-24 rounded-sm text-xs outline-orange-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${
                  !loading
                    ? "bg-orange-600 active:scale-95 shadow"
                    : "bg-orange-600/50"
                }`}
                onClick={handleUpdate}
                type="button"
                disabled={loading}
              >
                <span>
                  <IconEdit />
                </span>
                <div
                  className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                    loading
                      ? "animate-shineInfinity"
                      : "group-hover:animate-shine"
                  } `}
                />
              </button>
            </span>{" "}
          </div>
        </div>
      ))}
    </>
  );
};

ListViewCategories.propTypes = {
  children: PropTypes.node,
};

ItemViewCategories.propTypes = {
  t: PropTypes.func,
  categories: PropTypes.any,
  handleUpdate: PropTypes.func,
  loading: PropTypes.bool,
  index: PropTypes.number,
};

export default ListViewCategories;
