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
  { level: "Hardest (가장 강한 성대 접촉)", examples: "G, B, D" },
  { level: "Hard/Plosive (강한 파열음)", examples: "K, T, P, tʃ(cheek), dʒ(judge)" },
  { level: "Phonated (유성음/중간 차단)", examples: "N, M, ŋ(sing), ɲ(onion), ð(thee), Z, V, ʒ(rouge)" },
  { level: "Glide (글라이드/적은 차단)", examples: "W, Y" },
  { level: "Aspirate (기음/가장 무차단/성대 벌어짐)", examples: "θ(think), ʃ(she), S, F, hw(why), H" },
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
    slsTarget: "현재 균형 유지 및 가창 표현 세밀화",
    description: "브릿지(Bridge/Passaggio)를 부드럽고 균일한 연결로 통과하며, 흉성(Chest Voice)과 두성(Head Voice)의 균형이 이미 잘 잡혀 있는 이상적인 유형입니다. SLS 공식 분류 명칭인 'Tends To: Mix'에 해당하며, 구조적 문제는 없으나 보컬적 스킬업이 필요한 상태입니다.",
    characteristics: [
      "저음부터 고음까지 급격한 음색 변화 없이 부드럽게 연결됨",
      "후두가 안정되어 있고 성대 접촉 빈도가 우수함",
      "공용 안전 워밍업만으로도 곧바로 고난도 가창 기법 적용 가능"
    ],
    primaryTools: ["W/Y 글라이드", "이중모음([ei], [oʊ])", "N[ae] / N[ei]"],
    avoidTools: ["불필요하고 급격한 툴 변경", "Edgy mmm (불필요하나 순간적 사용 가능, 과사용 주의)"],
    strategy: "과도한 연습 자극을 금지하며, 현재의 좋은 성대 협응을 유지하면서 디테일을 연마합니다. '그 가볍고 부드럽게 연결 느낌을 유지하면서 가창하자'라는 접근 방식을 가집니다.",
    motorDiagnostic: "목표 협응(Mix)이 깊은 끌개를 형성하고 있어, 다양한 변수(음역, 음량, 모음)에서도 안정성을 유지(준안정성)하는 최적의 운동 제어 상태.",
    constraintRedesign: "[자유도 개방/Freeing] 모음, 자음, 음역, 음량, 템포, 가사 등의 변수를 점진적으로 복잡하게 개방하여 실제 가창과 거의 동일한 극한 조건 설계.",
    emergenceFeedback: "미시적 지시(MMC) 배제, 외적 초점(감정 전달, 프레이징, 리듬감 달성)에 기반한 피드백 제공 (대역폭 피드백 적용으로 사소한 흔들림은 허용).",
    transferDesign: "Vocalise(모음/자음) ➡️ 특정 구간 가사 ➡️ 전체 곡 반복 ➡️ 다양한 공연/스트레스 환경 시뮬레이션으로 전이(Transfer) 및 파지(Retention) 극대화.",
    startKey: "여성: G3 – A3 / 남성: C3 – D3 (현재 안정적인 상태 그대로 가볍게 가창 시작)",
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
        checkpoint: "보조적인 연습 발음(자음)의 지원이 사라진 상태에서도 완벽한 음정 연결과 성대 접촉 강도가 견고히 유지되는지 확인합니다."
      },
      {
        time: "16–20 분",
        stage: "Speech Level",
        tools: "N[ei] + [oʊ]",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "자연스럽게 말하듯 불러보세요",
        checkpoint: "실제 원곡 가사로 부를 때 뒤집힘이나 목 조임 등의 불안정한 습관이 재발하면 즉시 립트릴 브릿지 연습으로 우회합니다."
      }
    ]
  },
  {
    id: "type2",
    name: "Type 2: Light Unstable",
    koreanName: "가볍고 불안정한 유형 (Light Unstable)",
    slsTarget: "안정적인 성대 접촉 유도 및 브릿지 뒤집힘(Flip) 방지",
    description: "성대의 접촉력이 부족하고 흉성이 깊게 발달하지 않아, 저음에서 고음으로 올라갈 때 소리가 자주 가볍게 뒤집히는(Flip) 유형입니다. 오리지널 SLS의 'No Chest + Flip (Type B)'가 융합된 형태입니다. 성대를 무리하게 누르지 않고 넓은 모음과 탄력 있는 접촉 훈련을 병행하여 자연스럽게 성대 폐쇄를 유도해야 합니다.",
    characteristics: [
      "고음으로 갈수록 성대가 벌어지며 가벼운 소리로 전환되거나, 급격한 삑사리(Flip)가 상시 발생",
      "숨이 새거나 힘이 없는 가창 스타일 (흉성의 부재)",
      "소리가 약하게라도 나오기는 하지만, 성역의 브릿지 구간에서 어김없이 와르르 깨짐 (구분 문장: Type 6은 '소리가 안 나와요', Type 2는 '소리가 나오다가 깨져요')"
    ],
    primaryTools: ["B[ae]b, D[ae]d, K[ae]k", "Staccato 훈련", "Edgy mmm", "Cry (울음 섞인 톤)"],
    avoidTools: ["Hooty 계열 음성 훈련 (성대 접촉을 더 약화시킴)", "좁은 모음 ([i], [u])"],
    strategy: "좁고 부드러운 모음보다는 '넓고 밝은 모음'을 앞세워 적정한 성대 밀착감을 먼저 회복합니다. 음정이 가창 도중 가성으로 뒤집히면(Flip), 'Edgy mmm'을 적용하여 성대의 얇고 선명한 울림을 즉시 리셋해 줍니다.",
    motorDiagnostic: "성대 접촉 협응에 대한 끌개가 너무 얕거나 없음. 약간의 부하(음정 상승)만 걸려도 가성(반대위상)으로 상전이가 즉시 일어나며 도피하는 상태.",
    constraintRedesign: "[과제 제약] 파열음(B, D, K)과 같은 물리적 장애물을 추가해 성대 하부에 순간적인 기압을 형성, 성대가 닫히지 않으면 소리를 낼 수 없는 강제적 과제 제약을 부여.",
    emergenceFeedback: "'성대를 붙여라' 등의 내부 감각(MMC) 지시 철저히 배제(과긴장 유발). 'B[ʌ]b 발음에서 공기가 새지 않고 튕겨 나오는가?' 같은 명확한 외적 전환 피드백 적용. 단, 파열음 강도가 과하면 Type 5(과압착) 보상이 창발될 수 있으므로 최적 부하 모니터링.",
    transferDesign: "Staccato 파열음 ➡️ Sustain 파열음 ➡️ 넓은 모음 기반 연결 ➡️ 짧은 가사 적용. (임계 요동 주의: Type 5 상전이 경고)",
    startKey: "여성: G3 – A3 / 남성: C3 (안정적인 흉성을 확실히 확보하기 위해 반드시 낮은 음역에서 훈련을 점진 시작)",
    keyPoints: "넓은 모음과 탄력적인 자음 조합으로 먼저 안전하게 성대 접촉을 이끌어내고, 소리가 깨지거나 흐려지면 즉시 Edgy mmm 스태카토로 재교정합니다.",
    lessonFlow: [
      {
        time: "0–3 분",
        stage: "Discover",
        tools: "5-Tone [a] → Edgy mmm",
        scale: "Staccato (Cord Adduction)",
        dynamicBreath: "mp~mf, 과도한 공기 사용량 없이",
        queuing: "에지를 느끼며 또렷하게 붙여보세요",
        checkpoint: "가창 시 뒤집힘(Flip)이 발생하는 정확한 음역대의 위치와 빈도를 정밀하게 청취하여 진단 정보로 삼습니다."
      },
      {
        time: "3–8 분",
        stage: "Add/Connect",
        tools: "B[ʌ]b, D[ʌ]d, K[ʌ]k",
        scale: "5-Tone [ae]",
        dynamicBreath: "mp~mf, 과도한 공기 사용량 없이",
        queuing: "B로 또렷하게 흉성 느낌 유도",
        checkpoint: "매 음표마다 성대가 헐겁지 않고, 또렷하게 착 달라붙는 명료한 감각(성대 접촉)이 살아 있는지 확인합니다."
      },
      {
        time: "8–13 분",
        stage: "Stabilize",
        tools: "Cry + Bratty N[ae]",
        scale: "1.5 Octave",
        dynamicBreath: "mf, 중 공기 사용량 (균형시점까지)",
        queuing: "우는 소리로 연결 유지",
        checkpoint: "저음부에서 단단한 울림(Chest weight)이 채워지는지 귀로 확인하며, 후두 상승 가능성이 있으므로 Bratty는 일시적으로만 사용합니다."
      },
      {
        time: "13–17 분",
        stage: "Stabilize",
        tools: "G[ʌ]g + N[ei]",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "G로 시작, ʌ로 연결 유지",
        checkpoint: "목을 지나치게 좁히거나 조이지 않으면서 적정한 성대 밀착(Chest Weight)이 확보되는지 살피고, 성대가 무겁게 굳어지면 N[ae] 발음을 더 부드럽게 조정합니다."
      },
      {
        time: "17–20 분",
        stage: "Speech Level",
        tools: "M[ʌ]m + Squeaky Door",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "부드러운 연결 유지하며 시작",
        checkpoint: "실전 곡을 부르는 도중 가성으로 홀랑 뒤집히거나 풀려버리는 바람 소리(Breathy)가 나면, Edgy mmm 스태카토로 해당 프레이즈를 즉시 풀고 다시 연습합니다."
      }
    ]
  },
  {
    id: "type3",
    name: "Type 3: Light Transitional",
    koreanName: "과도기적 유형 (Light Transitional - 이동 표적 Moving Target)",
    slsTarget: "흉성 발달을 점진적으로 강화하며 브릿지 통과의 안정화 도모",
    description: "저음역에서 기초적인 가창 무게감(Chest Weight)은 잘 확보되어 있으나, 브릿지(환절기 음역대)로 진입하고 이를 통과하는 순간 연결이 끊기거나 심하게 요동치는 유형입니다. SLS 기본 카테고리에는 없지만 'No Chest Soprano'와 'Flip Type B'의 경계선에 해당하는 넓은 학생층의 구조적 과도기 상태입니다.",
    characteristics: [
      "저음은 풍부하지만 음정이 상승하면서 중음부에서 극적으로 연결이 끊어짐",
      "공용 워밍업에서는 어느 정도 부드럽지만, 조금만 자극적인 가창 기법이 들어가면 연결의 통제력을 상실함",
      "중고음에서 목이 과하게 수축되거나 뒤집히는 이중적인 불안전성 보유"
    ],
    primaryTools: ["Nay (가파르고 둔탁하지 않은 톤)", "W/w 자음 가창", "G[ʌ]g + Cry", "N[ei] / N[ae]"],
    avoidTools: ["고정된 금지 툴은 없으나 현재 나타나는 세부 Tends To에 따라 조건부 선택 (브리지에서 무거워지면 좁은 모음/Release 계열, 접촉이 빠지면 Friendly Compression/경음 자음 계열, 후두가 오르면 Hooty 계열로 즉시 조정)"],
    strategy: "성대의 접촉력이 갑자기 사라지거나 풀리면, 즉시 날카로운 접촉을 돕는 'Nay' 발음으로 단단하게 연결감을 리셋해 주는 전략을 사용합니다. 흉성을 유지하는 내부 근육(TA)을 안전하고 점진적으로만 증강시키는 것이 본 유형의 핵심입니다.",
    motorDiagnostic: "음역 전환 부근에서 기존 협응(흉성)의 준안정성이 깨지면서, 새로운 협응(상전이)으로 안정적으로 편입되지 못하고 요동치는 전이적 상태.",
    constraintRedesign: "[과제 제약] Nay, W[ʌ]w, G[ʌ]g 등 좁은 모음과 혀/입술의 보조적 저항을 활용해, 상전이가 일어날 때의 과부하를 줄여주고 임계 요동 구간의 진폭을 억제.",
    emergenceFeedback: "연결이 흔들리는 임계 요동 현상을 무조건 실패로 보지 않고 '상전이의 정상적 신호(좋은 변동성)'로 해석. 'Nay'나 울음소리(Cry)를 사용한 외적 초점으로 자연스러운 믹스 협응의 창발만 유도.",
    transferDesign: "Nay/W 반복 ➡️ Octave Repeater로 이동폭 확대 ➡️ 구강 개방을 점진적으로 넓힌 모음으로 전이 ➡️ 가사.",
    startKey: "여성: G3 – A3 / 남성: C3 (기초 진단 가창 단계에서는, 초기 후두 긴장을 줄이고 편안함을 최우선으로 유도)",
    keyPoints: "풍부한 흉성을 가지고 있으나 연결이 취약한 상태이므로, 'Nay' 발음을 통해 브릿지 통과 경험을 안전하게 누적시키는 것이 보컬 성장의 핵심입니다.",
    lessonFlow: [
      {
        time: "0–2 분",
        stage: "진단",
        tools: "5-Tone [a] → N[ae]",
        scale: "1.5 Octave",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "어디서 연결이 끊기나요?",
        checkpoint: "저음부의 무게중심을 과도하게 끌고 올라가는 경향이 있는지, 연결이 갑작스레 끊어지는 음역대가 어디쯤인지 확인합니다."
      },
      {
        time: "2–8 분",
        stage: "Add/Connect",
        tools: "Nay + W[ʌ]w",
        scale: "Octave Repeater",
        dynamicBreath: "mf→p, 중→약 공기 사용량 (통과 시 약하게)",
        queuing: "Nay로 흉성 확인하고 W로 부드럽게 연결",
        checkpoint: "소리가 뒤집혀 바람이 확 새는 것을 감지하는 지점을 확인하고, 소리가 완전히 뒤집히면 즉시 Nay 가창 모드로 복귀하여 차분히 연결감을 리셋합니다."
      },
      {
        time: "8–13 분",
        stage: "Stabilize",
        tools: "G[ʌ]g + Cry",
        scale: "1.5 Octave",
        dynamicBreath: "mf→mp, 중→약 공기 사용량",
        queuing: "우는 소리로 연결 안정화",
        checkpoint: "브릿지가 부드럽고 매끄러운지 체크합니다. 만약 목을 단단히 옥죄는 'Pressed(압착)' 보상 현상이 나타나면 즉시 중단하고 립트릴로 안정을 되찾아 줍니다."
      },
      {
        time: "13–17 분",
        stage: "Stabilize",
        tools: "N[ei] + [oʊ]",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "모음 좁히기로 브릿지 통과",
        checkpoint: "가창 훈련 중에 성대 접촉이 탄탄히 연결되는지 확인하고, 소리가 많이 무거워지거나 후두가 흔들리면 W 발음으로 돌아가 수평을 다시 맞춥니다."
      },
      {
        time: "17–20 분",
        stage: "Speech Level",
        tools: "M[ʌ]m + Y[ʌ]y",
        scale: "Octave Down 3x",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "높은 음에서 낮은 음으로 연결",
        checkpoint: "노래 가창에서 저음과 고음의 격차가 지나치게 크고 계속 흔들리거나 어색하다면, 'Nay + W' 연습 조합을 징검다리 삼아 한 소절씩 다듬고 갑니다."
      }
    ]
  },
  {
    id: "type4",
    name: "Type 4: Heavy/Pulled Chest",
    koreanName: "흉성 쥐어짜기 유형 (Heavy/Pulled Chest)",
    slsTarget: "후두 위치의 하강 및 목 주변의 과도한 외부 근육 긴장 이완",
    description: "무겁고 둔탁한 저음 발성(Chest Voice) 스타일을 고음부 브릿지 영역까지 밀어 올려 가창하느라, 후두가 성대를 꽉 쥔 채 치솟고 목이 강하게 압박되어 결국 더 이상 높은 소리가 나지 않거나 극단적으로 뒤집히게(Flip) 되는 전형적인 풀체스트 유형입니다. SLS 공식 분류 명칭 명칭의 'Tends To: Pull Chest' 및 'Flip Type A (흉성 끌어올리기 시도 끝에 크게 뒤집히는 유형)'에 해당합니다. 과격한 흉성 집착을 완전히 중단(Release)하고 '속임수(Tricking) 전략'을 정교하게 발휘해 고음의 가볍고 열린 감각을 먼저 찾아내는 것이 최고의 비책입니다.",
    characteristics: [
      "음정이 올라갈 무렵 후두가 손에 만져질 정도로 높이 솟구치며 목이 강하게 좁아짐",
      "목에 핏대가 심하게 서고 소리가 경직되며, 브릿지 구간에서 강제적인 한계에 다다름",
      "고음은 크게 내지르면 약간 나지만, 부드러운 중음 연결 및 여리게 가창이 완전히 봉쇄됨"
    ],
    primaryTools: ["Lip Trill / Tongue Trill (유연성 회복)", "Hooty W[i]/G[i], G[u], N[ei]", "M[ʌ]m (Reinforcing 단계 제한적 사용)"],
    avoidTools: ["Bratty (초기 금지, Release 후 제한적 사용)", "Ng [ŋ] (과압축 악화될 수 있으므로 관찰하며 주의)", "경음 자음 (B/D/K 등)", "넓은 모음 ([a], [ae]) 및 N[ae] (후두 상승 위험)"],
    strategy: "저음부터 밀고 올라가는 순방향 훈련법은 실패 확률이 다분히 높습니다. 과도한 공기 사용량과 흉성 무게를 줄이고 (Airflow 원활화), 좁은 모음과 top-down scale로 브리지 release를 경험하게 합니다. 목표는 성대를 더 붙이는 것이 아니라 moderate adduction + low stable larynx + connected release입니다.",
    motorDiagnostic: "음정 상승이라는 조건(부하)이 가해지면 흉성 우세 협응(깊은 끌개) 패턴으로 강력하게 수렴해버리는 상태. 억지로 고음을 낼수록 보상 끌개가 더 깊어짐.",
    constraintRedesign: "[조건 재설계/자유도 제한] 현재 스트랩 근육이 과부하를 견디고 있으므로, 고음역 시도 중단. 음역/음량 축소, 템포 늦춤. SOVTE(Lip Trill, Hooty)로 성도 임피던스를 바꿔 Pulled Chest로 빠질 수 없는 무해한 과제 제약 부여.",
    emergenceFeedback: "Lip Trill 시 '음정을 맞춰라(내적 초점)' 지시 금지. '입술이 떨리는 느낌만 가져라(외적/과제 초점)'로 전환. 후두 급상승이 동반되는 '나쁜 변동성'만 대역폭 피드백으로 즉각 통제.",
    transferDesign: "SOVTE(Lip Trill/Hooty) ➡️ 반폐쇄 모음(M[ʌ]m) ➡️ 개방 모음(N[ei]) ➡️ 짧은 가사 ➡️ 부하 재상승.",
    startKey: "여성: C#4 – C#5 / 남성: F#3 – G4 (밀어 올릴 수 없는 높은 음성 구역에서부터 가볍게 하행하여 두성을 유도)",
    keyPoints: "후두를 확실하게 낮추어 목 조임을 해방하는 것을 보컬 레슨 1순위 목표로 삼고, 외부 전신 근육이 계속 수축할 경우 즉각 가벼운 훈련으로 이완시킵니다.",
    lessonFlow: [
      {
        time: "0–5 분",
        stage: "Discover",
        tools: "Lip Trill + Hooty W[i]",
        scale: "1.5 Octave (Tricking)",
        dynamicBreath: "p~mp, 저 공기 사용량 (절대 밀지 않기)",
        queuing: "립으로 부드럽게 넘어가 보세요",
        checkpoint: "목 안쪽 깊고 거친 외부 핏대 수축과 턱 밑 힘 들어감이 해제되어 편안한 호흡 균형이 자리를 잡는지 확인합니다."
      },
      {
        time: "5–11 분",
        stage: "Add/Connect",
        tools: "M[ʌ]m + d[ʌ]m",
        scale: "Octave Repeater (Reinforcing)",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "아래로 낮추어가며 연결 유지",
        checkpoint: "후두를 낮추는 평안한 느낌이 잘 찾아지는지 청취하고, 계속 목을 강하게 지니려는 관성이 세지면 오직 립트릴 하나로만 안전 가도로 주행합니다."
      },
      {
        time: "11–15 분",
        stage: "Stabilize",
        tools: "N[ae] → N[ei]",
        scale: "1.5 Octave (모음 좁히기)",
        dynamicBreath: "p→mf, 약→중 공기 사용량",
        queuing: "ae에서 ei로 모음 좁아지면서 넘어가기",
        checkpoint: "하행 도중에 목구멍 속의 넓은 뼈대(Larynx) 안정적 깊이로 연착륙하며 잘 머물고 있는지, 중도에 무거움이 치솟으면 Hooty 단계로 신속히 복귀합니다."
      },
      {
        time: "15–18 분",
        stage: "Stabilize",
        tools: "G[ʌ]g",
        scale: "Octave Down 3x",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "높은 음에서 아래로 내려가며 연결",
        checkpoint: "훈련 기구들의 의존성을 버린 상태에서도 풀체스트(Pulled Chest)의 나쁜 끌어당김 통증이 과연 깔끔하게 수거/완화되었는지를 확인합니다."
      },
      {
        time: "18–20 분",
        stage: "Speech Level",
        tools: "노래 적용",
        scale: "곡 적용",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "방금 한 연결 그대로 노래 불러보세요",
        checkpoint: "원 가사로 가창할 때 한순간 쥐어짜는 무거운 습관이 눈에 띄면, 망설임 없이 'Lip Trill + Hooty'로 리미터를 걸어 즉각 초기화합니다."
      }
    ]
  },
  {
    id: "type5",
    name: "Type 5: Pressed/Over-adducted",
    koreanName: "성대 과압착 유형 (Pressed/Over-adducted)",
    slsTarget: "성대의 지나친 과압착 완화 및 성문 폐쇄 긴장 이완",
    description: "성대를 지나치게 강력하고 뻣뻣하게 밀착(Over-compression)하는 습관 때문에, 폐에서 올라오는 부드러운 공기 흐름이 성대 사이를 원활히 빠져나가지 못하고 턱 막혀 버리는 유형입니다. 이는 SLS 원본의 독립 Tends To라기보다 Pull Chest 또는 Imperfect Mix 내부에서 나타나는 pressed sub-pattern에 해당합니다. '더 단단히 깊이 붙여서 가창하자'라는 지시는 절대 금지사항이며, 성대가 편안하게 이완된 감각을 만드는 데 호흡의 균형과 립/텅트릴 마사지를 집중 적용해야 합니다.",
    characteristics: [
      "소리가 시종일관 짓눌린 칼칼한 잡음이나 쇠소리에 가깝고, 호흡 수명이 극도로 짧음",
      "가창 도중 음정 안정성을 꾀하는 게 거의 불가능하며 성대 근육 피로도가 기하급수적임",
      "후두 주변의 근육들이 마치 돌처럼 단단히 고정되어 수축함"
    ],
    primaryTools: ["Lip Trill (립트릴)", "Tongue Trill (텅트릴/설소대 릴리즈)", "Hooty (가벼운 포근한 바보 목소리 음색, 임시적 과제 제약으로만 사용)", "가벼운 M[ʌ]m (가장 옅은 성대 터치)"],
    avoidTools: ["징징대는 소리 (Bratty)", "비강 접촉 (Pharyngeal)", "Ng [ŋ] 조임 툴", "경음 자음 및 Edgy mmm의 무분별한 사용"],
    strategy: "목 주변에 '성대가 좌우로 약간 평화롭게 멀어져 얇게 풀리는 듯한 산뜻한 감각'을 빚어주는 것이 제1훈련 수칙입니다. '더 강하게 발성하라'는 주문은 절대 닫아두고 오직 립트릴과 텅트릴의 안정적인 마사지에 가창 시간을 풍성하게 할애합니다. ★ Type 5 예외: Hooty는 후두 하강 및 외부근 이완을 돕는 임시 도구이며, 숨섞임은 과폐쇄 해제의 자연스러운 '결과'일 뿐입니다. Hooty 없이 선명한 p를 무리하게 시도하면 조용한 압착(quiet pressing)으로 이어질 수 있습니다.",
    motorDiagnostic: "성대 과폐쇄 및 호흡 억류라는 보상 협응이 한계치까지 고착화된 매우 깊은 단일 끌개 상태. 조절매개변수(공기압)의 누적 부하로 외부 개입(긴장)이 턱끝까지 차오름.",
    constraintRedesign: "[부하 전면 하향/자유도 최소화] 음량을 p(피아노) 이하로 극단 제한. Lip/Tongue Trill을 통해 기류 유출이 필수적인 기계적 환경(조건)을 만들어 압착 본능이 물리적으로 가동되지 않게 강제.",
    emergenceFeedback: "'목에 힘부터 빼라'는 지시를 절대 금지(오히려 긴장 증폭). Trill의 '부드러운 떨림' 기류나 Hooty의 '풍성하게 풀린 톤' 자체에 외적 초점을 두게 하여 이완 상태의 수동적 창발 유도.",
    transferDesign: "Lip/Tongue Trill ➡️ Hooty ➡️ 가벼운 Touch의 M[ʌ]m ➡️ 약 공기 사용량 기반 N[ei] 연결 ➡️ 단계적 부하 회복.",
    startKey: "여성: C#4 – C#5 / 남성: F#3 – G4 (목 수축 관성이 도무지 발동될 수 없는 고음에서부터 이완과 하행을 주도하는 전략)",
    keyPoints: "선명한 p를 무리하게 유지하려다 조용한 압착(quiet pressing)에 빠지는 것을 가장 경계해야 합니다. Hooty의 의도적인 숨섞임으로 과폐쇄를 강제로 해제하는 것이 핵심입니다.",
    lessonFlow: [
      {
        time: "0–3 분",
        stage: "Discover",
        tools: "Lip Trill + Tongue Trill",
        scale: "1.5 Octave (Tricking)",
        dynamicBreath: "p, 최저 공기 사용량",
        queuing: "립 트릴로 시작, 압력이 빠져나가게",
        checkpoint: "트릴이 압착 방지 (물리적 메커니즘이 성대의 과압을 대신 받아줌)"
      },
      {
        time: "3–8 분",
        stage: "Discover",
        tools: "Hooty",
        scale: "1.5 Octave (Tricking)",
        dynamicBreath: "p, 약간 숨섞임 허용",
        queuing: "후두를 낮추고 공기가 살짝 흐르게",
        checkpoint: "치료적 숨섞임! 과폐쇄 상태를 강제로 해제 (선명한 p를 유지하면 조용한 압착이 됨을 주의)"
      },
      {
        time: "8–13 분",
        stage: "Add/Connect",
        tools: "Hooty + M[ʌ]m",
        scale: "Octave Repeater (Reinforcing)",
        dynamicBreath: "mp~mf, 약→중 공기 사용량",
        queuing: "이완 후 가벼운 M으로 연결 확인",
        checkpoint: "자연 접촉 복귀 (압착이 풀린 후 정상적인 상태로 진입)"
      },
      {
        time: "13–20 분",
        stage: "Stabilize/Speech Level",
        tools: "M[ʌ]m, N[ei]",
        scale: "Octave Repeater / 노래 적용",
        dynamicBreath: "mf",
        queuing: "편안한 연결을 유지하며 노래 적용",
        checkpoint: "안정화 (어색하고 힘겨운 증상이 돌출되면 즉각 가창을 끊고 Lip Trill로 이완)"
      }
    ]
  },
  {
    id: "type6",
    name: "Type 6: Breathy/Weak",
    koreanName: "숨소리가 새고 힘없는 유형 (Breathy/Weak)",
    slsTarget: "접촉 강화 유도 및 성역 가창 흉성 구조 구축",
    description: "성대가 제대로 접촉하지 못하고 벌어져 전 음역대에서 많은 양의 바람이 새며, 맑고 또렷한 진성이 나지 않고 가성처럼 풀려버리는 유형입니다. 오리지널 SLS의 'Tends To: No Chest (Little Girl)'의 특징을 지닙니다. 호흡이 새는 소리를 개선하고 가벼운 성대 접촉을 유도하기 위해 저음부터 'Edgy mmm'과 자음을 조합해 안정적인 접촉 감각을 키워야 합니다.",
    characteristics: [
      "성대 접촉 면적이 고르지 못하고 벌어져 호흡이 많이 새며 선명한 음성이 나지 안흠",
      "호흡이 가창 도중 과다 낭비되어 긴 호흡 지속이 곤란하고 소리가 안으로 답답하게 갇힘",
      "소리가 아예 뒤집혀서 끊기기보다는, 처음부터 끝까지 맥없는 가성 같은 바람 실린 소리 위주로 발성됨"
    ],
    primaryTools: ["Edgy mmm (성대 앞쪽 접촉 유도)", "자음 기반 훈련 (B, D, K + Cry)", "G[ʌ]g (후두 낮추기 및 접촉 유도)", "Squeaky Door (가벼운 성대 접촉을 유도하는 삐걱거리는 문 소리 기법)"],
    avoidTools: ["Hooty 계열 (흉성 발견 초기의 주 도구로는 부적합. 다만 접촉을 만든 뒤 과압축으로 전이될 경우 리셋 도구로 짧게 사용 가능)", "가성을 과도하게 유발해 성대를 벌리는 좁은 모음"],
    strategy: "편안하게 부를 수 있는 저음역대에서부터 'Edgy mmm'과 압력 조절을 돕는 자음을 연결하여, 성대가 가볍고 안전하게 연결되는 접촉을 알게 하는 것이 중요합니다. 접촉이 강화되면서 성대가 지나치게 조이는 상태(Type 5)로 가지 않도록 주의하며, 소리가 조일 경우 즉시 립트릴로 이완을 유도합니다.",
    motorDiagnostic: "성대 폐쇄 협응 자체가 거의 형성되지 못하고, 전 음역에서 성문 이탈기류(호흡 누수) 상태만이 유일한 안정 끌개로 작용하는 극도 소극적 협응 상태.",
    constraintRedesign: "[과제 제약 창출] 'Edgy mmm', 파열음(G, B, K), 그리고 Squeaky Door(문 삐걱임)를 결합하여, 유출되는 호흡 기류에 즉각적인 물리적 저항 장벽(성문 폐쇄의 필연성)을 구축.",
    emergenceFeedback: "'성대를 세게 붙여라' 직접 지시 금지(Type 5로 전이되는 나쁜 보상 우려). Edgy 사운드의 선명한 '크랙' 질감(결과물)에 청각적 주의초점을 맞추어 무의식적 접촉력 창발 달성.",
    transferDesign: "Edgy mmm / Staccato ➡️ 파열음 B/D/K + Cry 결합 ➡️ 지속적인 유성자음(G, B) 연결 ➡️ 일반 모음 전이.",
    startKey: "여성: G3 – A3 / 남성: C3 (가장 편안하고 명료한 흉성 본령을 가둘 수 있는 저음 극단 구역에서 무조건 시작)",
    keyPoints: "숨소리를 촘촘하게 메워줄 수 있는 'Edgy' 음가와 파열 자음을 우선 조합하되, 훈련이 자칫 목 주변 골격을 완전히 쪼아붙이는 과압착 길로 치닫지 않도록 점진 증강시킵니다.",
    lessonFlow: [
      {
        time: "0–3 분",
        stage: "Discover",
        tools: "5-Tone [a] → Edgy mmm",
        scale: "Staccato (Cord Adduction)",
        dynamicBreath: "mp~mf",
        queuing: "에지를 느끼며 또렷하게 시작해 보세요",
        checkpoint: "허공으로 힘없이 빠져나가는 성문 기류를 막고, 성대가 최소치로라도 서로 명확하게 맞닿는지 귀 기울여 모니터링합니다."
      },
      {
        time: "3–9 분",
        stage: "Add/Connect",
        tools: "B[ʌ]b, D[ʌ]d, K[ʌ]k + Cry",
        scale: "5-Tone [ae]",
        dynamicBreath: "mp~mf (접촉 후 큰 소리로 빼지 않기)",
        queuing: "B로 또렷하게 시작하되 목을 누르지 않기",
        checkpoint: "바람 소리가 잦아들며 흉성의 명료한 알맹이(Chest voice)가 사운드로 조립되는지 살펴보고, 너무 세게 밀어 과압착(Type 5)으로 전이되지 않도록 주의합니다."
      },
      {
        time: "9–14 분",
        stage: "Stabilize",
        tools: "G[ʌ]g + Bratty N[ae]",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "G로 시작, 가벼운 접촉 유지",
        checkpoint: "성대 접촉이 탄탄히 지속되는 상태인지 확인하고, 접촉 감각이 너무 과해져 무서운 압착 상태가 엿보이면 즉각 Cry 이완을 주입합니다."
      },
      {
        time: "14–17 분",
        stage: "Stabilize",
        tools: "Squeaky Door + M[ʌ]m",
        scale: "Octave Repeater",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "부드러운 연결에서 시작",
        checkpoint: "지나친 목 근육의 동요 없이 부드러운 성량 상태에서도 완벽하게 빈틈없는 성대 접촉과 가벼운 연결이 깔끔하게 완성되어 보전되는지 판별합니다."
      },
      {
        time: "17–20 분",
        stage: "Speech Level",
        tools: "노래 적용",
        scale: "곡 적용",
        dynamicBreath: "mf, 중 공기 사용량",
        queuing: "가벼운 접촉 유지하며 불러보세요",
        checkpoint: "훈련 후에 노래로 정식 복귀했을 때 가슴의 흉성이 탄탄히 자리하여 바람 새는 소리(Breathy)가 깨끗이 자취를 감추었는지 지속 모니터링합니다."
      }
    ]
  }
];

