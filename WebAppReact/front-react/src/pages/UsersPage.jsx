import { useTranslation } from "react-i18next";
import LayoutDefault from "../layouts/LayoutDefault";
import useUsersStore from "../stores/useUsersStore";
import { useCallback, useEffect, useState } from "react";
import { API } from "../stores/API/Endpoints";
import { TypeFormUser, setTypeFormUser } from "../types/TypesForm";
import useAuthStore from "../stores/useAuthStore";
import Modal from "../components/controls/Modal";
import SearchInput from "../components/controls/SeachInput";
import { Link } from "react-router-dom";
import UsersForm from "../components/forms/UsersForm";
import { IconNew } from "../icons/Icon";
import ListViewUsers, {
  ItemViewUsers,
} from "../components/controls/ListViewUsers";
import PaginationFooter from "../components/controls/Pagination";
import useLoading from "../stores/useLoading";
import APIFetchData from "../stores/useFetchDataStore";

const UsersPage = () => {
  const { t } = useTranslation();
  const [formValues, setFormValue] = useState(TypeFormUser);
  const [searchValue, setSearchValue] = useState("");
  const [pageUsers, setPageUsers] = useState(1);
  const [sizePages, setSizePages] = useState(25);
  const [isModalOpen, setModalOpen] = useState(false);

  const { auth } = useAuthStore((state) => ({
    auth: state.auth,
  }));

  const { isLoading, setIsLoading } = useLoading((state) => ({
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading,
  }));

  const { users, setUsers } = useUsersStore((state) => ({
    users: state.user,
    setUsers: state.setUsers,
  }));

  useEffect(() => {
    if (auth?.userData?.id_usuario) {
      setFormValue((prev) => ({
        ...prev,
        uid_creacion: auth.userData.id_usuario,
      }));
    }
  }, [auth]);

  const handleRefreshUsers = useCallback(async () => {
    await APIFetchData({
      setStore: setUsers,
      url: `${API.user.users.url}?page_size=25&page_number=${pageUsers}`,
      method: API.user.users.method,
      setIsLoading: setIsLoading,
    });
  }, [APIFetchData, pageUsers]);

  useEffect(() => {
    handleRefreshUsers();
  }, [pageUsers, handleRefreshUsers]);

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
      setStore: setUsers,
      url: API.user.save.url,
      method: API.user.save.method,
      body: formValues,
      setIsLoading: setIsLoading,
    });
    closeModal();
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setFormValue(TypeFormUser);
    setModalOpen(false);
  };

  const handleSearch = async () => {
    if (searchValue.trim().length > 0) {
      await APIFetchData({
        setStore: setUsers,
        url: `${API.user.search.url}?value=${searchValue}`,
        method: API.user.search.method,
        setIsLoading: setIsLoading,
      });
    } else {
      await APIFetchData({
        setStore: setUsers,
        url: `${API.user.users.url}?page_size=25&page_number=${pageUsers}`,
        method: API.user.users.method,
        setIsLoading: setIsLoading,
      });
    }
  };

  const handleUpdate = (event) => {
    const id = event.currentTarget.value;
    console.log(event.currentTarget);
    const edit = users.content.find((item) => item.id_usuario === Number(id));
    console.log(edit);
    const newValue = setTypeFormUser(edit);
    setFormValue(newValue);
    openModal();
  };

  return (
    <LayoutDefault>
      <div className="flex-1 w-full">
        <section className="bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ">
          <h1 className="text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2">
            <Link to="/"> {t("home.title")}</Link>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="m184 112 144 144-144 144"
              ></path>
            </svg>
            <span>{t("users.title")}</span>
          </h1>
          <span>
            <button
              className="bg-orange-400 text-white p-1 shadow hover:scale-95"
              value={"refresh"}
              onClick={handleRefreshUsers}
            >
              {/* Icon for refresh */}
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
                <span>{t("users.new")}</span>
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
                className={`max-w-24 w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${
                  !isLoading
                    ? "bg-sky-600 active:scale-95 shadow"
                    : "bg-sky-600/50"
                }`}
                onClick={handleSearch}
                type="button"
                disabled={isLoading}
              >
                {t("users.search")}
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
            <ListViewUsers>
              <ItemViewUsers
                t={t}
                users={
                  users &&
                  users?.data?.content?.length > 0 &&
                  users?.data.content != null
                    ? users?.data.content
                    : []
                }
                handleUpdate={handleUpdate}
                isLoading={isLoading}
              />
            </ListViewUsers>
          </div>
          <PaginationFooter
            page={pageUsers}
            totalPages={
              users && users?.response?.length > 0
                ? users.response[0].total_pages
                : 0
            }
            setPage={setUsers}
            isLoading={isLoading}
          />
        </section>

        {/* Modal and forms */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <UsersForm
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

export default UsersPage;
