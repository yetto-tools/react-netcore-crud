import { create } from "zustand";

// Define el store
const useDetailLines = create((set) => ({
  lines: [],
  setLines: (newLine) => set((state) => ({ lines: [...state.lines, newLine] })),
  removeLineById: (id) =>
    set((state) => ({
      lines: state.lines.filter((line) => line.id !== id),
    })),
  incrementQuantity: (id) =>
    set((state) => ({
      lines: state.lines.map((line) =>
        line.id === id ? { ...line, cantidad: line.cantidad + 1 } : line
      ),
    })),
  decrementQuantity: (id) =>
    set((state) => ({
      lines: state.lines.map((line) =>
        line.id === id && line.cantidad > 1
          ? { ...line, cantidad: line.cantidad - 1 }
          : line
      ),
    })),
  setQuantity: (id, quantity) =>
    set((state) => ({
      lines: state.lines.map((line) =>
        line.id === id ? { ...line, cantidad: quantity } : line
      ),
    })),
}));

export default useDetailLines;