export const TRANSITION_GUIDE = [
  {
    path: "Type 4 → Type 2",
    reason: "후두를 끌어올리는 Pull Chest 성향을 해결하기 위해 이완 도구(Lip Trill, Hooty 등)를 사용하던 중 연결이 유지되지 않고 성대가 지나치게 벌어지는 방향으로 Tends To가 스윙한 상태",
    solution: "성대 접촉을 유도하는 경음 자음(G, B, D)이나 Bratty N[ae] 모음을 투입하여 연결의 탄력성을 복구합니다.",
    attention: "다시 후두를 올리는 Type 4로 돌아가지 않도록 M[ʌ]m 수준의 부드러운 저강도 흉성 연결선을 기준으로 삼습니다."
  },
  {
    path: "Type 6 → Type 5",
    reason: "접촉이 부족해 호흡이 새던 상태(No Chest)에서, Edgy나 경음 자음을 활용해 접촉을 유도하는 과정 중 성대 폐쇄력이 과도해져 압착 방향으로 Tends To가 스윙한 상태",
    solution: "접촉 유도를 잠시 멈추고 Hooty나 Lip Trill을 짧게 처방하여 과도하게 좁아진 성문과 후두 주변을 즉시 릴리즈 해줍니다.",
    attention: "과압착(Pressed) 상태를 방치하면 피로도가 급증하므로, 실시간 모니터링을 통해 억지로 쥐어짜는 듯한 징후가 보이면 즉각 개입해야 합니다."
  },
  {
    path: "Type 2 → Type 3",
    reason: "성대 접촉력이 부족했던 상태(Type 2)에서 모음 교정 훈련으로 어느 정도 흉성 확립의 기틀이 잡혔으나, 환절기 구역(브릿지)에서 연결을 방어할 근력이나 요령이 미처 다듬어지지 않아 여전히 갈라짐이 남아있는 상태",
    solution: "Nay 발성을 통한 Tricking을 접목해 브릿지 연결 감각을 누적(Stabilize)시키며, 좁은 모음과 하행 스케일을 이용해 점진적으로 믹스의 안착을 유도합니다.",
    attention: "성대가 순간적으로 풀려 Flip이 재발한다면 가벼운 Nay 가락이나 Edgy mmm으로 안전하게 리셋 후 재시도합니다."
  },
  {
    path: "Type 3 → Type 1",
    reason: "브릿지 통과 시 겪던 불안정한 흔들림이나 Flip이 해소되고 흉성과 두성의 밸런스가 잡혀 SLS의 지향점인 균형 잡힌 믹스로 진입한 상태",
    solution: "인위적인 보조 훈련 툴(Bratty, Hooty 등)의 비중을 신속히 낮추고 Speech Level로 전환하는 가창 비율을 높입니다.",
    attention: "극단적이고 자극적인 툴에 대한 의존도를 버리고, 자유로운 연주가 가능한 본연의 편안하고 자연스러운 발성을 신뢰하도록 이끕니다."
  }
];

