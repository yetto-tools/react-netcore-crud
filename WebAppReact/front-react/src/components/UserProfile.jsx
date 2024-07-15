import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "/src/assets/Default.png";
import Modal from "./controls/Modal";
import useAuthStore from "../stores/useAuthStore";
import LangSelector from "./controls/LangSelector";
import { useTranslation } from "react-i18next";

export default function UserProfile() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { auth } = useAuthStore((state) => ({
    auth: state.auth,
  })); // Extrae la función de login

  const userRef = useRef(null);

  const { logout } = useAuthStore(); // Extrae la función de logout

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Ejecuta la acción de logout

    navigate("/login"); // Navega a la página de login
  };
  //  const auth = useAuth();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (userRef.current && !userRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="inline-flex justify-center items-center">
      <div ref={userRef} className="relative">
        <button
          type="button"
          className="flex mr-3 text-sm bg-sky-50 rounded-3xl md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          onClick={handleClick}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-3xl bg-white"
            src={auth.userData.imagen ? auth?.userData.imagen : avatar}
            alt="user photo"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = avatar;
            }}
          />
        </button>

        {isOpen && (
          <div className="z-50 my-4 mt-2 text-base w-64 list-none bg-white divide-y divide-gray-100 rounded shadow-2xl border outline outline-1 outline-sky-100  absolute right-0">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-700 font-medium"></span>
              <span className="block text-sm text-gray-700 font-medium   my-2">
                <span className="capitalize font-bold">Usuario:</span>{" "}
                {auth?.userData?.nombre || "guest"}
              </span>
              <span className="block text-sm text-gray-700 truncate">
                <span className="capitalize font-bold">Rol:</span>{" "}
                {auth?.userData?.Rol || "guest"}
              </span>
            </div>
            <div className="text-gray-800">
              <LangSelector />
            </div>
            <ul className="py-2">
              <li>
                <button
                  className="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  onClick={openModal}
                >
                  <div className="flex items-center">
                    <svg
                      className="text-slate-500"
                      fill="currentColor"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path>
                      <path d="m11 16 5-4-5-4v3.001H3v2h8z"></path>
                    </svg>
                    <span className="font-medium pl-2 text-red-700">Salir</span>
                  </div>
                </button>

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <div className="m-4 w-72 mx-auto flex justify-center pb-4">
                    <span className="text-xl font-semibold">
                      {t("user_profile.exit.message")}
                    </span>
                  </div>
                  <div className="flex justify-around items-center gap-4">
                    <button
                      onClick={handleLogout}
                      className="bg-sky-700 px-4 py-2 text-white  hover:bg-sky-600  "
                    >
                      Salir
                    </button>

                    <button
                      onClick={closeModal}
                      className="bg-slate-600 px-4 py-2 text-white  hover:bg-slate-700  "
                    >
                      Cancelar
                    </button>
                  </div>
                </Modal>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
