import { create } from "zustand";

// Define el store
const useLoading = create((set) => ({
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));

export default useLoading;
