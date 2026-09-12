export const VOWEL_NARROWING_CHART = [
  { problem: "BAT [ae]", substitution: "BET [ɛ]" },
  { problem: "BAY [ei]", substitution: "BEE [i]" },
  { problem: "BET [ɛ]", substitution: "BIT [I]" },
  { problem: "BIT [I]", substitution: "BEET [i]" },
  { problem: "BOAT [oʊ]", substitution: "BOOT [u]" },
  { problem: "BOUGHT [ɔ]", substitution: "BUT [ʌ]" },
  { problem: "BUCK [ʌ]", substitution: "BOOK [ʊ]" },
  { problem: "BOOK [ʊ]", substitution: "BOOT [u]" },
];

export const CONSONANT_STRENGTH_CHART = [
  { level: "유성 폐쇄·파열음", examples: "G, B, D", note: "구강 폐쇄와 시작 조건을 설명하며 성대 접촉의 고정 서열은 아닙니다." },
  { level: "무성 파열음", examples: "K, T, P, tʃ, dʒ", note: "성대 진동 없이도 구강 폐쇄를 만들 수 있으므로 성대 상태를 자음만으로 판단하지 않습니다." },
  { level: "유성음·비음·마찰음", examples: "N, M, ŋ, ð, Z, V, ʒ", note: "발음과 수행 조건에 따라 연결감이 다르게 나타날 수 있습니다." },
  { level: "활음", examples: "W, Y", note: "모음으로 이어지는 움직임을 비교할 때 사용할 수 있습니다." },
  { level: "무성 마찰·기음", examples: "θ, ʃ, S, F, H", note: "기류감이 커질 수 있지만 성문 상태를 자음만으로 확정하지 않습니다." },
];

export interface LessonStep {
  time: string;
  stage: string;
  tools: string;
  scale: string;
  dynamicBreath?: string;
  queuing: string;
  checkpoint: string;
}

export interface VocalType {
  id: string;
  name: string;
  koreanName: string;
  slsTarget: string;
  description: string;
  characteristics: string[];
  primaryTools: string[];
  avoidTools: string[];
  strategy: string;
  motorDiagnostic?: string;
  constraintRedesign?: string;
  emergenceFeedback?: string;
  transferDesign?: string;
  startKey: string;
  keyPoints: string;
  lessonFlow: LessonStep[];
}

export interface DiagnosticQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    nextId: string | null;  // null 이면 특정 발성 유형으로 진단 완료됨
    resultTypeId?: string;  // 진단 완료 시 지정할 발성 유형 ID
  }[];
}

