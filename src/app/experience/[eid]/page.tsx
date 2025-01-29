"use client";

import { getExperience } from "@/app/experience/_action/action";
import useExperience from "@/app/_store/experience";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function ExperienceResultPage() {
  const router = useRouter();
  const { title, content, summary, detail, setSummary, setDetail } = useExperience();

  useEffect(() => {
    (async () => {
      const experience = { title: title, content: content };
      const experienceData = await getExperience(experience);
      if (experienceData === null) return;

      setSummary(experienceData.summary);
      setDetail(experienceData.detail);
    })();
  }, []);

  const goPrevPage = useCallback(() => {
    router.push("/experience");
  }, []);

  const submit = useCallback(() => {
    router.push("/essay");
  }, []);

  return summary?.length > 0 && detail?.length > 0 ? (
    <div className="grid items-center justify-items-center">
      <h1>당신의 경험을 분석해보았어요.</h1>
      <div>
        <h3>당신의 경험을 한 마디로 요약하면...</h3>
        <div>{summary}</div>
      </div>
      <div>
        <h3>당신의 경험은 이런 강점이 있어요.</h3>
        <div className="grid">
          {detail.map((d, key) => (
            <div key={key} className="font-bold">
              {d.theme}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>당신의 경험에는 이런 식으로 강조할 수 있어요</h3>
        <div className="grid">
          {detail.map((d, key) => (
            <div key={key}>
              <div>
                <span className="font-bold">"{d.theme}"</span> 문항을 강조할 수 있는 부분이 있어요.
              </div>
              <div>
                <span>
                  {d.explanation.map((explanationText, ekey) => (
                    <span className="font-bold" key={ekey}>
                      "{explanationText}"
                    </span>
                  ))}
                </span>
                부분에서 <span className="font-bold">"{d.theme}"</span>을 강조할 수 있어요!
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3>해당 경험은 이런 질문지에서 사용할 수 있어요.</h3>
          {detail.map((d, key) => (
            <div key={key} className="grid">
              <div>
                <span className="font-bold">{d.theme}</span> <span> 예시</span>
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
        <button onClick={goPrevPage}>경험 수정하기</button>
      </div>
    </div>
  ) : (
    <div className="grid items-center justify-items-center">
      <h1>로딩</h1>
    </div>
  );
}

// - 사용자에게 특정 경험을 입력받는 UI 제공.
// - 항목별 입력: 경험에 따른 강점을 나눠 입력할 수 있도록 필드 설계.
//   - 경험의 이름: 예) "리더십 경험", "문제 해결 경험".
//   - 세부 경험: 예) "팀 프로젝트 리더로서의 경험".
//   - 강점 선택: 예) "책임감", "창의성", "협업 능력".
// 다 입력하고 결과 보기 버튼을 누르면 로딩 후에 결과창이 보임
