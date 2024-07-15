import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import useAuthStore from "../../stores/useAuthStore";
import { useEffect } from "react";
import { IconSave } from "../../icons/Icon";

const CustomerForm = ({
  loading,
  formValues,
  setFormValue,
  handleChange,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  const { auth } = useAuthStore((state) => ({
    user: state.user,
  })); // Extrae la función de login

  useEffect(() => {
    let userID = auth?.userData?.id_usuario;
    setFormValue((prev) => ({
      ...prev,
      ["uid_creacion"]: userID,
    }));
  }, []);

  return (
    <>
      <section className="md:w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border">
        <form className="flex flex-wrap justify-between items-center gap-x-4 p-2 lg:p-10">
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
                    ? t("customers.save")
                    : t("customers.change")}
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
                {t("customers.form.field.state")}
              </span>
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  name="estado"
                  className="px-2 py-1.5 border outline-none focus:border-sky-500 w-5 h-10 bg-slate-50"
                  placeholder={t("customers.form.field.state")}
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
          <div className="flex flex-wrap justify-between items-center gap-4">
            <label className="flex-1 flex-col hidden">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("customers.form.field.id")}
              </span>
              <input
                type="hidden"
                name="id_usuario"
                className="w-full px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("customers.form.field.id")}
                onChange={handleChange}
                value={formValues.id}
                disabled={true}
              />
            </label>
            <div className="flex w-full gap-4">
              <div className="w-4/12 px-1">
                <label className="inline-flex flex-1 flex-col w-full">
                  <span className="required capitalize font-semibold text-sm py-1.5">
                    {t("customers.form.field.tax_id")}
                  </span>
                  <input
                    type="text"
                    name="nit"
                    maxLength={20}
                    className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                    placeholder={t("customers.form.field.tax_id")}
                    onChange={handleChange}
                    value={formValues.nit}
                    required={true}
                  />
                </label>
              </div>
              <div className="w-8/12">
                <label className="inline-flex flex-1 flex-col w-full">
                  <span className="required capitalize font-semibold text-sm py-1.5">
                    {t("customers.form.field.name")}
                  </span>
                  <input
                    type="text"
                    name="nombre"
                    maxLength={200}
                    className="w-full px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                    placeholder={t("customers.form.field.name")}
                    onChange={handleChange}
                    value={formValues.nombre}
                    required={true}
                  />
                </label>
              </div>
            </div>
            <div className="flex w-full gap-4">
              <label className="inline-flex flex-1 flex-col">
                <span className="required capitalize font-semibold text-sm py-1.5">
                  {t("customers.form.field.address")}
                </span>
                <textarea
                  cols={4}
                  maxLength={350}
                  type="text"
                  name="direccion"
                  className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                  placeholder={t("customers.form.field.address")}
                  onChange={handleChange}
                  value={formValues.direccion}
                  required={true}
                />
              </label>
            </div>

            <div className="flex w-full gap-4">
              <label className="inline-flex flex-1 flex-col">
                <span className="capitalize font-semibold text-sm py-1.5">
                  {t("customers.form.field.email")}
                </span>
                <input
                  type="email"
                  name="correo"
                  maxLength={200}
                  className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                  placeholder={t("customers.form.field.email")}
                  onChange={handleChange}
                  value={formValues.correo}
                  required={false}
                />
              </label>

              <label className="inline-flex flex-1 flex-col">
                <span className="capitalize font-semibold text-sm py-1.5">
                  {t("customers.form.field.phone")}
                </span>
                <input
                  type="tel"
                  name="telefono"
                  pattern="[0-9]{4}-[0-9]{4}"
                  className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                  placeholder={t("customers.form.field.phone")}
                  onChange={handleChange}
                  value={formValues.telefono}
                  required={false}
                />
              </label>
            </div>
            <label className="inline-flex flex-1 flex-col hidden">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("customers.form.field.created")}
              </span>
              <input
                type="hidden"
                name="uid_creacion"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("customers.form.field.created")}
                value={formValues.uid_creacion}
                onChange={handleChange}
                required={true}
                disabled={true}
              />
            </label>

            <label className="inline-flex flex-1 flex-col">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("customers.form.field.comment")}
              </span>
              <textarea
                rows="4"
                cols="50"
                name="comentario"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("customers.form.field.comment")}
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

CustomerForm.propTypes = {
  loading: PropTypes.bool,
  formValues: PropTypes.object,
  setFormValue: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default CustomerForm;
