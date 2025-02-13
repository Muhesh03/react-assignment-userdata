import { create } from 'zustand';

export const useCalculatorStore = create((set, get) => ({
  components: [],
  history: [],
  future: [],

  addComponent: (component) =>
    set((state) => ({
      components: [...state.components, component],
      history: [...state.history, state.components],
      future: [],
    })),

  removeComponent: (id) =>
    set((state) => ({
      components: state.components.filter((comp) => comp.id !== id),
      history: [...state.history, state.components],
      future: [],
    })),

  undo: () => {
    const { history, components, future } = get();
    if (history.length === 0) return;
    set({
      components: history[history.length - 1],
      history: history.slice(0, -1),
      future: [components, ...future],
    });
  },

  redo: () => {
    const { history, components, future } = get();
    if (future.length === 0) return;
    set({
      components: future[0],
      history: [...history, components],
      future: future.slice(1),
    });
  },

  clearComponents: () => set({ components: [], history: [], future: [] }),
}));