// POST할 자기소개서 body
type PostEssayAPI = {
  title: string;
  essay: string;
}

// 자기소개서 결과
/// 자기소개서 결과 sql 짤 때 참고자료
// 자기소개서의 ai 분석 결과는 총 3곳에서 가져올 예정.
// AnalyzedEssay, DetailofAnalyzedEssay, AmendmentofEssay 에서 각각 해당하는 내용을 가져오기 바람
type Essay = {
  detail: Array<Detail>;
  amendment: Array<Amendment>;
  result: string; // 수정된 자기소개서
}

// 자기소개서 분석 결과(Detail)
type DetailofAnalyzedEssay = {
  title: string
  score: "상" | "중" | "하"
  comment: string
}
// 자기소개서 개선안 결과 (Amendment)
type AmendmentofEssay = {
  title: string
  comment: string
}