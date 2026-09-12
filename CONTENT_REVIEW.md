# VoiSpeech 콘텐츠 검토 보고서

작성 기준: 첨부 PDF 16개 중 동일 본문 중복 2쌍을 제외한 14편과 현재 React 소스를 대조했다. 연구가 직접 측정한 결과와 코치가 현장에서 시도하는 적용안을 분리한다.

- 소스 검토 대상: 15개 TypeScript 파일
- 추출된 검토 후보: 620개
- 판정 상태: 아래 문장들은 모두 실제 수업 화면의 자동 진단 결론으로 사용하지 않는다.

## 판정 원칙

- **확인됨:** 특정 연구의 대상·조건·측정값과 일치하는 범위에서만 사용한다.
- **조건부:** 일부 집단·도구·시간·평가 항목에서 관찰된 결과로 제한한다.
- **코칭 적용:** 연구 결과에서 직접 도출된 고정 처방이 아니라 수업 중 비교를 위한 가설이다.
- **삭제·수정:** 강제, 절대 금지, 특정 근육 확정, 구조 상태 확정처럼 근거 범위를 넘는 문장이다.

## 이번 검토에서 확정적으로 사용할 수 있는 연구 결과

| 주제 | 사용할 수 있는 범위 | 출처 |
|---|---|---|
| SOVT 물리 원리 | 입술 쪽 반폐쇄가 평균 성문상압·성문내압을 높일 수 있다는 컴퓨터 모델 결과 | Titze 2006, PMID 16671856 |
| SOVT 치료·훈련 결과 | 도구·대상·기간·평가 지표에 따라 객관적·주관적 결과가 달라짐 | Meerschman 등; Dargin; Fadel 등 |
| LaxVox 후두 영상 | 음성 불편이 있는 여성에서 후방 성문 평균 개방 감소가 관찰됨. 모든 지표·대상에 일반화하지 않음 | Nascimento 등, PMID 35256223 |
| LaxVox 수심 | 한 연구는 물 높이 15cm 병에서 튜브 침수 3cm 조건을 사용함. 물 높이와 침수 깊이는 다른 값 | Nascimento 등 |
| SOVT 진동 지표 | 김지성 연구는 음성 입력 진동 시뮬레이터와 SQ를 사용했으며 실제 참가자 성대 근육 활성 측정이 아님 | Kim 2024, DOI 10.12963/csd.240052 |
| 기포 진동 | Horáček 등은 해당 조건에서 기포 11–11.5Hz와 기계적 공진 가능성을 보고함. 고정 마사지 효과로 일반화하지 않음 | Horáček 등 2017 |

## 문장별 검토 후보 목록

