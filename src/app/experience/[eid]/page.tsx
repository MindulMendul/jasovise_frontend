"use client";

import useExperience from "@/app/experience/_store/store";
import { ExperienceResultType } from "@/types/experience";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

const data: ExperienceResultType = {
  title: "기상천외한 방법으로 노예를 부림.",
  text: "사람들을 노예처럼 부렸다. 희열을 느꼈다. 사람들을 쳇바퀴에 넣고 쳇바퀴를 돌렸다. 잠을 재우지 않았다. 노예가 말을 듣지 않으면 여려 명이서 구타했다. 노예들이 밤에 잠을 잘 지도 모르니 불침번을 돌면서 괴롭혔다.",
  detail: [
    {
      title: "리더십",
      explanation: ["사람들을 노예처럼 부렸다.", "희열을 느꼈다."],
      question: [
        "리더십을 발휘하여 일을 해결해본 경험에 대해서 말해주세요.",
        "본인이 나서서 뭐시깽이 해결한 경험에 대해 말해주세요.",
      ],
    },
    {
      title: "창의성",
      explanation: ["쳇바퀴를 돌렸다.", "잠을 재우지 않았다."],
      question: [
        "남들과 다른 방식으로 문제를 해결한 경험에 대해서 말해주세요.",
        "자신만의 방법으로 문제를 개선한 경험에 대해 말해주세요.",
      ],
    },
    {
      title: "협업 능력",
      explanation: ["여러 명이서 구타했다.", "불침번을 돌면서 괴롭혔다."],
      question: [
        "다른 사람과 함께 협업했던 경험에 대해서 말해주세요.",
        "협업하여 문제를 해쳐나간 경험에 대해서 말해주세요.",
      ],
    },
  ],
};

function Loading() {
  const { setResult } = useExperience();
  useEffect(() => {
    setResult(data);
  }, []);
  return (
    <div className="grid items-center justify-items-center">
      <h1>로딩</h1>
    </div>
  );
}

export default function ExperienceResultPage() {
  const router = useRouter();
  const { result } = useExperience();
  const prev = useCallback(() => {
    router.push("/experience");
  }, []);
  const submit = useCallback(() => {
    router.push("/script");
  }, []);
  return result ? (
    <div className="grid items-center justify-items-center">
      <h1>당신의 경험을 분석해보았어요.</h1>
      <div>
        <h3>당신의 경험을 한 마디로 요약하면...</h3>
        <div>{result.title}</div>
      </div>
      <div>
        <h3>당신의 경험은 이런 강점이 있어요.</h3>
        <div className="grid">
          {result.detail.map((d, key) => (
            <div key={key} className="font-bold">
              {d.title}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>당신의 경험에는 이런 식으로 강조할 수 있어요</h3>
        <div className="grid">
          {result.detail.map((d, key) => (
            <div key={key}>
              <div>
                <span className="font-bold">"{d.title}"</span> 문항을 강조할 수 있는 부분이 있어요.
              </div>
              <div>
                <span>
                  {d.explanation.map((explanationText, ekey) => (
                    <span className="font-bold" key={ekey}>
                      "{explanationText}"
                    </span>
                  ))}
                </span>
                부분에서 <span className="font-bold">"{d.title}"</span>을 강조할 수 있어요!
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3>해당 경험은 이런 질문지에서 사용할 수 있어요.</h3>
          {result.detail.map((d, key) => (
            <div key={key} className="grid">
              <div>
                <span className="font-bold">{d.title}</span> <span> 예시</span>
              </div>
              {d.question.map((questionText, qkey) => (
                <span key={qkey}>"{questionText}"</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>해당 경험을 바탕으로 자기소개서를 작성하러 가보실래요?</h3>
        <button onClick={submit}>자기소개서 쓰러 가기</button>
        <button onClick={prev}>경험 수정하기</button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

// - 사용자에게 특정 경험을 입력받는 UI 제공.
// - 항목별 입력: 경험에 따른 강점을 나눠 입력할 수 있도록 필드 설계.
//   - 경험의 이름: 예) "리더십 경험", "문제 해결 경험".
//   - 세부 경험: 예) "팀 프로젝트 리더로서의 경험".
//   - 강점 선택: 예) "책임감", "창의성", "협업 능력".
// 다 입력하고 결과 보기 버튼을 누르면 로딩 후에 결과창이 보임
