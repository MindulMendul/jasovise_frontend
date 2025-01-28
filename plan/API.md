1. 직군 별 강점 분석 결과
role: string
StringPoints: Array<string>

2. 경험 분석 결과
title: string;
content: string; // 경험 적은 거 전체 내용 전달
detail: Array<Detail>;

3. 경험 세부내용 결과 (Detail)
theme: string,
explanation: Array<string> // 분석에 사용된 경험 부분
question: Array<string> // 테마에 맞는 질문지 모음을 출력

/// 경험 새부내용 결과 sql 짤 때 참고자료
// 데이터는 explanation에 들어가는 내용을 중심으로 저장될 것이기 때문에,
// 세부내용 검색은 where theme="theme" 으로 검색한 이후에,
// 그렇게 검색된 결과를 Array로 묶어서 보내주면 됨.
// 또한 theme에 따른 question도 묶어서 보내주면 됨.
// 세부내용이 1개라도 있는 데이터만 묶어서 보내면 됨!

4. 자기소개서 결과
detail: Array<Detail>;
amendment: Array<Amendment>;
result: string; // 수정된 자기소개서

/// 자기소개서 결과 sql 짤 때 참고자료
// 자기소개서의 ai 분석 결과는 총 3곳에서 가져올 예정.
// AnalyzedEssay, DetailofAnalyzedEssay, AmendmentofEssay 에서 각각 해당하는 내용을 가져오기 바람

5. 자기소개서 분석 결과(Detail)
title: string
score: "상" | "중" | "하"
comment: string

6. 자기소개서 개선안 결과 (Amendment)
title: string
comment: string