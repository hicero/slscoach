import { Info, AlertTriangle, Layers, Droplets, Target, Activity } from 'lucide-react';

export default function LaxVoxGuide() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white border border-slate-200/60 p-5 md:p-6 rounded-2xl shadow-sm relative overflow-hidden">
        <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2 mb-4">
          <Droplets className="text-teal-500" size={20} />
          Lax Vox 심화 훈련 가이드
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Lax Vox는 반폐쇄성도훈련(SOVTE)의 일환인 물 저항 치료(Water Resistance Therapy) 기법으로, SLS 자음+모음 툴 체계를 보조하는 심화 도구입니다. 특정 유형에서 단기간에 더 강력한 환경 제약이 필요할 때 활용합니다.
        </p>

        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6">
          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Layers className="text-indigo-500" size={16} />
            4대 핵심 기전 (Titze 양안정성 모델 극복)
          </h4>
          <ul className="space-y-3 text-sm text-slate-700">
            <li><strong className="text-indigo-700">성도 불활성 극대화:</strong> 35cm 튜브 연장으로 임피던스 상승 → 발성 역치 압력(PTP) 감소.</li>
            <li><strong className="text-indigo-700">정적 역압 생성:</strong> 튜브 끝이 물에 잠기며 성문 상압 증가 → 직사각형 성문(안정적 접촉) 유도.</li>
            <li><strong className="text-indigo-700">구강압 진동:</strong> 기포(Bubbling)에 의한 14~22Hz 진동이 후두 및 외부근 내부 마사지 효과 제공.</li>
            <li><strong className="text-indigo-700">외적 초점:</strong> 얼굴로 쏠리는 진동감에 집중하여 과도한 내적 지시(근육 통제) 차단.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-800 flex items-center gap-2">
            <Target className="text-amber-500" size={16} />
            유형별 정밀 세팅 및 전략
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
              <h5 className="font-bold text-slate-800 mb-2 border-b border-slate-100 pb-2">과다기능적 (Type 4, 5)</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><strong>수심:</strong> 1~2cm (초기엔 물 밖에서 시작해 서서히 표면 터치)</li>
                <li><strong>직경:</strong> 10~12mm (넓은 관. 저항 최소화)</li>
                <li><strong>자세:</strong> 고개 숙이기 (Type 4: 후두 상승 억제)</li>
                <li><strong>전략:</strong> Hooty 음색 병행. 좁은 모음 느낌. 성대 이완과 공기 흐름 확보 우선. <span className="text-rose-500 font-bold">5mm 좁은 관 절대 금지.</span></li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
              <h5 className="font-bold text-slate-800 mb-2 border-b border-slate-100 pb-2">과소기능적 (Type 2, 6)</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><strong>수심:</strong> 5~15cm (깊은 Bubbling으로 물리적 성대 내전 강제 유도)</li>
                <li><strong>직경:</strong> 5~10mm (좁은 관으로 압력 증폭)</li>
                <li><strong>자세:</strong> 허리 숙이기 (복강내압 자동 증가를 통한 호흡 지원)</li>
                <li><strong>전략:</strong> Cry/Edgy 넓은 모음 기반 흉성 발견. <span className="text-amber-500 font-bold">Type 5로 갑자기 닫히는 상전이 요동 주의.</span></li>
              </ul>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm md:col-span-2">
              <h5 className="font-bold text-slate-800 mb-2 border-b border-slate-100 pb-2">이행적·균형적 (Type 1, 3)</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><strong>수심:</strong> 2~5cm 가변 조절 (플립 나면 약간 깊게, 목 조이면 약간 얕게)</li>
                <li><strong>직경:</strong> 10mm 표준</li>
                <li><strong>전략:</strong> 다이나믹 변동성 훈련. 1.5 Octave 도약, Crescendo 주며 외부 변동성에 대한 믹스 유지 적응력 배양.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-5 md:p-6 rounded-2xl shadow-sm relative overflow-hidden">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 mb-4">
          <Activity className="text-teal-400" size={20} />
          점진적 자유도 해방 5단계 프로토콜
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          튜브 제거 시 즉각 원래 보상 패턴으로 회귀하는 것을 방지하기 위한 점진적 전이 단계입니다.
        </p>

        <div className="space-y-3">
          {[
            { phase: '1단계', title: 'WRT 기본 훈련', desc: '유형별 세팅. 단일 음고에서 시작해 글라이딩, 스케일로 음역 자유도 확장. (안면부 진동 외적 초점)' },
            { phase: '2단계', title: '튜브 내 조음', desc: '튜브를 문 상태로 내부로 좁은/넓은 모음 조음 (혀/턱 자유도 추가). 파지 확인.' },
            { phase: '3단계', title: '1차 툴 제거', desc: '튜브 제거 즉시 M[ʌ]m, N[ei] 등 비음/반폐쇄 툴로 약한 성문 상압 자가 생성. 새면 1단계로 복귀.' },
            { phase: '4단계', title: '모음 전이', desc: '모든 자음 툴 제거. 순수 넓은 모음[a][æ] 연결 발화 구사.' },
            { phase: '5단계', title: '곡 전이', desc: '실제 곡 가창. 좋은 변동성 허용 및 후속 레슨에서 파지(Retention) 검증 수행.' },
          ].map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
              <div className="bg-teal-500/20 text-teal-400 px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap">
                {step.phase}
              </div>
              <div>
                <h4 className="text-slate-200 font-bold text-sm mb-1">{step.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-rose-50 border border-rose-100 p-5 rounded-2xl flex items-start gap-3">
        <AlertTriangle className="text-rose-500 shrink-0 mt-0.5" size={18} />
        <div>
          <h4 className="font-bold text-rose-800 text-sm mb-1">실전 운영 및 안전 주의사항</h4>
          <ul className="text-xs text-rose-700/80 space-y-1.5 list-disc list-inside">
            <li>의료용 실리콘 튜브(길이 35cm, 내경 9~12mm) 권장. 최대 수심 15cm 엄수.</li>
            <li>Type 4, 5는 수심 2cm 이하 엄수, 얇은 빨대 사용 절대 금지.</li>
            <li>천식/호흡기 질환자는 의학적 상담 필요. 튜브 물고 물 삼키지 않도록 주의.</li>
            <li>Lax Vox는 <strong>보조 심화 도구</strong>이므로, 이로써 충분한 진전이 없으면 기존 SLS 툴로 회귀.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
