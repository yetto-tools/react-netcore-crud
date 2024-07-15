import { useEffect, useRef, useState } from "react";
import { API } from "../stores/API/Endpoints";
import useUsuarioStore from "../stores/useUsuarioStore";
import { useNavigate } from "react-router";
import useAuthStore from "../stores/useAuthStore";
import { Link } from "react-router-dom";
import Message from "./notifications/Messages";
import { useTranslation } from "react-i18next";
import APIFetchData from "../stores/useFetchDataStore";
import useLoading from "../stores/useLoading";

export const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuthStore(); // Extrae la función de login
  const refLoginForm = useRef(null);
  const { isLoading, setIsLoading } = useLoading((state) => ({
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading,
  }));

  const { usuario, setUsuario } = useUsuarioStore((state) => ({
    usuario: state.usuario,
    setUsuario: state.setUsuario,
  }));

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(refLoginForm.current);
    const username = formData.get("username");
    const password = formData.get("password");
    if (username.length == 0) {
      Message({ type: "warn", message: `${t("login.required_credentials")}` });
      return;
    }

    APIFetchData({
      setStore: setUsuario,
      url: API.login.url,
      method: API.login.method,
      body: { username, password },
      setIsLoading: setIsLoading,
    });
    console.log(usuario);
  };

  useEffect(() => {
    if (!isLoading) {
      if (
        usuario &&
        usuario?.data?.response &&
        usuario?.data?.response.length > 0 &&
        usuario?.data?.response[0].message
      ) {
        // Esto mostrará un toast informativo con el mensaje
        switch (usuario.data["response"][0]["result"]) {
          case -1:
            Message({
              type: "error",
              message: `${usuario.data["response"][0]["message"]}`,
            });
            break;
          case 0:
            Message({
              type: "warn",
              message: `${usuario.data["response"][0]["message"]}`,
            });
            break;
          case 1:
            login({
              name: usuario.data["content"][0]["nombre"],
              userData: usuario.data["content"][0],
              token: usuario.data["token"][0],
            }); // Ejecuta la acción de login
            navigate("/");
            Message({
              type: "success",
              message: `${usuario.data["response"][0]["message"]}: ${usuario.data["content"][0]["nombre"]}`,
              options: { autoClose: 2000 },
            });
            break;
          default:
            Message({
              type: "info",
              message: `${usuario.data["response"][0]["message"]}`,
            });
        }
      }
    }
  }, [usuario, isLoading]);

  if (isLoading && !usuario) {
    return (
      <>
        <p className="font-semibold text-dsPrimaryLight px-2 py-2 bg-slate-50 border">
          Enviando...
        </p>
      </>
    );
  }
  // if (error) {
  //   const info = getData(API.login.url);
  //   const msg = info.length == [] ? error : getData(API.login.url);

  //   Message({ type: "error", message: `Error: ${msg}` });
  // }

  return (
    <>
      <div className="bg-white w-2/5 max-w-md min-w-80 h-96 border shadow-md flex justify-center items-center">
        <form ref={refLoginForm} className="w-full">
          <div className="w-full flex flex-col justify-between items-center gap-y-2.5">
            <div>
              <span className="font-semibold text-2xl">
                {t("login.welcome")}
              </span>
            </div>
            <label className="flex flex-col flex-now w-7/12">
              <span className="w-full px-1 py-1.5 font-semibold capitalize">
                {t("login.form.field.username")}
              </span>
              <input
                type="text"
                name="username"
                placeholder={t("login.form.field.username")}
                className="border px-2 py-1.5 outline-none focus:outline-sky-600 focus:bg-sky-50"
              />
            </label>
            <label className="flex flex-col flex-now w-7/12">
              <span className="w-full px-1 py-1.5 font-semibold capitalize">
                {t("login.form.field.password")}
              </span>
              <input
                type="password"
                name="password"
                placeholder={t("login.form.field.password")}
                className="border px-2 py-1.5 outline-none focus:outline-sky-600 focus:bg-sky-50"
              />
            </label>
            <div className="w-8/12 mx-auto text-right px-4">
              <Link
                to="/register"
                className="font-medium text-sm text-sky-700 capitalize cursor-pointer"
              >
                {t("register.title")}
              </Link>
            </div>
            <div className="flex flex-col flex-now justify-center items-center w-7/12 mx-auto mt-4">
              <button
                className={`max-w-72  rounded-sm w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${
                  !isLoading ? "bg-sky-600 active:scale-95" : "bg-sky-600/50"
                }`}
                onClick={handleLogin}
                type="submit"
                disabled={isLoading}
              >
                {t("login.form.send")}
                <div
                  className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${
                    isLoading
                      ? "animate-shineInfinity"
                      : "group-hover:animate-shine"
                  } `}
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
