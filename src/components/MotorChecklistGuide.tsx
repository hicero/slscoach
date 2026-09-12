import { ShieldCheck, CheckSquare, XSquare, AlertCircle } from 'lucide-react';

export default function MotorChecklistGuide() {
  const checklist = [
    { category: '조건 관찰', item: '학생의 고정 진단명이 아니라 이번 과제에서 들린 경향과 조건을 기록했는가?' },
    { category: '조건 관찰', item: '음역·음량·모음·진행 방향 중 한 번에 하나의 조건만 바꾸었는가?' },
    { category: '조건 관찰', item: '도구를 시도하기 전과 후의 음질·연결·노력감·불편감을 비교했는가?' },
    { category: '지시와 초점', item: '“후두를 내려” “성대를 붙여” 같은 내부 감각 지시를 반복하기보다 관찰 가능한 결과를 말했는가?' },
    { category: '지시와 초점', item: '한 번에 여러 신체 부위를 지시하지 않고 과제의 소리·진동·연결에 초점을 두었는가?' },
    { category: '지시와 초점', item: '학생이 이해한 단어와 실제 수행 반응이 일치하는지 확인했는가?' },
    { category: '주의 자원', item: '도구의 진동·기류·소리처럼 학생이 확인할 수 있는 단서를 사용했는가?' },
    { category: '주의 자원', item: '자음·모음·SOVT가 특정 성대 상태를 보장한다고 설명하지 않았는가?' },
    { category: '반응 구분', item: '편안함·가벼움·흐려짐·눌림·변화 없음 중 학생 반응을 기록했는가?' },
    { category: '반응 구분', item: '작은 흔들림과 불편감·통증·지속적 음질 악화를 구분했는가?' },
    { category: '반응 구분', item: '불리한 반응이 나오면 더 세게 반복하지 않고 과제 난이도나 조건을 낮추었는가?' },
    { category: '파지/전이', item: '도구에서 모음, 짧은 가사, 곡 구절로 도움을 줄이며 전이했는가?' },
    { category: '파지/전이', item: '코치의 시범 없이 학생이 다시 수행할 수 있는지 확인했는가?' },
    { category: '다음 수업', item: '다음 수업에서 재현할 구절·음역·모음·도구 조건을 기록했는가?' },
    { category: 'Lax Vox (선택)', item: '튜브 종류·내경·길이·침수 깊이·음량과 학생 반응을 함께 기록했는가?' },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-5 md:p-6 shadow-xl border border-slate-800 relative z-10">
      <h3 className="text-[14px] md:text-base font-bold text-emerald-400 mb-4 flex items-center gap-2">
        <ShieldCheck size={18} />
        강사 운동학습 15대 체크리스트
      </h3>
      
      <div className="space-y-3">
        {checklist.map((c, i) => (
          <div key={i} className="flex gap-3 items-start bg-slate-800/40 p-3 rounded-lg border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
            <div className="mt-0.5 bg-emerald-500/20 text-emerald-400 w-5 h-5 flex items-center justify-center rounded-full shrink-0 font-bold text-[10px]">
              {i + 1}
            </div>
            <div>
              <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-slate-300 mb-1.5 align-middle">
                {c.category}
              </span>
              <p className="text-slate-200 text-xs md:text-[13px] leading-snug">
                {c.item}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-5 p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl flex gap-2 items-start">
        <AlertCircle size={14} className="text-rose-400 shrink-0 mt-0.5" />
        <p className="text-[11px] text-rose-200 leading-tight">
          본 체크리스트는 고정 처방표가 아니라 레슨 전후 기록을 점검하는 도구입니다. 통증·지속적인 쉰 목소리·심한 피로가 있으면 과제를 중단하고 필요한 경우 음성 전문가의 평가를 받으세요.
        </p>
      </div>
    </div>
  );
}
