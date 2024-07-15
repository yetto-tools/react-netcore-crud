import { create } from "zustand";

// Define el store
const useProductsStore = create((set) => ({
  products: [] || [],
  setProducts: (newProducts) => set({ products: newProducts }),
}));

export default useProductsStore;
