1. StrongPoint
spid: number
name: string

2. Role
rid: number
role: string

3. Role-StringPoint 관계테이블
id: number
spid: number // StrongPoint 외래키
rid: number // Role 외래키

4. Experience
eid number
uid number // user 외래키
title string
content string
createdAt datetime

5. AnalyzedExperience
aeid number 
eid number // Experience 외래키
title string
createdAt datetime

6. DetailofAnalyzedExperience
deid: number
apid: number // AnalyzedExperience 외래키
spid: number // StrongPoint 외래키
experience: string // 분석된 경험 문장
result: string

7. Theme
tid number
name: string

8. Question
qid: number
tid: number // Theme 외래키
question: string

9. Essay
jid: number
uid: number // user 외래키
tid: number // theme 외래키
content: string
createdAt: Datetime

10. AnalyzedEssay
ajid: number
jid: number // 자기소개서 데이터 기본키
분석 내용: Array<{experience:string; tid:tid; result: string;}> // tid는 테마 데이터의 기본키

11. DetailofAnalyzedEssay
djid: number
ajid: number // AnalyzedEssay 외래키
spid: number // StrongPoint 외래키
essay: string // 분석된 자기소개서 문장
result: string

12. User
uid: number
id: string
password: string