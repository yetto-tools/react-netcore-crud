import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

const ProtectedRoute = () => {
  const { auth } = useAuthStore(); // Extrae el estado del usuario

  if (!auth) {
    return <Navigate to="/login" replace />; // Redirige si no hay usuario
  }

  return <Outlet />; // Renderiza las sub-rutas si el usuario está logueado
};

export default ProtectedRoute;
