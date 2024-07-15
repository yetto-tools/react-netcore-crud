import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import useAuthStore from "../../stores/useAuthStore";
import { useEffect } from "react";
import { IconSave } from "../../icons/Icon";

const UsersForm = ({
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
                  {formValues.id_usuario == 0
                    ? t("users.save")
                    : t("users.change")}
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
            <label className="inline-flex flex-1 flex-col">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("users.form.field.state")}
              </span>
              <input
                type="checkbox"
                name="estado"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 w-5 h-10 bg-slate-50"
                placeholder={t("users.form.field.state")}
                onChange={handleChange}
                checked={formValues.estado === 1}
                required={true}
              />
            </label>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-4">
            <label className="flex-1 flex-col hidden">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("users.form.field.id")}
              </span>
              <input
                type="hidden"
                name="id_usuario"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("users.form.field.id")}
                onChange={handleChange}
                value={formValues.id}
                disabled={true}
              />
            </label>

            <label className="inline-flex flex-1 flex-col">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("users.form.field.username")}
              </span>
              <input
                type="text"
                name="usuario"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("users.form.field.username")}
                onChange={handleChange}
                value={formValues.usuario}
                required={true}
              />
            </label>

            <label className="inline-flex flex-1 flex-col">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("users.form.field.email")}
              </span>
              <input
                type="text"
                name="correo"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("users.form.field.email")}
                onChange={handleChange}
                value={formValues.correo}
                required={true}
              />
            </label>
            <label className="inline-flex flex-1 flex-col">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("users.form.field.password")}
              </span>
              <input
                type="password"
                name="password"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("users.form.field.password")}
                onChange={handleChange}
                value={formValues.password}
                required={true}
              />
            </label>

            <label className="inline-flex flex-1 flex-col hidden">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("users.form.field.created")}
              </span>
              <input
                type="hidden"
                name="uid_creacion"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("users.form.field.created")}
                value={formValues.uid_creacion}
                onChange={handleChange}
                required={true}
                disabled={true}
              />
            </label>

            <label className="inline-flex flex-1 flex-col">
              <span className="capitalize font-semibold text-sm py-1.5">
                {t("users.form.field.comment")}
              </span>
              <textarea
                rows="4"
                cols="50"
                name="comentario"
                className="px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50"
                placeholder={t("users.form.field.comment")}
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

UsersForm.propTypes = {
  loading: PropTypes.bool,
  formValues: PropTypes.object,
  setFormValue: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default UsersForm;
