import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const counterStore = create(
  persist(
    devtools(
      immer((set) => ({
        count: 0,

        incrementCount: () => {
          set((store) => {
            if (store.count < 15) store.count++;
          });
        },

        decrementCount: () => {
          set((store) => {
            if (store.count > 0) store.count--;
          });
        },

        resetCount: () => {
          set((store) => {
            store.count = 0;
          });
        },

        addFive: () => {
          set((store) => {
            if (store.count < 15) {store.count += 5;
              if (store.count > 15) store.count = 15;
            }
          });
        },

        subtractFive: () => {
          set((store) => {
            if (store.count > 0) { store.count -= 5;
              if (store.count < 0) store.count = 0;
            }
          });
        },
      })),
    ),
    {
      name: "countStore",
    },
  ),
);