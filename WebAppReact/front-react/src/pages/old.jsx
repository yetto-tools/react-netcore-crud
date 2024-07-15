import { useTranslation } from "react-i18next";
import LayoutDefault from "../layouts/LayoutDefault";
import useCategoriesStore from "../stores/useCategoriesStore";
import useFetchDataStore from "../stores/useFetchDataStore";
import { useEffect, useState } from "react";
import { API } from "../stores/API/Endpoints";
import { TypeFormCategory, setTypeFormCategory } from "../types/TypesForm";
import useAuthStore from "../stores/useAuthStore";
import Modal from "../components/controls/Modal";
import CategoryForm from "../components/forms/CategoryForm";
import SearchInput from "../components/controls/SeachInput";
import { toast } from "react-toastify";

const CategoriesPage = () => {
  const { t } = useTranslation();
  const [formValues, setFormValue] = useState(TypeFormCategory);
  const [searchValue, setSearchValue] = useState("");
  const [pageCategories, setPageCategories] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { auth } = useAuthStore((state) => ({
    auth: state.auth,
  })); // Extrae la función de login

  const { setCategory } = useCategoriesStore((state) => ({
    setCategory: state.setCategory,
  }));

  const { callApi, data, getData, refreshData, loading, error } =
    useFetchDataStore((state) => ({
      callApi: state.callApi,
      data: state.data,
      getData: state.getData,
      refreshData: state.refreshData,
      loading: state.loading,
      error: state.error,
    }));

  const categories = getData(
    `${API.categories.url}/list?page_size=2age_number=${pageCategories}`
  );

  useEffect(() => {
    const userID = user?.userData?.id_usuario || 0;
    setFormValue((prev) => ({
      ...prev,
      ["uid_creacion"]: userID,
    }));
  }, [callApi]);

  const handleRefreshCategories = (event) => {
    if (event != null) {
      if (event.target.value == "refresh") {
        toast.info(t("action.refreshData"));
      }
    }
    refreshData(
      `${API.categories.url}/list?page_size=2&page_number=${pageCategories}`
    );
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    // Verifica si el input es de tipo checkbox

    const inputValue = type === "checkbox" ? (checked ? 1 : 0) : value;

    setFormValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    const dataBody = formValues;
    console.log(dataBody);
    callApi(`${API.categories.url}/save`, "PUT", dataBody);
  };
  const datos = getData(`${API.categories.url}/save`);

  useEffect(() => {
    if (!loading) {
      if (
        datos &&
        datos.response &&
        datos.response.length > 0 &&
        datos.response[0].message
      ) {
        switch (datos["response"][0]["result"]) {
          case -1:
            toast.error(`${datos["response"][0]["message"]}`);
            break;
          case 0:
            callApi(API.products);
            toast.warn(`${datos["response"][0]["message"]}`);
            break;
          case 1:
            {
              if (
                datos["response"][0]["message"] == "insert" ||
                datos["response"][0]["message"] == "update"
              )
                toast.success(t(`action.${datos["response"][0]["message"]}`));
              else toast.success(`${datos["response"][0]["message"]}`);
            }
            handleRefreshCategories();
            closeModal();
            break;
          default:
            toast.info(`${datos["response"][0]["message"]}`);
        }
      }
      if (categories.length == 0) {
        handleRefreshCategories();
        // setTotalPages(categories?.response?.[0]?.total_pages ?? 1);
      }
    }
  }, [datos]);

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setFormValue(TypeFormCategory);
    setModalOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchValue);
    handleRefreshCategories();
  };

  const handleUpdate = (event) => {
    let id = event.currentTarget.value;
    const edit = categories.content.find(
      (item) => item.id_categoria === Number(id)
    );
    console.log(edit);
    const newValue = setTypeFormCategory(edit);
    setFormValue(newValue);
    openModal();
  };

  return (
    <LayoutDefault>
      <div className="flex-1 w-full">
        <section className="bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ">
          <h1 className="text-2xl font-semibold mb-1 pr-4">
            {t("categories.title")}
          </h1>
          <span>
            <button
              className="bg-orange-400 text-white p-1 shadow hover:scale-95"
              value={"refresh"}
              onClick={handleRefreshCategories}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path>
              </svg>
            </button>
          </span>
        </section>
        <section className="w-full bg-white divide-y border-b pb-4 mb-2.5">
          <section className="w-full px-5 mx-auto flex justify-between items-center">
            <div>
              <button
                className={`max-w-24 w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${
                  !loading
                    ? "bg-green-600 active:scale-95 shadow"
                    : "bg-green-600/50"
                }`}
                onClick={openModal}
                type="submit"
                disabled={loading}
              >
                {t("categories.new")}
                <div
                  className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                    loading
                      ? "animate-shineInfinity"
                      : "group-hover:animate-shine"
                  } `}
                />
              </button>
            </div>
            <div className="inline-flex">
              <SearchInput
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              <button
                className={`max-w-24 w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${
                  !loading
                    ? "bg-sky-600 active:scale-95 shadow"
                    : "bg-sky-600/50"
                }`}
                onClick={handleSearch}
                type="button"
                disabled={loading}
              >
                {t("categories.search")}
                <div
                  className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                    loading
                      ? "animate-shineInfinity"
                      : "group-hover:animate-shine"
                  } `}
                />
              </button>
            </div>
          </section>
        </section>

        <section className="md:w-11/12 lg:w-full min-h-96 flex flex-col justify-between items-center mx-auto ">
          <div className="w-full h-96 flex justify-start items-center flex-col border mb-4 pb-2">
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
            <article className="overflow-y-scroll h-96 w-full">
              {categories &&
                categories?.content?.length > 0 &&
                categories.content.map((item, index) => (
                  <div
                    key={`${item.id_categoria}${index}`}
                    className={`w-full flex mx-auto border justify-between items-center  gap-4 px-4 py-2.5 text-slate-800 ${
                      index % 2 == 0 ? "bg-slate-100" : "bg-white"
                    } `}
                  >
                    <div className="w-4/12 text-left">
                      <span className="capitalize font-semibold">
                        {item.nombre}
                      </span>{" "}
                    </div>
                    <div className="w-4/12 text-center">
                      <span className="capitalize font-semibold">
                        {item.descripcion || "-"}
                      </span>{" "}
                    </div>
                    <div className="w-2/12 text-center">
                      <span className="capitalize font-semibold">
                        {item.estado}
                      </span>{" "}
                    </div>
                    <div className="w-2/12 text-center">
                      <span className="capitalize font-semibold">
                        <button
                          value={item.id_categoria}
                          className={`max-w-24 w-full min-w-20 outline-orange-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${
                            !loading
                              ? "bg-orange-600 active:scale-95 shadow"
                              : "bg-orange-600/50"
                          }`}
                          onClick={handleUpdate}
                          type="button"
                          disabled={loading}
                        >
                          {t("categories.change")}
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
            </article>
          </div>
          <footer className="relative bottom-0  w-full lg:w-5/12 mx-auto flex justify-between items-center mt-4">
            <div className="w-8/12 mx-auto flex justify-between items-center">
              <div className="">
                <button
                  className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group  ${
                    pageCategories > 1 && !loading
                      ? "bg-sky-600 active:scale-95 shadow"
                      : "bg-sky-600/50"
                  }`}
                  type="button"
                  onClick={() =>
                    setPageCategories((prev) => Math.max(1, prev - 1))
                  }
                  disabled={loading || pageCategories === 1}
                >
                  {"<"}
                  <div
                    className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                      loading
                        ? "animate-shineInfinity"
                        : "group-hover:animate-shine"
                    } `}
                  />
                </button>
              </div>
              <div className="">
                <button
                  className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${
                    pageCategories > 1 && !loading
                      ? "bg-sky-600 active:scale-95 shadow"
                      : "bg-sky-600/50"
                  }`}
                  type="button"
                  onClick={() => setPageCategories(1)}
                  disabled={loading || pageCategories === 1}
                >
                  {"<<"}
                  <div
                    className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                      loading
                        ? "animate-shineInfinity"
                        : "group-hover:animate-shine"
                    } `}
                  />
                </button>
              </div>
              <div className="border text-center">
                <select
                  className="w-16 h-10 px-2.5 py-1.5 text-sm font-semibold border-none focus:border-sky-400 text-center"
                  value={pageCategories}
                  onChange={(event) =>
                    setPageCategories(parseInt(event.target.value, 10))
                  }
                >
                  {[...Array(totalPages).keys()].map((page) => (
                    <option key={page + 1} value={page + 1}>
                      {page + 1}
                    </option>
                  ))}
                </select>

                <span className="w-16 h-10 px-2.5 py-1.5 text-sm ">/</span>
                <input
                  className="w-16 h-10 px-2.5 py-1.5 text-sm outline-none text-center"
                  value={totalPages ?? 1}
                  readOnly={true}
                  disabled={true}
                />
              </div>
              <div className="">
                <button
                  className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${
                    pageCategories < totalPages && !loading
                      ? "bg-sky-600 active:scale-95 shadow"
                      : "bg-sky-600/50"
                  }`}
                  type="button"
                  onClick={() => setPageCategories(totalPages)}
                  disabled={loading || pageCategories === totalPages}
                >
                  {">>"}
                  <div
                    className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                      loading
                        ? "animate-shineInfinity"
                        : "group-hover:animate-shine"
                    } `}
                  />
                </button>
              </div>
              <div className="">
                <button
                  className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${
                    pageCategories < totalPages && !loading
                      ? "bg-sky-600 active:scale-95 shadow"
                      : "bg-sky-600/50"
                  }`}
                  type="button"
                  onClick={() =>
                    setPageCategories((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={loading || pageCategories === totalPages}
                >
                  {">"}
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
          </footer>
        </section>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="w-10/12 flex justify-between items-center border-b mx-auto">
            <h3 className="text-2xl font-semibold">
              {formValues.id > 0 ? t("action.change") : t("action.new")}
            </h3>
          </div>
          <CategoryForm
            loading={loading}
            formValues={formValues}
            setFormValue={setFormValue}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Modal>
      </div>
    </LayoutDefault>
  );
};

export default CategoriesPage;
{
  /* 
          <footer className="relative bottom-0  w-full lg:w-5/12 mx-auto flex justify-between items-center mt-4">
            <div className="w-8/12 mx-auto flex justify-between items-center">
              <div className="">
                <button
                  className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group  ${
                    pageCategories > 1 && !loading
                      ? "bg-sky-600 active:scale-95 shadow"
                      : "bg-sky-600/50"
                  }`}
                  type="button"
                  onClick={() =>
                    setPageCategories((prev) => Math.max(1, prev - 1))
                  }
                  disabled={loading || pageCategories === 1}
                >
                  {"<"}
                  <div
                    className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                      loading
                        ? "animate-shineInfinity"
                        : "group-hover:animate-shine"
                    } `}
                  />
                </button>
              </div>
              <div className="">
                <button
                  className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${
                    pageCategories > 1 && !loading
                      ? "bg-sky-600 active:scale-95 shadow"
                      : "bg-sky-600/50"
                  }`}
                  type="button"
                  onClick={() => setPageCategories(1)}
                  disabled={loading || pageCategories === 1}
                >
                  {"<<"}
                  <div
                    className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                      loading
                        ? "animate-shineInfinity"
                        : "group-hover:animate-shine"
                    } `}
                  />
                </button>
              </div>
              <div className="border text-center">
                <select
                  className="w-16 h-10 px-2.5 py-1.5 text-sm font-semibold border-none focus:border-sky-400 text-center"
                  value={pageCategories}
                  onChange={(event) =>
                    setPageCategories(parseInt(event.target.value, 10))
                  }
                >
                  {categories &&
                    categories?.response?.length > 0 &&
                    [...Array(categories.response[0].total_pages).keys()].map(
                      (page) => (
                        <option key={page + 1} value={page + 1}>
                          {page + 1}
                        </option>
                      )
                    )}
                </select>

                <span className="w-16 h-10 px-2.5 py-1.5 text-sm ">/</span>
                <input
                  className="w-16 h-10 px-2.5 py-1.5 text-sm outline-none text-center"
                  value={
                    categories &&
                    categories?.response?.length > 0 &&
                    categories.response[0].total_pages
                  }
                  readOnly={true}
                  disabled={true}
                />
              </div>

              <div className="">
                <button
                  className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${
                    pageCategories <
                      (categories &&
                        categories?.response?.length > 0 &&
                        categories.response[0].total_pages) && !loading
                      ? "bg-sky-600 active:scale-95 shadow"
                      : "bg-sky-600/50"
                  }`}
                  type="button"
                  onClick={() =>
                    setPageCategories(
                      categories &&
                        categories?.response?.length > 0 &&
                        categories.response[0].total_pages
                    )
                  }
                  disabled={
                    loading ||
                    (pageCategories == categories &&
                      categories?.response?.length > 0 &&
                      categories.response[0].total_pages)
                  }
                >
                  {">>"}
                  <div
                    className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                      loading
                        ? "animate-shineInfinity"
                        : "group-hover:animate-shine"
                    } `}
                  />
                </button>
              </div>
              <div className="">
                <button
                  className={`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${
                    pageCategories <
                      (categories &&
                        categories?.response?.length > 0 &&
                        categories.response[0].total_pages) && !loading
                      ? "bg-sky-600 active:scale-95 shadow"
                      : "bg-sky-600/50"
                  }`}
                  type="button"
                  onClick={() => {
                    console.log(pageCategories);
                    setPageCategories((prev) =>
                      Math.min(
                        categories &&
                          categories?.response?.length > 0 &&
                          categories.response[0].total_pages,
                        prev + 1
                      )
                    );
                  }}
                  disabled={
                    loading ||
                    (pageCategories == categories &&
                      categories?.response?.length > 0 &&
                      categories.response[0].total_pages)
                  }
                >
                  {">"}
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
          </footer> */
}
