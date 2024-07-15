import { useTranslation } from "react-i18next";
import LayoutDefault from "../layouts/LayoutDefault";
import useSalesStore from "../stores/useSalesStore";
import { useCallback, useEffect, useState } from "react";
import { API } from "../stores/API/Endpoints";
import { TypeFormProduct, setTypeFormProduct } from "../types/TypesForm";
import useAuthStore from "../stores/useAuthStore";
import Modal from "../components/controls/Modal";
import SearchInput from "../components/controls/SeachInput";
import { Link } from "react-router-dom";
import {
  IconChevronRight,
  IconNew,
  IconRefresh,
  IconSearch,
} from "../icons/Icon";
import useLoading from "../stores/useLoading";
import APIFetchData from "../stores/useFetchDataStore";
import SalesForm from "../components/forms/SalesForm";

const SalesPage = () => {
  const { t } = useTranslation();
  const [formValues, setFormValue] = useState(TypeFormProduct);
  const [searchValue, setSearchValue] = useState("");
  const [pageSales, setPageSales] = useState(1);
  const [sizePages, setSizePages] = useState(25);
  const [isModalOpen, setModalOpen] = useState(false);

  const { auth } = useAuthStore((state) => ({
    auth: state.auth,
  }));

  const { isLoading, setIsLoading } = useLoading((state) => ({
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading,
  }));

  const { sales, setSales } = useSalesStore((state) => ({
    sales: state.sales,
    setSales: state.setSales,
  }));

  useEffect(() => {
    setFormValue((prev) => ({
      ...prev,
      uid_creacion: auth.userData.id_usuario,
    }));

    if (Object.values(sales).length == 0 && isLoading == false) {
      handleRefreshSales();
    }
  }, []);

  const handleRefreshSales = useCallback(async () => {
    await APIFetchData({
      setStore: setSales,
      url: `${API.sale.sales.url}?page_size=25&page_number=${pageSales}`,
      method: API.sale.sales.method,
      setIsLoading: setIsLoading,
    });
  }, [APIFetchData, pageSales]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? (checked ? 1 : 0) : value;

    setFormValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    await APIFetchData({
      setStore: setSales,
      url: API.product.save.url,
      method: API.product.save.method,
      body: formValues,
      setIsLoading: setIsLoading,
    });
    if (sales?.data?.response) {
      console.log(sales?.data?.response);
      //closeModal();
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setFormValue(TypeFormProduct);
    setModalOpen(false);
  };

  const handleSearchSales = async () => {
    if (searchValue.trim().length > 0) {
      await APIFetchData({
        setStore: setSales,
        url: `${API.sale.sales.url}?value=${searchValue}`,
        method: API.sale.sales.method,
        setIsLoading: setIsLoading,
      });
    } else {
      await APIFetchData({
        setStore: setSales,
        url: `${API.sale.sales.url}?page_size=25&page_number=${pageSales}`,
        method: API.sale.sales.method,
        setIsLoading: setIsLoading,
      });
    }
  };

  const handleUpdate = (event) => {
    const id = event.currentTarget.value;
    const edit = sales?.data?.content.find(
      (item) => item.id_sales === Number(id)
    );
    const newValue = setTypeFormProduct(edit);
    setFormValue(newValue);
    openModal();
  };

  return (
    <LayoutDefault>
      <div className="flex-1 w-full">
        <section className="bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ">
          <h1 className="text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2">
            <Link to="/"> {t("home.title")}</Link>
            <IconChevronRight />
            <span>{t("sales.title")}</span>
          </h1>
          <span>
            <button
              className="bg-orange-400 text-white p-1 shadow hover:scale-95"
              value={"refresh"}
              onClick={handleSearchSales}
            >
              {/* Icon for refresh */}
              <IconRefresh />
            </button>
          </span>
        </section>
        <section className="w-full bg-white divide-y border-b pb-4 mb-2.5">
          <section className="w-full px-5 mx-auto flex justify-between items-center">
            <div className="w-44">
              <button
                className={`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${
                  !isLoading
                    ? "bg-green-600 active:scale-95 shadow"
                    : "bg-green-600/50"
                }`}
                onClick={openModal}
                type="submit"
                disabled={isLoading}
              >
                <IconNew />
                {t("categories.new")}
                <div
                  className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                    isLoading
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
                className={`max-w-24 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${
                  !isLoading
                    ? "bg-sky-600 active:scale-95 shadow"
                    : "bg-sky-600/50"
                }`}
                onClick={handleRefreshSales}
                type="button"
                disabled={isLoading}
              >
                <IconSearch />
                <div
                  className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                    isLoading
                      ? "animate-shineInfinity"
                      : "group-hover:animate-shine"
                  } `}
                />
              </button>
            </div>
          </section>
        </section>
        {/* Modal and forms */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <SalesForm
            isLoading={isLoading}
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

export default SalesPage;
