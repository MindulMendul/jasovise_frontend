import { create } from "zustand";

interface ExperienceState {
  title: string;
  content: string;
  summary: string;
  detail: Array<ExperienceDetail>;
}

interface ExperienceActions {
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setSummary: (summary: string) => void;
  setDetail: (detail: Array<ExperienceDetail>) => void;
}

const useExperience = create<ExperienceState & ExperienceActions>((set) => ({
  title: "",
  content: "",
  summary: "",
  detail: [],
  setTitle: (title: string) => {
    set({ title });
  },
  setContent: (content: string) => {
    set({ content });
  },
  setSummary: (summary: string) => {
    set({ summary });
  },
  setDetail: (detail: Array<ExperienceDetail>) => {
    set({ detail });
  },
}));

export default useExperience;
