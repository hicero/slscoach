import { AlertTriangle, Droplets, Info, Layers, Target, Activity } from 'lucide-react';

const comparisonCards = [
  {
    title: '상행에서 무거워지는 경향',
    subtitle: 'Type 4 관련 관찰',
    items: [
      '편한 한 음 또는 짧은 하행에서 시작합니다.',
      '튜브의 내경·길이·침수 깊이·음량을 기록하고 한 번에 하나만 바꿉니다.',
      '기포를 크게 만들기보다 소리·노력감·불편감이 어떻게 달라지는지 듣습니다.',
      '튜브를 뺀 같은 모음에서 변화가 남는지 확인합니다.'
    ],
    cue: '도구가 편해도 제거 후 더 무거워지면, 조건을 낮추고 다른 음절과 비교합니다.'
  },
  {
    title: '기류감이 크고 중심이 약한 경향',
    subtitle: 'Type 2·6 관련 관찰',
    items: [
      '짧은 한 음에서 소리의 중심과 기류감을 먼저 기록합니다.',
      '침수 깊이나 튜브 크기를 유형만으로 자동 지정하지 않습니다.',
      'Goo·Guh·Mum 또는 모음 과제로 튜브 제거 후 반응을 비교합니다.',
      '선명도를 위해 힘이나 음량이 늘면 그 조건을 성공으로 기록하지 않습니다.'
    ],
    cue: '기포가 생겼다는 사실만으로 성대 접촉이나 근육 상태를 판정하지 않습니다.'
  },
  {
    title: '음역·모음에 따라 반응이 달라지는 경향',
    subtitle: 'Type 1·3 관련 관찰',
    items: [
      '같은 음에서 모음만 바꾸어 차이를 비교합니다.',
      '짧은 글라이드와 짧은 가사를 순서대로 시험합니다.',
      '도구의 도움을 줄인 뒤에도 연결과 노력감이 유지되는지 확인합니다.',
      '다음 수업에서 재현할 구절과 조건을 기록합니다.'
    ],
    cue: '정해진 수심·직경보다 학생의 실제 반응과 재현성이 다음 선택을 결정합니다.'
  }
];

const transferSteps = [
  ['1', '기준 기록', '도구 전 한 음에서 음질·기류감·노력감·불편감을 기록합니다.'],
  ['2', '튜브 조건 비교', '내경·길이·침수 깊이·음량 중 한 가지 조건만 바꿉니다.'],
  ['3', '짧은 음형', '한 음에서 짧은 글라이드나 음형으로 확장하되 불편하면 되돌립니다.'],
  ['4', '튜브 제거', '같은 음높이와 모음으로 튜브를 빼고 변화가 남는지 확인합니다.'],
  ['5', '가사 전이', '짧은 가사와 곡 구절로 옮긴 뒤 다음 수업 재현 조건을 남깁니다.']
];

export default function LaxVoxGuide() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 p-5 md:p-6 rounded-2xl shadow-sm relative overflow-hidden">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2 mb-4">
          <Droplets className="text-teal-500" size={20} />
          Lax Vox 심화 훈련 가이드
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
          Lax Vox는 물과 튜브를 사용하는 SOVT 과제입니다. 아래 내용은 특정 목소리 유형에 수심이나 직경을 자동 처방하는 표가 아니라, 튜브 조건과 학생의 반응을 비교·기록하는 코칭용 흐름입니다.
        </p>
        <div className="bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200/70 rounded-xl p-3 text-xs text-amber-800 dark:text-amber-300 flex gap-2 items-start">
          <Info size={15} className="shrink-0 mt-0.5" />
          <p>
            논문에서 보고된 조건과 현장 처방은 구분해야 합니다. 튜브의 내경·길이·침수 깊이·발성 과제에 따라 결과가 달라질 수 있으므로, “깊을수록 좋다” 또는 “성대 접촉을 강제한다”고 일반화하지 않습니다.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-4 rounded-xl">
        <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
          <Layers className="text-indigo-500" size={16} />
          확인할 수 있는 것과 확인할 수 없는 것
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg p-3">
            <strong className="text-emerald-700 dark:text-emerald-400 block mb-1">관찰 가능한 항목</strong>
            <p className="text-slate-600 dark:text-slate-400">기포의 지속성, 소리의 연결, 기류감, 음량, 노력감, 불편감, 튜브 제거 후의 변화</p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg p-3">
            <strong className="text-rose-700 dark:text-rose-400 block mb-1">기포만으로 확정할 수 없는 항목</strong>
            <p className="text-slate-600 dark:text-slate-400">성대 접촉력, 특정 근육의 활성, 후두 위치, 구조적 정상 여부</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <Target className="text-amber-500" size={16} />
          관찰 경향별 비교 방향
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {comparisonCards.map(card => (
            <div key={card.title} className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 bg-white dark:bg-slate-900 shadow-sm">
              <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{card.title}</h5>
              <span className="text-[10px] text-slate-400">{card.subtitle} · 고정 진단 아님</span>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mt-3 list-disc list-inside">
                {card.items.map(item => <li key={item}>{item}</li>)}
              </ul>
              <p className="mt-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-2.5 text-xs text-teal-700 dark:text-teal-300">{card.cue}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-5 md:p-6 rounded-2xl shadow-sm relative overflow-hidden">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 mb-3">
          <Activity className="text-teal-400" size={20} />
          코칭용 점진적 전이 5단계 예시
        </h3>
        <p className="text-sm text-slate-400 mb-5">
          각 단계는 학생 반응이 유지될 때만 다음으로 이동합니다. 이 순서와 시간은 고정 처방이 아닙니다.
        </p>
        <div className="space-y-3">
          {transferSteps.map(([step, title, desc]) => (
            <div key={step} className="flex gap-4 items-start bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
              <div className="bg-teal-500/20 text-teal-400 px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap">{step}단계</div>
              <div>
                <h4 className="text-slate-200 font-bold text-sm mb-1">{title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-rose-50 dark:bg-rose-900/30 border border-rose-100 p-5 rounded-2xl flex items-start gap-3">
        <AlertTriangle className="text-rose-500 shrink-0 mt-0.5" size={18} />
        <div>
          <h4 className="font-bold text-rose-800 dark:text-rose-300 text-sm mb-1">중단 기준</h4>
          <ul className="text-xs text-rose-700 dark:text-rose-400/80 space-y-1.5 list-disc list-inside">
            <li>통증, 숨참, 어지러움, 기침 또는 불편감이 생기면 즉시 중단합니다.</li>
            <li>쉰 목소리나 피로가 지속·반복되면 훈련을 늘리지 말고 음성 전문가 또는 이비인후과 평가를 고려합니다.</li>
            <li>물을 삼키지 않도록 하고, 호흡기 질환 등 건강 문제가 있으면 전문가와 먼저 상의합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
