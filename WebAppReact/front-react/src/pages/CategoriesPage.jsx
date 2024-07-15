import { useTranslation } from "react-i18next";
import LayoutDefault from "../layouts/LayoutDefault";
import useCategoriesStore from "../stores/useCategoriesStore";
import { useCallback, useEffect, useState } from "react";
import { API } from "../stores/API/Endpoints";
import { TypeFormCategory, setTypeFormCategory } from "../types/TypesForm";
import useAuthStore from "../stores/useAuthStore";
import Modal from "../components/controls/Modal";
import CategoryForm from "../components/forms/CategoryForm";
import SearchInput from "../components/controls/SeachInput";

import { Link } from "react-router-dom";
import {
  IconChevronRight,
  IconNew,
  IconRefresh,
  IconSearch,
} from "../icons/Icon";
import PaginationFooter from "../components/controls/Pagination";
import ListViewCategories, {
  ItemViewCategories,
} from "../components/controls/ListViewCategories";
import APIFetchData from "../stores/useFetchDataStore";
import useLoading from "../stores/useLoading";

const CategoriesPage = () => {
  const { t } = useTranslation();
  const [formValues, setFormValue] = useState(TypeFormCategory);
  const [searchValue, setSearchValue] = useState("");
  const [pageCategories, setPageCategories] = useState(1);
  const [sizePages, setSizePages] = useState(25);
  const [isModalOpen, setModalOpen] = useState(false);

  const { auth } = useAuthStore((state) => ({
    auth: state.auth,
  }));
  const { isLoading, setIsLoading } = useLoading((state) => ({
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading,
  }));

  const { categories, setCategories } = useCategoriesStore((state) => ({
    categories: state.categories,
    setCategories: state.setCategories,
  }));

  useEffect(() => {
    if (auth?.userData?.id_usuario) {
      setFormValue((prev) => ({
        ...prev,
        uid_creacion: auth.userData.id_usuario,
      }));
    }
  }, [auth]);

  const handleRefreshCategories = useCallback(() => {
    APIFetchData({
      setStore: setCategories,
      url: `${API.category.categories.url}?page_size=25&page_number=${pageCategories}`,
      method: API.category.categories.method,
      setIsLoading: setIsLoading,
    });
  }, [APIFetchData, pageCategories]);

  useEffect(() => {
    handleRefreshCategories();
  }, [pageCategories, handleRefreshCategories]);

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
    APIFetchData({
      setStore: setCategories,
      url: API.category.save.url,
      method: API.category.save.method,
      body: formValues,
      setIsLoading: setIsLoading,
    });
    closeModal();
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setFormValue(TypeFormCategory);
    setModalOpen(false);
  };

  const handleSearchCategories = () => {
    if (searchValue.trim().length > 0) {
      APIFetchData({
        setStore: setCategories,
        url: `${API.category.search.url}?value=${searchValue}`,
        method: API.category.search.method,
        setIsLoading: setIsLoading,
      });
    } else {
      APIFetchData({
        setStore: setCategories,
        url: `${API.category.categories.url}?page_size=25&page_number=${pageCategories}`,
        method: API.category.categories.method,
        setIsLoading: setIsLoading,
      });
    }
  };

  const handleUpdate = (event) => {
    const id = event.currentTarget.value;
    const edit = categories?.data?.content.find(
      (item) => item.id_categoria === Number(id)
    );
    const newValue = setTypeFormCategory(edit);
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

            <span></span>
            {t("categories.title")}
          </h1>
          <span>
            <button
              className="bg-orange-400 text-white p-1 shadow hover:scale-95"
              value={"refresh"}
              onClick={handleRefreshCategories}
            >
              <IconRefresh />
            </button>
          </span>
        </section>

        <section className="w-full bg-white divide-y border-b pb-4 mb-2.5">
          <section className="w-full px-2.5 mx-auto flex justify-between items-center">
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
                <span>
                  <IconNew />
                </span>
                <span>{t("categories.new")}</span>
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
                className={`max-w-24 rounded-r outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${
                  !isLoading
                    ? "bg-sky-600 active:scale-95 shadow"
                    : "bg-sky-600/50"
                }`}
                onClick={handleSearchCategories}
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

        <section className="md:w-11/12 lg:w-full min-h-96 flex flex-col justify-between items-center mx-auto ">
          <div className="w-full flex h-5/6  min-h-96 justify-start items-center flex-col border mb-4 pb-2">
            <ListViewCategories>
              <ItemViewCategories
                t={t}
                categories={
                  categories &&
                  categories?.data?.content?.length > 0 &&
                  categories?.data.content != null
                    ? categories?.data.content
                    : []
                }
                handleUpdate={handleUpdate}
                loading={isLoading}
              />
            </ListViewCategories>
          </div>
          <PaginationFooter
            page={pageCategories}
            totalPages={
              categories?.data && categories?.data?.response?.length > 0
                ? categories?.data.response[0].total_pages
                : 0
            }
            setPage={setCategories}
            loading={isLoading}
          />
        </section>

        {/* Layout and other components here */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CategoryForm
            loading={isLoading}
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
