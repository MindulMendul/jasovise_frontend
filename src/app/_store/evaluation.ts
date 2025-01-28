import { create } from "zustand";

interface EvaluationState {
  detail: Array<DetailofAnalyzedEssay>;
  amendment: Array<AmendmentofEssay>;
  result: string;
}

interface EvaluationActions {
  setDetail: (detail: Array<DetailofAnalyzedEssay>) => void;
  setAmendment: (amendment: Array<AmendmentofEssay>) => void;
  setResult: (result: string) => void;
}

const useEvaluation = create<EvaluationState & EvaluationActions>((set) => ({
  detail: [],
  amendment: [],
  result: "",
  setDetail: (detail: Array<DetailofAnalyzedEssay>) => {
    set({ detail });
  },
  setAmendment: (amendment: Array<AmendmentofEssay>) => {
    set({ amendment });
  },
  setResult: (result: string) => {
    set({ result });
  },
}));

export default useEvaluation;
