"use server";

import { getAnalyedExperience } from "@/apis/experienceAPI";

export const getExperience = async (experience: any) => {
  const [data, error] = await getAnalyedExperience(experience);
  if (error) {
    console.error(error);
    return null;
  }
  return experienceData;
};

const experienceData: { summary: string; detail: Array<ExperienceDetail> } = {
  summary: "기상천외한 방법으로 노예를 부림.",
  detail: [
    {
      theme: "리더십",
      explanation: ["사람들을 노예처럼 부렸다.", "희열을 느꼈다."],
      question: [
        "리더십을 발휘하여 일을 해결해본 경험에 대해서 말해주세요.",
        "본인이 나서서 뭐시깽이 해결한 경험에 대해 말해주세요.",
      ],
    },
    {
      theme: "창의성",
      explanation: ["쳇바퀴를 돌렸다.", "잠을 재우지 않았다."],
      question: [
        "남들과 다른 방식으로 문제를 해결한 경험에 대해서 말해주세요.",
        "자신만의 방법으로 문제를 개선한 경험에 대해 말해주세요.",
      ],
    },
    {
      theme: "협업 능력",
      explanation: ["여러 명이서 구타했다.", "불침번을 돌면서 괴롭혔다."],
      question: [
        "다른 사람과 함께 협업했던 경험에 대해서 말해주세요.",
        "협업하여 문제를 해쳐나간 경험에 대해서 말해주세요.",
      ],
    },
  ],
};
