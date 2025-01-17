import { create } from "zustand";

interface ExperienceState {
  result: ExperienceResult | null;
  experience: string;
}

interface ExperienceActions {
  setResult: (result: ExperienceResult) => void;
  setExperience: (experience: string) => void;
}

const useExperience = create<ExperienceState & ExperienceActions>((set) => ({
  result: null,
  experience: "",
  setResult: (result: ExperienceResult) => {
    set({ result });
  },
  setExperience: (experience: string) => {
    set({ experience });
  },
}));

export default useExperience;
