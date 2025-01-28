import { create } from "zustand";

interface RoleState {
  role: string;
  strongPoint: Array<string>;
}

interface RoleActions {
  setRole: (role: string) => void;
  setStrongPoint: (strongPoint: Array<string>) => void; 
}

const useRole = create<RoleState & RoleActions>((set) => ({
  role: "",
  strongPoint: [],
  setRole: (role: string) => {
    set({ role });
  },
  setStrongPoint: (strongPoint: Array<string>) => {
    set({ strongPoint });
  }
}));

export default useRole;
