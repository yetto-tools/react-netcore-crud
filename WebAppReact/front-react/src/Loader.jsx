import { useEffect, useState } from "react";
import useLoading from "./stores/useLoading.jsx";

export const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);
  const { isLoading } = useLoading((state) => ({
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    let timer;
    if (isLoading) {
      setShowLoader(true);
    } else {
      // Espera un poco antes de ocultar el loader para permitir el fade out
      timer = setTimeout(() => setShowLoader(false), 450); // Asegúrate que el tiempo coincide con la duración del CSS fade out
    }
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      <div className={`container-loader ${showLoader ? "show" : "hidden"}`}>
        <div className="loader"></div>
      </div>
    </>
  );
};
