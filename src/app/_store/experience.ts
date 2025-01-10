import { ExperienceResultType } from "@/types/experience";
import { create } from "zustand";

interface ExperienceState {
  result: ExperienceResultType | null;
  experience: string;
}

interface ExperienceActions {
  setResult: (result: ExperienceResultType) => void;
  setExperience: (experience: string) => void;
}

const useExperience = create<ExperienceState & ExperienceActions>((set) => ({
  result: null,
  experience: "",
  setResult: (result: ExperienceResultType) => {
    set({ result });
  },
  setExperience: (experience: string) => {
    set({ experience });
  },
}));

export default useExperience;
