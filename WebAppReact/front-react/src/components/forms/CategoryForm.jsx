import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import useAuthStore from "../../stores/useAuthStore";
import { useEffect } from "react";
import { IconSave } from "../../icons/Icon";

const CategoryForm = ({
  loading,
  formValues,
  setFormValue,
  handleChange,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  const { auth } = useAuthStore((state) => ({
    auth: state.auth,
  })); // Extrae la función de login

  useEffect(() => {
    let userID = auth?.userData?.id_usuario;
    setFormValue((prev) => ({
      ...prev,
      ["uid_creacion"]: Number(userID),
    }));
  }, []);

  return (
    <>
      <section className="md:w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border">
        <form className="flex flex-wrap justify-between items-center gap-x-4 p-10">
          <div className="flex justify-between items-center gap-4 w-full">
            <section className="w-10/12 mx-auto inline-flex justify-start">
              <button
                className={`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${
                  !loading
                    ? "bg-green-600 active:scale-95 shadow"
                    : "bg-green-600/50"
                }`}
                onClick={handleSubmit}
                type="submit"
                disabled={loading}
              >
                <span>
                  <IconSave />
                </span>
                <span>
                  {formValues.id == 0
                    ? t("categories.save")
                    : t("categories.change")}
                </span>

                <div
                  className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                    loading
                      ? "animate-shineInfinity"
                      : "group-hover:animate-shine"
                  } `}
                />
              </button>
            </section>
            <label className="inline-flex flex-1 flex-col cursor-pointer">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("categories.form.field.state")}
              </span>
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  name="estado"
                  className="px-2 py-1.5 border outline-none focus:border-sky-500 w-5 h-10 bg-slate-50"
                  placeholder={t("categories.form.field.state")}
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
          <div className="flex flex-wrap justify-start items-center gap-4">
            <label className="flex-1 flex-col hidden">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("categories.form.field.id")}
              </span>

              <input
                type="hidden"
                name="id"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("categories.form.field.id")}
                onChange={handleChange}
                value={formValues.id}
                disabled={true}
              />
            </label>

            <label className="inline-flex flex-1 flex-col">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("categories.form.field.name")}
              </span>
              <input
                type="nombre"
                name="nombre"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("categories.form.field.name")}
                onChange={handleChange}
                value={formValues.nombre}
                required={true}
              />
            </label>

            <label className="inline-flex flex-1 flex-col ">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("categories.form.field.description")}
              </span>
              <input
                type="text"
                name="descripcion"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("categories.form.field.description")}
                onChange={handleChange}
                value={formValues.descripcion}
                required={true}
              />
            </label>

            <label className="inline-flex flex-1 flex-col hidden">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("categories.form.field.created")}
              </span>
              <input
                type="hidden"
                name="uid_creacion"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("categories.form.field.created")}
                value={formValues.uid_creacion}
                onChange={handleChange}
                required={true}
                disabled={true}
              />
            </label>
            <div className="w-full">
              <label className="inline-flex flex-1 flex-col w-full">
                <span className="capitalize font-semibold text-sm py-1.5">
                  {t("categories.form.field.comment")}
                </span>
                <textarea
                  rows="4"
                  cols="50"
                  name="comentario"
                  className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                  placeholder={t("categories.form.field.comment")}
                  onChange={handleChange}
                  value={formValues.comentario}
                />
              </label>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

CategoryForm.propTypes = {
  loading: PropTypes.bool,
  formValues: PropTypes.object,
  setFormValue: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default CategoryForm;
