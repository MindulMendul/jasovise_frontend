// 경험 분석 결과
type Experience = {
  title: string;
  content: string; // 경험 적은 거 전체 내용 전달
  summary: string;
  detail: Array<ExperienceDetail>;
};

// 경험 세부내용 결과 (Detail)
/// 경험 새부내용 결과 sql 짤 때 참고자료
// 데이터는 explanation에 들어가는 내용을 중심으로 저장될 것이기 때문에,
// 세부내용 검색은 where theme="theme" 으로 검색한 이후에,
// 그렇게 검색된 결과를 Array로 묶어서 보내주면 됨.
// 또한 theme에 따른 question도 묶어서 보내주면 됨.
// 세부내용이 1개라도 있는 데이터만 묶어서 보내면 됨!
type ExperienceDetail = {
  theme: string;
  explanation: Array<string>; // 분석에 사용된 경험 부분
  question: Array<string>; // 테마에 맞는 질문지 모음을 출력
};
