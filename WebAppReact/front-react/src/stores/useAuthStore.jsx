import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      auth: null, // El estado inicial del usuario es null
      login: (userData) => set({ auth: userData }), // Función para loguear al usuario
      logout: () => set({ auth: null }), // Función para desloguear al usuario
      isLogged: () => get().auth !== null,
    }),
    {
      name: "auth", // nombre del item en el sessionStorage
      getStorage: () => sessionStorage, // especifica que se debe utilizar sessionStorage
    }
  )
);

export default useAuthStore;
