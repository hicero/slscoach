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
    currentState: "여러 조건에서 연결·노력감이 비교적 안정적으로 관찰됨",
    targetState: "음역·음량·모음·가사로 재현 범위 확장",
    strategy: "조건을 한 가지씩 늘리고 다음 수업에서 재현 확인",
    risk: "한 번의 성공을 전체 음역의 안정으로 일반화하지 않기",
  },
  {
    type: "Type 2",
    name: "Light Unstable",
    color: "indigo",
    currentState: "상행·모음 변화에서 연결과 노력감이 불안정하게 관찰됨",
    targetState: "편안함과 연결이 유지되는 조건 확대",
    strategy: "자음·모음·음량을 한 가지씩 비교",
    risk: "선명도를 위해 힘이 늘거나 소리가 눌리는지 확인",
  },
  {
    type: "Type 3",
    name: "Light Transitional",
    color: "purple",
    currentState: "음역·모음·진행 방향에 따라 반응이 달라짐",
    targetState: "차이가 나타나는 조건을 줄이고 재현 범위 확대",
    strategy: "한 번에 하나의 조건만 바꾸어 비교",
    risk: "변화의 원인을 특정 생리 상태로 단정하지 않기",
  },
  {
    type: "Type 4",
    name: "Heavy/Pulled Chest",
    color: "rose",
    currentState: "상행에서 음량·무게·노력감이 함께 커짐",
    targetState: "부담이 적은 연결을 모음·가사로 전이",
    strategy: "음역·음량을 낮추고 SOVT·음절을 비교",
    risk: "도구 제거 후 원래 무거움이 재현되는지 확인",
  },
  {
    type: "Type 5",
    name: "Pressed/Over-adducted",
    color: "orange",
    currentState: "눌림·거친 음질·노력감이 크게 관찰됨",
    targetState: "불편이 줄고 연결이 유지되는 조건 확보",
    strategy: "Lip/Tongue Trill·Hooty·Mum을 짧게 비교",
    risk: "통증·쉰 목소리·피로가 있으면 중단",
  },
  {
    type: "Type 6",
    name: "Breathy/Weak",
    color: "sky",
    currentState: "기류감이 크고 소리의 중심이 약하게 관찰됨",
    targetState: "선명도와 편안함이 함께 유지되는 조건 확대",
    strategy: "Edgy·Goo·Guh·Mum을 짧게 비교",
    risk: "선명도를 위해 누르거나 음량을 키우는지 확인",
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