export const VOCAL_TYPES: VocalType[] = [
  {
    id: "type1",
    name: "Type 1: Balanced Mix",
    koreanName: "균형 잡힌 믹스 (Balanced Mix)",
    slsTarget: "현재 편한 연결을 유지하며 가창 조건을 점진적으로 확장",
    description: "브릿지에서 음질과 연결이 비교적 부드럽게 들리는 경향입니다. SLS의 Mix 개념을 참고한 코칭용 분류이며, 청취만으로 생리적 상태를 확정하지 않습니다.",
    characteristics: [
      "저음부터 고음까지 급격한 음색 변화 없이 부드럽게 연결됨",
      "후두 움직임이나 성대 접촉을 청취만으로 확정하지 않고, 음질·노력감의 변화를 관찰함",
      "현재 편한 반응을 유지하면서 음량·음역·모음·가사를 한 가지씩 확장함"
    ],
    primaryTools: ["W/Y 글라이드", "이중모음([ei], [oʊ])", "N[ae] / N[ei]"],
    avoidTools: ["불필요하고 급격한 툴 변경", "Edgy mmm (불필요하나 순간적 사용 가능, 과사용 주의)"],
    strategy: "현재 편안한 연결을 기준으로 삼고, 음량·음역·모음·템포·가사를 한 번에 하나씩 늘립니다. 변화가 생긴 조건을 기록하고 이전 조건으로 돌아가 비교합니다.",
    motorDiagnostic: "여러 과제에서 연결과 노력감이 비교적 안정적으로 관찰되는 패턴입니다. 특정 근육이나 성문 상태의 진단으로 해석하지 않습니다.",
    constraintRedesign: "[조건 확장] 편한 음형에서 시작해 모음·자음·음역·음량·템포·가사를 한 가지씩 추가하고, 각 단계의 재현성을 확인합니다.",
    emergenceFeedback: "몸 안의 움직임을 직접 통제하라고 하기보다, 소리의 연결·가사 전달·프레이징처럼 관찰 가능한 결과에 초점을 둡니다.",
    transferDesign: "짧은 음형 ➡️ 모음·자음 ➡️ 특정 가사 ➡️ 곡의 짧은 구절 순으로 도움을 줄이며, 다음 수업에서도 재현되는지 확인합니다.",
    startKey: "개인별로 편안하고 재현 가능한 음에서 시작 (고정 음역 처방 아님)",
    keyPoints: "과도한 툴 변경을 기피하고, 현재의 훌륭한 협응 근육을 세밀하게 유지・강화하는 데 집중합니다.",
    lessonFlow: [
      {
        time: "0–2 분",
        stage: "진단",
        tools: "5-Tone [a]",
        scale: "5-Tone",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "편하게 시작해 보세요",
        checkpoint: "자연스러운 상태 관찰"
      },
      {
        time: "2–7 분",
        stage: "Add/Connect",
        tools: "N[ae]",
        scale: "1.5 Octave with Sustain",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "N으로 시작해서 ae로 연결",
        checkpoint: "저음과 고음의 경계에서 뒤집히는 소리(Flip)나 삐걱거림(Crack)이 발생하는지 점검하고, 발생 시 립트릴로 다시 리셋합니다."
      },
      {
        time: "7–12 분",
        stage: "Stabilize",
        tools: "W[ʌ]w + Y[ʌ]y",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "W로 부드러운 연결 유지",
        checkpoint: "저음의 무게감이 탄탄하게 유지되는지 관찰하며, 소리가 지나치게 무겁거나 굳어지면 다시 가벼운 W 발음으로 복귀합니다."
      },
      {
        time: "12–16 분",
        stage: "Stabilize",
        tools: "G[ʌ]g",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "G로 확인하고 ʌ로 연결",
        checkpoint: "보조적인 자음의 지원을 줄인 뒤에도 음정·연결·노력감의 변화가 남는지 확인합니다."
      },
      {
        time: "16–20 분",
        stage: "Speech Level",
        tools: "N[ei] + [oʊ]",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "자연스럽게 말하듯 불러보세요",
        checkpoint: "원곡 가사에서 연결이나 노력감이 달라지면 음량·음역을 낮추고 립트릴 또는 다른 조건으로 다시 비교합니다."
      }
    ]
  },
  {
    id: "type2",
    name: "Type 2: Light Unstable",
    koreanName: "가볍고 불안정한 유형 (Light Unstable)",
    slsTarget: "연결이 달라지는 조건을 찾고 편안한 시작·유지를 비교",
    description: "가벼운 연결이 음역 상승이나 특정 모음에서 자주 끊기거나 뒤집히는 경향입니다. SLS의 No Chest·Flip 관련 개념을 참고해 재구성한 코칭용 관찰 유형이며, 성대 상태나 근육의 부족을 청취만으로 확정하지 않습니다.",
    characteristics: [
      "상행이나 특정 모음에서 가벼운 소리로 바뀌거나 연결이 끊김",
      "기류감·음량·노력감의 조합이 과제에 따라 달라짐",
      "소리가 나오는 구간과 끊기는 구간의 차이를 비교해 기록할 수 있음"
    ],
    primaryTools: ["B[ae]b·D[ae]d·K[ae]k (자음+모음 비교)", "짧은 Staccato", "Edgy mmm", "Cry (음색 비교)"],
    avoidTools: ["현재 소리가 더 흐려지거나 노력이 커지는 도구·모음", "음량과 음역을 동시에 키우는 과제"],
    strategy: "편한 음역의 짧은 음형에서 Mum·Guh·Gee·Goo 등을 비교하고, 필요하면 자음과 모음 조건을 바꿉니다. 선명도를 얻으려다 눌림이나 불편감이 늘면 즉시 강도를 낮추고 다른 조건을 확인합니다.",
    motorDiagnostic: "가벼운 연결이 음역 상승에서 쉽게 흔들리는 경향으로 관찰합니다. 특정 성대 협응이나 생리 상태로 단정하지 않고 음량·모음·음역을 바꿔 반응을 비교합니다.",
    constraintRedesign: "[과제 비교] B, D, K 같은 자음과 모음 과제를 비교해 시작감과 연결감이 어떻게 달라지는지 관찰합니다. 자음만으로 성대 접촉을 확정하지 않습니다.",
    emergenceFeedback: "'성대를 붙여라'처럼 결과를 직접 지시하기보다 선명도·기류감·노력감·연결 여부를 듣습니다. 파열음이나 Edgy를 사용할 때는 자음만 커지고 모음이 눌리지 않는지 비교합니다.",
    transferDesign: "짧은 시작음 ➡️ 같은 음의 모음 ➡️ 짧은 음형 ➡️ 가사 순으로 전이합니다. 도구를 바꾼 뒤에도 편안함과 연결이 남는지 확인합니다.",
    startKey: "개인별로 편안한 낮은 음에서 짧게 시작 (고정 음역 처방 아님)",
    keyPoints: "자음·모음·음량을 한 가지씩 바꾸며 선명도와 노력감이 어떻게 달라지는지 기록합니다. Edgy나 파열음이 오히려 눌림을 늘리면 Mum·Goo·Lip Trill 등 다른 조건으로 비교합니다.",
    lessonFlow: [
      {
        time: "0–3 분",
        stage: "Discover",
        tools: "5-Tone [a] → Edgy mmm",
        scale: "Staccato (Cord Adduction)",
        dynamicBreath: "mp~mf, 과도한 공기 사용량 없이",
        queuing: "에지를 느끼며 또렷하게 붙여보세요",
        checkpoint: "가창 시 연결이 달라지는 음역대의 위치와 빈도를 관찰 기록으로 남깁니다."
      },
      {
        time: "3–8 분",
        stage: "Add/Connect",
        tools: "B[ʌ]b, D[ʌ]d, K[ʌ]k",
        scale: "5-Tone [ae]",
        dynamicBreath: "mp~mf, 과도한 공기 사용량 없이",
        queuing: "B를 짧게 지나 모음이 이어지는지 비교",
        checkpoint: "자음 뒤 모음의 선명도·기류감·노력감이 어떻게 달라지는지 확인합니다."
      },
      {
        time: "8–13 분",
        stage: "Stabilize",
        tools: "Cry + Bratty N[ae]",
        scale: "1.5 Octave",
        dynamicBreath: "mf, 중 공기 사용량 (균형시점까지)",
        queuing: "우는 소리로 연결 유지",
        checkpoint: "저음과 상행에서 음질·노력감이 어떻게 달라지는지 듣습니다. Bratty 사용 중 노력이 커지면 짧게 비교한 뒤 다른 조건으로 바꿉니다."
      },
      {
        time: "13–17 분",
        stage: "Stabilize",
        tools: "G[ʌ]g + N[ei]",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "G로 시작, ʌ로 연결 유지",
        checkpoint: "목의 노력감과 모음 연결이 유지되는지 살피고, 음질이 무거워지면 음량을 낮추거나 다른 모음과 비교합니다."
      },
      {
        time: "17–20 분",
        stage: "Speech Level",
        tools: "M[ʌ]m + Squeaky Door",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "부드러운 연결 유지하며 시작",
        checkpoint: "실전 곡에서 연결이 끊기거나 기류감이 커지면 해당 프레이즈의 음량·음역을 낮추고 Edgy·Mum·Lip Trill 중 다른 조건을 비교합니다."
      }
    ]
  },
  {
    id: "type3",
    name: "Type 3: Light Transitional",
    koreanName: "과도기적 유형 (Light Transitional - 이동 표적 Moving Target)",
    slsTarget: "음역·모음·진행 방향에 따라 달라지는 연결을 비교하고 안정화",
    description: "저음과 중고음의 음질 차이가 크고, 브릿지에서 연결이 흔들리는 경향입니다. SLS 개념을 참고해 재구성한 코칭용 분류이며 고정된 생리 진단이 아닙니다.",
    characteristics: [
      "저음과 중고음에서 음질·노력감의 차이가 커짐",
      "모음·음량·진행 방향을 바꾸면 연결이 달라질 수 있음",
      "짧은 음형에서는 가능하지만 긴 음형이나 가사에서 재현이 어려울 수 있음"
    ],
    primaryTools: ["Nay (음색·연결 비교)", "W/w 자음 가창", "G[ʌ]g + Cry", "N[ei] / N[ae]"],
    avoidTools: ["고정된 금지 툴은 없으며, 현재 노력감·음질·연결 반응이 불리해지는 조건은 줄입니다."],
    strategy: "Nay·W·Guh·Goo·Gee를 같은 음역에서 번갈아 비교하고, 반응이 편한 조건을 짧은 음형과 가사로 옮깁니다. 한 번의 성공을 전체 음역의 안정으로 일반화하지 않습니다.",
    motorDiagnostic: "음역·모음·진행 방향을 바꿀 때 연결과 노력감이 달라지는 패턴으로 관찰합니다. '상전이'는 설명 모형일 뿐 생리 진단이 아닙니다.",
    constraintRedesign: "[조건 비교] 한 번에 모음·음량·음역·진행 방향 중 하나만 바꾸고, 변화가 나타나는 조건을 기록합니다.",
    emergenceFeedback: "작은 흔들림을 무조건 실패로 판정하지 않되, 불편감·통증·지속적인 음질 악화가 있으면 과제를 낮추거나 중단합니다.",
    transferDesign: "편한 음절 ➡️ 같은 선율의 모음 ➡️ 짧은 가사 순으로 전이하고, 다음 수업에서 시범 없이 재현되는지 확인합니다.",
    startKey: "개인별로 편안하고 차이가 잘 들리는 음에서 시작",
    keyPoints: "Nay가 도움이 되는지, 또는 소리가 더 날카롭고 눌리는지 학생의 반응으로 확인합니다. 필요하면 Goo·Mum·Lip Trill로 조건을 바꿉니다.",
    lessonFlow: [
      {
        time: "0–2 분",
        stage: "진단",
        tools: "5-Tone [a] → N[ae]",
        scale: "1.5 Octave",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "어디서 연결이 끊기나요?",
        checkpoint: "저음의 음질·노력감이 상행에 어떤 영향을 주는지, 연결이 달라지는 음역대가 어디인지 확인합니다."
      },
      {
        time: "2–8 분",
        stage: "Add/Connect",
        tools: "Nay + W[ʌ]w",
        scale: "Octave Repeater",
        dynamicBreath: "mf→p, 중→약 공기 사용량 (통과 시 약하게)",
        queuing: "Nay로 흉성 확인하고 W로 부드럽게 연결",
        checkpoint: "연결이나 기류감이 달라지는 지점을 기록하고, 불편하지 않은 Nay·W·Goo 등의 조건으로 다시 비교합니다."
      },
      {
        time: "8–13 분",
        stage: "Stabilize",
        tools: "G[ʌ]g + Cry",
        scale: "1.5 Octave",
        dynamicBreath: "mf→mp, 중→약 공기 사용량",
        queuing: "우는 소리로 연결 안정화",
        checkpoint: "브릿지의 연결과 노력감을 확인합니다. 눌림·불편감이 나타나면 과제를 중단하거나 립트릴 등 부담이 다른 조건으로 낮춥니다."
      },
      {
        time: "13–17 분",
        stage: "Stabilize",
        tools: "N[ei] + [oʊ]",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "모음 좁히기로 브릿지 통과",
        checkpoint: "연결과 노력감이 유지되는지 확인하고, 소리가 무거워지면 W·Goo·Mum 등 다른 조건으로 비교합니다."
      },
      {
        time: "17–20 분",
        stage: "Speech Level",
        tools: "M[ʌ]m + Y[ʌ]y",
        scale: "Octave Down 3x",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "높은 음에서 낮은 음으로 연결",
        checkpoint: "노래에서 저음과 고음의 반응이 달라지면 Nay·W·Goo 중 변화를 만드는 조건을 한 소절씩 비교합니다."
      }
    ]
  },
  {
    id: "type4",
    name: "Type 4: Heavy/Pulled Chest",
    koreanName: "흉성 쥐어짜기 유형 (Heavy/Pulled Chest)",
    slsTarget: "상행에서 커지는 무게·노력감과 연결 변화를 낮은 부담으로 비교",
    description: "상행에서 음량·노력감·음질의 무게가 함께 커지고, 특정 구간에서 연결이 끊기거나 뒤집히는 경향입니다. SLS의 Pull Chest·Flip 관련 개념을 참고한 코칭용 관찰 유형이며, 후두 위치나 외재근 활성은 청취만으로 확정하지 않습니다. 무거워지는 조건을 낮추고 다른 연결을 비교한 뒤 노래로 옮깁니다.",
    characteristics: [
      "상행에서 음량과 노력감이 함께 커지고 목·턱의 불편을 보고함",
      "브리지 부근에서 음질 변화나 연결 끊김이 커짐",
      "큰 소리에서는 진행되지만 작은 음량이나 모음 전환에서 어려움이 커짐"
    ],
    primaryTools: ["Lip Trill / Tongue Trill (수행 조건 비교)", "Hooty·Goo·Guh·Gee", "M[ʌ]m (편안함이 유지될 때 짧게)"],
    avoidTools: ["현재 노력감·불편감을 키우는 조건", "큰 음량·넓은 음역을 동시에 요구하는 과제"],
    strategy: "음역·음량을 줄인 하행이나 편한 한 음에서 시작해 Lip Trill·Hooty·Goo·Mum 등을 비교합니다. 목표는 특정 후두 위치나 성대 상태를 강제로 만드는 것이 아니라, 부담이 적은 연결이 모음과 가사에서도 유지되는지 확인하는 것입니다.",
    motorDiagnostic: "상행·음량·모음 변화에 따라 무거움과 노력감이 증가하는 패턴으로 관찰합니다. 특정 근육이나 후두 움직임은 별도 평가 없이는 확정하지 않습니다.",
    constraintRedesign: "[조건 제한] 음역·음량·템포 중 하나를 낮추고, Lip Trill·튜브·둥근 모음 등 수행이 편해지는 조건을 비교합니다. 도움을 줄인 뒤에도 변화가 유지되는지 확인합니다.",
    emergenceFeedback: "후두를 직접 내리라고 하기보다 입술의 진동, 소리의 연결, 노력감처럼 외부에서 확인 가능한 결과에 초점을 둡니다. 불편감이나 압박이 늘면 과제를 낮추거나 중단합니다.",
    transferDesign: "SOVT 또는 가벼운 음절 ➡️ 같은 모음 ➡️ 짧은 가사 ➡️ 필요한 만큼만 음역·음량 회복 순으로 전이합니다.",
    startKey: "개인별로 밀어 올리지 않아도 편한 음에서 시작하고, 필요하면 짧게 하행",
    keyPoints: "무거움과 노력감이 줄어드는 조건을 찾고, 그 조건을 모음·가사로 옮길 수 있는지 확인합니다. 후두 위치나 근육 상태를 소리만으로 판정하지 않습니다.",
    lessonFlow: [
      {
        time: "0–5 분",
        stage: "Discover",
        tools: "Lip Trill + Hooty W[i]",
        scale: "1.5 Octave (Tricking)",
        dynamicBreath: "p~mp, 저 공기 사용량 (무리해서 밀지 않기)",
        queuing: "립으로 부드럽게 넘어가 보세요",
        checkpoint: "목·턱의 노력감과 호흡감을 비교합니다. 편안함이 좋아지지 않거나 불편하면 해당 조건을 유지하지 않습니다."
      },
      {
        time: "5–11 분",
        stage: "Add/Connect",
        tools: "M[ʌ]m + d[ʌ]m",
        scale: "Octave Repeater (Reinforcing)",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "아래로 낮추어가며 연결 유지",
        checkpoint: "노력감이 줄고 연결이 유지되는지 듣습니다. 불편감이 커지면 Lip Trill이나 편한 한 음으로 조건을 낮춥니다."
      },
      {
        time: "11–15 분",
        stage: "Stabilize",
        tools: "N[ae] → N[ei]",
        scale: "1.5 Octave (모음 좁히기)",
        dynamicBreath: "p→mf, 약→중 공기 사용량",
        queuing: "ae에서 ei로 모음 좁아지면서 넘어가기",
        checkpoint: "하행 중 연결과 노력감이 유지되는지 확인합니다. 무거움이 커지면 Hooty·Lip Trill·편한 한 음 중 다른 조건으로 낮춰 비교합니다."
      },
      {
        time: "15–18 분",
        stage: "Stabilize",
        tools: "G[ʌ]g",
        scale: "Octave Down 3x",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "높은 음에서 아래로 내려가며 연결",
        checkpoint: "도구를 줄인 뒤에도 상행의 무거움·노력감이 줄어드는지, 통증이나 불편감은 없는지 확인합니다."
      },
      {
        time: "18–20 분",
        stage: "Speech Level",
        tools: "노래 적용",
        scale: "곡 적용",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "방금 한 연결 그대로 노래 불러보세요",
        checkpoint: "원 가사에서 무거움이나 불편감이 재현되면 음량·음역을 낮추고 Lip Trill·Hooty 또는 다른 조건으로 다시 비교합니다."
      }
    ]
  },
  {
    id: "type5",
    name: "Type 5: Pressed/Over-adducted",
    koreanName: "성대 과압착 유형 (Pressed/Over-adducted)",
    slsTarget: "눌림·거친 음질·노력감이 줄어드는 조건을 비교",
    description: "소리가 눌리거나 거칠게 들리고, 음량·음역·시작 조건을 바꾸면 노력감이나 불편감이 빠르게 커지는 경향입니다. SLS의 독립 Tends To라기보다 Pull Chest 또는 Imperfect Mix에서 관찰될 수 있는 코칭용 pressed sub-pattern으로 분류하며, 원인과 성문 상태는 과제 반응을 비교해 가설로 기록합니다.",
    characteristics: [
      "소리가 눌리거나 거칠게 들리고 시작·유지 중 노력감이 커짐",
      "음량·음역·모음을 바꾸면 음질이나 편안함이 빠르게 달라짐",
      "도구를 바꾸어도 불편감이 지속되는지 별도로 확인할 필요가 있음"
    ],
    primaryTools: ["Lip Trill (립트릴)", "Tongue Trill (텅트릴)", "Hooty (음색·노력감 비교)", "가벼운 M[ʌ]m"],
    avoidTools: ["현재 조임·거친 음질·불편감을 키우는 조건", "학생 반응을 확인하지 않은 강한 자음·밝은 음색 과제"],
    strategy: "음량과 음역을 낮추고 Lip Trill·Tongue Trill·Hooty·Mum처럼 부담이 다른 조건을 짧게 비교합니다. 편안함이 좋아져도 그것이 특정 성대 상태를 증명하는 것은 아니므로, 도구를 줄인 뒤 모음과 가사에서 재현되는지 확인합니다.",
    motorDiagnostic: "눌림·거친 음질·노력감이 과제에 따라 증가하는 패턴으로 관찰합니다. 과폐쇄나 외부근 활성은 청취만으로 확정하지 않습니다.",
    constraintRedesign: "[부하 낮추기] 음량·음역·템포 중 하나를 낮추고, 떨림·둥근 모음·짧은 시작음 등 수행 조건을 비교합니다. 불편감이 지속되면 과제를 중단합니다.",
    emergenceFeedback: "'힘을 빼라'를 반복하기보다 진동의 연속성, 소리의 크기, 노력감처럼 확인 가능한 기준을 사용합니다. 눌림이 늘면 즉시 다른 조건으로 전환합니다.",
    transferDesign: "Lip/Tongue Trill 또는 가벼운 모음 ➡️ Mum/Goo ➡️ 짧은 가사 순으로 옮기고, 각 단계에서 편안함과 연결의 재현성을 기록합니다.",
    startKey: "개인별로 불편이 적은 음에서 시작 (고정 음역이나 고음 하행 처방 아님)",
    keyPoints: "선명한 p를 무리하게 유지할 때 노력감이 커지는지 관찰합니다. Hooty를 사용한다면 음색과 편안함의 변화를 짧게 비교하고, 도움을 줄인 뒤에도 변화가 유지되는지 확인합니다.",
    lessonFlow: [
      {
        time: "0–3 분",
        stage: "Discover",
        tools: "Lip Trill + Tongue Trill",
        scale: "1.5 Octave (Tricking)",
        dynamicBreath: "p, 최저 공기 사용량",
        queuing: "립 트릴로 시작, 압력이 빠져나가게",
        checkpoint: "트릴 수행 전후의 압력감·노력감·연결 변화를 비교 기준으로 기록합니다."
      },
      {
        time: "3–8 분",
        stage: "Discover",
        tools: "Hooty",
        scale: "1.5 Octave (Tricking)",
        dynamicBreath: "p, 약간 숨섞임 허용",
        queuing: "작은 음량에서 공기감과 음질을 비교",
        checkpoint: "숨섞임·노력감·음질 변화를 함께 관찰하고, 선명도를 위해 힘이 늘면 과제를 낮춥니다."
      },
      {
        time: "8–13 분",
        stage: "Add/Connect",
        tools: "Hooty + M[ʌ]m",
        scale: "Octave Repeater (Reinforcing)",
        dynamicBreath: "mp~mf, 약→중 공기 사용량",
        queuing: "이완 후 가벼운 M으로 연결 확인",
        checkpoint: "압착감이 줄었을 때 다른 발음으로 변화가 유지되는지 비교"
      },
      {
        time: "13–20 분",
        stage: "Stabilize/Speech Level",
        tools: "M[ʌ]m, N[ei]",
        scale: "Octave Repeater / 노래 적용",
        dynamicBreath: "mf",
        queuing: "편안한 연결을 유지하며 노래 적용",
        checkpoint: "불편감이나 노력이 다시 커지면 가창을 멈추고 Lip Trill 등 부담이 다른 조건으로 비교합니다."
      }
    ]
  },
  {
    id: "type6",
    name: "Type 6: Breathy/Weak",
    koreanName: "숨소리가 새고 힘없는 유형 (Breathy/Weak)",
    slsTarget: "기류감·소리의 중심·노력감이 달라지는 조건을 비교",
    description: "전 음역 또는 특정 과제에서 기류감이 크고 소리의 중심이 약하게 들리는 경향입니다. SLS의 No Chest 관련 개념을 참고한 코칭용 관찰 유형이며, 성대 접촉이나 근육 상태를 청취만으로 확정하지 않습니다. 선명도를 높이는 과제와 편안함이 유지되는지를 함께 비교합니다.",
    characteristics: [
      "기류감이 크고 소리의 중심이 약하게 들림",
      "선명하게 하려 할 때 음량이나 목의 노력이 함께 커지는지 확인할 필요가 있음",
      "한 음과 짧은 음형·모음에서 반응이 달라질 수 있음"
    ],
    primaryTools: ["Edgy mmm·Goo·Guh (선명도 비교)", "B/D/K 등 자음+모음 비교", "Mum·Gee", "필요 시 Lip Trill"],
    avoidTools: ["현재 소리를 더 흐리게 하거나 노력을 키우는 조건", "선명도를 만들기 위해 음량을 계속 키우는 과제"],
    strategy: "편한 음역의 짧은 시작음에서 Edgy·Goo·Guh·Mum을 비교하고, 선명도가 좋아져도 눌림이나 불편감이 늘지 않는지 확인합니다. 자음만으로 성대 상태를 판정하지 않고, 자음 뒤 모음과 짧은 가사로 전이되는지를 봅니다.",
    motorDiagnostic: "기류감이 큰 수행이 반복되는 경향으로 관찰합니다. 성문 상태나 근육 협응은 청취만으로 확정하지 않습니다.",
    constraintRedesign: "[조건 비교] Edgy·유성/무성 자음·모음의 조합을 짧게 비교하고, 자음 뒤 모음에서도 선명도와 편안함이 유지되는지 확인합니다.",
    emergenceFeedback: "'성대를 세게 붙여라' 대신 소리의 중심, 기류감, 음량, 노력감처럼 들을 수 있는 기준을 사용합니다. 선명한 소리가 눌림으로 바뀌면 즉시 강도를 낮춥니다.",
    transferDesign: "짧은 시작음 ➡️ 자음 뒤 모음 ➡️ 지속음 ➡️ 짧은 가사 순으로 옮기며, 도구 제거 후에도 결과가 유지되는지 확인합니다.",
    startKey: "개인별로 기류감과 소리의 차이가 잘 들리는 편안한 음에서 시작",
    keyPoints: "Edgy나 자음을 우선 비교할 수 있지만, 자음만 커지고 모음이 눌리거나 불편감이 늘면 Goo·Mum·Lip Trill 등 다른 조건으로 전환합니다.",
    lessonFlow: [
      {
        time: "0–3 분",
        stage: "Discover",
        tools: "5-Tone [a] → Edgy mmm",
        scale: "Staccato (Cord Adduction)",
        dynamicBreath: "mp~mf",
        queuing: "에지를 느끼며 또렷하게 시작해 보세요",
        checkpoint: "기류감과 소리의 중심이 어떻게 달라지는지 듣고, 선명도를 위해 힘을 더 쓰는지 함께 기록합니다."
      },
      {
        time: "3–9 분",
        stage: "Add/Connect",
        tools: "B[ʌ]b, D[ʌ]d, K[ʌ]k + Cry",
        scale: "5-Tone [ae]",
        dynamicBreath: "mp~mf (접촉 후 큰 소리로 빼지 않기)",
        queuing: "B로 또렷하게 시작하되 목을 누르지 않기",
        checkpoint: "기류감·소리의 중심·노력감 변화를 듣고, 선명도를 위해 힘을 더 쓰거나 눌림이 늘면 강도를 낮춥니다."
      },
      {
        time: "9–14 분",
        stage: "Stabilize",
        tools: "G[ʌ]g + Bratty N[ae]",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "G로 시작, 가벼운 접촉 유지",
        checkpoint: "소리의 중심과 연결이 유지되는지 확인합니다. 눌림·불편감이 커지면 Cry·Mum·Lip Trill 등 다른 조건으로 비교합니다."
      },
      {
        time: "14–17 분",
        stage: "Stabilize",
        tools: "Squeaky Door + M[ʌ]m",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "부드러운 연결에서 시작",
        checkpoint: "부드러운 음량에서도 소리의 중심·연결·노력감이 유지되는지 확인합니다. 청취만으로 성대 접촉의 정도를 판정하지 않습니다."
      },
      {
        time: "17–20 분",
        stage: "Speech Level",
        tools: "노래 적용",
        scale: "곡 적용",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "가벼운 접촉 유지하며 불러보세요",
        checkpoint: "노래로 옮긴 뒤 기류감·소리의 중심·노력감이 어떻게 달라지는지 기록하고, 다음 수업에서 재현되는지 확인합니다."
      }
    ]
  }
];

