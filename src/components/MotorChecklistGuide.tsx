import { ShieldCheck, CheckSquare, XSquare, AlertCircle } from 'lucide-react';

export default function MotorChecklistGuide() {
  const checklist = [
    { category: '조건 관찰', item: '학생의 발성 유형을 6유형 체계로 진단했는가?' },
    { category: '조건 관찰', item: '진단에 근거하여 Type별 맞춤 제약(툴, 모음, 강도, 자세)을 설계했는가?' },
    { category: '조건 관찰', item: '조절매개변수(음역, 음량, 템포)의 변화에 따른 임계 요동을 관찰했는가?' },
    { category: '직접 지시 경고', item: '"후두를 내려" "성대를 붙여" 등 내적 초점 지시를 3회 이상 사용했는가? (과제 제약으로 대체 필요)' },
    { category: '직접 지시 경고', item: "Type 5 학생에게 'Hold on' 큐잉을 사용했는가? (즉시 'Let go'로 전환)" },
    { category: '직접 지시 경고', item: "'압 더 세다' 지시를 사용했는가? (Type 5, 6 전이 상황에서 절대 금지)" },
    { category: '주의 자원', item: '툴이 제공하는 감각 피드백(진동, 공명, 기포)에 주의를 기울이도록 했는가? (외적 초점)' },
    { category: '주의 자원', item: '한 번에 2개 이상의 신체 부위 지시를 내렸는가? (주의 자원 초과 위험)' },
    { category: '변동성 구분', item: '학생의 흔들림이 좋은 변동성(새 협응으로 이행)인지 나쁜 변동성(과부하 붕괴)인지 판단했는가?' },
    { category: '변동성 구분', item: '좋은 변동성을 허용하고 조급하게 교정하지 않았는가? (대역폭 피드백)' },
    { category: '변동성 구분', item: '나쁜 변동성 감지 시 과제 난이도를 낮추거나 제약을 강화했는가?' },
    { category: '파지/전이', item: '이전 세션의 성과가 다음 레슨에서도 유지되는지 파지 테스트를 수행했는가?' },
    { category: '파지/전이', item: '학생이 새로운 곡/환경에서도 툴 없이 협응을 재현하는지 전이 테스트를 수행했는가?' },
    { category: 'Lax Vox (선택)', item: 'Lax Vox 사용 시 유형에 맞는 수심/직경 세팅을 적용했는가?' },
    { category: 'Lax Vox (선택)', item: '5단계 점진적 자유도 해방 프로토콜을 준수했는가?' },
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
          본 체크리스트는 레슨 전후 자가점검용입니다. 부정문('~했는가?')에 '예'라고 답한 항 항목이 있다면 즉각 운동학습 원칙으로 교정하세요.
        </p>
      </div>
    </div>
  );
}
