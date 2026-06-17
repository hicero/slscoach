import { X, Activity } from 'lucide-react';

interface TypeSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUMMARY_DATA = [
  {
    type: "Type 1",
    name: "Balanced Mix",
    color: "teal",
    currentState: "목표 협응 준안정 (골짜기 충분히 깊음)",
    targetState: "적응적 협응 (골짜기 더 깊고 넓게)",
    strategy: "조절매개변수 점진적 확대, 변동성 허용",
    risk: "특별히 없음 (과신장 주의 정도)",
  },
  {
    type: "Type 2",
    name: "Light Unstable",
    color: "indigo",
    currentState: "접촉 끌개 얕음 (약한 부하에 상전이)",
    targetState: "접촉 끌개 깊어짐 (넓은 조건 안정)",
    strategy: "파열음 강제, 넓은 모음→좁은 모음",
    risk: "Type 5(Pressed) 과폐쇄 상전이",
  },
  {
    type: "Type 3",
    name: "Light Transitional",
    color: "purple",
    currentState: "끌개 지형 불안정 (조건에 따라 변동)",
    targetState: "안정적 브리지 끌개",
    strategy: "sub-Tends To 실시간 판독, 조건별 유연 제약",
    risk: "Pull Chest 또는 No Chest 편향",
  },
  {
    type: "Type 4",
    name: "Heavy/Pulled Chest",
    color: "rose",
    currentState: "풀체스트 끌개 과도 깊음 (다른 협응 선택 불가)",
    targetState: "두성/믹스 끌개 형성",
    strategy: "Tricking+좁은 모음+SOVTE",
    risk: "풀체스트 재발 (전이 시 빈번)",
  },
  {
    type: "Type 5",
    name: "Pressed/Over-adducted",
    color: "orange",
    currentState: "과폐쇄 끌개 과도 깊음 (공기 흐름 차단)",
    targetState: "적절 접촉 끌개 (공기 흐름 허용)",
    strategy: "Trill 강제 이완, Hooty 후두 하강, 임시적 숨섞임",
    risk: "과폐쇄 재발 (전이 시 빈번)",
  },
  {
    type: "Type 6",
    name: "Breathy/Weak",
    color: "sky",
    currentState: "접촉 끌개 부재 (숨섞임만 존재)",
    targetState: "접촉 끌개 최초 형성 (흉성 발견)",
    strategy: "Edgy mmm+파열음, 넓은 모음+허리 숙이기",
    risk: "Type 5(Pressed) 과폐쇄 전이",
  }
];

export default function TypeSummaryModal({ isOpen, onClose }: TypeSummaryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-5xl bg-slate-50 dark:bg-slate-950 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-2">
            <Activity className="text-indigo-600 dark:text-indigo-400" size={24} />
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">유형별 운동학습·끌개 요약 카드</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {SUMMARY_DATA.map((item) => (
              <div key={item.type} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold mb-3 ${getColorClasses(item.color)}`}>
                  {item.type}
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-4">{item.name}</h3>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 block mb-1">현재 끌개 상태</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-snug">{item.currentState}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 block mb-1">목표 끌개 상태</span>
                    <p className="text-xs text-indigo-700 dark:text-indigo-300 font-semibold leading-snug">{item.targetState}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-2.5 border border-slate-100 dark:border-slate-800/80">
                    <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 block mb-1">핵심 제약 전략</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-snug">{item.strategy}</p>
                  </div>
                  <div className="bg-rose-50 dark:bg-rose-900/10 rounded-lg p-2.5 border border-rose-100 dark:border-rose-900/30">
                    <span className="text-[10px] font-bold uppercase text-rose-500 dark:text-rose-400 block mb-1">위험 끌개 (예방)</span>
                    <p className="text-xs text-rose-700 dark:text-rose-300 leading-snug">{item.risk}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getColorClasses(color: string) {
  switch (color) {
    case 'teal': return 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-800';
    case 'indigo': return 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800';
    case 'purple': return 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800';
    case 'rose': return 'bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800';
    case 'orange': return 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800';
    case 'sky': return 'bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-800';
    default: return 'bg-slate-50 text-slate-700 border border-slate-200';
  }
}
