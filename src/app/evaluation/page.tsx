"use client";

import { getAnalyedEssay } from "@/apis/essayAPI";
import useEvaluation from "@/app/_store/evaluation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function EssayResultPage() {
  const router = useRouter();
  const { detail, amendment, result, setDetail, setAmendment, setResult } = useEvaluation();
  useEffect(() => {
    (async () => {
      // const [data, error] = await getAnalyedEssay();
      // if (error) {
      //   console.error(error);
      //   return;
      // }
      setDetail([
        {
          title: "string;",
          score: "상",
          comment: "string;",
        },
      ]);
      setAmendment([
        {
          title: "string;",
          comment: "string;",
        },
      ]);
      setResult("asdf");
    })();
  }, []);

  const goPrevPage = useCallback(() => {
    router.push("/essay");
  }, []);

  return result?.length ? (
    <div className="grid items-center justify-items-center">
      <h1>당신의 자기소개서를 분석해보았어요.</h1>
      <div>
        <h3>당신의 자기소개서를 다음의 평가지로 평가한 결과에요!</h3>
        <div className="grid">
          {detail.map((d, key) => (
            <div key={key}>
              <h3 className="font-bold">{d.title}</h3>
              <div>
                점수: <span>{d.score}</span>
              </div>
              <div>{d.comment}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h3>더욱 자세한 분석은 다음과 같아요.</h3>
          {amendment.map((d, key) => (
            <div key={key} className="grid">
              <h3 className="font-bold">{d.title}</h3>
              {d.comment}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>해당 경험을 바탕으로 자기소개서를 작성하러 가보실래요?</h3>
        <button onClick={goPrevPage}>자기소개서 수정하기</button>
      </div>
    </div>
  ) : (
    <div className="grid items-center justify-items-center">
      <h1>로딩</h1>
    </div>
  );
}