| 파일 | 줄 | 판정 | 원문 후보 |
|---|---:|---|---|
| `src/coachData.ts` | 2 | 코칭 문장 검토 | {id:'hooty',name:'Hooty',ko:'가볍고 둥근 우',family:'가벼운 연결',say:'작게 놀라듯 “우~”. 편하게 나오는 음에서 아래로 이어볼게요.',how:'편한 음에서 /u/를 둥글고 가볍게 낸 뒤 짧게 내려온다. 후두를 손으로 누르거나 일부러 하품 자세를 크게 만들지 않는다.',goal:'상행에서 커지는 음량·노력감을 바꿔볼 후보',good:'가벼워지면서도 모음과 음정 연결이 남는다.',bad... |
| `src/coachData.ts` | 3 | 코칭 문장 검토 | {id:'goo',name:'Goo',ko:'구',family:'모음으로 전이',say:'“구~” 하고, 자음이 지난 뒤의 “우”를 편하게 이어주세요.',how:'입술을 둥글게 하고 구를 짧게 시작한다. 자음을 세게 튕기지 않고 뒤의 /u/를 이어간다.',goal:'보조 도구에서 찾은 발성을 음절로 옮겨볼 후보',good:'자음 뒤에도 소리가 남고 연결이 유지된다.',bad:'구에서만 크고 우에서 새거나 눌린다.',nex... |
| `src/coachData.ts` | 4 | 수정 대상 | {id:'mum',name:'Mum',ko:'멈',family:'모음으로 전이',say:'평소처럼 “멈”. 음이 바뀌어도 같은 편안함으로 이어볼게요.',how:'편안한 말소리의 멈을 시작점으로 짧은 음형을 부른다. 어둡고 두꺼운 음색을 강제로 만들지 않는다.',goal:'모음·자음이 있는 조건에서 연결 비교',good:'음절을 반복해도 시작과 연결이 편하다.',bad:'아래 음에서 무거워지거나 목이 조인다.',next:'... |
| `src/coachData.ts` | 5 | 출처 대조 | {id:'lip',name:'Lip trill',ko:'입술 떨기',family:'SOVT',say:'입술을 가볍게 떨며, 편한 범위 안에서 소리를 이어볼게요.',how:'입술 떨림에 목소리를 얹어 짧게 수행한다. 떨림을 유지하려고 세게 불어야 한다면 다른 도구와 비교한다.',goal:'반폐쇄 조건에서 수행 반응 탐색',good:'편안하게 이어지고 도구를 제거한 모음도 편하다.',bad:'세게 불어야 유지되거나 턱·목의 ... |
| `src/coachData.ts` | 6 | 출처 대조 | {id:'tongue',name:'Tongue trill',ko:'혀 떨기',family:'SOVT',say:'혀끝을 가볍게 떨며 소리를 짧게 이어주세요.',how:'혀끝 떨림이 편하게 가능한 경우 사용한다. 혀가 떨리지 않는 것을 발성 능력의 문제로 판정하지 않는다.',goal:'다른 반폐쇄 조건을 비교할 후보',good:'혀·턱 노력감이 적고 발성이 이어진다.',bad:'떨림 자체에 과한 힘이 들어간다.',next:'... |
| `src/coachData.ts` | 7 | 코칭 문장 검토 | {id:'nay',name:'Nay',ko:'네이',family:'음색·연결 비교',say:'“네이”를 또렷하게. 크기를 키우기보다 모음이 이어지는지 들어볼게요.',how:'짧은 네이를 보통 음량으로 낸다. 징징거리는 음색을 과장하는 정도는 학생 반응에 따라 줄인다.',goal:'모음과 음색을 바꾸며 선명도·연결 비교',good:'노력감 증가 없이 소리의 윤곽이 남는다.',bad:'목이 조이거나 소리만 날카롭게 커진다.'... |
| `src/coachData.ts` | 8 | 코칭 문장 검토 | {id:'gee',name:'Gee',ko:'기',family:'모음으로 전이',say:'“기~”. 모음이 바뀌어도 목의 편안함을 유지해 볼게요.',how:'Goo와 같은 음높이에서 /i/로 바꾸어 비교한다. 밝은 음색을 더 강한 성대 접촉으로 해석하지 않는다.',goal:'/u/와 /i/ 조건에서 연결 차이 확인',good:'모음이 달라져도 음정과 노력감이 안정적이다.',bad:'밝게 만들려다 음량이나 목의 긴장이 커진... |
| `src/coachData.ts` | 9 | 코칭 문장 검토 | {id:'guh',name:'Guh',ko:'거',family:'모음으로 전이',say:'“거~”. 자음을 짧게 지나서 모음이 이어지게 해주세요.',how:'/gʌ/ 음절을 편한 음에서 낸다. 동일한 음높이·음량에서 Goo와 차이를 비교한다.',goal:'좀 더 열린 모음 조건으로 확장',good:'모음을 열어도 갑작스러운 노력감 증가가 없다.',bad:'모음이 열리며 크고 무거워진다.',next:'음량이나 음역을 줄이고... |
| `src/coachData.ts` | 10 | 코칭 문장 검토 | {id:'koo',name:'Koo',ko:'쿠',family:'시작음 비교',say:'“쿠~”. 바람을 세게 터뜨리지 말고 뒤의 우를 이어주세요.',how:'무성 자음 /k/ 뒤에 /u/를 이어 시작음을 비교한다. Goo의 상위 단계나 반드시 더 두성인 음절로 분류하지 않는다.',goal:'자음이 달라질 때 시작·연결 반응 비교',good:'모음 시작이 편하고 일정하다.',bad:'공기가 과하게 터지거나 시작마다 끊긴다... |
| `src/coachData.ts` | 11 | 코칭 문장 검토 | {id:'edge',name:'Edgy mmm',ko:'짧은 에지 음색 탐색',family:'음색·연결 비교',say:'아주 짧게 “음”. 조이지 않고 소리가 남는지 들어볼게요.',how:'편안한 낮은 음에서 짧게 탐색한다. 거친 음색을 오래 유지하거나 고음으로 끌어올리는 과제로 사용하지 않는다.',goal:'학생이 이미 편하게 낼 수 있는 짧은 시작음 탐색',good:'불편 없이 시작하고 다음 모음으로 이어진다.',ba... |
| `src/coachData.ts` | 12 | 출처 대조 | {id:'straw',name:'Straw / Lax Vox',ko:'튜브 발성',family:'SOVT',say:'편하게 소리를 내고, 튜브를 뺀 뒤 같은 모음으로 비교해 볼게요.',how:'튜브 종류·내경·길이·침수 깊이를 기록한다. 기포를 만들기 위해 과도하게 밀지 않는지 관찰한다. 수심은 유형만으로 자동 지정하지 않는다.',goal:'도구 조건과 제거 후 발성의 차이 확인',good:'도구 안에서 편하고 제거 후에... |
| `src/coachData.ts` | 13 | 코칭 문장 검토 | {id:'glide',name:'W / Y glide',ko:'우아 / 이야 연결',family:'노래로 확장',say:'우에서 아로, 이에서 아로. 바뀌는 중간도 끊기지 않게 이어볼게요.',how:'편한 한 음에서 모음을 연결한 뒤 짧은 가사로 옮긴다. 입을 크게 벌리는 정도보다 소리와 노력감 변화를 본다.',goal:'모음 변화와 가사 전이 비교',good:'모음과 가사가 바뀌어도 수행이 유지된다.',bad:'모음이 ... |
| `src/coachData.ts` | 16 | 코칭 문장 검토 | {id:'type4',short:'상행에서 무거워짐',sub:'음이 올라가면 음량·노력감도 커짐',title:'올라갈수록 무거워지는 소리',desc:'상행 전후의 음량·노력감과 뒤집히기 직전의 변화를 비교합니다.',listen:['상행하면서 소리가 점점 커지는가?','음량을 줄이거나 하행하면 반응이 달라지는가?','뒤집히기 전부터 목·턱의 노력감이 커지는가?'],goal:'가벼운 연결을 찾고, 모음에서도 유지하기',seq... |
| `src/coachData.ts` | 17 | 코칭 문장 검토 | {id:'type6',short:'숨이 새고 흐려짐',sub:'편한 음에서도 윤곽을 유지하기 어려움',title:'편한 음에서도 흐려지는 소리',desc:'기식성이 나타나는 음역과, 선명하게 만들 때 추가되는 노력감을 구분합니다.',listen:['편한 말소리에서도 같은 현상이 나타나는가?','선명하게 하려 하면 갑자기 눌리는가?','짧은 시작음 뒤 모음까지 소리가 남는가?'],goal:'덜 누르면서 또렷한 시작과 모음 ... |
| `src/coachData.ts` | 18 | 코칭 문장 검토 | {id:'type2',short:'가볍지만 끊어짐',sub:'가벼운 소리의 연결이 일정하지 않음',title:'가볍게 시작하지만 끊어지는 소리',desc:'처음부터 흐린지, 음역이 바뀔 때만 끊기는지 먼저 확인합니다.',listen:['한 음은 유지되지만 음이 바뀌면 끊기는가?','저음에서도 흐리면 숨이 새는 경향과 함께 비교했는가?','음형을 짧게 하면 수행이 유지되는가?'],goal:'짧은 음형에서 연결의 재현성을 확... |
| `src/coachData.ts` | 19 | 코칭 문장 검토 | {id:'type3',short:'전환 구간이 불안정',sub:'특정 음역·모음에서만 연결이 달라짐',title:'특정 구간에서 달라지는 연결',desc:'같은 음역을 다른 모음·음량·진행 방향으로 비교해 달라지는 조건을 찾습니다.',listen:['같은 음에서도 모음을 바꾸면 달라지는가?','상행과 하행의 반응이 다른가?','앞 음의 음량이나 음색에 영향을 받는가?'],goal:'연결이 달라지는 조건을 하나씩 찾기',s... |
| `src/coachData.ts` | 20 | 코칭 문장 검토 | {id:'type5',short:'시작부터 눌림',sub:'편한 음역에서도 소리가 뻣뻣하고 힘듦',title:'시작부터 노력감이 큰 소리',desc:'학생의 불편감과 소리 시작·유지 과정에서의 변화를 먼저 확인합니다.',listen:['시작 순간과 유지 중 어느 쪽이 더 힘든가?','음량과 음역을 줄이면 편해지는가?','도구를 바꾸어도 불편이 계속되는가?'],goal:'부담이 적은 조건을 비교하고 반응 기록하기',sequ... |
| `src/coachData.ts` | 21 | 코칭 문장 검토 | {id:'type1',short:'연결 유지·노래 적용',sub:'연습의 연결을 가사와 표현으로 확장',title:'찾은 연결을 노래에서도 유지하기',desc:'연습에서 가능한 수행을 가사·음량·템포가 달라져도 재현하는지 확인합니다.',listen:['모음에서 가사로 바뀌어도 편한가?','음량이나 템포를 바꾸면 어디서 달라지는가?','시범 없이도 다시 낼 수 있는가?'],goal:'가사 전이와 독립적인 재현 확인',seq... |
| `src/coachData.ts` | 22 | 코칭 문장 검토 | {id:'mixed',short:'혼합 경향·판단 보류',sub:'한 유형으로 정하기 어려울 때',title:'분류보다 달라지는 조건부터',desc:'같은 학생도 과제에 따라 다른 경향을 보일 수 있습니다. 이번 과제에서 관찰한 내용을 기록합니다.',listen:['어떤 음역·모음에서 문제가 나타나는가?','한 음과 짧은 음형의 반응이 다른가?','불편감이 있으면 과제를 중단했는가?'],goal:'편한 기준 과제를 확보하... |
| `src/coachData.ts` | 24 | 출처 대조 | const STAGES=[{name:'관찰',en:'CHECK',heading:'어떤 조건에서 달라지나요?'},{name:'시도',en:'TRY',heading:'지금은 이 과제를 비교해 보세요'},{name:'조절',en:'ADJUST',heading:'학생 반응에 따라 조건 바꾸기'},{name:'노래 적용',en:'TRANSFER',heading:'가사에서도 같은 반응이 남나요?'}]; |
| `src/coachData.ts` | 26 | 출처 대조 | sovt:{title:'SOVT: 결과는 평가 항목에 따라 다릅니다',body:'Meerschman 등의 대조시험에서 립트릴·물저항·공기 중 빨대는 개선된 항목이 달랐습니다. 특정 도구의 보편적 우월성이나 모든 학생의 동일한 반응을 입증한 결과는 아닙니다.',links:[['Meerschman 등 · 연구 초록','https://pubmed.ncbi.nlm.nih.gov/30408272/'],['Titze, 2006 · ... |
| `src/coachData.ts` | 27 | 수정 대상 | water:{title:'물 높이와 튜브 침수 깊이를 구분합니다',body:'Nascimento 등의 연구는 물 높이 15cm의 병에 튜브를 수면 아래 3cm 넣고 수행했습니다. 여성 집단에서 후방 성문 개방 정도가 감소했으나, 모든 지표와 대상에서 동일한 변화가 나타난 것은 아닙니다. 깊은 수심의 내전 강제 처방으로 일반화하지 않습니다.',links:[['Nascimento 등 · 연구 초록','https://pubme... |
| `src/coachData.ts` | 28 | 코칭 문장 검토 | practice:{title:'코칭 적용안 · 반응을 확인하며 선택',body:'이 화면의 음절·진행 방향·전환 후보는 기존 코칭 자료를 관찰 중심으로 재구성한 적용안입니다. 해당 음절이 특정 근육 활성이나 성문 형태를 반드시 만든다는 임상적 검증을 의미하지 않습니다. 학생에게 실제로 나타난 변화를 기준으로 다음 과제를 선택합니다.',links:[]}, |
| `src/coachData.ts` | 29 | 출처 대조 | contact:{title:'시뮬레이터 결과와 직접 관찰을 구분합니다',body:'김지성(2024)의 연구는 음성을 입력한 진동 시뮬레이터의 영상과 SQ를 분석했습니다. 실제 성대의 접촉력이나 근육 활성도를 직접 측정한 결과로 제시하지 않습니다. SQ는 개방기 시간 / 폐쇄기 시간입니다.',links:[['김지성, 2024 · DOI','https://doi.org/10.12963/csd.240052']]}, |
| `src/coachData.ts` | 30 | 출처 대조 | transfer:{title:'편안함과 노래의 변화는 별도로 확인',body:'Fadel 등의 가수 연구에서는 자기평가가 좋아졌지만 평가자가 들은 말소리와 노래에 유의한 차이는 없었습니다. 도구 안에서의 편안함과 노래 전이를 별도로 기록하는 이유입니다.',links:[['Fadel 등, 2016 · DOI','https://doi.org/10.1590/2317-1782/20162015168']]}, |
| `src/coachData.ts` | 31 | 수정 대상 | pressure:{title:'압력의 위치를 구분합니다',body:'Titze(2006)의 컴퓨터 모델에서 입술 쪽 반폐쇄는 평균 성문상압과 성문내압을 높였습니다. 이를 “후두내압 하강으로 폭발 방지” 또는 응급 처방의 증거로 해석하지 않습니다.',links:[['Titze, 2006 · PubMed','https://pubmed.ncbi.nlm.nih.gov/16671856/']]} |
| `src/coachData.ts` | 34 | 출처 대조 | export default {TOOLS,PATTERNS,STAGES,EVIDENCE}; |
| `src/App.tsx` | 1 | 코칭 문장 검토 | import { useEffect, useMemo, useState } from 'react'; |
| `src/App.tsx` | 2 | 출처 대조 | import { TOOLS, PATTERNS, STAGES, EVIDENCE } from './coachData'; |
| `src/App.tsx` | 14 | 코칭 문장 검토 | function load<T>(key:string,fallback:T):T{try{return JSON.parse(localStorage.getItem(key)\|\|'null')??fallback}catch{return fallback}} |
| `src/App.tsx` | 16 | 코칭 문장 검토 | export default function App(){ |
| `src/App.tsx` | 17 | 코칭 문장 검토 | const [view,setView]=useState<View>('lesson'); const [patternId,setPatternId]=useState('type4'); const [stage,setStage]=useState(0); const [toolId,setToolId]=useState('hooty'); const [response,setResponse]=useState(''); const [filter,set... |
| `src/App.tsx` | 19 | 코칭 문장 검토 | useEffect(()=>{if(!running)return;const id=window.setInterval(()=>setSeconds(x=>x+1),1000);return()=>clearInterval(id)},[running]); |
| `src/App.tsx` | 20 | 코칭 문장 검토 | useEffect(()=>{localStorage.setItem('voispeech_coach_draft_v1',JSON.stringify(draft))},[draft]); |
| `src/App.tsx` | 22 | 코칭 문장 검토 | const choosePattern=(id:string)=>{const next=PATTERNS.find(x=>x.id===id)!;setPatternId(id);setToolId(next.sequence[0]);setStage(0);setResponse('');setDraft(d=>({...d,observations:[],history:[]}))}; |
| `src/App.tsx` | 23 | 코칭 문장 검토 | const chooseTool=(id:string)=>{setToolId(id);setStage(1);setResponse('')}; |
| `src/App.tsx` | 29 | 코칭 문장 검토 | const responseBox=<div className="responses">{Object.entries(responseNames).map(([id,label])=><button key={id} className={`response ${response===id?'selected':''}`} onClick={()=>{setResponse(id);record(label)}}>{id==='better'?'✓':id==='p... |
| `src/App.tsx` | 30 | 출처 대조 | const lesson=<><div className="page-intro"><div><div className="eyebrow">COACH WORKSPACE</div><h1>듣고, 비교하고, 연결하기.</h1><p>지금 들리는 경향에서 다음 코칭 행동을 찾으세요.</p></div><div className="timer"><small>수업 경과</small><strong>{String(Math.floor(seconds/6... |
| `src/App.tsx` | 31 | 출처 대조 | const tools=<div className="content-wide">{intro('TOOL DICTIONARY','이름보다, 쓰는 방법부터.','목적·방법·학생에게 할 말·전환 기준을 같은 순서로 확인합니다.')}<div className="filter-row">{['전체',...Array.from(new Set(TOOLS.map(x=>x.family)))].map(x=><button className={`btn ... |
| `src/App.tsx` | 32 | 출처 대조 | const archivePage=<div className="content-wide">{intro('REFERENCE LIBRARY','필요할 때, 더 깊이.','수업용 요약에서 상세 플로우와 근거까지 이어집니다.')}<div className="archive-layout"><nav className="archive-nav">{[['evidence','검토된 연구 해석'],['types','유형별 상세 원문'],['too... |
| `src/App.tsx` | 35 | 코칭 문장 검토 | const searchHits=search?([...PATTERNS.filter(x=>(x.title+x.desc).toLowerCase().includes(search.toLowerCase())).map(x=>({label:x.short,id:x.id,type:'pattern'})),...TOOLS.filter(x=>(x.name+x.ko+x.tags).toLowerCase().includes(search.toLower... |
| `src/App.tsx` | 36 | 출처 대조 | return <div className={focus?'focus-mode':''}><header className="app-header"><button className="brand" onClick={()=>setView('lesson')}><span className="brand-symbol">∿</span><span><strong>VoiSpeech</strong><small>COACH FIELD GUIDE</small... |
| `src/App.tsx` | 37 | 코칭 문장 검토 | function intro(k:string,title:string,description:string){return <div className="page-intro"><div><div className="eyebrow">{k}</div><h1>{title}</h1><p>{description}</p></div></div>} |
| `src/main.tsx` | 1 | 코칭 문장 검토 | import {StrictMode} from 'react'; |
| `src/main.tsx` | 2 | 코칭 문장 검토 | import {createRoot} from 'react-dom/client'; |
| `src/main.tsx` | 7 | 코칭 문장 검토 | <StrictMode> |
| `src/main.tsx` | 9 | 코칭 문장 검토 | </StrictMode>, |
| `src/types.ts` | 13 | 코칭 문장 검토 | { level: "Hardest (가장 강한 성대 접촉)", examples: "G, B, D" }, |
| `src/types.ts` | 22 | 코칭 문장 검토 | stage: string; |
| `src/types.ts` | 34 | 코칭 문장 검토 | slsTarget: string; |
| `src/types.ts` | 36 | 코칭 문장 검토 | characteristics: string[]; |
| `src/types.ts` | 44 | 코칭 문장 검토 | startKey: string; |
| `src/types.ts` | 63 | 코칭 문장 검토 | koreanName: "균형 잡힌 믹스 (Balanced Mix)", |
| `src/types.ts` | 64 | 코칭 문장 검토 | slsTarget: "현재 균형 유지 및 가창 표현 세밀화", |
| `src/types.ts` | 65 | 코칭 문장 검토 | description: "브릿지(Bridge/Passaggio)를 부드럽고 균일한 연결로 통과하며, 흉성(Chest Voice)과 두성(Head Voice)의 균형이 이미 잘 잡혀 있는 이상적인 유형입니다. SLS 공식 분류 명칭인 'Tends To: Mix'에 해당하며, 청취 관찰만으로 구조적 상태를 판단할 수 없으며 보컬적 스킬업이 필요한 상태입니다.", |
| `src/types.ts` | 66 | 코칭 문장 검토 | characteristics: [ |
| `src/types.ts` | 68 | 코칭 문장 검토 | "후두가 안정되어 있고 성대 접촉 빈도가 우수함", |
| `src/types.ts` | 78 | 코칭 문장 검토 | startKey: "여성: G3 – A3 / 남성: C3 – D3 (현재 안정적인 상태 그대로 가볍게 가창 시작)", |
| `src/types.ts` | 83 | 코칭 문장 검토 | stage: "진단", |
| `src/types.ts` | 92 | 코칭 문장 검토 | stage: "Add/Connect", |
| `src/types.ts` | 94 | 코칭 문장 검토 | scale: "1.5 Octave with Sustain", |
| `src/types.ts` | 101 | 코칭 문장 검토 | stage: "Stabilize", |
| `src/types.ts` | 103 | 코칭 문장 검토 | scale: "Octave Repeater", |
| `src/types.ts` | 115 | 코칭 문장 검토 | checkpoint: "보조적인 연습 발음(자음)의 지원이 사라진 상태에서도 완벽한 음정 연결과 성대 접촉 강도가 견고히 유지되는지 확인합니다." |
| `src/types.ts` | 119 | 코칭 문장 검토 | stage: "Speech Level", |
| `src/types.ts` | 130 | 코칭 문장 검토 | name: "Type 2: Light Unstable", |
| `src/types.ts` | 131 | 코칭 문장 검토 | koreanName: "가볍고 불안정한 유형 (Light Unstable)", |
| `src/types.ts` | 132 | 코칭 문장 검토 | slsTarget: "안정적인 성대 접촉 유도 및 브릿지 뒤집힘(Flip) 방지", |
| `src/types.ts` | 133 | 코칭 문장 검토 | description: "성대의 접촉력이 부족하고 흉성이 깊게 발달하지 않아, 저음에서 고음으로 올라갈 때 소리가 자주 가볍게 뒤집히는(Flip) 유형입니다. 오리지널 SLS의 'No Chest + Flip (Type B)'가 융합된 형태입니다. 성대를 무리하게 누르지 않고 넓은 모음과 탄력 있는 접촉 훈련을 병행하여 자연스럽게 성대 폐쇄를 유도해야 합니다.", |
| `src/types.ts` | 139 | 코칭 문장 검토 | primaryTools: ["B[ae]b, D[ae]d, K[ae]k", "Staccato 훈련", "Edgy mmm", "Cry (울음 섞인 톤)"], |
| `src/types.ts` | 140 | 코칭 문장 검토 | avoidTools: ["Hooty 계열 음성 훈련 (성대 접촉을 더 약화시킴)", "좁은 모음 ([i], [u])"], |
| `src/types.ts` | 141 | 코칭 문장 검토 | strategy: "좁고 부드러운 모음보다는 '넓고 밝은 모음'을 앞세워 적정한 성대 밀착감을 먼저 회복합니다. 음정이 가창 도중 가성으로 뒤집히면(Flip), 'Edgy mmm'을 적용하여 성대의 얇고 선명한 울림을 즉시 리셋해 줍니다.", |
| `src/types.ts` | 142 | 코칭 문장 검토 | motorDiagnostic: "성대 접촉 협응에 대한 끌개가 너무 얕거나 없음. 약간의 부하(음정 상승)만 걸려도 가성(반대위상)으로 상전이가 즉시 일어나며 도피하는 상태.", |
| `src/types.ts` | 143 | 수정 대상 | constraintRedesign: "[과제 제약] 파열음(B, D, K)과 같은 물리적 장애물을 추가해 성대 하부에 순간적인 기압을 형성, 성대가 닫히지 않으면 소리를 낼 수 없는 강제적 과제 제약을 부여.", |
| `src/types.ts` | 145 | 코칭 문장 검토 | transferDesign: "Staccato 파열음 ➡️ Sustain 파열음 ➡️ 넓은 모음 기반 연결 ➡️ 짧은 가사 적용. (임계 요동 주의: Type 5 상전이 경고)", |
| `src/types.ts` | 146 | 코칭 문장 검토 | startKey: "여성: G3 – A3 / 남성: C3 (안정적인 흉성을 확실히 확보하기 위해 반드시 낮은 음역에서 훈련을 점진 시작)", |
| `src/types.ts` | 147 | 코칭 문장 검토 | keyPoints: "넓은 모음과 탄력적인 자음 조합으로 먼저 안전하게 성대 접촉을 이끌어내고, 소리가 깨지거나 흐려지면 즉시 Edgy mmm 스태카토로 재교정합니다.", |
| `src/types.ts` | 151 | 코칭 문장 검토 | stage: "Discover", |
| `src/types.ts` | 153 | 코칭 문장 검토 | scale: "Staccato (Cord Adduction)", |
| `src/types.ts` | 165 | 코칭 문장 검토 | checkpoint: "매 음표마다 성대가 헐겁지 않고, 또렷하게 착 달라붙는 명료한 감각(성대 접촉)이 살아 있는지 확인합니다." |
| `src/types.ts` | 171 | 코칭 문장 검토 | scale: "1.5 Octave", |
| `src/types.ts` | 192 | 코칭 문장 검토 | checkpoint: "실전 곡을 부르는 도중 가성으로 홀랑 뒤집히거나 풀려버리는 바람 소리(Breathy)가 나면, Edgy mmm 스태카토로 해당 프레이즈를 즉시 풀고 다시 연습합니다." |
| `src/types.ts` | 199 | 코칭 문장 검토 | koreanName: "과도기적 유형 (Light Transitional - 이동 표적 Moving Target)", |
| `src/types.ts` | 200 | 코칭 문장 검토 | slsTarget: "흉성 발달을 점진적으로 강화하며 브릿지 통과의 안정화 도모", |
| `src/types.ts` | 207 | 코칭 문장 검토 | primaryTools: ["Nay (가파르고 둔탁하지 않은 톤)", "W/w 자음 가창", "G[ʌ]g + Cry", "N[ei] / N[ae]"], |
| `src/types.ts` | 208 | 코칭 문장 검토 | avoidTools: ["고정된 금지 툴은 없으나 현재 나타나는 세부 Tends To에 따라 조건부 선택 (브리지에서 무거워지면 좁은 모음/Release 계열, 접촉이 빠지면 Friendly Compression/경음 자음 계열, 후두가 오르면 Hooty 계열로 즉시 조정)"], |
| `src/types.ts` | 209 | 출처 대조 | strategy: "성대의 접촉력이 갑자기 사라지거나 풀리면, 즉시 날카로운 접촉을 돕는 'Nay' 발음으로 단단하게 연결감을 리셋해 주는 전략을 사용합니다. 흉성을 유지하는 내부 근육(TA)을 안전하고 점진적으로만 증강시키는 것이 본 유형의 핵심입니다.", |
| `src/types.ts` | 211 | 코칭 문장 검토 | constraintRedesign: "[과제 제약] Nay, W[ʌ]w, G[ʌ]g 등 좁은 모음과 혀/입술의 보조적 저항을 활용해, 상전이가 일어날 때의 과부하를 줄여주고 임계 요동 구간의 진폭을 억제.", |
| `src/types.ts` | 212 | 코칭 문장 검토 | emergenceFeedback: "연결이 흔들리는 임계 요동 현상을 무조건 실패로 보지 않고 '상전이의 정상적 신호(좋은 변동성)'로 해석. 'Nay'나 울음소리(Cry)를 사용한 외적 초점으로 자연스러운 믹스 협응의 창발만 유도.", |
| `src/types.ts` | 213 | 코칭 문장 검토 | transferDesign: "Nay/W 반복 ➡️ Octave Repeater로 이동폭 확대 ➡️ 구강 개방을 점진적으로 넓힌 모음으로 전이 ➡️ 가사.", |
| `src/types.ts` | 214 | 코칭 문장 검토 | startKey: "여성: G3 – A3 / 남성: C3 (기초 진단 가창 단계에서는, 초기 후두 긴장을 줄이고 편안함을 최우선으로 유도)", |
| `src/types.ts` | 215 | 코칭 문장 검토 | keyPoints: "풍부한 흉성을 가지고 있으나 연결이 취약한 상태이므로, 'Nay' 발음을 통해 브릿지 통과 경험을 안전하게 누적시키는 것이 보컬 성장의 핵심입니다.", |
| `src/types.ts` | 229 | 코칭 문장 검토 | tools: "Nay + W[ʌ]w", |
| `src/types.ts` | 232 | 코칭 문장 검토 | queuing: "Nay로 흉성 확인하고 W로 부드럽게 연결", |
| `src/types.ts` | 233 | 코칭 문장 검토 | checkpoint: "소리가 뒤집혀 바람이 확 새는 것을 감지하는 지점을 확인하고, 소리가 완전히 뒤집히면 즉시 Nay 가창 모드로 복귀하여 차분히 연결감을 리셋합니다." |
| `src/types.ts` | 251 | 코칭 문장 검토 | checkpoint: "가창 훈련 중에 성대 접촉이 탄탄히 연결되는지 확인하고, 소리가 많이 무거워지거나 후두가 흔들리면 W 발음으로 돌아가 수평을 다시 맞춥니다." |
| `src/types.ts` | 257 | 코칭 문장 검토 | scale: "Octave Down 3x", |
| `src/types.ts` | 260 | 코칭 문장 검토 | checkpoint: "노래 가창에서 저음과 고음의 격차가 지나치게 크고 계속 흔들리거나 어색하다면, 'Nay + W' 연습 조합을 징검다리 삼아 한 소절씩 다듬고 갑니다." |
| `src/types.ts` | 268 | 코칭 문장 검토 | slsTarget: "후두 위치의 하강 및 목 주변의 과도한 외부 근육 긴장 이완", |
| `src/types.ts` | 269 | 코칭 문장 검토 | description: "무겁고 둔탁한 저음 발성(Chest Voice) 스타일을 고음부 브릿지 영역까지 밀어 올려 가창하느라, 후두가 성대를 꽉 쥔 채 치솟고 목이 강하게 압박되어 결국 더 이상 높은 소리가 나지 않거나 극단적으로 뒤집히게(Flip) 되는 전형적인 풀체스트 유형입니다. SLS 공식 분류 명칭 명칭의 'Tends To: Pull Chest' 및 'Flip Type A (흉성 끌어올리기 시도 끝에 크게 뒤집... |
| `src/types.ts` | 272 | 수정 대상 | "목에 핏대가 심하게 서고 소리가 경직되며, 브릿지 구간에서 강제적인 한계에 다다름", |
| `src/types.ts` | 275 | 코칭 문장 검토 | primaryTools: ["Lip Trill / Tongue Trill (유연성 회복)", "Hooty W[i]/G[i], G[u], N[ei]", "M[ʌ]m (Reinforcing 단계 제한적 사용)"], |
| `src/types.ts` | 277 | 코칭 문장 검토 | strategy: "저음부터 밀고 올라가는 순방향 훈련법은 실패 확률이 다분히 높습니다. 과도한 공기 사용량과 흉성 무게를 줄이고 (Airflow 원활화), 좁은 모음과 top-down scale로 브리지 release를 경험하게 합니다. 목표는 성대를 더 붙이는 것이 아니라 moderate adduction + low stable larynx + connected release입니다.", |
| `src/types.ts` | 279 | 출처 대조 | constraintRedesign: "[조건 재설계/자유도 제한] 현재 스트랩 근육이 과부하를 견디고 있으므로, 고음역 시도 중단. 음역/음량 축소, 템포 늦춤. SOVTE(Lip Trill, Hooty)로 성도 임피던스를 바꿔 Pulled Chest로 빠질 수 없는 무해한 과제 제약 부여.", |
| `src/types.ts` | 281 | 출처 대조 | transferDesign: "SOVTE(Lip Trill/Hooty) ➡️ 반폐쇄 모음(M[ʌ]m) ➡️ 개방 모음(N[ei]) ➡️ 짧은 가사 ➡️ 부하 재상승.", |
| `src/types.ts` | 282 | 코칭 문장 검토 | startKey: "여성: C#4 – C#5 / 남성: F#3 – G4 (밀어 올릴 수 없는 높은 음성 구역에서부터 가볍게 하행하여 두성을 유도)", |
| `src/types.ts` | 288 | 코칭 문장 검토 | tools: "Lip Trill + Hooty W[i]", |
| `src/types.ts` | 289 | 코칭 문장 검토 | scale: "1.5 Octave (Tricking)", |
| `src/types.ts` | 290 | 수정 대상 | dynamicBreath: "p~mp, 저 공기 사용량 (절대 밀지 않기)", |
| `src/types.ts` | 298 | 코칭 문장 검토 | scale: "Octave Repeater (Reinforcing)", |
| `src/types.ts` | 307 | 코칭 문장 검토 | scale: "1.5 Octave (모음 좁히기)", |
| `src/types.ts` | 310 | 코칭 문장 검토 | checkpoint: "하행 도중에 목구멍 속의 넓은 뼈대(Larynx) 안정적 깊이로 연착륙하며 잘 머물고 있는지, 중도에 무거움이 치솟으면 Hooty 단계로 신속히 복귀합니다." |
| `src/types.ts` | 328 | 코칭 문장 검토 | checkpoint: "원 가사로 가창할 때 한순간 쥐어짜는 무거운 습관이 눈에 띄면, 망설임 없이 'Lip Trill + Hooty'로 리미터를 걸어 즉각 초기화합니다." |
| `src/types.ts` | 334 | 코칭 문장 검토 | name: "Type 5: Pressed/Over-adducted", |
| `src/types.ts` | 335 | 코칭 문장 검토 | koreanName: "성대 과압착 유형 (Pressed/Over-adducted)", |
| `src/types.ts` | 336 | 코칭 문장 검토 | slsTarget: "성대의 지나친 과압착 완화 및 성문 폐쇄 긴장 이완", |
| `src/types.ts` | 337 | 코칭 문장 검토 | description: "성대를 지나치게 강력하고 뻣뻣하게 밀착(Over-compression)하는 습관 때문에, 폐에서 올라오는 부드러운 공기 흐름이 성대 사이를 원활히 빠져나가지 못하고 턱 막혀 버리는 유형입니다. 이는 SLS 원본의 독립 Tends To라기보다 Pull Chest 또는 Imperfect Mix 내부에서 나타나는 pressed sub-pattern에 해당합니다. '더 단단히 깊이 붙여서 가창하자'라는 ... |
| `src/types.ts` | 343 | 코칭 문장 검토 | primaryTools: ["Lip Trill (립트릴)", "Tongue Trill (텅트릴/설소대 릴리즈)", "Hooty (가벼운 포근한 바보 목소리 음색, 임시적 과제 제약으로만 사용)", "가벼운 M[ʌ]m (가장 옅은 성대 터치)"], |
| `src/types.ts` | 344 | 코칭 문장 검토 | avoidTools: ["징징대는 소리 (Bratty)", "비강 접촉 (Pharyngeal)", "Ng [ŋ] 조임 툴", "경음 자음 및 Edgy mmm의 무분별한 사용"], |
| `src/types.ts` | 345 | 수정 대상 | strategy: "목 주변에 '성대가 좌우로 약간 평화롭게 멀어져 얇게 풀리는 듯한 산뜻한 감각'을 빚어주는 것이 제1훈련 수칙입니다. '더 강하게 발성하라'는 주문은 절대 닫아두고 오직 립트릴과 텅트릴의 안정적인 마사지에 가창 시간을 풍성하게 할애합니다. ★ Type 5 예외: Hooty는 후두 하강 및 외부근 이완을 돕는 임시 도구이며, 숨섞임은 과폐쇄 해제의 자연스러운 '결과'일 뿐입니다. Hooty 없이 선명한 ... |
| `src/types.ts` | 348 | 코칭 문장 검토 | emergenceFeedback: "'목에 힘부터 빼라'는 지시를 우선 피하고 반응을 확인(오히려 긴장 증폭). Trill의 '부드러운 떨림' 기류나 Hooty의 '풍성하게 풀린 톤' 자체에 외적 초점을 두게 하여 이완 상태의 수동적 창발 유도.", |
| `src/types.ts` | 349 | 코칭 문장 검토 | transferDesign: "Lip/Tongue Trill ➡️ Hooty ➡️ 가벼운 Touch의 M[ʌ]m ➡️ 약 공기 사용량 기반 N[ei] 연결 ➡️ 단계적 부하 회복.", |
| `src/types.ts` | 350 | 코칭 문장 검토 | startKey: "여성: C#4 – C#5 / 남성: F#3 – G4 (목 수축 관성이 도무지 발동될 수 없는 고음에서부터 이완과 하행을 주도하는 전략)", |
| `src/types.ts` | 351 | 수정 대상 | keyPoints: "선명한 p를 무리하게 유지하려다 조용한 압착(quiet pressing)에 빠지는 것을 가장 경계해야 합니다. Hooty의 의도적인 숨섞임으로 과폐쇄를 강제로 해제하는 것이 핵심입니다.", |
| `src/types.ts` | 365 | 코칭 문장 검토 | tools: "Hooty", |
| `src/types.ts` | 369 | 수정 대상 | checkpoint: "치료적 숨섞임! 과폐쇄 상태를 강제로 해제 (선명한 p를 유지하면 조용한 압착이 됨을 주의)" |
| `src/types.ts` | 374 | 코칭 문장 검토 | tools: "Hooty + M[ʌ]m", |
| `src/types.ts` | 378 | 코칭 문장 검토 | checkpoint: "자연 접촉 복귀 (압착이 풀린 후 다른 발성 상태로 이동)" |
| `src/types.ts` | 382 | 코칭 문장 검토 | stage: "Stabilize/Speech Level", |
| `src/types.ts` | 384 | 코칭 문장 검토 | scale: "Octave Repeater / 노래 적용", |
| `src/types.ts` | 395 | 코칭 문장 검토 | slsTarget: "접촉 강화 유도 및 성역 가창 흉성 구조 구축", |
| `src/types.ts` | 396 | 코칭 문장 검토 | description: "성대가 제대로 접촉하지 못하고 벌어져 전 음역대에서 많은 양의 바람이 새며, 맑고 또렷한 진성이 나지 않고 가성처럼 풀려버리는 유형입니다. 오리지널 SLS의 'Tends To: No Chest (Little Girl)'의 특징을 지닙니다. 호흡이 새는 소리를 개선하고 가벼운 성대 접촉을 유도하기 위해 저음부터 'Edgy mmm'과 자음을 조합해 안정적인 접촉 감각을 키워야 합니다.", |
| `src/types.ts` | 398 | 코칭 문장 검토 | "성대 접촉 면적이 고르지 못하고 벌어져 호흡이 많이 새며 선명한 음성이 나지 안흠", |
| `src/types.ts` | 400 | 코칭 문장 검토 | "소리가 아예 뒤집혀서 끊기기보다는, 처음부터 끝까지 맥없는 가성 같은 바람 실린 소리 위주로 발성됨" |
| `src/types.ts` | 402 | 코칭 문장 검토 | primaryTools: ["Edgy mmm (성대 앞쪽 접촉 유도)", "자음 기반 훈련 (B, D, K + Cry)", "G[ʌ]g (후두 낮추기 및 접촉 유도)", "Squeaky Door (가벼운 성대 접촉을 유도하는 삐걱거리는 문 소리 기법)"], |
| `src/types.ts` | 403 | 코칭 문장 검토 | avoidTools: ["Hooty 계열 (흉성 발견 초기의 주 도구로는 부적합. 다만 접촉을 만든 뒤 과압축으로 전이될 경우 리셋 도구로 짧게 사용 가능)", "가성을 과도하게 유발해 성대를 벌리는 좁은 모음"], |
| `src/types.ts` | 404 | 코칭 문장 검토 | strategy: "편안하게 부를 수 있는 저음역대에서부터 'Edgy mmm'과 압력 조절을 돕는 자음을 연결하여, 성대가 가볍고 안전하게 연결되는 접촉을 알게 하는 것이 중요합니다. 접촉이 강화되면서 성대가 지나치게 조이는 상태(Type 5)로 가지 않도록 주의하며, 소리가 조일 경우 즉시 립트릴로 이완을 유도합니다.", |
| `src/types.ts` | 405 | 코칭 문장 검토 | motorDiagnostic: "성대 폐쇄 협응 자체가 거의 형성되지 못하고, 전 음역에서 성문 이탈기류(호흡 누수) 상태만이 하나의 안정 끌개로 작용하는 극도 소극적 협응 상태.", |
| `src/types.ts` | 406 | 코칭 문장 검토 | constraintRedesign: "[과제 제약 창출] 'Edgy mmm', 파열음(G, B, K), 그리고 Squeaky Door(문 삐걱임)를 결합하여, 유출되는 호흡 기류에 즉각적인 물리적 저항 장벽(성문 폐쇄의 필연성)을 구축.", |
| `src/types.ts` | 407 | 코칭 문장 검토 | emergenceFeedback: "'성대를 세게 붙여라' 직접 지시 금지(Type 5로 전이되는 나쁜 보상 우려). Edgy 사운드의 선명한 '크랙' 질감(결과물)에 청각적 주의초점을 맞추어 무의식적 접촉력 창발 달성.", |
| `src/types.ts` | 408 | 코칭 문장 검토 | transferDesign: "Edgy mmm / Staccato ➡️ 파열음 B/D/K + Cry 결합 ➡️ 지속적인 유성자음(G, B) 연결 ➡️ 일반 모음 전이.", |
| `src/types.ts` | 409 | 코칭 문장 검토 | startKey: "여성: G3 – A3 / 남성: C3 (가장 편안하고 명료한 흉성 본령을 가둘 수 있는 저음 극단 구역에서 무조건 시작)", |
| `src/types.ts` | 419 | 코칭 문장 검토 | checkpoint: "허공으로 힘없이 빠져나가는 성문 기류를 막고, 성대가 최소치로라도 서로 명확하게 맞닿는지 귀 기울여 모니터링합니다." |
| `src/types.ts` | 426 | 코칭 문장 검토 | dynamicBreath: "mp~mf (접촉 후 큰 소리로 빼지 않기)", |
| `src/types.ts` | 436 | 코칭 문장 검토 | queuing: "G로 시작, 가벼운 접촉 유지", |
| `src/types.ts` | 437 | 코칭 문장 검토 | checkpoint: "성대 접촉이 탄탄히 지속되는 상태인지 확인하고, 접촉 감각이 너무 과해져 무서운 압착 상태가 엿보이면 즉각 Cry 이완을 주입합니다." |
| `src/types.ts` | 446 | 코칭 문장 검토 | checkpoint: "지나친 목 근육의 동요 없이 부드러운 성량 상태에서도 완벽하게 빈틈없는 성대 접촉과 가벼운 연결이 깔끔하게 완성되어 보전되는지 판별합니다." |
| `src/types.ts` | 454 | 코칭 문장 검토 | queuing: "가벼운 접촉 유지하며 불러보세요", |
| `src/types.ts` | 464 | 코칭 문장 검토 | reason: "후두를 끌어올리는 Pull Chest 성향을 해결하기 위해 이완 도구(Lip Trill, Hooty 등)를 사용하던 중 연결이 유지되지 않고 성대가 지나치게 벌어지는 방향으로 Tends To가 스윙한 상태", |
| `src/types.ts` | 465 | 코칭 문장 검토 | solution: "성대 접촉을 유도하는 경음 자음(G, B, D)이나 Bratty N[ae] 모음을 투입하여 연결의 탄력성을 복구합니다.", |
| `src/types.ts` | 470 | 코칭 문장 검토 | reason: "접촉이 부족해 호흡이 새던 상태(No Chest)에서, Edgy나 경음 자음을 활용해 접촉을 유도하는 과정 중 성대 폐쇄력이 과도해져 압착 방향으로 Tends To가 스윙한 상태", |
| `src/types.ts` | 471 | 코칭 문장 검토 | solution: "접촉 유도를 잠시 멈추고 Hooty나 Lip Trill을 짧게 처방하여 과도하게 좁아진 성문과 후두 주변을 즉시 릴리즈 해줍니다.", |
| `src/types.ts` | 476 | 코칭 문장 검토 | reason: "성대 접촉력이 부족했던 상태(Type 2)에서 모음 교정 훈련으로 어느 정도 흉성 확립의 기틀이 잡혔으나, 환절기 구역(브릿지)에서 연결을 방어할 근력이나 요령이 미처 다듬어지지 않아 여전히 갈라짐이 남아있는 상태", |
| `src/types.ts` | 477 | 코칭 문장 검토 | solution: "Nay 발성을 통한 Tricking을 접목해 브릿지 연결 감각을 누적(Stabilize)시키며, 좁은 모음과 하행 스케일을 이용해 점진적으로 믹스의 안착을 유도합니다.", |
| `src/types.ts` | 478 | 코칭 문장 검토 | attention: "성대가 순간적으로 풀려 Flip이 재발한다면 가벼운 Nay 가락이나 Edgy mmm으로 안전하게 리셋 후 재시도합니다." |
| `src/types.ts` | 482 | 코칭 문장 검토 | reason: "브릿지 통과 시 겪던 불안정한 흔들림이나 Flip이 해소되고 흉성과 두성의 밸런스가 잡혀 SLS의 지향점인 균형 잡힌 믹스로 진입한 상태", |
| `src/types.ts` | 483 | 코칭 문장 검토 | solution: "인위적인 보조 훈련 툴(Bratty, Hooty 등)의 비중을 신속히 낮추고 Speech Level로 전환하는 가창 비율을 높입니다.", |
| `src/types.ts` | 492 | 코칭 문장 검토 | classification: "Safe Adduction (안전한 접촉 유도)", |
| `src/types.ts` | 505 | 코칭 문장 검토 | principle: "복근을 비롯한 전신 신체의 자연스러운 협응력을 유도하여, 목 주변 불필요한 외부 근육의 짓누름 없이 편안한 후두 하강 및 유효 성대 접촉을 균형 있게 만들어냅니다.", |
| `src/types.ts` | 506 | 코칭 문장 검토 | reason: "과압착으로 찌그러지는 쇠소리를 내는 실수를 피하면서도, 힘없이 벌어지던 숨소리(Type 2, 6)의 성문에 편안하고 선명한 안착감을 즉각 제공합니다. (SLS에서 상대적 저위험의 치유 지대)." |
| `src/types.ts` | 523 | 코칭 문장 검토 | warning: "[ei] 모음이 수축 폭을 가늘게 조이면서 과소폐쇄 환자(Type 2, 6)의 고중음 부분에서 두성 방향으로 당기는 본능을 일부 과동조할 부작용이 잔존.", |
| `src/types.ts` | 527 | 코칭 문장 검토 | name: "Staccato 실행 (스타카토)", |
| `src/types.ts` | 532 | 코칭 문장 검토 | clashSection: [ |
| `src/types.ts` | 533 | 코칭 문장 검토 | { tool: "Hooty / Dumb / Woofy", type45: "✓ 우선 고려할 수 있음 (후두가 솟구치는 풀체스트 이완 및 후두 하강에 유효)", type26: "✗ 주의가 필요함 (숨소리가 새는 병증을 극단화하여 성대 울림의 질적 고사를 가속함)" }, |
| `src/types.ts` | 534 | 코칭 문장 검토 | { tool: "Bratty / Pharyngeal / 징징거림", type45: "✗ 주의가 필요함 (턱 끝과 성대 주변을 조여매는 과압축 염증을 극한까지 악화함)", type26: "✓ 우선 고려할 수 있음 (희미한 성대의 에지 부분에 접촉의 활력을 불어넣는 보약)" }, |
| `src/types.ts` | 535 | 코칭 문장 검토 | { tool: "Ng [ŋ] 이응 받침 가창", type45: "✗ 주의가 필요함 (과도한 이완 없이 골격을 압착)", type26: "✓ 우선 고려할 수 있음 (비강 유도와 성대 에지 접촉 촉진)" }, |
| `src/types.ts` | 536 | 수정 대상 | { tool: "경음 자음 (B/D/K계열)", type45: "✗ 주의가 필요함 (외부 숨을 억류하여 목 주변 긴장 폭발)", type26: "✓ 우선 고려할 수 있음 (공기 흐름의 훌륭한 저항력으로 탄력 성대 폐쇄 개점)" }, |
| `src/types.ts` | 538 | 코칭 문장 검토 | { tool: "좁은 모음 ([i], [u])", type45: "✓ 우선 고려할 수 있음 (수월한 두성 유입 촉진 및 흉성 당기기 기류 상쇄)", type26: "✗ 주의가 필요함 (충분히 발달하지 못한 저음역 접촉을 더 형편없이 녹여버림)" } |
| `src/types.ts` | 548 | 코칭 문장 검토 | { text: "소리가 뚝 끊겨 삐걱거리거나, 혹은 가벼운 가성으로 소리가 홀랑 뒤집어집니다.", nextId: "q3" }, |
| `src/lib/terms.ts` | 2 | 코칭 문장 검토 | "Passaggio": "음역의 전환 구간(브릿지)으로, 흉성에서 두성으로 부드럽게 넘어가기 위해 조절이 필요한 영역입니다.", |
| `src/lib/terms.ts` | 4 | 코칭 문장 검토 | "Cord Adduction": "성대 접촉. 발성을 위해 두 성대가 기류를 막으며 서로 가까워져 진동을 만들어내는 작용입니다.", |
| `src/lib/terms.ts` | 5 | 코칭 문장 검토 | "성대 접촉": "발성을 위해 두 성대가 기류를 막으며 서로 가까워져 진동을 만들어내는 작용입니다.", |
| `src/lib/terms.ts` | 10 | 코칭 문장 검토 | "Head Voice": "두성. 성대가 얇아지고 적은 질량으로 진동하여 나는 소리로, 머리 위쪽에서 공명이 느껴지는 고음역대 발성입니다.", |
| `src/lib/terms.ts` | 11 | 코칭 문장 검토 | "두성": "성대가 얇아지고 적은 질량으로 진동하여 나는 소리로, 머리 위쪽에서 공명이 느껴지는 고음역대 발성입니다.", |
| `src/lib/terms.ts` | 12 | 코칭 문장 검토 | "Mixed Voice": "흉성과 두성이 단절(Flip) 없이 매끄럽게 연결되어, 안정된 밸런스 상태로 음역을 오가는 발성입니다.", |
| `src/lib/terms.ts` | 13 | 코칭 문장 검토 | "Mix": "흉성과 두성이 단절(Flip) 없이 매끄럽게 연결되어, 안정된 밸런스 상태로 음역을 오가는 발성입니다.", |
| `src/lib/terms.ts` | 14 | 코칭 문장 검토 | "믹스": "흉성과 두성이 단절(Flip) 없이 매끄럽게 연결되어, 안정된 밸런스 상태로 음역을 오가는 발성입니다.", |
| `src/lib/terms.ts` | 20 | 코칭 문장 검토 | "Falsetto": "가성. 성대가 벌어진 채 기류가 빠져나가며 나는 호흡이 많이 섞인 약한 소리입니다. 흉성과 연결될 수 없습니다.", |
| `src/lib/terms.ts` | 21 | 코칭 문장 검토 | "가성": "성대가 완전히 접촉하지 않고 벌어진 채 기류가 빠져나가며 나는 호흡이 많이 섞인 약한 소리입니다.", |
| `src/lib/terms.ts` | 26 | 코칭 문장 검토 | "파린지얼": "매우 좁고 날카롭거나 징징대는 듯한 임시 훈련 소리로, 후두를 낮추고 성대를 잘 접촉시키는 데 사용됩니다.", |
| `src/lib/terms.ts` | 27 | 코칭 문장 검토 | "SLS": "Speech Level Singing. 세스 릭스가 창시한 발성법으로, 말할 때처럼 편안한 후두 위치와 성대 접촉을 유지하며 노래하는 기법입니다.", |
| `src/lib/terms.ts` | 32 | 코칭 문장 검토 | "플립": "Flip. 성대가 견디지 못하고 갑자기 벌어져 가성으로 뒤집히거나 끊어지는 현상.", |
| `src/lib/terms.ts` | 33 | 코칭 문장 검토 | "Flip": "성대가 버티지 못하고 갑자기 풀려 가성으로 뒤집히거나 소리가 끊어지는 차단 현상.", |
| `src/components/VocalDiagnostic.tsx` | 1 | 코칭 문장 검토 | import { useState } from 'react'; |
| `src/components/VocalDiagnostic.tsx` | 3 | 코칭 문장 검토 | import { ChevronRight, RotateCcw, Activity, HelpCircle, CheckCircle } from 'lucide-react'; |
| `src/components/VocalDiagnostic.tsx` | 7 | 코칭 문장 검토 | onSelectType: (typeId: string) => void; |
| `src/components/VocalDiagnostic.tsx` | 10 | 코칭 문장 검토 | export default function VocalDiagnostic({ onSelectType }: VocalDiagnosticProps) { |
| `src/components/VocalDiagnostic.tsx` | 11 | 코칭 문장 검토 | const [currentStepId, setCurrentStepId] = useState<string>("q1"); |
| `src/components/VocalDiagnostic.tsx` | 12 | 코칭 문장 검토 | const [history, setHistory] = useState<string[]>([]); |
| `src/components/VocalDiagnostic.tsx` | 13 | 코칭 문장 검토 | const [diagnosticResult, setDiagnosticResult] = useState<VocalType \| null>(null); |
| `src/components/VocalDiagnostic.tsx` | 17 | 코칭 문장 검토 | const handleSelectOption = (nextId: string \| null, resultTypeId?: string) => { |
| `src/components/VocalDiagnostic.tsx` | 58 | 코칭 문장 검토 | <Activity size={12} className="animate-pulse" /> |
| `src/components/VocalDiagnostic.tsx` | 69 | 코칭 문장 검토 | className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all fo... |
| `src/components/VocalDiagnostic.tsx` | 71 | 코칭 문장 검토 | <RotateCcw size={12} /> |
| `src/components/VocalDiagnostic.tsx` | 91 | 코칭 문장 검토 | onClick={() => handleSelectOption(option.nextId, option.resultTypeId)} |
| `src/components/VocalDiagnostic.tsx` | 92 | 코칭 문장 검토 | className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:bg-teal-50/20 active:bg-teal-50/55 transition-all flex items-center justify-between group" |
| `src/components/VocalDiagnostic.tsx` | 121 | 코칭 문장 검토 | <div className="flex items-start gap-4 mb-5"> |
| `src/components/VocalDiagnostic.tsx` | 138 | 코칭 문장 검토 | <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal"> |
| `src/components/VocalDiagnostic.tsx` | 147 | 코칭 문장 검토 | {diagnosticResult.characteristics.map((char, index) => ( |
| `src/components/VocalDiagnostic.tsx` | 148 | 코칭 문장 검토 | <li key={index} className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-3 rounded-xl text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"> |
| `src/components/VocalDiagnostic.tsx` | 185 | 코칭 문장 검토 | onClick={() => onSelectType(diagnosticResult.id)} |
| `src/components/VocalLessonPlanner.tsx` | 1 | 코칭 문장 검토 | import { useState, useEffect, useRef } from 'react'; |
| `src/components/VocalLessonPlanner.tsx` | 3 | 코칭 문장 검토 | import { Play, Pause, RotateCcw, AlertTriangle, MessageSquare, ListMusic, CheckCircle, ChevronRight, HelpCircle, Activity, Sparkles } from 'lucide-react'; |
| `src/components/VocalLessonPlanner.tsx` | 8 | 코칭 문장 검토 | selectedTypeId: string; |
| `src/components/VocalLessonPlanner.tsx` | 9 | 코칭 문장 검토 | onSelectType: (id: string) => void; |
| `src/components/VocalLessonPlanner.tsx` | 12 | 코칭 문장 검토 | export default function VocalLessonPlanner({ selectedTypeId, onSelectType }: VocalLessonPlannerProps) { |
| `src/components/VocalLessonPlanner.tsx` | 13 | 코칭 문장 검토 | const currentType = VOCAL_TYPES.find(v => v.id === selectedTypeId) \|\| VOCAL_TYPES[0]; |
| `src/components/VocalLessonPlanner.tsx` | 16 | 코칭 문장 검토 | const [isPlaying, setIsPlaying] = useState(false); |
| `src/components/VocalLessonPlanner.tsx` | 17 | 코칭 문장 검토 | const [totalSeconds, setTotalSeconds] = useState(0); // 20분 = 1200초 |
| `src/components/VocalLessonPlanner.tsx` | 18 | 코칭 문장 검토 | const [activeStepIndex, setActiveStepIndex] = useState(0); |
| `src/components/VocalLessonPlanner.tsx` | 21 | 코칭 문장 검토 | const [isTypeSummaryModalOpen, setIsTypeSummaryModalOpen] = useState(false); |
| `src/components/VocalLessonPlanner.tsx` | 24 | 코칭 문장 검토 | useEffect(() => { |
| `src/components/VocalLessonPlanner.tsx` | 26 | 코칭 문장 검토 | }, [selectedTypeId]); |
| `src/components/VocalLessonPlanner.tsx` | 30 | 코칭 문장 검토 | const minutes = totalSeconds / 60; |
| `src/components/VocalLessonPlanner.tsx` | 33 | 코칭 문장 검토 | if (selectedTypeId === 'type5') { // Type 5: 0-6분 / 6-12분 / 12-16분 / 16-18분 / 18-20분 |
| `src/components/VocalLessonPlanner.tsx` | 34 | 코칭 문장 검토 | if (minutes < 6) setActiveStepIndex(0); |
| `src/components/VocalLessonPlanner.tsx` | 35 | 코칭 문장 검토 | else if (minutes < 12) setActiveStepIndex(1); |
| `src/components/VocalLessonPlanner.tsx` | 36 | 코칭 문장 검토 | else if (minutes < 16) setActiveStepIndex(2); |
| `src/components/VocalLessonPlanner.tsx` | 37 | 코칭 문장 검토 | else if (minutes < 18) setActiveStepIndex(3); |
| `src/components/VocalLessonPlanner.tsx` | 38 | 코칭 문장 검토 | else setActiveStepIndex(4); |
| `src/components/VocalLessonPlanner.tsx` | 39 | 코칭 문장 검토 | } else if (selectedTypeId === 'type2') { // Type 2: 0-3분 / 3-8분 / 8-13분 / 13-17분 / 17-20분 |
| `src/components/VocalLessonPlanner.tsx` | 40 | 코칭 문장 검토 | if (minutes < 3) setActiveStepIndex(0); |
| `src/components/VocalLessonPlanner.tsx` | 41 | 코칭 문장 검토 | else if (minutes < 8) setActiveStepIndex(1); |
| `src/components/VocalLessonPlanner.tsx` | 42 | 코칭 문장 검토 | else if (minutes < 13) setActiveStepIndex(2); |
| `src/components/VocalLessonPlanner.tsx` | 43 | 코칭 문장 검토 | else if (minutes < 17) setActiveStepIndex(3); |
| `src/components/VocalLessonPlanner.tsx` | 45 | 코칭 문장 검토 | } else if (selectedTypeId === 'type6') { // Type 6: 0-3분 / 3-9분 / 9-14분 / 14-17분 / 17-20분 |
| `src/components/VocalLessonPlanner.tsx` | 47 | 코칭 문장 검토 | else if (minutes < 9) setActiveStepIndex(1); |
| `src/components/VocalLessonPlanner.tsx` | 48 | 코칭 문장 검토 | else if (minutes < 14) setActiveStepIndex(2); |
| `src/components/VocalLessonPlanner.tsx` | 53 | 코칭 문장 검토 | else if (minutes < 7) setActiveStepIndex(1); |
| `src/components/VocalLessonPlanner.tsx` | 54 | 코칭 문장 검토 | else if (minutes < 12) setActiveStepIndex(2); |
| `src/components/VocalLessonPlanner.tsx` | 55 | 코칭 문장 검토 | else if (minutes < 16) setActiveStepIndex(3); |
| `src/components/VocalLessonPlanner.tsx` | 58 | 코칭 문장 검토 | }, [totalSeconds, selectedTypeId]); |
| `src/components/VocalLessonPlanner.tsx` | 60 | 코칭 문장 검토 | const startTimer = () => { |
| `src/components/VocalLessonPlanner.tsx` | 64 | 코칭 문장 검토 | setTotalSeconds(prev => { |
| `src/components/VocalLessonPlanner.tsx` | 87 | 코칭 문장 검토 | setTotalSeconds(0); |
| `src/components/VocalLessonPlanner.tsx` | 88 | 코칭 문장 검토 | setActiveStepIndex(0); |
| `src/components/VocalLessonPlanner.tsx` | 93 | 코칭 문장 검토 | setActiveStepIndex(index); |
| `src/components/VocalLessonPlanner.tsx` | 94 | 코칭 문장 검토 | let targetSeconds = 0; |
| `src/components/VocalLessonPlanner.tsx` | 97 | 코칭 문장 검토 | if (selectedTypeId === 'type5') { |
| `src/components/VocalLessonPlanner.tsx` | 98 | 코칭 문장 검토 | const stepStarts = [0, 6 * 60, 12 * 60, 16 * 60, 18 * 60]; |
| `src/components/VocalLessonPlanner.tsx` | 99 | 코칭 문장 검토 | targetSeconds = stepStarts[index]; |
| `src/components/VocalLessonPlanner.tsx` | 100 | 코칭 문장 검토 | } else if (selectedTypeId === 'type2') { |
| `src/components/VocalLessonPlanner.tsx` | 101 | 코칭 문장 검토 | const stepStarts = [0, 3 * 60, 8 * 60, 13 * 60, 17 * 60]; |
| `src/components/VocalLessonPlanner.tsx` | 103 | 코칭 문장 검토 | } else if (selectedTypeId === 'type6') { |
| `src/components/VocalLessonPlanner.tsx` | 104 | 코칭 문장 검토 | const stepStarts = [0, 3 * 60, 9 * 60, 14 * 60, 17 * 60]; |
| `src/components/VocalLessonPlanner.tsx` | 107 | 코칭 문장 검토 | const stepStarts = [0, 3 * 60, 7 * 60, 12 * 60, 16 * 60]; |
| `src/components/VocalLessonPlanner.tsx` | 111 | 코칭 문장 검토 | setTotalSeconds(targetSeconds); |
| `src/components/VocalLessonPlanner.tsx` | 117 | 코칭 문장 검토 | return `${mins.toString().padStart(2, '0')}:${remaining.toString().padStart(2, '0')}`; |
| `src/components/VocalLessonPlanner.tsx` | 120 | 코칭 문장 검토 | const activeStep = currentType.lessonFlow[activeStepIndex] \|\| currentType.lessonFlow[0]; |
| `src/components/VocalLessonPlanner.tsx` | 121 | 코칭 문장 검토 | const progressPercent = (totalSeconds / 1200) * 100; |
| `src/components/VocalLessonPlanner.tsx` | 127 | 코칭 문장 검토 | <p className="text-[11px] md:text-xs text-teal-800 dark:text-teal-300 leading-relaxed font-medium"> |
| `src/components/VocalLessonPlanner.tsx` | 129 | 코칭 문장 검토 | 훈련 도중 학생의 Tends To가 바뀌면(예: Type 4가 Hooty 후 Type 2로 풀려버리는 경우 등) 현재 플로우를 고집하지 말고 <strong className="text-teal-900 border-b border-teal-200">즉시 해당 상태(유형)에 맞는 솔루션으로 조향</strong>해야 발성 사고를 예방할 수 있습니다. |
| `src/components/VocalLessonPlanner.tsx` | 139 | 코칭 문장 검토 | onSelectType(v.id); |
| `src/components/VocalLessonPlanner.tsx` | 142 | 코칭 문장 검토 | selectedTypeId === v.id |
| `src/components/VocalLessonPlanner.tsx` | 157 | 코칭 문장 검토 | <Activity size={14} /> |
| `src/components/VocalLessonPlanner.tsx` | 178 | 코칭 문장 검토 | <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-4 rounded-xl"> |
| `src/components/VocalLessonPlanner.tsx` | 187 | 코칭 문장 검토 | {currentType.startKey} |
| `src/components/VocalLessonPlanner.tsx` | 192 | 코칭 문장 검토 | <span className="text-[10px] uppercase font-bold text-teal-600">훈련 목적 (SLS Target)</span> |
| `src/components/VocalLessonPlanner.tsx` | 194 | 코칭 문장 검토 | {currentType.slsTarget} |
| `src/components/VocalLessonPlanner.tsx` | 205 | 코칭 문장 검토 | <p className="text-xs text-slate-750 leading-relaxed"> |
| `src/components/VocalLessonPlanner.tsx` | 223 | 코칭 문장 검토 | <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">{currentType.motorDiagnostic}</p> |
| `src/components/VocalLessonPlanner.tsx` | 228 | 코칭 문장 검토 | <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">{currentType.constraintRedesign}</p> |
| `src/components/VocalLessonPlanner.tsx` | 233 | 코칭 문장 검토 | <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">{currentType.emergenceFeedback}</p> |
| `src/components/VocalLessonPlanner.tsx` | 238 | 코칭 문장 검토 | <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">{currentType.transferDesign}</p> |
| `src/components/VocalLessonPlanner.tsx` | 259 | 코칭 문장 검토 | {formatTime(totalSeconds)} |
| `src/components/VocalLessonPlanner.tsx` | 286 | 코칭 문장 검토 | <RotateCcw size={14} /> |
| `src/components/VocalLessonPlanner.tsx` | 299 | 코칭 문장 검토 | onClick={startTimer} |
| `src/components/VocalLessonPlanner.tsx` | 312 | 코칭 문장 검토 | <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider">포커스 단계 ({activeStep.time})</span> |
| `src/components/VocalLessonPlanner.tsx` | 314 | 코칭 문장 검토 | <TermTooltip text={activeStep.stage} /> |
| `src/components/VocalLessonPlanner.tsx` | 322 | 코칭 문장 검토 | {activeStep.tools} / <span className="text-slate-400 font-normal">{activeStep.scale}</span> |
| `src/components/VocalLessonPlanner.tsx` | 324 | 코칭 문장 검토 | {activeStep.dynamicBreath && ( |
| `src/components/VocalLessonPlanner.tsx` | 326 | 코칭 문장 검토 | <Activity size={10} className="text-emerald-400" /> |
| `src/components/VocalLessonPlanner.tsx` | 327 | 코칭 문장 검토 | 강도·호흡: {activeStep.dynamicBreath} |
| `src/components/VocalLessonPlanner.tsx` | 337 | 코칭 문장 검토 | <p className="text-xs text-teal-200 font-medium leading-relaxed italic"> |
| `src/components/VocalLessonPlanner.tsx` | 338 | 코칭 문장 검토 | &ldquo;<TermTooltip text={activeStep.queuing} />&rdquo; |
| `src/components/VocalLessonPlanner.tsx` | 356 | 코칭 문장 검토 | const isCurrent = activeStepIndex === idx; |
| `src/components/VocalLessonPlanner.tsx` | 367 | 코칭 문장 검토 | <div className="flex items-start gap-3"> |
| `src/components/VocalLessonPlanner.tsx` | 378 | 코칭 문장 검토 | <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 font-sans"><TermTooltip text={step.stage} /></span> |
| `src/components/VocalLessonPlanner.tsx` | 398 | 코칭 문장 검토 | <div className="mt-1.5 pl-2.5 border-l-2 border-teal-500/20 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans max-w-2xl"> |
| `src/components/VocalLessonPlanner.tsx` | 406 | 코칭 문장 검토 | <p className="text-[11px] text-slate-600 dark:text-slate-400 font-normal mt-0.5 leading-relaxed"> |
| `src/components/StudentLog.tsx` | 1 | 코칭 문장 검토 | import { useState, useEffect } from 'react'; |
| `src/components/StudentLog.tsx` | 2 | 코칭 문장 검토 | import { Users, Plus, Save, User, FileText, Calendar, Activity, ChevronRight, Trash2, AlertTriangle } from 'lucide-react'; |
| `src/components/StudentLog.tsx` | 21 | 코칭 문장 검토 | export default function StudentLog() { |
| `src/components/StudentLog.tsx` | 22 | 코칭 문장 검토 | const [students, setStudents] = useState<Student[]>([]); |
| `src/components/StudentLog.tsx` | 23 | 코칭 문장 검토 | const [selectedStudentId, setSelectedStudentId] = useState<string \| null>(null); |
| `src/components/StudentLog.tsx` | 24 | 코칭 문장 검토 | const [isAddingStudent, setIsAddingStudent] = useState(false); |
| `src/components/StudentLog.tsx` | 25 | 코칭 문장 검토 | const [isAddingLog, setIsAddingLog] = useState(false); |
| `src/components/StudentLog.tsx` | 27 | 코칭 문장 검토 | // New student form state |
| `src/components/StudentLog.tsx` | 28 | 코칭 문장 검토 | const [newStudentName, setNewStudentName] = useState(''); |
| `src/components/StudentLog.tsx` | 29 | 코칭 문장 검토 | const [newStudentAge, setNewStudentAge] = useState(''); |
| `src/components/StudentLog.tsx` | 30 | 코칭 문장 검토 | const [newStudentGender, setNewStudentGender] = useState('여성'); |
| `src/components/StudentLog.tsx` | 31 | 코칭 문장 검토 | const [newStudentType, setNewStudentType] = useState('type1'); |
| `src/components/StudentLog.tsx` | 33 | 코칭 문장 검토 | // New log form state |
| `src/components/StudentLog.tsx` | 34 | 코칭 문장 검토 | const [newLogDate, setNewLogDate] = useState(new Date().toISOString().split('T')[0]); |
| `src/components/StudentLog.tsx` | 35 | 코칭 문장 검토 | const [newLogType, setNewLogType] = useState('type1'); |
| `src/components/StudentLog.tsx` | 36 | 코칭 문장 검토 | const [newLogNotes, setNewLogNotes] = useState(''); |
| `src/components/StudentLog.tsx` | 39 | 코칭 문장 검토 | useEffect(() => { |
| `src/components/StudentLog.tsx` | 62 | 코칭 문장 검토 | age: newStudentAge, |
| `src/components/StudentLog.tsx` | 70 | 코칭 문장 검토 | setNewStudentAge(''); |
| `src/components/StudentLog.tsx` | 72 | 코칭 문장 검토 | setSelectedStudentId(newStudent.id); |
| `src/components/StudentLog.tsx` | 76 | 코칭 문장 검토 | const [deleteConfirm, setDeleteConfirm] = useState<{ type: 'student' \| 'log', studentId: string, logId?: string } \| null>(null); |
| `src/components/StudentLog.tsx` | 86 | 코칭 문장 검토 | if (selectedStudentId === deleteConfirm.studentId) { |
| `src/components/StudentLog.tsx` | 87 | 코칭 문장 검토 | setSelectedStudentId(null); |
| `src/components/StudentLog.tsx` | 105 | 코칭 문장 검토 | if (!selectedStudentId \|\| !newLogNotes.trim()) return; |
| `src/components/StudentLog.tsx` | 108 | 코칭 문장 검토 | if (student.id === selectedStudentId) { |
| `src/components/StudentLog.tsx` | 131 | 코칭 문장 검토 | const selectedStudent = students.find(s => s.id === selectedStudentId); |
| `src/components/StudentLog.tsx` | 164 | 코칭 문장 검토 | onChange={(e) => setNewStudentName(e.target.value)} |
| `src/components/StudentLog.tsx` | 171 | 코칭 문장 검토 | value={newStudentAge} |
| `src/components/StudentLog.tsx` | 172 | 코칭 문장 검토 | onChange={(e) => setNewStudentAge(e.target.value)} |
| `src/components/StudentLog.tsx` | 175 | 코칭 문장 검토 | <select |
| `src/components/StudentLog.tsx` | 177 | 코칭 문장 검토 | onChange={(e) => setNewStudentGender(e.target.value)} |
| `src/components/StudentLog.tsx` | 183 | 코칭 문장 검토 | </select> |
| `src/components/StudentLog.tsx` | 187 | 코칭 문장 검토 | onChange={(e) => setNewStudentType(e.target.value)} |
| `src/components/StudentLog.tsx` | 221 | 코칭 문장 검토 | onClick={() => setSelectedStudentId(student.id)} |
| `src/components/StudentLog.tsx` | 223 | 코칭 문장 검토 | selectedStudentId === student.id |
| `src/components/StudentLog.tsx` | 228 | 코칭 문장 검토 | <div className="flex justify-between items-start"> |
| `src/components/StudentLog.tsx` | 251 | 코칭 문장 검토 | {/* Main Content: Student Detail & Logs */} |
| `src/components/StudentLog.tsx` | 253 | 코칭 문장 검토 | {!selectedStudent ? ( |
| `src/components/StudentLog.tsx` | 264 | 코칭 문장 검토 | onClick={() => confirmDeleteStudent(selectedStudent.id)} |
| `src/components/StudentLog.tsx` | 274 | 코칭 문장 검토 | {selectedStudent.name.charAt(0)} |
| `src/components/StudentLog.tsx` | 277 | 코칭 문장 검토 | <h1 className="text-2xl font-bold">{selectedStudent.name}</h1> |
| `src/components/StudentLog.tsx` | 278 | 코칭 문장 검토 | <p className="text-xs text-slate-400 mt-0.5">{selectedStudent.age \|\| '연령 미상'} · {selectedStudent.gender}</p> |
| `src/components/StudentLog.tsx` | 284 | 코칭 문장 검토 | <Activity className="text-teal-400" size={18} /> |
| `src/components/StudentLog.tsx` | 287 | 코칭 문장 검토 | <div className="text-sm font-semibold text-slate-200 mt-0.5">{getTypeName(selectedStudent.primaryTypeId)}</div> |
| `src/components/StudentLog.tsx` | 294 | 코칭 문장 검토 | <div className="text-sm font-semibold text-slate-200 mt-0.5">{selectedStudent.logs.length} 회</div> |
| `src/components/StudentLog.tsx` | 308 | 코칭 문장 검토 | setNewLogType(selectedStudent.primaryTypeId); |
| `src/components/StudentLog.tsx` | 329 | 코칭 문장 검토 | onChange={e => setNewLogDate(e.target.value)} |
| `src/components/StudentLog.tsx` | 337 | 코칭 문장 검토 | onChange={e => setNewLogType(e.target.value)} |
| `src/components/StudentLog.tsx` | 348 | 코칭 문장 검토 | <textarea |
| `src/components/StudentLog.tsx` | 350 | 코칭 문장 검토 | onChange={e => setNewLogNotes(e.target.value)} |
| `src/components/StudentLog.tsx` | 351 | 출처 대조 | placeholder="발성 진단, 사용한 툴(Vocalise, SOVTE), 파지/전이 결과, 코멘트 등을 자세히 기록하세요." |
| `src/components/StudentLog.tsx` | 352 | 코칭 문장 검토 | className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 min-h-[120px] resize-y leading-relaxed" |
| `src/components/StudentLog.tsx` | 353 | 코칭 문장 검토 | ></textarea> |
| `src/components/StudentLog.tsx` | 374 | 코칭 문장 검토 | {selectedStudent.logs.length === 0 ? ( |
| `src/components/StudentLog.tsx` | 383 | 코칭 문장 검토 | selectedStudent.logs.map(log => ( |
| `src/components/StudentLog.tsx` | 385 | 코칭 문장 검토 | <div className="flex justify-between items-start mb-3 pb-3 border-b border-slate-100 dark:border-slate-800"> |
| `src/components/StudentLog.tsx` | 396 | 코칭 문장 검토 | onClick={() => confirmDeleteLog(selectedStudent.id, log.id)} |
| `src/components/StudentLog.tsx` | 403 | 코칭 문장 검토 | <div className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed"> |
| `src/components/LaxVoxGuide.tsx` | 1 | 코칭 문장 검토 | import { Info, AlertTriangle, Layers, Droplets, Target, Activity } from 'lucide-react'; |
| `src/components/LaxVoxGuide.tsx` | 3 | 출처 대조 | export default function LaxVoxGuide() { |
| `src/components/LaxVoxGuide.tsx` | 9 | 출처 대조 | Lax Vox 심화 훈련 가이드 |
| `src/components/LaxVoxGuide.tsx` | 11 | 코칭 문장 검토 | <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"> |
| `src/components/LaxVoxGuide.tsx` | 12 | 출처 대조 | Lax Vox는 반폐쇄성도훈련(SOVTE)의 일환인 물 저항 치료(Water Resistance Therapy) 기법으로, SLS 자음+모음 툴 체계를 보조하는 심화 도구입니다. 특정 유형에서 단기간에 더 강력한 환경 제약이 필요할 때 활용합니다. |
| `src/components/LaxVoxGuide.tsx` | 22 | 코칭 문장 검토 | <li><strong className="text-indigo-700 dark:text-indigo-400">정적 역압 생성:</strong> 튜브 끝이 물에 잠기며 성문 상압 증가 → 직사각형 성문(안정적 접촉) 유도.</li> |
| `src/components/LaxVoxGuide.tsx` | 30 | 코칭 문장 검토 | <Target className="text-amber-500" size={16} /> |
| `src/components/LaxVoxGuide.tsx` | 38 | 코칭 문장 검토 | <li><strong>수심:</strong> 1~2cm (초기엔 물 밖에서 시작해 서서히 표면 터치)</li> |
| `src/components/LaxVoxGuide.tsx` | 41 | 코칭 문장 검토 | <li><strong>전략:</strong> Hooty 음색 병행. 좁은 모음 느낌. 성대 이완과 공기 흐름 확보 우선. <span className="text-rose-500 font-bold">5mm 좁은 관 우선 피하고 반응을 확인.</span></li> |
| `src/components/LaxVoxGuide.tsx` | 48 | 코칭 문장 검토 | <li><strong>수심:</strong> 침수 깊이는 조건에 따라 조절 (깊은 Bubbling으로 물리적 성대 내전 변화를 비교)</li> |
| `src/components/LaxVoxGuide.tsx` | 58 | 코칭 문장 검토 | <li><strong>수심:</strong> 2~5cm 가변 조절 (플립 나면 약간 깊게, 목 조이면 약간 얕게)</li> |
| `src/components/LaxVoxGuide.tsx` | 60 | 코칭 문장 검토 | <li><strong>전략:</strong> 다이나믹 변동성 훈련. 1.5 Octave 도약, Crescendo 주며 외부 변동성에 대한 믹스 유지 적응력 배양.</li> |
| `src/components/LaxVoxGuide.tsx` | 69 | 코칭 문장 검토 | <Activity className="text-teal-400" size={20} /> |
| `src/components/LaxVoxGuide.tsx` | 80 | 코칭 문장 검토 | { phase: '3단계', title: '1차 툴 제거', desc: '튜브 제거 즉시 M[ʌ]m, N[ei] 등 비음/반폐쇄 툴로 약한 성문 상압 자가 생성. 새면 1단계로 복귀.' }, |
| `src/components/LaxVoxGuide.tsx` | 84 | 코칭 문장 검토 | <div key={idx} className="flex gap-4 items-start bg-slate-800/50 p-4 rounded-xl border border-slate-700/50"> |
| `src/components/LaxVoxGuide.tsx` | 90 | 코칭 문장 검토 | <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p> |
| `src/components/LaxVoxGuide.tsx` | 97 | 코칭 문장 검토 | <div className="bg-rose-50 dark:bg-rose-900/30 border border-rose-100 p-5 rounded-2xl flex items-start gap-3"> |
| `src/components/LaxVoxGuide.tsx` | 102 | 코칭 문장 검토 | <li>의료용 실리콘 튜브(길이 35cm, 내경 9~12mm) 권장. 최대 수심 15cm 엄수.</li> |
| `src/components/LaxVoxGuide.tsx` | 103 | 코칭 문장 검토 | <li>Type 4, 5는 수심 2cm 이하 엄수, 얇은 빨대 사용 우선 피하고 반응을 확인.</li> |
| `src/components/LaxVoxGuide.tsx` | 105 | 출처 대조 | <li>Lax Vox는 <strong>보조 심화 도구</strong>이므로, 이로써 충분한 진전이 없으면 기존 SLS 툴로 회귀.</li> |
| `src/components/MotorChecklistGuide.tsx` | 1 | 코칭 문장 검토 | import { ShieldCheck, CheckSquare, XSquare, AlertCircle } from 'lucide-react'; |
| `src/components/MotorChecklistGuide.tsx` | 3 | 코칭 문장 검토 | export default function MotorChecklistGuide() { |
| `src/components/MotorChecklistGuide.tsx` | 18 | 출처 대조 | { category: 'Lax Vox (선택)', item: 'Lax Vox 사용 시 유형에 맞는 수심/직경 세팅을 적용했는가?' }, |
| `src/components/MotorChecklistGuide.tsx` | 19 | 출처 대조 | { category: 'Lax Vox (선택)', item: '5단계 점진적 자유도 해방 프로토콜을 준수했는가?' }, |
| `src/components/MotorChecklistGuide.tsx` | 31 | 코칭 문장 검토 | <div key={i} className="flex gap-3 items-start bg-slate-800/40 p-3 rounded-lg border border-slate-700/50 hover:bg-slate-800/80 transition-colors"> |
| `src/components/MotorChecklistGuide.tsx` | 47 | 코칭 문장 검토 | <div className="mt-5 p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl flex gap-2 items-start"> |
| `src/components/TermTooltip.tsx` | 1 | 코칭 문장 검토 | import React, { Fragment, useState, useRef, useEffect } from 'react'; |
| `src/components/TermTooltip.tsx` | 2 | 코칭 문장 검토 | import { createPortal } from 'react-dom'; |
| `src/components/TermTooltip.tsx` | 5 | 코칭 문장 검토 | const TERMS_KEYS = Object.keys(VOCAL_TERMS).sort((a, b) => b.length - a.length); |
| `src/components/TermTooltip.tsx` | 8 | 코칭 문장 검토 | export default function TermTooltip({ text }: { text: string \| undefined \| null }) { |
| `src/components/TermTooltip.tsx` | 29 | 코칭 문장 검토 | function TooltipTrigger({ text, tooltipContent }: { text: string, tooltipContent: string, key?: React.Key \| null }) { |
| `src/components/TermTooltip.tsx` | 30 | 코칭 문장 검토 | const [show, setShow] = useState(false); |
| `src/components/TermTooltip.tsx` | 31 | 코칭 문장 검토 | const [coords, setCoords] = useState({ top: 0, left: 0 }); |
| `src/components/TermTooltip.tsx` | 34 | 코칭 문장 검토 | useEffect(() => { |
| `src/components/TermTooltip.tsx` | 36 | 코칭 문장 검토 | const rect = spanRef.current.getBoundingClientRect(); |
| `src/components/TermTooltip.tsx` | 38 | 코칭 문장 검토 | top: rect.top - 8, |
| `src/components/TermTooltip.tsx` | 39 | 코칭 문장 검토 | left: rect.left + rect.width / 2, |
| `src/components/TermTooltip.tsx` | 52 | 코칭 문장 검토 | {show && createPortal( |
| `src/components/TermTooltip.tsx` | 54 | 코칭 문장 검토 | className="fixed pointer-events-none z-[99999] -translate-x-1/2 -translate-y-full w-48 sm:w-64 p-3.5 bg-slate-900 text-white text-[11px] sm:text-xs leading-relaxed rounded-xl shadow-2xl text-center whitespace-normal break-keep font-norma... |
| `src/components/VocalReference.tsx` | 1 | 코칭 문장 검토 | import { useState } from 'react'; |
| `src/components/VocalReference.tsx` | 3 | 코칭 문장 검토 | import { ShieldCheck, Sparkles, RefreshCw, AlertTriangle, HelpCircle, ChevronRight, Activity } from 'lucide-react'; |
| `src/components/VocalReference.tsx` | 5 | 출처 대조 | import LaxVoxGuide from './LaxVoxGuide'; |
| `src/components/VocalReference.tsx` | 9 | 코칭 문장 검토 | export default function VocalReference() { |
| `src/components/VocalReference.tsx` | 10 | 코칭 문장 검토 | const [activeTab, setActiveTab] = useState<'toolbox' \| 'transitions' \| 'science' \| 'quickRef' \| 'postures' \| 'vowels' \| 'motorLearning' \| 'laxVox' \| 'protocol'>('toolbox'); |
| `src/components/VocalReference.tsx` | 14 | 코칭 문장 검토 | <div className="mb-5 bg-amber-50/50 border border-amber-200/60 rounded-xl p-3 md:p-4 text-[11px] md:text-xs text-amber-800 dark:text-amber-300 leading-relaxed"> |
| `src/components/VocalReference.tsx` | 20 | 코칭 문장 검토 | 특히 <strong>Type 5 (Pressed / Over-adducted)</strong>는 SLS 원본 매뉴얼의 독립 Tends To가 아니며, <strong>Pull Chest 또는 Imperfect Mix 내부에서 발견되는 'pressed sub-pattern'</strong>을 현장 진단 및 레슨 편의상 독립 유형으로 분리한 것입니다. |
| `src/components/VocalReference.tsx` | 23 | 코칭 문장 검토 | SLS의 궁극적 진단은 단순히 [호흡 양 vs 성대 접촉력]의 균형만을 보는 것이 아니라, <strong>Airflow (호흡), Cord Closure (성대 접촉), Vowel (모음)</strong>의 3요결합을 통해 <strong>'Low Stable Larynx(안정된 후두)'</strong>와 <strong>'Release(외부 주변근의 개입 없는 자유로움)'</strong>을 이끌어내는 데 목적이 있습니다. |
| `src/components/VocalReference.tsx` | 39 | 코칭 문장 검토 | {/* 모바일 (Select Dropdown) */} |
| `src/components/VocalReference.tsx` | 41 | 코칭 문장 검토 | <select |
| `src/components/VocalReference.tsx` | 42 | 코칭 문장 검토 | value={activeTab} |
| `src/components/VocalReference.tsx` | 43 | 코칭 문장 검토 | onChange={(e) => setActiveTab(e.target.value as any)} |
| `src/components/VocalReference.tsx` | 48 | 출처 대조 | <option value="science">과학적 근거 (논문 매치)</option> |
| `src/components/VocalReference.tsx` | 53 | 출처 대조 | <option value="laxVox">Lax Vox 심화</option> |
| `src/components/VocalReference.tsx` | 55 | 코칭 문장 검토 | </select> |
| `src/components/VocalReference.tsx` | 64 | 코칭 문장 검토 | <div className="hidden md:flex flex-wrap bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 gap-1.5 justify-start"> |
| `src/components/VocalReference.tsx` | 68 | 출처 대조 | { id: 'science', label: '과학적 근거 (논문 매치)' }, |
| `src/components/VocalReference.tsx` | 73 | 출처 대조 | { id: 'laxVox', label: 'Lax Vox 심화' }, |
| `src/components/VocalReference.tsx` | 75 | 코칭 문장 검토 | ].map((tab) => ( |
| `src/components/VocalReference.tsx` | 77 | 코칭 문장 검토 | key={tab.id} |
| `src/components/VocalReference.tsx` | 78 | 코칭 문장 검토 | onClick={() => setActiveTab(tab.id as any)} |
| `src/components/VocalReference.tsx` | 80 | 코칭 문장 검토 | activeTab === tab.id |
| `src/components/VocalReference.tsx` | 85 | 코칭 문장 검토 | {tab.label} |
| `src/components/VocalReference.tsx` | 92 | 코칭 문장 검토 | {activeTab === 'toolbox' && ( |
| `src/components/VocalReference.tsx` | 110 | 코칭 문장 검토 | <p className="text-xs text-slate-650 mt-1.5 leading-relaxed"> |
| `src/components/VocalReference.tsx` | 135 | 코칭 문장 검토 | <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5"> |
| `src/components/VocalReference.tsx` | 160 | 코칭 문장 검토 | <table className="min-w-full divide-y divide-slate-155 text-xs"> |
| `src/components/VocalReference.tsx` | 169 | 코칭 문장 검토 | {TOOLBOX_TIERS.clashSection.map((row) => ( |
| `src/components/VocalReference.tsx` | 172 | 코칭 문장 검토 | <td className="px-4 py-3 leading-relaxed whitespace-pre-line"> |
| `src/components/VocalReference.tsx` | 174 | 코칭 문장 검토 | row.type45.startsWith('✗') ? 'text-rose-600' : 'text-emerald-600' |
| `src/components/VocalReference.tsx` | 181 | 코칭 문장 검토 | row.type26.startsWith('✗') ? 'text-rose-600' : 'text-emerald-600' |
| `src/components/VocalReference.tsx` | 189 | 코칭 문장 검토 | </table> |
| `src/components/VocalReference.tsx` | 216 | 수정 대상 | <td className="px-3 py-2">순수하게 성대를 과도하게 짓누름 (맹목적인 Adduction 강제)</td> |
| `src/components/VocalReference.tsx` | 225 | 코칭 문장 검토 | <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">Top-down (Hooty), 이완 + 연결 의식 유지</td> |
| `src/components/VocalReference.tsx` | 226 | 코칭 문장 검토 | <td className="px-3 py-2">Hooty (과폐쇄 해제), Lip Trill (압력 분산)</td> |
| `src/components/VocalReference.tsx` | 244 | 코칭 문장 검토 | <th className="px-3 py-2 text-left">Type 2 (Light Unstable)</th> |
| `src/components/VocalReference.tsx` | 251 | 코칭 문장 검토 | <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">성대 접촉 면적/근력 부족</td> |
| `src/components/VocalReference.tsx` | 276 | 코칭 문장 검토 | <Activity className="text-indigo-500" size={16} /> |
| `src/components/VocalReference.tsx` | 332 | 코칭 문장 검토 | {activeTab === 'transitions' && ( |
| `src/components/VocalReference.tsx` | 334 | 코칭 문장 검토 | <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-3.5 rounded-xl text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mb-1"> |
| `src/components/VocalReference.tsx` | 350 | 코칭 문장 검토 | <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed"> |
| `src/components/VocalReference.tsx` | 372 | 코칭 문장 검토 | {activeTab === 'science' && ( |
| `src/components/VocalReference.tsx` | 376 | 코칭 문장 검토 | <div className="relative z-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4"> |
| `src/components/VocalReference.tsx` | 379 | 코칭 문장 검토 | <Activity className="text-teal-600" size={20} /> |
| `src/components/VocalReference.tsx` | 383 | 출처 대조 | SLS 발명 초기의 직관적 훈련 시스템이 현대 음성과학 논문에서 어떻게 과학적 사실로 교차 검증되는지 매핑한 전문 자료입니다. |
| `src/components/VocalReference.tsx` | 399 | 코칭 문장 검토 | 말할 때처럼(Speech Level) 후두가 안정되고, 외재근(삼키는 근육)의 개입 없이 내재근만으로 발성해야 한다. |
| `src/components/VocalReference.tsx` | 402 | 출처 대조 | <strong className="text-emerald-400 block mb-1">관련 연구 참고</strong> |
| `src/components/VocalReference.tsx` | 404 | 출처 대조 | <li><strong className="text-white">Chhetri (2012, 2014):</strong> TA, CT, LCA의 내재근 활성도만으로 음정과 성문 자세가 충분히 제어됨을 보고. 외재근(스트랩) 사용 배제의 과학적 근거.</li> |
| `src/components/VocalReference.tsx` | 405 | 출처 대조 | <li><strong className="text-white">Palaparthi (2019) / Geng (2020):</strong> 과도한 TA 개입 없이 TA-CT 밸런스를 유지하는 "스피치 레벨"의 MAP(근육 활성도) 위치를 일치하게 밝혀냄.</li> |
| `src/components/VocalReference.tsx` | 411 | 코칭 문장 검토 | {/* 2. 믹스와 브릿지 */} |
| `src/components/VocalReference.tsx` | 415 | 코칭 문장 검토 | 믹스(Mix)와 브릿지 불안정성 |
| `src/components/VocalReference.tsx` | 425 | 코칭 문장 검토 | <li><strong className="text-white">Titze (2014):</strong> 성문이 윗면과 아랫면 모두 직사각형(평행)인 믹스 상태(Mixed registration)는 수렴/발산형보다 물리적으로 불안정함. 브릿지 위기의 물리적 기원을 가장 완벽히 설명!</li> |
| `src/components/VocalReference.tsx` | 426 | 코칭 문장 검토 | <li><strong className="text-white">Roubeau (2007):</strong> M1(흉성)과 M2(두성/가성) 구역 사이의 주파수 도약(Jump)을 넘는 과정이라고 분류.</li> |
| `src/components/VocalReference.tsx` | 446 | 출처 대조 | <li><strong className="text-white">Titze (2009):</strong> 립 트릴은 반폐쇄성도(SOVT) 도구로써 성도 임피던스를 향상시켜 발성 임계압(PTP)을 대폭 하락하게 물리 모델링을 수정함. 힘 안 들이고 성대를 진동시키는 SLS 안전 툴의 1티어 정당성 부여.</li> |
| `src/components/VocalReference.tsx` | 452 | 코칭 문장 검토 | {/* 4. 접촉 부족과 과도 압축 해결 */} |
| `src/components/VocalReference.tsx` | 456 | 코칭 문장 검토 | 성대 폐쇄율 제어 (접촉 부족 vs 과도) |
| `src/components/VocalReference.tsx` | 461 | 코칭 문장 검토 | <strong className="text-indigo-600 block mb-0.5">Type 2, 6 (접촉 부족)</strong> |
| `src/components/VocalReference.tsx` | 465 | 코칭 문장 검토 | <strong className="text-indigo-600 block mb-0.5">Type 4, 5 (과도 접촉)</strong> |
| `src/components/VocalReference.tsx` | 466 | 코칭 문장 검토 | 경음을 빼고 Hooty나 Lip Trill로 이완시켜야 한다. |
| `src/components/VocalReference.tsx` | 472 | 수정 대상 | 가성/숨새는 폐쇄율(CQ)이 극도로 낮음. Edge 훈련이 CQ를 순간적으로 강제 상승시키는 유효한 방법임을 보고. |
| `src/components/VocalReference.tsx` | 476 | 출처 대조 | Type 4는 TA 과도 활성, Type 5는 성문 수렴형(Convergent) 상태임. 성문 형태(수렴/발산/직사각)의 극단화를 막는 양극단 툴 배치 원리. |
| `src/components/VocalReference.tsx` | 486 | 코칭 문장 검토 | 모음 좁히기(Narrowing)와 Tricking |
| `src/components/VocalReference.tsx` | 491 | 코칭 문장 검토 | 무거운 흉성 풀링은 반드시 높은 음에서 시작(Tricking)하여 새로운 조정을 경험토록 한다. 넓은 [a]에서 좁은 [i, u] 모음으로 전환시킨다. |
| `src/components/VocalReference.tsx` | 497 | 출처 대조 | <li><strong className="text-white">Jiang (2024):</strong> 트릭킹(고음 하행)이 통하는 이유는 고음에서 CT가 지배적이라 TA의 고질적 의존성을 자동으로 차단한다고 단정하지 않으며하기 때문.</li> |
| `src/components/VocalReference.tsx` | 512 | 코칭 문장 검토 | 성대가 완강하게 붙어 안 나올 때 "더 세게 붙여라"는 우선 피하고 반응을 확인. 트릴로 성대가 "살짝 떨어지는 느낌"까지 성문 저항을 풀어라. |
| `src/components/VocalReference.tsx` | 517 | 출처 대조 | <li><strong className="text-white">Titze (2014):</strong> 파열 스트레스 단계의 과압착 상태(극단적 수렴형 성문)에서 가하는 추가 압력은 조직 파괴 유발. SOVT는 특정 압력 변화를 일으킬 수 있는 보조 과제임.</li> |
| `src/components/VocalReference.tsx` | 528 | 코칭 문장 검토 | <p className="text-xs leading-relaxed"> |
| `src/components/VocalReference.tsx` | 529 | 수정 대상 | SLS 6가지 도구 상자와 툴들은 성문 하강 훈련법이 아닙니다. 학생에게 툴을 제시할 때, "세스 리그스가 그렇게 했기 때문에" 가 아닌, <strong>"이 툴이 당신의 성문 형태를 특정 모양으로 바꾼다고 단정하지 않고, 성문하압의 불연속적 폭발을 막아 안전하게 발성할 수 있게 해주는 구조적 해법 (Titze 2014 모델 등)"</strong>이라고 인지하고 코치할 때 그 위력과 안정성이 극대화됩니다. |
| `src/components/VocalReference.tsx` | 536 | 코칭 문장 검토 | {activeTab === 'postures' && ( |
| `src/components/VocalReference.tsx` | 544 | 코칭 문장 검토 | <p className="text-[13px] text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"> |
| `src/components/VocalReference.tsx` | 571 | 코칭 문장 검토 | <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-teal-700 dark:text-teal-400">④ 이완 유도 (Relaxation)</h4> |
| `src/components/VocalReference.tsx` | 595 | 코칭 문장 검토 | <table className="w-full text-xs text-left min-w-[600px]"> |
| `src/components/VocalReference.tsx` | 612 | 코칭 문장 검토 | <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">접촉을 강화하고 입 주변 긴장을 풀어 과도한 공기 사용을 방지</td> |
| `src/components/VocalReference.tsx` | 632 | 코칭 문장 검토 | <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">적당한 텐션의 접촉 강화 및 심리적 긴장 완화로 호흡 조절력 향상</td> |
| `src/components/VocalReference.tsx` | 642 | 코칭 문장 검토 | {activeTab === 'vowels' && ( |
| `src/components/VocalReference.tsx` | 651 | 코칭 문장 검토 | SLS에서 모음(Vowel)은 성도(Vocal Tract)의 형태를 변화시켜 성대 접촉과 공명에 영향을 미치는 핵심 조절매개변수입니다. 운동학습 관점에서 모음 선택 자체가 발성 시스템의 특정 방향의 자기조직화를 유도하는 '과제 제약(Task Constraint)'입니다. |
| `src/components/VocalReference.tsx` | 659 | 코칭 문장 검토 | <li><strong>과제 효과:</strong> 두성 유도, 성대 접촉 간접 지원, 브릿지 통과 원활.</li> |
| `src/components/VocalReference.tsx` | 660 | 코칭 문장 검토 | <li><strong>활용 유형:</strong> Type 4, 5 (과압축 완화, 두성 유도. 흉성이 강한 자에게 유리)</li> |
| `src/components/VocalReference.tsx` | 667 | 코칭 문장 검토 | <li><strong>과제 효과:</strong> 흉성 유도, 풍부한 배음 형성, 성대 접촉 강화.</li> |
| `src/components/VocalReference.tsx` | 668 | 코칭 문장 검토 | <li><strong>활용 유형:</strong> Type 2, 6 (흉성 발견, 접촉 형성. 흉성이 약한 자에게 유리)</li> |
| `src/components/VocalReference.tsx` | 675 | 코칭 문장 검토 | <table className="w-full text-xs text-left min-w-[500px]"> |
| `src/components/VocalReference.tsx` | 705 | 코칭 문장 검토 | <p className="text-[11px] md:text-xs text-purple-800 dark:text-purple-300/80 leading-relaxed font-medium"> |
| `src/components/VocalReference.tsx` | 713 | 코칭 문장 검토 | {activeTab === 'protocol' && ( |
| `src/components/VocalReference.tsx` | 717 | 코칭 문장 검토 | {activeTab === 'quickRef' && ( |
| `src/components/VocalReference.tsx` | 725 | 코칭 문장 검토 | <table className="w-full text-xs text-left min-w-[700px]"> |
| `src/components/VocalReference.tsx` | 730 | 코칭 문장 검토 | <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50">후기 스케일 (Stabilize/Speech)</th> |
| `src/components/VocalReference.tsx` | 740 | 코칭 문장 검토 | <td className="px-3 py-3">5-Tone<br/><span className="text-[10px] text-slate-400">1.5 Octave</span></td> |
| `src/components/VocalReference.tsx` | 741 | 코칭 문장 검토 | <td className="px-3 py-3">Octave Repeater<br/><span className="text-[10px] text-slate-400">Octave Down</span></td> |
| `src/components/VocalReference.tsx` | 743 | 코칭 문장 검토 | <td className="px-2 py-3 font-semibold">mp~f <span className="text-[9px] text-slate-400 block">(다이나믹스)</span></td> |
| `src/components/VocalReference.tsx` | 749 | 코칭 문장 검토 | <td className="px-3 py-3">Staccato<br/><span className="text-[10px] text-slate-400">5-Tone [ae]</span></td> |
| `src/components/VocalReference.tsx` | 750 | 코칭 문장 검토 | <td className="px-3 py-3">1.5 Octave<br/><span className="text-[10px] text-slate-400">Octave Repeater</span></td> |
| `src/components/VocalReference.tsx` | 751 | 코칭 문장 검토 | <td className="px-2 py-3 font-semibold text-rose-600">mp~mf <span className="text-[9px] block text-slate-400">(접촉 만들기)</span></td> |
| `src/components/VocalReference.tsx` | 759 | 코칭 문장 검토 | <td className="px-3 py-3">Octave Repeater<br/><span className="text-[10px] text-slate-400">Octave Down 3x</span></td> |
| `src/components/VocalReference.tsx` | 767 | 코칭 문장 검토 | <td className="px-3 py-3">1.5 Octave <span className="text-[9px] text-slate-400">(Tricking)</span></td> |
| `src/components/VocalReference.tsx` | 768 | 코칭 문장 검토 | <td className="px-3 py-3">Octave Repeater <span className="text-[9px] text-slate-400">(Reinforcing)</span><br/><span className="text-[10px] text-slate-400">Octave Down 3x</span></td> |
| `src/components/VocalReference.tsx` | 769 | 수정 대상 | <td className="px-2 py-3 font-semibold text-teal-600">p~mp <span className="text-[9px] block text-slate-400">(절대 밀지 않기)</span></td> |
| `src/components/VocalReference.tsx` | 778 | 코칭 문장 검토 | <td className="px-2 py-3 font-semibold text-teal-600">p <span className="text-[9px] block text-slate-400">(Trill=선명, Hooty=치료적 숨섞임)</span></td> |
| `src/components/VocalReference.tsx` | 779 | 코칭 문장 검토 | <td className="px-2 py-3 font-semibold">mp~mf <span className="text-[9px] block text-slate-400">(자연 접촉 복귀)</span></td> |
| `src/components/VocalReference.tsx` | 780 | 코칭 문장 검토 | <td className="px-2 py-3 text-slate-600 dark:text-slate-400">최저 <span className="text-[9px] block text-slate-400">(Trill) → 약간 숨섞임(Hooty)</span></td> |
| `src/components/VocalReference.tsx` | 787 | 코칭 문장 검토 | <td className="px-2 py-3 font-semibold text-rose-600">mp~mf <span className="text-[9px] block text-slate-400">(접촉 유도)</span></td> |
| `src/components/VocalReference.tsx` | 804 | 코칭 문장 검토 | <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">Hooty로 일시적 이완 후 재시도. 넓은 모음 사용 즉시 중단.</p> |
| `src/components/VocalReference.tsx` | 811 | 코칭 문장 검토 | <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">경음 자음 + 넓은 모음으로 접촉을 변화를 비교. Hooty 사용 중지.</p> |
| `src/components/VocalReference.tsx` | 831 | 코칭 문장 검토 | {activeTab === 'motorLearning' && ( |
| `src/components/VocalReference.tsx` | 840 | 코칭 문장 검토 | SLS 교육 방법론을 최신 스포츠 과학/재활의학의 '복잡계(Complex Systems) 및 동적 시스템 이론(Dynamic Systems Theory)' 관점으로 해석합니다. 발성 문제를 선형적으로 교정하려는 관점에서 벗어나, <strong>수행자(Performer), 과제(Task), 환경(Environment)</strong>이라는 제약 조건 속에서 발성 시스템이 어떤 협응을 창발해내는지를 이해하는 체계입니다. 강사... |
| `src/components/VocalReference.tsx` | 846 | 코칭 문장 검토 | <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 leading-relaxed"> |
| `src/components/VocalReference.tsx` | 847 | 코칭 문장 검토 | 문제적 소리(Pull Chest, No Chest 등)는 단순한 <strong>실수</strong>가 아니라, 현재의 조건(과도한 음정/음량) 속에서 살기 위해 신경계가 선택해 파놓은 깊은 골짜기, <strong>보상 끌개(Attractor)</strong>입니다. "목 열어" 같은 몸통 직접 조정(MMC)은 실패하며, 대신 <strong>오직 올바른 협응만 나올 수 있는 저항력 있는 툴로 과제 규칙(조건) 자체를 개조<... |
| `src/components/VocalReference.tsx` | 853 | 출처 대조 | 학생이 수많은 성대와 호흡 내부 근육들을 하나하나 의식으로 통제(자유도 문제)할 수 없습니다. 교사가 학생의 자유도를 제한하는 특수 툴(자음, 모음, SOVTE)이라는 <strong>과제 제약(Task Constraint)</strong>을 주면, 학생의 신경계가 생존을 위해 그 모양대로 <strong>스스로 목표 협응을 창발해 조립</strong>합니다. |
| `src/components/VocalReference.tsx` | 857 | 출처 대조 | <h4 className="font-bold text-teal-800 dark:text-teal-300 text-[13px]">3. SOVTE와 Vocalise = 과제 제약</h4> |
| `src/components/VocalReference.tsx` | 859 | 코칭 문장 검토 | Lip Trill이나 좁은 모음 스케일은 성문 압력을 올려주는 단순한 요술 지팡이가 아닙니다. 풀체스트 같은 <strong>틀린 버릇을 아예 쓸 수가 없는 물리적 한계 환경을 목에 씌워버리는 '과제 제약'</strong>입니다. 자유도를 얼려서 악습을 틀어막고 정방향을 일러줍니다. |
| `src/components/VocalReference.tsx` | 863 | 코칭 문장 검토 | <h4 className="font-bold text-rose-800 dark:text-rose-300 text-[13px]">4. 임계 요동(Critical Fluctuation)과 상전이</h4> |
| `src/components/VocalReference.tsx` | 865 | 코칭 문장 검토 | 파사지오 대역에서 소리가 불안정하게 떨리거나 살짝 플립되는 것을 즉시 실패로 심판하지 마세요. 거대했던 무거운 흉성의 협응 체계가 부서지고 새로운 믹스 체계로 환승하며 일어나는 <strong>상전이(Phase Transition)의 정상적 신호이자 '좋은 변동성'</strong>일 수 있습니다. |
| `src/components/VocalReference.tsx` | 875 | 코칭 문장 검토 | {activeTab === 'laxVox' && ( |
| `src/components/VocalReference.tsx` | 876 | 출처 대조 | <LaxVoxGuide /> |
| `src/components/VocalPiano.tsx` | 1 | 코칭 문장 검토 | import { useState, useRef, useEffect } from 'react'; |
| `src/components/VocalPiano.tsx` | 2 | 코칭 문장 검토 | import { Volume2, VolumeX, HelpCircle, AlertCircle } from 'lucide-react'; |
| `src/components/VocalPiano.tsx` | 42 | 코칭 문장 검토 | export default function VocalPiano() { |
| `src/components/VocalPiano.tsx` | 43 | 코칭 문장 검토 | const [audioEnabled, setAudioEnabled] = useState(true); |
| `src/components/VocalPiano.tsx` | 44 | 코칭 문장 검토 | const [activeNote, setActiveNote] = useState<string \| null>(null); |
| `src/components/VocalPiano.tsx` | 45 | 코칭 문장 검토 | const [vol, setVol] = useState(0.4); |
| `src/components/VocalPiano.tsx` | 46 | 코칭 문장 검토 | const [audioError, setAudioError] = useState<string \| null>(null); |
| `src/components/VocalPiano.tsx` | 47 | 코칭 문장 검토 | const audioCtxRef = useRef<AudioContext \| null>(null); |
| `src/components/VocalPiano.tsx` | 51 | 코칭 문장 검토 | useEffect(() => { |
| `src/components/VocalPiano.tsx` | 61 | 코칭 문장 검토 | const initAudio = () => { |
| `src/components/VocalPiano.tsx` | 62 | 코칭 문장 검토 | if (!audioCtxRef.current) { |
| `src/components/VocalPiano.tsx` | 64 | 코칭 문장 검토 | const AudioContextClass = window.AudioContext \|\| (window as any).webkitAudioContext; |
| `src/components/VocalPiano.tsx` | 65 | 코칭 문장 검토 | audioCtxRef.current = new AudioContextClass(); |
| `src/components/VocalPiano.tsx` | 66 | 코칭 문장 검토 | gainNodeRef.current = audioCtxRef.current.createGain(); |
| `src/components/VocalPiano.tsx` | 68 | 코칭 문장 검토 | gainNodeRef.current.connect(audioCtxRef.current.destination); |
| `src/components/VocalPiano.tsx` | 71 | 코칭 문장 검토 | setAudioError("이 브라우저에서는 Web Audio API를 지원하지 않거나 오디오 출력이 제한됩니다."); |
| `src/components/VocalPiano.tsx` | 72 | 코칭 문장 검토 | setAudioEnabled(false); |
| `src/components/VocalPiano.tsx` | 75 | 코칭 문장 검토 | if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') { |
| `src/components/VocalPiano.tsx` | 76 | 코칭 문장 검토 | audioCtxRef.current.resume(); |
| `src/components/VocalPiano.tsx` | 82 | 코칭 문장 검토 | initAudio(); |
| `src/components/VocalPiano.tsx` | 83 | 코칭 문장 검토 | if (!audioEnabled \|\| !audioCtxRef.current \|\| !gainNodeRef.current) return; |
| `src/components/VocalPiano.tsx` | 87 | 코칭 문장 검토 | oscRef.current.disconnect(); |
| `src/components/VocalPiano.tsx` | 90 | 코칭 문장 검토 | const osc = audioCtxRef.current.createOscillator(); |
| `src/components/VocalPiano.tsx` | 93 | 코칭 문장 검토 | osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime); |
| `src/components/VocalPiano.tsx` | 96 | 코칭 문장 검토 | gainNodeRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime); |
| `src/components/VocalPiano.tsx` | 97 | 코칭 문장 검토 | gainNodeRef.current.gain.linearRampToValueAtTime(vol, audioCtxRef.current.currentTime + 0.05); |
| `src/components/VocalPiano.tsx` | 99 | 코칭 문장 검토 | osc.connect(gainNodeRef.current); |
| `src/components/VocalPiano.tsx` | 100 | 코칭 문장 검토 | osc.start(); |
| `src/components/VocalPiano.tsx` | 103 | 코칭 문장 검토 | setActiveNote(noteName); |
| `src/components/VocalPiano.tsx` | 110 | 코칭 문장 검토 | if (!audioCtxRef.current \|\| !gainNodeRef.current) return; |
| `src/components/VocalPiano.tsx` | 112 | 코칭 문장 검토 | gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioCtxRef.current.currentTime); |
| `src/components/VocalPiano.tsx` | 113 | 코칭 문장 검토 | gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.3); |
| `src/components/VocalPiano.tsx` | 115 | 코칭 문장 검토 | if (oscRef.current && activeNote) { |
| `src/components/VocalPiano.tsx` | 122 | 코칭 문장 검토 | setActiveNote(null); |
| `src/components/VocalPiano.tsx` | 131 | 코칭 문장 검토 | { label: "남성 흉성 시작 (C3)", note: "C3", freq: 130.81, desc: "Light Unstable / Transitional / Breathy 등 복구 시작음" }, |
| `src/components/VocalPiano.tsx` | 132 | 코칭 문장 검토 | { label: "남성 높은 고음 (F#3)", note: "F#3", freq: 185.00, desc: "Heavy / Pressed 두성 유도 시작음 (Tricking)" }, |
| `src/components/VocalPiano.tsx` | 133 | 코칭 문장 검토 | { label: "여성 흉성 시작 (G3)", note: "G3", freq: 196.00, desc: "Light Unstable / Transitional / Breathy 등 복구 시작음" }, |
| `src/components/VocalPiano.tsx` | 134 | 코칭 문장 검토 | { label: "여성 높은 고음 (C#4/C#5)", note: "C#5", freq: 554.37, desc: "Heavy / Pressed 두성 유도 시작음 (Tricking)" } |
| `src/components/VocalPiano.tsx` | 169 | 코칭 문장 검토 | setVol(parseFloat(e.target.value)); |
| `src/components/VocalPiano.tsx` | 170 | 코칭 문장 검토 | if (gainNodeRef.current && audioCtxRef.current) { |
| `src/components/VocalPiano.tsx` | 171 | 코칭 문장 검토 | gainNodeRef.current.gain.setValueAtTime(parseFloat(e.target.value), audioCtxRef.current.currentTime); |
| `src/components/VocalPiano.tsx` | 185 | 코칭 문장 검토 | <h4 className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2">훈련 필수 시작음 가치 체크 (One-Tap 피치 가이드)</h4> |
| `src/components/VocalPiano.tsx` | 188 | 코칭 문장 검토 | const isCurrent = activeNote === g.note; |
| `src/components/VocalPiano.tsx` | 195 | 코칭 문장 검토 | onTouchStart={(e) => { e.preventDefault(); playNote(g.freq, g.note); }} |
| `src/components/VocalPiano.tsx` | 219 | 코칭 문장 검토 | <div className="relative bg-slate-950 border border-slate-800 rounded-xl p-3 pt-6 select-none overflow-x-auto scroller-slim"> |
| `src/components/VocalPiano.tsx` | 220 | 코칭 문장 검토 | <div className="flex justify-start lg:justify-center min-w-[500px] h-32 relative"> |
| `src/components/VocalPiano.tsx` | 225 | 코칭 문장 검토 | const isPressed = activeNote === k.note; |
| `src/components/VocalPiano.tsx` | 232 | 코칭 문장 검토 | onTouchStart={(e) => { e.preventDefault(); playNote(k.freq, k.note); }} |
| `src/components/VocalPiano.tsx` | 255 | 수정 대상 | {/* 개별 흑건 절대좌표 배치용 offset 구조 */} |
| `src/components/VocalPiano.tsx` | 272 | 코칭 문장 검토 | onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); playNote(k.freq, k.note); }} |
| `src/components/TypeSummaryModal.tsx` | 1 | 코칭 문장 검토 | import { X, Activity } from 'lucide-react'; |
| `src/components/TypeSummaryModal.tsx` | 8 | 출처 대조 | const SUMMARY_DATA = [ |
| `src/components/TypeSummaryModal.tsx` | 13 | 코칭 문장 검토 | currentState: "목표 협응 준안정 (골짜기 충분히 깊음)", |
| `src/components/TypeSummaryModal.tsx` | 14 | 코칭 문장 검토 | targetState: "적응적 협응 (골짜기 더 깊고 넓게)", |
| `src/components/TypeSummaryModal.tsx` | 20 | 코칭 문장 검토 | name: "Light Unstable", |
| `src/components/TypeSummaryModal.tsx` | 22 | 코칭 문장 검토 | currentState: "접촉 끌개 얕음 (약한 부하에 상전이)", |
| `src/components/TypeSummaryModal.tsx` | 23 | 코칭 문장 검토 | targetState: "접촉 끌개 깊어짐 (넓은 조건 안정)", |
| `src/components/TypeSummaryModal.tsx` | 24 | 수정 대상 | strategy: "파열음 강제, 넓은 모음→좁은 모음", |
| `src/components/TypeSummaryModal.tsx` | 31 | 코칭 문장 검토 | currentState: "끌개 지형 불안정 (조건에 따라 변동)", |
| `src/components/TypeSummaryModal.tsx` | 32 | 코칭 문장 검토 | targetState: "안정적 브리지 끌개", |
| `src/components/TypeSummaryModal.tsx` | 40 | 코칭 문장 검토 | currentState: "풀체스트 끌개 과도 깊음 (다른 협응 선택 불가)", |
| `src/components/TypeSummaryModal.tsx` | 41 | 코칭 문장 검토 | targetState: "두성/믹스 끌개 형성", |
| `src/components/TypeSummaryModal.tsx` | 42 | 출처 대조 | strategy: "Tricking+좁은 모음+SOVTE", |
| `src/components/TypeSummaryModal.tsx` | 47 | 코칭 문장 검토 | name: "Pressed/Over-adducted", |
| `src/components/TypeSummaryModal.tsx` | 49 | 코칭 문장 검토 | currentState: "과폐쇄 끌개 과도 깊음 (공기 흐름 차단)", |
| `src/components/TypeSummaryModal.tsx` | 50 | 코칭 문장 검토 | targetState: "적절 접촉 끌개 (공기 흐름 허용)", |
| `src/components/TypeSummaryModal.tsx` | 51 | 수정 대상 | strategy: "Trill 강제 이완, Hooty 후두 하강, 임시적 숨섞임", |
| `src/components/TypeSummaryModal.tsx` | 58 | 코칭 문장 검토 | currentState: "접촉 끌개 부재 (숨섞임만 존재)", |
| `src/components/TypeSummaryModal.tsx` | 59 | 코칭 문장 검토 | targetState: "접촉 끌개 최초 형성 (흉성 발견)", |
| `src/components/TypeSummaryModal.tsx` | 65 | 코칭 문장 검토 | export default function TypeSummaryModal({ isOpen, onClose }: TypeSummaryModalProps) { |
| `src/components/TypeSummaryModal.tsx` | 81 | 코칭 문장 검토 | <Activity className="text-indigo-600 dark:text-indigo-400" size={24} /> |
| `src/components/TypeSummaryModal.tsx` | 95 | 출처 대조 | {SUMMARY_DATA.map((item) => ( |
| `src/components/TypeSummaryModal.tsx` | 105 | 코칭 문장 검토 | <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-snug">{item.currentState}</p> |
| `src/components/TypeSummaryModal.tsx` | 109 | 코칭 문장 검토 | <p className="text-xs text-indigo-700 dark:text-indigo-300 font-semibold leading-snug">{item.targetState}</p> |
| `src/components/TypeSummaryModal.tsx` | 129 | 코칭 문장 검토 | function getColorClasses(color: string) { |
| `src/components/MotorProtocolGuide.tsx` | 1 | 코칭 문장 검토 | import React from 'react'; |
| `src/components/MotorProtocolGuide.tsx` | 2 | 코칭 문장 검토 | import { Activity, ShieldCheck, CheckCircle2 } from 'lucide-react'; |
| `src/components/MotorProtocolGuide.tsx` | 4 | 코칭 문장 검토 | export default function MotorProtocolGuide() { |
| `src/components/MotorProtocolGuide.tsx` | 7 | 코칭 문장 검토 | {/* Introduction */} |
| `src/components/MotorProtocolGuide.tsx` | 10 | 코칭 문장 검토 | <Activity className="text-indigo-600 dark:text-indigo-400" size={20} /> |
| `src/components/MotorProtocolGuide.tsx` | 13 | 코칭 문장 검토 | <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed"> |
| `src/components/MotorProtocolGuide.tsx` | 14 | 출처 대조 | v6의 운동학습·복잡계 개념과 v8의 SLS 툴 + Lax Vox 훈련을 통합하여, 각 유형별로 현장에서 즉시 적용 가능한 단계별 실전 프로토콜을 제시합니다. |
| `src/components/MotorProtocolGuide.tsx` | 20 | 코칭 문장 검토 | <table className="w-full text-left border-collapse text-xs"> |
| `src/components/MotorProtocolGuide.tsx` | 39 | 코칭 문장 검토 | <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800/60">Adduct/Connect</td> |
| `src/components/MotorProtocolGuide.tsx` | 49 | 코칭 문장 검토 | </table> |
| `src/components/MotorProtocolGuide.tsx` | 53 | 출처 대조 | <p className="text-indigo-900 dark:text-indigo-200 font-medium">SLS 툴 + Lax Vox 결합 원칙: "SLS 툴로 발견하고, Lax Vox로 정밀 조절하고, 다시 SLS 툴로 전이한다"</p> |
| `src/components/MotorProtocolGuide.tsx` | 67 | 코칭 문장 검토 | <h4 className="font-bold text-indigo-700 dark:text-indigo-400 text-xs mb-1">Type 2: Light Unstable</h4> |
| `src/components/MotorProtocolGuide.tsx` | 68 | 코칭 문장 검토 | <p className="text-xs text-slate-600 dark:text-slate-400">성대 접촉 끌개 형성 (파열음→비음→개방모음 전이)</p> |
| `src/components/MotorProtocolGuide.tsx` | 76 | 출처 대조 | <p className="text-xs text-slate-600 dark:text-slate-400">풀체스트 끌개 이탈 (Tricking+좁은모음+SOVTE, 임계 요동 관리)</p> |
| `src/components/MotorProtocolGuide.tsx` | 79 | 코칭 문장 검토 | <h4 className="font-bold text-orange-700 dark:text-orange-400 text-xs mb-1">Type 5: Pressed/Over-adducted</h4> |
| `src/components/MotorProtocolGuide.tsx` | 84 | 코칭 문장 검토 | <p className="text-xs text-slate-600 dark:text-slate-400">접촉 끌개 최초 형성 + 과폐쇄 전이 관리 (이중 목표 관리)</p> |
| `src/components/MotorProtocolGuide.tsx` | 89 | 코칭 문장 검토 | {/* Summary Table 1 */} |
| `src/components/MotorProtocolGuide.tsx` | 93 | 코칭 문장 검토 | <table className="w-full text-left text-xs min-w-[700px]"> |
| `src/components/MotorProtocolGuide.tsx` | 105 | 출처 대조 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">기본 워밍업으로 상태 확인<br/>특별한 제약 추가 불필요<br/>Lax Vox: Messa di Voce</td> |
| `src/components/MotorProtocolGuide.tsx` | 107 | 출처 대조 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">툴→개방 모음→가사→곡<br/>Lax Vox 4~5단계 적극 활용<br/>파지·전이 테스트</td> |
| `src/components/MotorProtocolGuide.tsx` | 111 | 출처 대조 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">파열음으로 접촉 반응 비교<br/>넓은 모음으로 흉성 발견<br/>Lax Vox: Staccato→Glissando</td> |
| `src/components/MotorProtocolGuide.tsx` | 112 | 코칭 문장 검토 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉을 비음→반폐쇄→개방으로 점진적 전이<br/>외적 초점: 튕겨나오는 소리</td> |
| `src/components/MotorProtocolGuide.tsx` | 117 | 출처 대조 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">sub-Tends To 실시간 판독<br/>Pull Chest: 좁은 모음+SOVTE<br/>No Chest: 넓은 모음+파열음</td> |
| `src/components/MotorProtocolGuide.tsx` | 118 | 코칭 문장 검토 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Pull Chest: Hooty+M[ʌ]m<br/>No Chest: Cry+Nay<br/>순수 Flip: Nay+W[ʌ]w</td> |
| `src/components/MotorProtocolGuide.tsx` | 123 | 출처 대조 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Tricking(높은 음서 시작)<br/>좁은 모음+SOVTE 필수<br/>Lax Vox: Hooty Siren (1~3cm)</td> |
| `src/components/MotorProtocolGuide.tsx` | 124 | 코칭 문장 검토 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Lip Trill→Hooty→M[ʌ]m으로 Release<br/>임계 요동 관찰(좋은 변동성)</td> |
| `src/components/MotorProtocolGuide.tsx` | 125 | 출처 대조 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">SOVTE→반폐쇄→개방<br/>Lax Vox 1단계 충분히 적용<br/>파지 강력 요구</td> |
| `src/components/MotorProtocolGuide.tsx` | 129 | 코칭 문장 검토 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Trill로 과폐쇄 해제<br/>Hooty로 후두 이완<br/>임시적 숨섞임 허용</td> |
| `src/components/MotorProtocolGuide.tsx` | 130 | 코칭 문장 검토 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">3단계 프로토콜 순차<br/>숨섞임→접촉 명료화<br/>'선명하게' 보류, '연결'에 초점</td> |
| `src/components/MotorProtocolGuide.tsx` | 131 | 코칭 문장 검토 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Trill→Hooty→M[ʌ]m→개방<br/>과폐쇄 재발시 즉시 리셋</td> |
| `src/components/MotorProtocolGuide.tsx` | 135 | 출처 대조 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Edgy mmm으로 접촉 발견<br/>파열음 결합, Hooty 우선 피하고 반응을 확인<br/>Lax Vox: 2단계 접근</td> |
| `src/components/MotorProtocolGuide.tsx` | 136 | 코칭 문장 검토 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 유지 + 과폐쇄 예방 (이중 관리)<br/>대역폭 하한/상한 관리</td> |
| `src/components/MotorProtocolGuide.tsx` | 137 | 출처 대조 | <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 없으면 Lax Vox 중단<br/>Type 5 과폐쇄 전이 상시 모니터링</td> |
| `src/components/MotorProtocolGuide.tsx` | 144 | 코칭 문장 검토 | {/* Summary Table 2 */} |
| `src/components/MotorProtocolGuide.tsx` | 152 | 코칭 문장 검토 | <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">접촉 관련 큐</th> |
| `src/components/MotorProtocolGuide.tsx` | 154 | 출처 대조 | <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">Lax Vox 큐</th> |
| `src/components/MotorProtocolGuide.tsx` | 168 | 코칭 문장 검토 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">거품이 짧게 나오면 접촉이 있는 거예요</td> |
| `src/components/MotorProtocolGuide.tsx` | 172 | 코칭 문장 검토 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">코가 간지러운 느낌이 있는지 (Nay 비음)</td> |
| `src/components/MotorProtocolGuide.tsx` | 185 | 코칭 문장 검토 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">소리가 아래로 내려앉는 느낌 (Hooty)</td> |
| `src/components/MotorProtocolGuide.tsx` | 192 | 코칭 문장 검토 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">거품이 짧게 나오면 접촉 달성</td> |
| `src/components/MotorProtocolGuide.tsx` | 199 | 코칭 문장 검토 | {/* Summary Table 3 */} |
| `src/components/MotorProtocolGuide.tsx` | 223 | 코칭 문장 검토 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 끌개 얕음 (약한 부하에 상전이)</td> |
| `src/components/MotorProtocolGuide.tsx` | 224 | 코칭 문장 검토 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 끌개 깊어짐 (넓은 조건 안정)</td> |
| `src/components/MotorProtocolGuide.tsx` | 225 | 수정 대상 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">파열음 강제, 넓은 모음→좁은 모음</td> |
| `src/components/MotorProtocolGuide.tsx` | 238 | 코칭 문장 검토 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">두성/믹스 끌개 형성</td> |
| `src/components/MotorProtocolGuide.tsx` | 239 | 출처 대조 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Tricking+좁은 모음+SOVTE</td> |
| `src/components/MotorProtocolGuide.tsx` | 245 | 코칭 문장 검토 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">적절 접촉 끌개 (공기 흐름 허용)</td> |
| `src/components/MotorProtocolGuide.tsx` | 246 | 수정 대상 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Trill 강제 이완, Hooty 후두 하강, 임시적 숨섞임</td> |
| `src/components/MotorProtocolGuide.tsx` | 251 | 코칭 문장 검토 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 끌개 부재 (숨섞임만 존재)</td> |
| `src/components/MotorProtocolGuide.tsx` | 252 | 코칭 문장 검토 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 끌개 최초 형성 (흉성 발견)</td> |
| `src/components/MotorProtocolGuide.tsx` | 261 | 코칭 문장 검토 | {/* Summary Table 4 */} |
| `src/components/MotorProtocolGuide.tsx` | 263 | 출처 대조 | <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">SLS 툴 + Lax Vox 결합 세션 타이밍 요약</h3> |
| `src/components/MotorProtocolGuide.tsx` | 270 | 출처 대조 | <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">Lax Vox 도입 (Phase 2 후반~3 초)</th> |
| `src/components/MotorProtocolGuide.tsx` | 272 | 출처 대조 | <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700 text-indigo-700 dark:text-indigo-400">총 Lax Vox 시간</th> |
| `src/components/MotorProtocolGuide.tsx` | 314 | 코칭 문장 검토 | <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">3~5 분 (접촉 후만)</td> |

## 출처 파일 목록

| 파일 | 식별 정보 추출 시작 |
|---|---|
| `01-Effects-of-a-Straw-Phonation-Protocol-on-Acoustic-and-Perceptual-Measures-of-an-SATB-Chorus.pdf` | Effects of a Straw Phonation Protocol on Acoustic and Perceptual Measures of an SATB Chorus *Jeremy N. Manternach and †James F. Daugherty, *Iowa City, Iowa, and †Lawrence, Kansas           Summary: Background. Recent scholarship has suggested that semi-occluded vocal tract (SOVT) exercises may          increase vocal economy of individuals by reducing vocal effort while maintaining or increasing acoustic output. Choral          singers, however, may use different resonance techniques or change v |
| `02-Comparison-of-Vocal-Amplitude-and-Contact-Speed-according-to-SOVTE-Type.pdf` | See discussions, stats, and author profiles for this publication at: https://www.researchgate.net/publication/384909113    Comparison of Vocal Amplitude and Contact Speed according to SOVTE Type  Article in Communication Sciences & Disorders · September 2024 DOI: 10.12963/csd.240052     CITATION                                                                                               READS  1                                                                                                      |
| `03-Effect-of-three-semi-occluded-vocal-tract-therapy-programmes-on-the-phonation-of-patients-with-dysphonialip-trill-water-resistance-therapy-and-straw-phonation.pdf` | Effect of three semi-occluded vocal tract therapy programs on the phonation of patients with dysphonia: lip trill, water-resistance therapy and straw phonation Iris Meerschman†, Kristiane Van Lierde†‡, Julie Ketels†, Charlotte Coppieters†, Sofie Claeys§ and Evelien D’haeseleer† †Ghent University, Department of Rehabilitation Sciences, Research group: Speech, Language and Hearing Sciences, Ghent, Belgium ‡University of Pretoria, Department of Speech-Language Pathology and Audiology, Pretoria, Sou |
| `04-Analysis-of-the-Immediate-Effects-of-the-LaxVox-Technique-on.pdf` | TagedH1Analysis of the Immediate Effects of the LaxVox Technique on        Digital Videokymography Parameters in Adults With Voice        ComplaintsTagedEn                                                   lio Rocha Santos, and *Ana Cristina Co TagedP*Ualisson Nogueira do Nascimento, †Marco Aure                                     ^ rtes Gama, *yBelo Horizonte, BrazilTagedEn                 TagedPSummary: Objectives. Digital videokymography based on high-speed videoendoscopy enables the evaluat |
| `05-_publicadormed-Journal-manager-87-97-GUZMAN.pdf_.pdf` | Trastornos del lenguaje en el adulto                                                 Terapia con tracto vocal semi-ocluido:                                             Un estudio de caso                                              Voice therapy with semi-occluded vocal tract: a case                                             study                Marco Guzmán N.                RESUMEN                        Fonoaudiólogo        Introducción: Los ejercicios de tracto vocal semi-ocluido hacen ref |
| `06-Effect-of-three-semi-occluded-vocal-tract-therapy-programs-on-the.pdf` | Effect of three semi-occluded vocal tract therapy programs on the phonation of patients with dysphonia: lip trill, water-resistance therapy and straw phonation Iris Meerschman†, Kristiane Van Lierde†‡, Julie Ketels†, Charlotte Coppieters†, Sofie Claeys§ and Evelien D’haeseleer† †Ghent University, Department of Rehabilitation Sciences, Research group: Speech, Language and Hearing Sciences, Ghent, Belgium ‡University of Pretoria, Department of Speech-Language Pathology and Audiology, Pretoria, Sou |
| `07-Immediate-effects-of-the-semi-occluded-vocal-tract-exercise-with-LaxVox-tube-in-singers.pdf` |                                                                                                                      DOI:10.1590/2317-1782/20162015168               Immediate effects of the semi-occluded                                                                    Original Article              vocal tract exercise with LaxVox tube                                                                   Artigo Original                             in singers                                         |
| `08-The-Impact-of-Semi-Occluded-Vocal-Tract-Exercises-on-Vocal-Function-in-Singers-Straw-PhonationvsLip-Trill.pdf` |    The Impact of Semi-Occluded Vocal Tract Exercises on Vocal Function in Singers:                               Straw Phonation vs. Lip Trill                                             By                                   Troy Clifford Dargin                   M.B.A., Finance and Management, University of Kansas                       M.A., Political Science, University of Kansas                 M.M.E., Vocal Pedagogy/Vocology, University of Kansas                  M.A., Speech-Language Patholo |
| `09-Multidimensional-voice-assessmentthe-immediate-effects-of-Lax-Vox-in-singers-with-voice-complaints.pdf` | Rev. CEFAC. 2021;23(2):e4520                                                               https://doi.org/10.1590/1982-0216/20212324520    Original articles   Multidimensional voice assessment: the immediate effects of Lax Vox® in singers with voice complaints                                                                                                       Ruliano Santana da Matta1                                                                                                         https: |
| `10-Immediate-effect-of-sounded-blowing-exercise-in-the-elderly-voice.pdf` |             Original Article                 Immediate effect of sounded blowing exercise in the              Artigo Original                                     elderly voice  Maria das Graças de Paiva Siracusa1       Efeito imediato do exercício de sopro sonorizado na voz do                      Gisele Oliveira2                   Glaucya Madazio3                                                          idoso                       Mara Behlau4                             Keywords        ABSTRAC |
| `11-Lip-Trill-Effects-on-Vocal-Function-Vocal-Pitch-and.pdf` |                                                           ORIGINAL ARTICLE      Lip Trill Effects on Vocal Function, Vocal Pitch, and  Harmonics-to-Noise Ratio: A Multiple Baseline Study              of Three Vocally Healthy Females                                    Ma. Royce Chua-Lawas, MRS-SP1 and Esmerita R. Rotor, PhD2                        1                            Department of Speech Pathology, College of Allied Medical Professions, University of the Philippines Manila                |
| `12-Lax-Vox-as-a-Voice-Training-Program-for-TeachersA-Pilot-Study.pdf` | Lax Vox as a Voice Training Program for Teachers: A Pilot Study *Eva Mailänder, †Lea Mühre, and ‡,§Ben Barsties, *†§Hamburg, Germany, and ‡Belgium           Summary: Objectives. The objective of this study was to explore the effectiveness of a 3-week training program          with the voice therapy “Lax Vox” for teachers.          Methods. Four healthy female teachers participated as volunteers for the study. Several voice measurements of per-          ception, acoustics, aerodynamics, and self- |
| `13-The-Effect-of-Semi-Occluded-Vocal-Tract-Exercise-SOVTE-and-Traditional-Vocal-Warm-up-TVW-on-the-Vocal-Quality-of-Untrained-Female-Singers-in-MalaysiaA-Comparison.pdf` |                                         Pertanika J. Soc. Sci. & Hum. 30 (2): 557 - 577 (2022)                                                  SOCIAL SCIENCES & HUMANITIES                                                    Journal homepage: http://www.pertanika.upm.edu.my/     The Effect of Semi-Occluded Vocal Tract Exercise (SOVTE) and Traditional Vocal Warm-up (TVW) on the Vocal Quality of Untrained Female Singers in Malaysia: A Comparison Wei Shean Ter* and Kwan Yie Wong Music Department, Fa |
| `14-08-JSSH-8188-2021.pdf` |                                         Pertanika J. Soc. Sci. & Hum. 30 (2): 557 - 577 (2022)                                                  SOCIAL SCIENCES & HUMANITIES                                                    Journal homepage: http://www.pertanika.upm.edu.my/     The Effect of Semi-Occluded Vocal Tract Exercise (SOVTE) and Traditional Vocal Warm-up (TVW) on the Vocal Quality of Untrained Female Singers in Malaysia: A Comparison Wei Shean Ter* and Kwan Yie Wong Music Department, Fa |
| `15-Effects-of-Semi-occluded-Vocal-Tract-Exercises-with-Different-Vibration-Sources-and-Duration-on-Healthy-Adults-Voice.pdf` | See discussions, stats, and author profiles for this publication at: https://www.researchgate.net/publication/379874138    Effects of Semi-occluded Vocal Tract Exercises with Different Vibration Sources and Duration on Healthy Adults' Voice  Article in Communication Sciences & Disorders · March 2024 DOI: 10.12963/csd.240007    CITATION                                                                                               READS  1                                                             |
| `16-Low-frequency-mechanical-resonance-of-the-vocal-tract-in-vocal-exercises-that-apply-tubes.pdf` |                                                             Biomedical Signal Processing and Control 37 (2017) 39–49                                                                     Contents lists available at ScienceDirect                                                Biomedical Signal Processing and Control                                                     journal homepage: www.elsevier.com/locate/bspc     Low frequency mechanical resonance of the vocal tract in vocal exercises that appl |
## 최종 적용 원칙

이 버전의 코칭 문장은 연구 결과와 코칭 적용안을 구분한다. 첨부 논문은 SOVT·립트릴·LaxVox의 특정 조건과 집단에서 관찰된 결과를 제공하지만, SLS 음절별 우선순위나 여섯 유형의 고정 생리 진단을 직접 검증하지 않는다. 따라서 화면에서는 각 경향에 우선 도구와 대안을 함께 보여주고, 성공·기식·압착·변화 없음의 반응에 따라 다음 비교를 제안한다. 도구가 성대 접촉·후두 위치·근육 활성 상태를 자동으로 만든다고 단정하지 않으며, 불편감이 있으면 과제를 중단하고 필요하면 음성 전문 평가를 고려한다.
