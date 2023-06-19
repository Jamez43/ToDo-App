import {create} from "zustand";

const useItemStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  deleteItem: (item) => set((state) => ({ items: state.items.filter((i) => i !== item) })),
  editItem: (oldItem, newItem) =>
      set((state) => ({
        items: state.items.map((item) => (item === oldItem ? newItem : item)),
      })),

}));

export default useItemStore;