export const TOOLBOX_TIERS = {
  tier1: [
    {
      name: "Lip Trill (립 트릴)",
      classification: "Safe Adduction (안전한 접촉 유도)",
      principle: "호흡의 유출량과 성대의 물리적 저항감의 자동화된 환상적인 완급 비율 창출. 브릿지 통과 경험을 안전하게 기획.",
      reason: "성대가 짓눌리는 과압착(Type 4, 5)을 원천 차단하고 동시에 성대가 마냥 벌어지는 과소폐쇄(Type 2, 6) 역시 자연스럽게 불협화음을 보완하는, SLS 철학의 가장 위대한 중립 기조 도구."
    },
    {
      name: "Tongue Trill (텅 트릴)",
      classification: "Safe Adduction (안전한 접촉 유도)",
      principle: "립 트릴과 동일한 조율 역량 위에서 혀의 뿌리 통로를 열어주어 한층 높은 기류 배지 및 공간 여유 제공.",
      reason: "원리가 립 트릴과 같으며 특히 흉성을 짓누르는 성향(Type 4, 5)에서 혀 뒤편 가혹한 긴장 압력을 일축시켜 기류 배출을 원활하게 유도함."
    },
    {
      name: "Cry (우는 소리)",
      classification: "Body Coordination (신체 협응 균형)",
      principle: "복근을 비롯한 전신 신체의 자연스러운 협응력을 유도하여, 목 주변 불필요한 외부 근육의 짓누름 없이 편안한 후두 하강 및 유효 성대 접촉을 균형 있게 만들어냅니다.",
      reason: "과압착으로 찌그러지는 쇠소리를 내는 실수를 피하면서도, 힘없이 벌어지던 숨소리(Type 2, 6)의 성문에 편안하고 선명한 안착감을 즉각 제공합니다. (SLS에서 상대적 저위험의 치유 지대)."
    },
    {
      name: "5-Tone [a] (아- 스케일)",
      classification: "Voice Diagnostics (목소리 상태 진단)",
      principle: "외부 교정 자극을 배제한 순수한 [a] 모음 발성을 토대로 브릿지 통과 구간에서 학생 본래가 지니는 성대와 후두의 반응 경향성을 정밀하게 관찰합니다.",
      reason: "특정한 방향으로 강압적인 변위를 주입하지 않는 투명한 거울과 같기에, 언제나 보컬 레슨 및 모든 검사의 출발선이 됨."
    }
  ],
  tier2: [
    {
      name: "M[ʌ]m (멈- 가창)",
      warning: "M은 실음 유성음(Phonated)이기에 경미하게 성대를 여미는 버릇이 유인될 수 있으며, 성대 중증 과압착(Type 5) 초기 훈련 시에는 미시적인 긴장감을 유도할 수 있으므로 가벼운 톤 관리 관찰 아래 적용.",
      benefit: "다만 이를 제외한 전 유형군에서는 후두의 훌륭한 하향 안정을 담보해 내어, 고음 연결에서 기류 전위를 가볍고 부드럽게 소화하는 만능 교량 역할을 영위함."
    },
    {
      name: "N[ei] (네이- 가창)",
      warning: "[ei] 모음이 수축 폭을 가늘게 조이면서 과소폐쇄 환자(Type 2, 6)의 고중음 부분에서 두성 방향으로 당기는 본능을 일부 과동조할 부작용이 잔존.",
      benefit: "그러나 자음 'N'이 제공하는 윤기 나는 조율력에 힘입어 성대의 안전한 결합을 부차적으로 뒷받침하므로, 실전 Speech Level 구현 단계의 가장 강력한 코칭 툴로 기능함."
    },
    {
      name: "Staccato 실행 (스타카토)",
      warning: "연습 모드를 무턱대고 롱톤으로 밀고 가기보다는 스위치를 끊어 휴지기를 줌으로써, 호흡 과압축이 누적 성대 가혹화로 번지는 파국을 예방.",
      benefit: "훈련 도구의 명칭이라기보다 발성의 훌륭한 '전달 스타일'에 가까우며, 초기 음성 훈련의 과긴장 해제에 단비 같은 완충 작용이 됨."
    }
  ],
  clashSection: [
    { tool: "Hooty / Dumb / Woofy", type45: "✓ 절대적으로 환영 (후두가 솟구치는 풀체스트 이완 및 후두 하강에 유효)", type26: "✗ 매우 치명적 (숨소리가 새는 병증을 극단화하여 성대 울림의 질적 고사를 가속함)" },
    { tool: "Bratty / Pharyngeal / 징징거림", type45: "✗ 매우 치명적 (턱 끝과 성대 주변을 조여매는 과압축 염증을 극한까지 악화함)", type26: "✓ 절대적으로 환영 (희미한 성대의 에지 부분에 접촉의 활력을 불어넣는 보약)" },
    { tool: "Ng [ŋ] 이응 받침 가창", type45: "✗ 매우 치명적 (과도한 이완 없이 골격을 압착)", type26: "✓ 절대적으로 환영 (비강 유도와 성대 에지 접촉 촉진)" },
    { tool: "경음 자음 (B/D/K계열)", type45: "✗ 매우 치명적 (외부 숨을 억류하여 목 주변 긴장 폭발)", type26: "✓ 절대적으로 환영 (공기 흐름의 훌륭한 저항력으로 탄력 성대 폐쇄 개점)" },
    { tool: "넓은 모음 ([a], [ae])", type45: "✗ 매우 치명적 (흉성 당기기를 더 가열차게 부추겨 목덜미 수축)", type26: "✓ 절대적으로 환영 (성대 밀착 및 실질적 흉성의 뼈대를 정착하는 터전)" },
    { tool: "좁은 모음 ([i], [u])", type45: "✓ 절대적으로 환영 (수월한 두성 유입 촉진 및 흉성 당기기 기류 상쇄)", type26: "✗ 매우 치명적 (충분히 발달하지 못한 저음역 접촉을 더 형편없이 녹여버림)" }
  ]
};

