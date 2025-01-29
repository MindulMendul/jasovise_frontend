"use server";

import { getAnalyedEssay } from "@/apis/essayAPI";

export const loadData = async (essay: PostEssayAPI) => {
  const [data, error] = await getAnalyedEssay(essay);
  if (error) {
    console.error(error);
    return null;
  }
  return evaluationData;
};

const evaluationData: any = {
  detail: [
    {
      title: "string;",
      score: "상",
      comment: "string;",
    },
  ],
  amendment: [
    {
      title: "string;",
      comment: "string;",
    },
  ],
};
