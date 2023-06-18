import {create} from "zustand";

const useItemStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  deleteItem: (item) => set((state) => ({ items: state.items.filter((i) => i !== item) })),
}));

export default useItemStore;