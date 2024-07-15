import { useTranslation } from "react-i18next";
import LayoutDefault from "../layouts/LayoutDefault";
import useCustomersStore from "../stores/useCustomersStore";
import { useCallback, useEffect, useState } from "react";
import { API } from "../stores/API/Endpoints";
import { TypeFormCustomer, setTypeFormCustomer } from "../types/TypesForm";
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
import PaginationFooter from "../components/controls/Pagination";
import ListViewCustomers, {
  ItemViewCustomers,
} from "../components/controls/ListViewCustomers";
import CustomerForm from "../components/forms/CustomerForm";

const CustomersPage = () => {
  const { t } = useTranslation();
  const [formValues, setFormValue] = useState(TypeFormCustomer);
  const [searchValue, setSearchValue] = useState("");
  const [pageCustomers, setPageCustomers] = useState(1);
  const [sizePages, setSizePages] = useState(25);
  const [isModalOpen, setModalOpen] = useState(false);

  const { auth } = useAuthStore((state) => ({
    user: state.auth,
  }));

  const { isLoading, setIsLoading } = useLoading((state) => ({
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading,
  }));

  const { customers, setCustomers } = useCustomersStore((state) => ({
    customers: state.customers,
    setCustomers: state.setCustomers,
  }));

  useEffect(() => {
    let userID = auth?.userData?.id_usuario;
    setFormValue((prev) => ({
      ...prev,
      ["uid_creacion"]: userID,
    }));
  }, []);

  const handleRefreshCustomers = useCallback(async () => {
    await APIFetchData({
      setStore: setCustomers,
      url: `${API.customer.customers.url}?page_size=25&page_number=${pageCustomers}`,
      method: API.customer.customers.method,
      setIsLoading: setIsLoading,
    });
  }, [APIFetchData, pageCustomers]);

  useEffect(() => {
    if (!customers?.data?.content) {
      handleRefreshCustomers();
    }
  }, [pageCustomers, handleRefreshCustomers]);

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
    await APIFetchData({
      setStore: setCustomers,
      url: API.customer.save.url,
      method: API.customer.save.method,
      body: formValues,
      setIsLoading: setIsLoading,
    });
    closeModal();
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setFormValue(TypeFormCustomer);
    setModalOpen(false);
  };

  const handleSearchCustomers = async () => {
    if (searchValue.trim().length > 0) {
      await APIFetchData({
        setStore: setCustomers,
        url: `${API.customer.search.url}?value=${searchValue}`,
        method: API.customer.search.method,
        setIsLoading: setIsLoading,
      });
    } else {
      await APIFetchData({
        setStore: setCustomers,
        url: `${API.customer.customers.url}?page_size=25&page_number=${pageCustomers}`,
        method: API.customer.customers.method,
        setIsLoading: setIsLoading,
      });
    }
  };

  const handleUpdate = (event) => {
    const id = event.currentTarget.value;
    const edit = customers?.data?.content.find(
      (item) => item.id_cliente === Number(id)
    );
    const newValue = setTypeFormCustomer(edit);
    setFormValue(newValue);
    openModal();
  };
  return (
    <LayoutDefault>
      <div className="flex-1 w-full">
        {/* breadcrumb */}
        <section className="bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ">
          <h1 className="text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2">
            <Link to="/"> {t("home.title")}</Link>
            <IconChevronRight />
            <span>{t("customers.title")}</span>
          </h1>
          <span>
            <button
              className="bg-orange-400 text-white p-1 shadow hover:scale-95"
              value={"refresh"}
              onClick={handleRefreshCustomers}
            >
              {/* Icon for refresh */}
              <IconRefresh />
            </button>
          </span>
        </section>

        {/* filtros*/}
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
                {t("customers.new")}
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
                onClick={handleSearchCustomers}
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
        {/* lista */}
        <section className="md:w-11/12 lg:w-full min-h-96 flex flex-col justify-between items-center mx-auto ">
          <div className="w-full flex h-5/6  min-h-96 justify-start items-center flex-col border mb-4 pb-2">
            <ListViewCustomers>
              <ItemViewCustomers
                t={t}
                customers={
                  customers &&
                  customers?.data?.content?.length > 0 &&
                  customers?.data.content != null
                    ? customers?.data.content
                    : []
                }
                handleUpdate={handleUpdate}
                loading={isLoading}
              />
            </ListViewCustomers>
          </div>
          <PaginationFooter
            page={pageCustomers}
            totalPages={
              customers?.data && customers?.data?.response?.length > 0
                ? customers?.data.response[0].total_pages
                : 0
            }
            setPage={setCustomers}
            loading={isLoading}
          />
        </section>

        {/* Modal and forms */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CustomerForm
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

export default CustomersPage;
