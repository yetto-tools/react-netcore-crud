import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const RegisterUserForm = ({
  loading,
  formValues,
  setFormValue,
  handleChange,
  handleSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <section className="bg-white md:w-2/5 w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border shadow">
      <h4 className="my-2 pt-4 text-xl font-semibold">
        {t("register.form_register")}
      </h4>
      <form className="w-full flex flex-wrap justify-between items-center gap-4 p-10 mx-auto">
        <div className="hidden" hidden>
          <label className="flex flex-col flex-wrap justify-between items-start">
            <span className="font-semibold py-1 px-0.5 capitalize">
              {t("register.field.id")}
            </span>
            <input
              type="number"
              name="id"
              className="border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full"
              value={formValues.id_usuario}
              onChange={handleChange}
              placeholder={t("register.field.id")}
            />
          </label>
        </div>
        <div className="w-full">
          <label className="flex flex-col flex-wrap justify-between items-start">
            <span className="font-semibold py-1 px-0.5 capitalize">
              {t("register.field.user")}
            </span>
            <input
              type="text"
              name="usuario"
              className="border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full"
              value={formValues.usuario}
              onChange={handleChange}
              placeholder={t("register.field.user")}
            />
          </label>
        </div>
        <div className="w-full">
          <label className="flex flex-col flex-wrap justify-between items-start">
            <span className="font-semibold py-1 px-0.5 capitalize">
              {t("register.field.email")}
            </span>
            <input
              type="text"
              name="correo"
              className="border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full"
              value={formValues.correo}
              onChange={handleChange}
              placeholder={t("register.field.email")}
            />
          </label>
        </div>
        <div className="w-full">
          <label className="flex flex-col flex-wrap justify-between items-start">
            <span className="font-semibold py-1 px-0.5 capitalize">
              {t("register.field.password")}
            </span>
            <input
              type="text"
              name="password"
              className="border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full"
              value={formValues.password}
              onChange={handleChange}
              placeholder={t("register.field.password")}
            />
          </label>
        </div>
        <div className="w-full">
          <label className="flex flex-col flex-wrap justify-between items-start">
            <span className="font-semibold py-1 px-0.5 capitalize">
              {t("register.field.confirm_password")}
            </span>
            <input
              type="text"
              name="confirm_password"
              className="border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full"
              value={formValues.confirm_password}
              onChange={handleChange}
              placeholder={t("register.field.confirm_password")}
            />
          </label>
        </div>
        <div className="hidden" hidden>
          <label className="flex flex-col flex-wrap justify-between items-start">
            <span className="font-semibold py-1 px-0.5 capitalize">
              {t("register.field.state")}
            </span>
            <input
              type="hidden"
              name="estado"
              className="border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full"
              value={formValues.estado}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="hidden" hidden>
          <label className="flex flex-col flex-wrap justify-between items-start">
            <span className="font-semibold py-1 px-0.5 capitalize">
              {t("register.field.uid_create")}
            </span>
            <input
              type="hidden"
              name="uid_creacion"
              className="border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full"
              value={formValues.uid_creacion}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="hidden" hidden>
          <label className="flex flex-col flex-wrap justify-between items-start">
            <span className="font-semibold py-1 px-0.5 capitalize">
              {t("register.field.comment")}
            </span>
            <textarea
              rows={4}
              cols={50}
              name="comentario"
              className="border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full"
              value={formValues.comentario}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="w-full inline-flex justify-center items-center gap-4">
          <div className="flex flex-col flex-now justify-center items-center w-7/12 mx-auto mt-4">
            <button
              className={`max-w-72 w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${
                !loading ? "bg-sky-600 active:scale-95" : "bg-sky-600/50"
              }`}
              onClick={handleSubmit}
              type="submit"
              disabled={loading}
            >
              {t("register.field.btn_register")}
              <div
                className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                  loading
                    ? "animate-shineInfinity"
                    : "group-hover:animate-shine"
                } `}
              />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

RegisterUserForm.propTypes = {
  loading: PropTypes.bool,
  formValues: PropTypes.object,
  setFormValue: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default RegisterUserForm;
