1. StrongPoint
spid: number
name: string

2. Theme
tid number
name: string

3. Question
qid: number
tid: number // Theme 외래키
question: string

4. User
uid: number
id: string
password: string

5. Evaluation
evid: number
title: string

6. Role
rid: number
role: string

7. Role-StringPoint 관계테이블
id: number
spid: number // StrongPoint 외래키
rid: number // Role 외래키

8. Experience
eid number
uid number // user 외래키
title string
content string
createdAt datetime

9. AnalyzedExperience
aeid number 
eid number // Experience 외래키
title string
createdAt datetime

10. DetailofAnalyzedExperience
deid: number
apid: number // AnalyzedExperience 외래키
tid: number // Theme 외래키
experience: string // 분석된 경험 문장

11. Essay
jid: number
uid: number // User 외래키
qid: number // Question 외래키
content: string
createdAt: Datetime

12. AnalyzedEssay
ajid: number
jid: number // Essay 외래키
title string
content: string // 수정된 에세이 작성
createdAt datetime

13. DetailofAnalyzedEssay
djid: number
ajid: number // AnalyzedEssay 외래키
title: string
score: "상"|"중"|"하"
comment: string
essay: string // 분석된 자기소개서 문장

14. AmendmentofEssay
amjid: number
ajid: number // AnalyzedEssay 외래키
title: string
comment: string
