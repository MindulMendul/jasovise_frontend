export type ExperienceResultDetailType = {
  title: string;
  explanation: Array<string>;
  question: Array<string>;
};

export type ExperienceResultType = {
  title: string;
  text: string;
  detail: Array<ExperienceResultDetailType>;
};
