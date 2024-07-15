import { create } from "zustand";

const useUsuarioStore = create((set) => ({
  usuario: {},
  tokens: {},

  setUsuario: (newData) => set({ usuario: newData }),

  updateUseer: (newResponse) =>
    set((state) => ({
      usuario: {
        ...state.usuario,
        usuario: newResponse,
      },
    })),

  updateToken: (newToken) =>
    set((state) => ({
      usuario: {
        ...state.tokens,
        token: newToken,
      },
    })),

  dispones: () => set({ usuario: {}, tokens: {} }),
}));

export default useUsuarioStore;