export const TRANSITION_GUIDE = [
  {
    path: "Type 4 → Type 2",
    reason: "가벼운 조건으로 바꾼 뒤 소리가 흐려지거나 연결이 약해지는 반응이 관찰될 때 사용하는 비교 경로입니다. 후두나 성대가 실제로 어떻게 변했는지는 별도 평가 없이는 확정하지 않습니다.",
    solution: "Mum·Goo·Guh·Gee 또는 짧은 자음+모음 과제를 낮은 음량에서 하나씩 비교합니다. 선명도와 편안함이 함께 좋아지는 조건을 유지합니다.",
    attention: "자음만 커지고 모음이 눌리거나, 선명도를 위해 힘을 더 써야 하면 그 과제를 중단하고 다른 조건을 비교합니다."
  },
  {
    path: "Type 6 → Type 5",
    reason: "기류감이 큰 소리를 선명하게 만들려는 과정에서 눌림·거친 음질·노력감이 증가하는 반응을 기록한 경우입니다. 이것은 유형의 생리적 전환을 뜻하지 않습니다.",
    solution: "Edgy·강한 자음 과제를 잠시 줄이고 Lip Trill·Hooty·Mum·Goo처럼 부담이 다른 조건을 짧게 비교합니다.",
    attention: "통증·쉰 목소리·피로가 생기거나 지속되면 연습을 중단하고 필요한 경우 이비인후과 또는 음성 전문가의 평가를 받습니다."
  },
  {
    path: "Type 2 → Type 3",
    reason: "짧은 음에서는 연결되지만 음역·모음·진행 방향을 바꾸면 반응이 달라지는 경우입니다.",
    solution: "같은 음높이에서 Goo·Gee·Guh·Nay를 교대하고, 편한 조건을 짧은 음형과 가사로 옮깁니다.",
    attention: "Flip이나 노력감이 반복되면 음역·음량을 낮추고, 한 번에 하나의 조건만 다시 비교합니다."
  },
  {
    path: "Type 3 → Type 1",
    reason: "여러 음역·모음·음량에서 연결과 노력감이 비교적 안정적으로 관찰되는 경우입니다.",
    solution: "보조 과제의 도움을 조금씩 줄이고 짧은 가사와 곡의 구절로 전이합니다.",
    attention: "한 번의 성공을 전체 음역의 안정으로 일반화하지 말고, 다른 조건과 다음 수업에서 재현되는지 확인합니다."
  }
];

