import { useState } from "react";
import RegisterUserForm from "../components/forms/RegisterUserForm";
import { TypeFormNewUser } from "../types/TypesForm";
import useFetchDataStore from "../stores/useFetchDataStore";
import { useTranslation } from "react-i18next";

import LayoutBasic from "../layouts/LayoutBasic";
import { API } from "../stores/API/Endpoints";

function RegisterPage() {
  const [formValues, setFormValue] = useState(TypeFormNewUser);
  const { t } = useTranslation();
  const { callApi, data, getData, loading, error } = useFetchDataStore(
    (state) => ({
      callApi: state.callApi,
      data: state.data,
      getData: state.getData,
      loading: state.loading,
      error: state.error,
    })
  );

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? (checked ? 1 : 0) : value;
    setFormValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    callApi(`${API.categories.url}/save`, "PUT", formValues);
  };

  return (
    <LayoutBasic>
      <div className="w-10/12 mx-auto">
        <div className="bg-white px-2 py-2 flex justify-between items-center gap-x-4">
          <span className="text-2xl font-semibold">{t("register.title")}</span>
        </div>
        <RegisterUserForm
          loading={loading}
          formValues={formValues}
          setFormValue={setFormValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </LayoutBasic>
  );
}

export default RegisterPage;