export const DIAGNOSTIC_FLOWCHART: DiagnosticQuestion[] = [
  {
    id: "q1",
    question: "편안한 5도 스케일('아-[a]')로 노래를 부르며 성대의 다리(Passaggio/Bridge) 구간을 통과할 때, 목과 성대의 상태는 어떠한가요?",
    options: [
      { text: "아주 매끄럽고 부드럽게 부서짐 없이 통과됩니다.", nextId: "q2" },
      { text: "소리가 뚝 끊겨 삐걱거리거나, 혹은 가벼운 가성으로 소리가 홀랑 뒤집어집니다.", nextId: "q3" },
      { text: "뒤집히진 않으나, 목에 사정없이 핏대가 투쟁하듯 서고 쥐어짜는 엄청난 불편함이 수반됩니다.", nextId: "q4" },
      { text: "목소리에 실음이 거의 없고 처음부터 아스스 사방으로 흩어지는 앙상한 바람 소리만 가득합니다.", nextId: null, resultTypeId: "type6" }
    ]
  },
  {
    id: "q2",
    question: "소리가 부드럽게 연결되는 상태에서 특별한 추가적인 스킬업이나 디테일의 윤기가 필요한 상황인가요?",
    options: [
      { text: "네, 저역과 고역의 사운드 밀도 차이를 완벽히 일치시키고 보컬 디테일을 더욱 가다듬고 싶습니다.", nextId: null, resultTypeId: "type1" },
      { text: "아니요, 아주 고음 영역에서 연결이 잘 유지되다가도 간혹 급한 상황을 만나면 소리가 불안정하게 울렁입니다.", nextId: null, resultTypeId: "type3" }
    ]
  },
  {
    id: "q3",
    question: "소리가 뒤집히며 깨지는 순간의 구체적인 특징은 어떤 편에 가깝나요?",
    options: [
      { text: "소리가 전반적으로 가볍게 이어져 가다가, 고음 경계선에 부딪히는 순간 삑사리(Flip)가 연거푸 와르르 발생하며 성대가 약해집니다.", nextId: null, resultTypeId: "type2" },
      { text: "평소 저음은 제법 단단한 두께(Chest Voice)를 품고 있으나, 중고음의 브릿지를 통과하는 그 순간을 넘기지 못하고 덜컥 연결이 단절됩니다.", nextId: null, resultTypeId: "type3" }
    ]
  },
  {
    id: "q4",
    question: "목을 쥐어짜며 힘들게 가창할 때, 소리에 기류가 어느 정도 통과하나요? 아니면 숨통조차 막히나요?",
    options: [
      { text: "소리를 거칠고 둔중하게 고음으로 쭉 끌고 올라가며, 후두가 만져질 만큼 한껏 위로 솟구치다 결국 막히거나 거칠게 항복하며 뒤집힙니다.", nextId: null, resultTypeId: "type4" },
      { text: "성대가 마치 녹슨 쇠처럼 우악스럽게 달라붙어 소리가 돌처럼 칼칼하고 빳빳하게 굳어서, 폐에서 나가는 공기가 완전히 질식되어 가창이 불쾌해집니다.", nextId: null, resultTypeId: "type5" }
    ]
  }
];
