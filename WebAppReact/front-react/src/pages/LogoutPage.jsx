import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import LayoutDefault from "../layouts/LayoutDefault";
import useUsuarioStore from "../stores/useUsuarioStore";

const LogoutPage = () => {
  const { logout } = useAuthStore(); // Extrae la función de logout
  const navigate = useNavigate();
  const { disponesUser } = useUsuarioStore((state) => ({
    disponesUser: state.dispones(),
  }));

  const handleLogout = () => {
    logout(); // Ejecuta la acción de logout
    disponesUser();
    navigate("/login"); // Navega a la página de login
  };
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <LayoutDefault>
      <div className="flex-1 w-full p-4 m-4">
        <h1 className="text-2xl font-semibold border-b pb-1 mb-4">
          Saliendo de la Aplicación
        </h1>

        <section className="w-4/6 min-h-96 flex flex-col justify-around items-center mx-auto">
          <span className="w-full font-semibold text-lg">¿Desea Salir?</span>
          <span className="flex justify-around gap-4">
            <button
              className="bg-red-600 shadow text-white font-semibold px-2.5 py-1.5 min-w-20"
              onClick={handleLogout}
            >
              Salir
            </button>
            <button
              className="bg-gray-600 shadow text-white font-semibold px-2.5 py-1.5 min-w-20"
              onClick={handleBackHome}
            >
              Cancelar
            </button>
          </span>
        </section>
      </div>
    </LayoutDefault>
  );
};

export default LogoutPage;
