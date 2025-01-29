import { create } from "zustand";

// interface EssayState {
//   succeed: string;
//   job: string;
//   teamwork: string;
//   motivation: string;
//   hope: string;
//   personality: string;
//   growth: string;
//   issue: string;
//   opinion: string;
//   ethic: string;
// }

interface EssayState {
  category: string;
  essay: string;
}

interface EssayActions {
  setCategory: (category: string) => void;
  setEssay: (essay: string) => void;
}

const useEssay = create<EssayState & EssayActions>((set) => ({
  category: "",
  essay: "",
  setCategory: (category: string) => {
    set({ category });
  },
  setEssay: (essay: string) => {
    set({ essay });
  },
}));

export default useEssay;