export const TOOLBOX_TIERS = {
  tier1: [
    {
      name: "Lip Trill (립 트릴)",
      classification: "상대적으로 단순한 비교 조건",
      principle: "반폐쇄 조건에서 진동·기류·노력감이 어떻게 달라지는지 관찰하고, 도구를 뺀 뒤에도 변화가 남는지 확인합니다.",
      reason: "여러 학생에게 같은 결과를 보장하는 도구가 아닙니다. 편안함이 좋아지는지, 세게 불어야 하는지, 제거 후 발성이 어떻게 달라지는지를 비교하기 쉽습니다."
    },
    {
      name: "Tongue Trill (텅 트릴)",
      classification: "다른 SOVT 비교 조건",
      principle: "립 트릴과 다른 수행 조건을 제공하므로, 혀·턱의 노력감과 소리의 연결이 어떻게 달라지는지 비교합니다.",
      reason: "혀 떨림 자체가 어려운 학생에게는 발성 상태의 판정 기준으로 사용하지 않고, 입술 떨기나 모음 과제로 바꿉니다."
    },
    {
      name: "Cry (우는 소리)",
      classification: "음색·노력감 비교 조건",
      principle: "울음 섞인 음색을 짧게 사용해 소리의 선명도와 노력감이 어떻게 달라지는지 관찰합니다.",
      reason: "모든 학생에게 같은 후두 위치나 접촉을 만드는 것은 아닙니다. 음색을 과장할수록 불편감이 커지면 즉시 줄입니다."
    },
    {
      name: "5-Tone [a] (아- 스케일)",
      classification: "관찰용 기준 과제",
      principle: "외부 도구를 줄인 [a] 모음에서 음질·음량·연결·노력감의 변화를 기록합니다.",
      reason: "진단을 확정하는 검사가 아니라, 다른 모음·음량·진행 방향과 비교할 기준 과제입니다."
    }
  ],
  tier2: [
    {
      name: "M[ʌ]m (멈- 가창)",
      warning: "편한 말소리와 비슷한 조건으로 시작해 볼 수 있지만, 어떤 학생에게나 같은 반응을 보장하지 않습니다. 시작·유지 중 노력감과 모음 연결을 관찰합니다.",
      benefit: "Goo·Guh·Gee 또는 다른 짧은 음절과 교대해, 편안함과 연결이 어느 조건에서 유지되는지 확인할 수 있습니다."
    },
    {
      name: "N[ei] (네이- 가창)",
      warning: "밝은 모음이나 N이 학생의 노력을 키울 수 있으므로, 음량을 낮추고 같은 음에서 다른 모음과 비교합니다.",
      benefit: "선명도·연결·노력감의 변화를 관찰하는 조건으로 사용할 수 있으며, 특정 성대 결합을 보장하는 도구로 설명하지 않습니다."
    },
    {
      name: "Staccato 실행 (스타카토)",
      warning: "짧게 시작하고 쉬는 구간을 둔 뒤, 음량과 노력감이 커지지 않는지 확인합니다.",
      benefit: "도구 자체보다 과제의 길이와 휴지기를 조절하는 방법입니다. 짧은 시작과 지속음의 반응을 비교할 수 있습니다."
    }
  ],
  clashSection: [
    { tool: "Hooty / Dumb / Woofy", type45: "조건에 따라 편안함·음질 변화를 비교할 수 있음", type26: "소리가 더 흐려지거나 기류감이 커지는지 확인" },
    { tool: "Bratty / Pharyngeal / 징징거림", type45: "노력감·조임이 커지면 줄이거나 중단", type26: "선명도가 좋아지는지, 힘을 더 쓰는지 비교" },
    { tool: "Ng [ŋ] 이응 받침 가창", type45: "혀·목의 노력이 커지는지 확인", type26: "비음과 모음 연결이 편해지는지 비교" },
    { tool: "경음 자음 (B/D/K계열)", type45: "자음만 세지고 모음이 눌리는지 확인", type26: "시작과 모음 연결이 또렷해지는지 비교" },
    { tool: "넓은 모음 ([a], [ae])", type45: "상행에서 음량·노력감이 커지는지 확인", type26: "소리의 중심과 편안함이 함께 유지되는지 비교" },
    { tool: "좁은 모음 ([i], [u])", type45: "고음의 음질·노력감 변화를 비교", type26: "저음에서 중심이 약해지는지 비교" }
  ]
};

