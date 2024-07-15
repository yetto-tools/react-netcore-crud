import { create } from "zustand";

// Define el store
const useUsersStore = create((set) => ({
  users: [],
  setUsers: (newUsers) => set({ users: newUsers }),
}));

export default useUsersStore;
