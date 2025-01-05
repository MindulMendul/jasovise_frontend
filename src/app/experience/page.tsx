"use client";

import { useCallback } from "react";

export default function Home() {
  const submit = useCallback(() => {
    console.log("확인");
  }, []);
  return (
    <div className="grid items-center justify-items-center">
      <h1>경험</h1>
      <div>어떤 경험을 하셨나요? (한줄요약)</div>
      <input type={"text"} />
      <div>그 경험에는 어떤 강점이 있나요?</div>
      <input type={"text"} />
      <div>구체적인 경험을 가감없이 작성해주세요.</div>
      <textarea />
      <button onClick={submit}>확인</button>
    </div>
  );
}

// - 사용자에게 특정 경험을 입력받는 UI 제공.
// - 항목별 입력: 경험에 따른 강점을 나눠 입력할 수 있도록 필드 설계.
//   - 경험의 이름: 예) "리더십 경험", "문제 해결 경험".
//   - 세부 경험: 예) "팀 프로젝트 리더로서의 경험".
//   - 강점 선택: 예) "책임감", "창의성", "협업 능력".
// 다 입력하고 결과 보기 버튼을 누르면 로딩 후에 결과창이 보임
