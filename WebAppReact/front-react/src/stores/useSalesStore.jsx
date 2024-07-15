import { create } from "zustand";

// Define el store
const useSalesStore = create((set) => ({
  sales: [],
  setInvoices: (newSales) => set({ sales: newSales }),
}));

export default useSalesStore;
