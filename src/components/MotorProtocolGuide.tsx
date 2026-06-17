import React from 'react';
import { Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function MotorProtocolGuide() {
  return (
    <div className="space-y-10">
      {/* Introduction */}
      <div className="bg-gradient-to-br from-indigo-50/50 to-white dark:from-indigo-900/10 dark:to-slate-900 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl p-5 md:p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-3">
          <Activity className="text-indigo-600 dark:text-indigo-400" size={20} />
          9장. 6가지 발성 유형별 운동학습 실전 훈련 프로토콜
        </h3>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
          v6의 운동학습·복잡계 개념과 v8의 SLS 툴 + Lax Vox 훈련을 통합하여, 각 유형별로 현장에서 즉시 적용 가능한 단계별 실전 프로토콜을 제시합니다.
        </p>

        <div className="bg-white dark:bg-slate-800/50 rounded-xl p-4 border border-indigo-50 dark:border-indigo-900/20">
          <h4 className="font-bold text-indigo-800 dark:text-indigo-300 text-sm mb-3">핵심 구조 — 3-Phase 훈련 프로토콜</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="px-3 py-2 border-b border-r border-slate-200 dark:border-slate-700 w-24">Phase</th>
                  <th className="px-3 py-2 border-b border-r border-slate-200 dark:border-slate-700 w-32">운동학습 개념</th>
                  <th className="px-3 py-2 border-b border-r border-slate-200 dark:border-slate-700 w-36">SLS Roadmap 연결</th>
                  <th className="px-3 py-2 border-b border-slate-200 dark:border-slate-700">역할</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 break-keep">
                <tr>
                  <td className="px-3 py-2.5 font-bold text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800/60">Phase 1: 조건 설계</td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800/60">DOF Freezing</td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800/60">Discover & Release</td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">보상 끌개 억제, 목표 협응 창발 조건 설계</td>
                </tr>
                <tr>
                  <td className="px-3 py-2.5 font-bold text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800/60">Phase 2: 창발 유도</td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800/60">Emergence</td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800/60">Adduct/Connect</td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">목표 협응 관찰·안정화, 대역폭 피드백</td>
                </tr>
                <tr>
                  <td className="px-3 py-2.5 font-bold text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800/60">Phase 3: 자유도 해방</td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800/60">DOF Freeing</td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800/60">Speech Level</td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">제약 점진 제거, 파지·전이 확인</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-xs flex gap-2">
            <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            <p className="text-indigo-900 dark:text-indigo-200 font-medium">SLS 툴 + Lax Vox 결합 원칙: "SLS 툴로 발견하고, Lax Vox로 정밀 조절하고, 다시 SLS 툴로 전이한다"</p>
          </div>
        </div>
      </div>

      {/* Type Highlights */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 pb-2">유형별 핵심</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4">
            <h4 className="font-bold text-teal-700 dark:text-teal-400 text-xs mb-1">Type 1: Balanced Mix</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">적응적 협응 강화 (조절매개변수 확대)</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4">
            <h4 className="font-bold text-indigo-700 dark:text-indigo-400 text-xs mb-1">Type 2: Light Unstable</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">성대 접촉 끌개 형성 (파열음→비음→개방모음 전이)</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4">
            <h4 className="font-bold text-purple-700 dark:text-purple-400 text-xs mb-1">Type 3: Light Transitional</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">이동 표적 추적 (sub-Tends To 실시간 판독, 유연한 제약 설계)</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4">
            <h4 className="font-bold text-rose-700 dark:text-rose-400 text-xs mb-1">Type 4: Heavy/Pulled Chest</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">풀체스트 끌개 이탈 (Tricking+좁은모음+SOVTE, 임계 요동 관리)</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4">
            <h4 className="font-bold text-orange-700 dark:text-orange-400 text-xs mb-1">Type 5: Pressed/Over-adducted</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">과폐쇄 끌개 이탈 (3단계 프로토콜, 임시적 숨섞임 허용)</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4">
            <h4 className="font-bold text-sky-700 dark:text-sky-400 text-xs mb-1">Type 6: Breathy/Weak</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">접촉 끌개 최초 형성 + 과폐쇄 전이 관리 (이중 목표 관리)</p>
          </div>
        </div>
      </div>

      {/* Summary Table 1 */}
      <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">3-Phase 별 핵심 제약과 툴 조합 요약</h3>
        <div className="overflow-x-auto shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl">
          <table className="w-full text-left text-xs min-w-[700px]">
            <thead className="bg-slate-100 dark:bg-slate-800/60 font-semibold text-slate-700 dark:text-slate-300">
              <tr>
                <th className="px-4 py-3 border-b flex-shrink-0 w-24">유형</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700 w-1/3">Phase 1: 조건 설계</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700 w-1/3">Phase 2: 창발 유도</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700 w-1/3">Phase 3: 자유도 해방</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900 break-keep">
              <tr>
                <td className="px-4 py-3 font-semibold text-teal-700 dark:text-teal-400">Type 1</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">기본 워밍업으로 상태 확인<br/>특별한 제약 추가 불필요<br/>Lax Vox: Messa di Voce</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">조절매개변수 확대<br/>(음역, 음량, 모음, 템포)<br/>좋은 변동성 허용</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">툴→개방 모음→가사→곡<br/>Lax Vox 4~5단계 적극 활용<br/>파지·전이 테스트</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-indigo-700 dark:text-indigo-400">Type 2</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">파열음으로 접촉 강제<br/>넓은 모음으로 흉성 발견<br/>Lax Vox: Staccato→Glissando</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉을 비음→반폐쇄→개방으로 점진적 전이<br/>외적 초점: 튕겨나오는 소리</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">B[æ]b→M[ʌ]m→N[ei]→N[ae]→가사<br/>과폐쇄 전이 예방</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-purple-700 dark:text-purple-400">Type 3</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">sub-Tends To 실시간 판독<br/>Pull Chest: 좁은 모음+SOVTE<br/>No Chest: 넓은 모음+파열음</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Pull Chest: Hooty+M[ʌ]m<br/>No Chest: Cry+Nay<br/>순수 Flip: Nay+W[ʌ]w</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">조건 관찰 기반 유연한 전이<br/>과폐쇄/플립 방지</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-rose-700 dark:text-rose-400">Type 4</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Tricking(높은 음서 시작)<br/>좁은 모음+SOVTE 필수<br/>Lax Vox: Hooty Siren (1~3cm)</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Lip Trill→Hooty→M[ʌ]m으로 Release<br/>임계 요동 관찰(좋은 변동성)</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">SOVTE→반폐쇄→개방<br/>Lax Vox 1단계 충분히 적용<br/>파지 강력 요구</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-orange-700 dark:text-orange-400">Type 5</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Trill로 과폐쇄 해제<br/>Hooty로 후두 이완<br/>임시적 숨섞임 허용</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">3단계 프로토콜 순차<br/>숨섞임→접촉 명료화<br/>'선명하게' 보류, '연결'에 초점</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Trill→Hooty→M[ʌ]m→개방<br/>과폐쇄 재발시 즉시 리셋</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-sky-700 dark:text-sky-400">Type 6</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Edgy mmm으로 접촉 발견<br/>파열음 결합, Hooty 절대 금지<br/>Lax Vox: 2단계 접근</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 유지 + 과폐쇄 예방 (이중 관리)<br/>대역폭 하한/상한 관리</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 없으면 Lax Vox 중단<br/>Type 5 과폐쇄 전이 상시 모니터링</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

       {/* Summary Table 2 */}
       <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">유형별 외적 초점 큐 요약</h3>
        <div className="overflow-x-auto shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl">
          <table className="w-full text-left text-xs min-w-[700px]">
            <thead className="bg-slate-100 dark:bg-slate-800/60 font-semibold text-slate-700 dark:text-slate-300">
              <tr>
                <th className="px-4 py-3 border-b flex-shrink-0 w-24">유형</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">접촉 관련 큐</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">연결 관련 큐</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">Lax Vox 큐</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900 break-keep">
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 1</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">소리가 앞으로 튕겨 나가는지</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">소리가 한 줄로 곧게 올라가는지</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">거품이 일정한지 봐요</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 2</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">[æ] 소리가 튕겨 나오는지, 윗입술이 간지럽게 떨리는지</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">소리가 끊기지 않고 이어지는지</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">거품이 짧게 나오면 접촉이 있는 거예요</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 3</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">코가 간지러운 느낌이 있는지 (Nay 비음)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">브리지에서 미끄러지듯 넘어가는지</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">모음이 바뀌어도 거품이 유지되는지</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 4</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">입술이 떨리는 느낌만 집중, 소리가 뒤로 빠지는 느낌</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">소리가 자동으로 올라가는지</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">거품이 쉬지 않고 나오는지</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 5</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">공기가 자연스럽게 빠져나가는 느낌, 숨이 막히지 않는지</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">소리가 아래로 내려앉는 느낌 (Hooty)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">거품의 크기가 일정한지</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 6</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">mmm에서 입술이 간지럽게 떨리면, B에서 튕겨나오면</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">숨이 새지 않고 소리가 또렷해지는지</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">거품이 짧게 나오면 접촉 달성</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

       {/* Summary Table 3 */}
       <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">유형별 끌개 상태와 제약 설계 원리 요약</h3>
        <div className="overflow-x-auto shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl">
          <table className="w-full text-left text-xs min-w-[700px]">
            <thead className="bg-slate-100 dark:bg-slate-800/60 font-semibold text-slate-700 dark:text-slate-300">
              <tr>
                <th className="px-4 py-3 border-b flex-shrink-0 w-20">유형</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">현재 끌개 상태</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">목표 끌개 상태</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">핵심 제약 전략</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">위험 끌개 (예방)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900 break-keep">
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 1</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">목표 협응 준안정 (골짜기 충분히 깊음)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">적응적 협응 (골짜기 더 깊고 넓게)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">조절매개변수 점진적 확대, 변동성 허용</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">특별히 없음 (과신장 주의 정도)</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 2</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 끌개 얕음 (약한 부하에 상전이)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 끌개 깊어짐 (넓은 조건 안정)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">파열음 강제, 넓은 모음→좁은 모음</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Type 5(Pressed) 과폐쇄 상전이</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 3</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">끌개 지형 불안정 (조건에 따라 변동)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">안정적 브리지 끌개</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">sub-Tends To 실시간 판독, 조건별 유연 제약</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Pull Chest 또는 No Chest 편향</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 4</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">풀체스트 끌개 과도 깊음 (다른 협응 선택 불가)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">두성/믹스 끌개 형성</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Tricking+좁은 모음+SOVTE</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">풀체스트 재발 (전이 시 빈번)</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 5</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">과폐쇄 끌개 과도 깊음 (공기 흐름 차단)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">적절 접촉 끌개 (공기 흐름 허용)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Trill 강제 이완, Hooty 후두 하강, 임시적 숨섞임</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">과폐쇄 재발 (전이 시 빈번)</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 6</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 끌개 부재 (숨섞임만 존재)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 끌개 최초 형성 (흉성 발견)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Edgy mmm+파열음, 넓은 모음+허리 숙이기</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Type 5(Pressed) 과폐쇄 전이</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

       {/* Summary Table 4 */}
       <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">SLS 툴 + Lax Vox 결합 세션 타이밍 요약</h3>
        <div className="overflow-x-auto shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl">
          <table className="w-full text-left text-xs min-w-[700px]">
            <thead className="bg-slate-100 dark:bg-slate-800/60 font-semibold text-slate-700 dark:text-slate-300">
              <tr>
                <th className="px-4 py-3 border-b flex-shrink-0 w-24">유형</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">SLS 툴 중심 (Phase 1~2 초)</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">Lax Vox 도입 (Phase 2 후반~3 초)</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">SLS 툴 전이 (Phase 3 후반)</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700 text-indigo-700 dark:text-indigo-400">총 Lax Vox 시간</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900 break-keep">
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 1</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">8~12 분</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~8 분 (선택적)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~8 분</td>
                <td className="px-4 py-2.5 font-bold text-indigo-600 dark:text-indigo-400 border-l border-slate-100 dark:border-slate-800/60">0~8 분 (선택)</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 2</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~8 분</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~7 분</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~8 분</td>
                <td className="px-4 py-2.5 font-bold text-indigo-600 dark:text-indigo-400 border-l border-slate-100 dark:border-slate-800/60">5~7 분</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 3</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~8 분</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~7 분</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~8 분</td>
                <td className="px-4 py-2.5 font-bold text-indigo-600 dark:text-indigo-400 border-l border-slate-100 dark:border-slate-800/60">5~7 분</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 4</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~8 분</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">7~10 분</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~8 분</td>
                <td className="px-4 py-2.5 font-bold text-indigo-600 dark:text-indigo-400 border-l border-slate-100 dark:border-slate-800/60">7~10 분</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 5</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~8 분</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">7~10 분</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~8 분</td>
                <td className="px-4 py-2.5 font-bold text-indigo-600 dark:text-indigo-400 border-l border-slate-100 dark:border-slate-800/60">7~10 분</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 6</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">8~12 분</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">3~5 분 (접촉 후만)</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">5~8 분</td>
                <td className="px-4 py-2.5 font-bold text-indigo-600 dark:text-indigo-400 border-l border-slate-100 dark:border-slate-800/60">0~5 분 (조건부)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
