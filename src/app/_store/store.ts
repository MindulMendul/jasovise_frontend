import { create } from "zustand";

interface JasoState {
  jaso: string;
}

interface JasoActions {
  setJaso: (jaso: string) => void;
}

const useJaso = create<JasoState & JasoActions>((set) => ({
  jaso: "",
  setJaso: (jaso: string) => {
    set({ jaso });
  },
}));

export default useJaso;
