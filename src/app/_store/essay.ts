import { create } from "zustand";

interface EssayState {
  succeed: string;
  job: string;
  teamwork: string;
  motivation: string;
  hope: string;
  personality: string;
  growth: string;
  issue: string;
  opinion: string;
  ethic: string;
}

interface EssayActions {
  setSucceed: (succeed: string) => void;
  setJob: (job: string) => void;
  setTeamwork: (teamwork: string) => void;
  setMotivation: (motivation: string) => void;
  setHope: (hope: string) => void;
  setPersonality: (personality: string) => void;
  setGrowth: (growth: string) => void;
  setIssue: (issue: string) => void;
  setOpinion: (opinion: string) => void;
  setEthic: (ethic: string) => void;
}

const useEssay = create<EssayState & EssayActions>((set) => ({
  succeed: "",
  job: "",
  teamwork: "",
  motivation: "",
  hope: "",
  personality: "",
  growth: "",
  issue: "",
  opinion: "",
  ethic: "",
  setSucceed: (succeed: string) => {
    set({ succeed });
  },
  setJob: (job: string) => {
    set({ job });
  },
  setTeamwork: (teamwork: string) => {
    set({ teamwork });
  },
  setMotivation: (motivation: string) => {
    set({ motivation });
  },
  setHope: (hope: string) => {
    set({ hope });
  },
  setPersonality: (personality: string) => {
    set({ personality });
  },
  setGrowth: (growth: string) => {
    set({ growth });
  },
  setIssue: (issue: string) => {
    set({ issue });
  },
  setOpinion: (opinion: string) => {
    set({ opinion });
  },
  setEthic: (ethic: string) => {
    set({ ethic });
  },
}));

export default useEssay;