export const DIAGNOSTIC_FLOWCHART: DiagnosticQuestion[] = [
  {
    id: "q1",
    question: "편안한 5도 스케일('아-[a]')로 노래를 부르며 성대의 다리(Passaggio/Bridge) 구간을 통과할 때, 목과 성대의 상태는 어떠한가요?",
    options: [
      { text: "연결과 노력감이 비교적 안정적으로 유지됩니다.", nextId: "q2" },
      { text: "특정 구간에서 끊기거나 가벼운 소리로 바뀝니다.", nextId: "q3" },
      { text: "뒤집히지는 않지만 음량·노력감·불편감이 크게 증가합니다.", nextId: "q4" },
      { text: "처음부터 기류감이 크고 소리의 중심이 약하게 들립니다.", nextId: null, resultTypeId: "type6" }
    ]
  },
  {
    id: "q2",
    question: "소리가 부드럽게 연결되는 상태에서 특별한 추가적인 스킬업이나 디테일의 윤기가 필요한 상황인가요?",
    options: [
      { text: "다른 음량·모음·가사에서도 같은 편안함을 확장하고 싶습니다.", nextId: null, resultTypeId: "type1" },
      { text: "특정 음역·모음·상황에서만 연결이 흔들립니다.", nextId: null, resultTypeId: "type3" }
    ]
  },
  {
    id: "q3",
    question: "소리가 뒤집히며 깨지는 순간의 구체적인 특징은 어떤 편에 가깝나요?",
    options: [
      { text: "전체적으로 가볍게 이어지지만 상행 특정 구간에서 자주 끊기거나 뒤집힙니다.", nextId: null, resultTypeId: "type2" },
      { text: "저음은 비교적 무게가 있으나 특정 브리지·모음 조건에서 연결이 달라집니다.", nextId: null, resultTypeId: "type3" }
    ]
  },
  {
    id: "q4",
    question: "목을 쥐어짜며 힘들게 가창할 때, 소리에 기류가 어느 정도 통과하나요? 아니면 숨통조차 막히나요?",
    options: [
      { text: "상행에서 음량·노력감·무게가 함께 커지고, 특정 구간에서 연결이 끊기거나 뒤집힙니다.", nextId: null, resultTypeId: "type4" },
      { text: "소리가 눌리거나 거칠게 들리고, 음량과 음역을 바꾸면 노력감이 빠르게 커지는 경향입니다.", nextId: null, resultTypeId: "type5" }
    ]
  }
];
