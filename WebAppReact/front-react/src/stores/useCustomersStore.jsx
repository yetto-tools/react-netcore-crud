import { create } from "zustand";

// Define el store
const useCustomersStore = create((set) => ({
  customers: [],
  setCustomers: (newCustomers) => set({ customers: newCustomers }),
}));

export default useCustomersStore;
