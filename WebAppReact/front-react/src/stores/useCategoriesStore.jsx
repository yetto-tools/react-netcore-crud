import { create } from "zustand";

// Define el store
const useCategoriesStore = create((set) => ({
  categories: [],
  setCategories: (newCategories) => set({ categories: newCategories }),
}));

export default useCategoriesStore;
