import { create } from "zustand";

// Define el store
const useUsersStore = create((set) => ({
  users: [],
  setUsers: (newUsers) => set({ user: newUsers }),
}));

export default useUsersStore;
