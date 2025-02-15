"자소바이즈(Jasovise)"의 흐름을 바탕으로 더 구체적인 워크플로우를 제안합니다.
각 단계를 기술적으로 구현하기 위한 방안과 사용자 경험(UX)을 고려하여 작성했습니다.

---

## **1. 경험별 분석하기**

### **1.1 경험 입력받기**

- 사용자에게 특정 경험을 입력받는 UI 제공.
- 항목별 입력: 경험에 따른 강점을 나눠 입력할 수 있도록 필드 설계.
  - 경험의 이름: 예) "리더십 경험", "문제 해결 경험".
  - 세부 경험: 예) "팀 프로젝트 리더로서의 경험".
  - 강점 선택: 예) "책임감", "창의성", "협업 능력".

#### **기술적 구현**

- **프론트엔드**: Next.js에서 동적 폼 생성 (React Hook Form 등 사용).
- **백엔드**: FastAPI로 경험 데이터를 분석 엔드포인트 생성.
- **AI 모델**: 강점의 적합성 평가를 위한 NLP 모델 활용.
  - 사전 학습된 텍스트 분류 모델(예: Hugging Face)을 Fine-tuning하여 강점 적합성 평가.

---

### **1.2 강점 적합성 평가**

- 입력된 경험과 강점이 논리적으로 연결되는지 평가.
- AI 모델을 사용하여 다음을 분석:
  - 입력된 경험이 강점과 적합한가?
  - 입력된 강점의 서술 수준은 충분한가?

#### **출력 예시**

- "해당 경험은 '책임감' 강점과 매우 잘 어울립니다. 하지만 구체적인 상황 설명을 추가하면 좋겠습니다."
- "입력된 강점이 해당 경험과 적합하지 않을 수 있습니다. '협업 능력'을 강조하는 것이 더 적합해 보입니다."

---

### **1.3 결과 피드백 및 선택**

1. 결과를 확인하고 입력을 수정.
   - AI의 피드백을 바탕으로 다시 입력하거나 추가 수정.
2. 자기소개서 작성으로 진행.
   - 작성이 준비되면 "다음 단계로" 버튼을 클릭.

#### **기술적 구현**

- **AI 평가 결과**를 사용자 화면에 표시.
- 선택된 옵션에 따라 API 호출:
  - 수정: 이전 데이터를 유지하면서 수정할 수 있도록 UI 업데이트.
  - 다음 단계: 문항 작성 페이지로 이동.

---

## **2. 자기소개서 문항별 분석하기**

### **2.1 문항 제공**

- 기업별 10대 자기소개서 문항을 제공.
  - 예시: "지원 동기를 서술하시오(1500자 이내)."
- **1단계에서 분석된 강점**을 자동으로 제시:
  - "리더십 경험: 팀 프로젝트에서 리더로서 책임감을 발휘."
  - "창의적 문제 해결 경험: 새 아이디어로 팀의 장애물을 극복."

---

### **2.2 자기소개서 작성**

- 사용자가 제시된 문항을 기반으로 텍스트를 작성.
- 입력 칸:
  - 최대 1500자 제한.
  - 실시간 글자 수 카운트 기능 제공.

#### **기술적 구현**

- **프론트엔드**: 텍스트 입력 필드 제공.
  - 자동 저장 기능 구현 (로컬 스토리지 또는 API를 통해 저장).
- **백엔드**: 작성된 내용을 FastAPI로 전송하여 분석.

---

### **2.3 작성 내용 분석**

- 작성된 텍스트를 AI로 분석하여 강점과 약점을 피드백.
  - **강점 분석**: 작성 내용에서 강조된 강점 추출.
  - **약점 분석**: 논리적 흐름, 문법 오류, 구체성 부족 등.

#### **AI 분석 결과 출력 예시**

- **강점**: 책임감, 협업 능력.
- **약점**: "구체적인 성과를 명시하면 더욱 설득력이 높아집니다."
- **점수화**: 1~10점으로 점수화하여 직관적 피드백 제공.

---

### **2.4 피드백에 따른 수정**

- AI 피드백에 따라 수정할 수 있는 옵션 제공.
- "수정 후 다시 분석" 또는 "완료" 선택 가능.

#### **기술적 구현**

- FastAPI로 수정된 텍스트를 다시 분석.
- 프론트엔드에서 수정된 텍스트를 유지하고 업데이트된 분석 결과를 반영.
