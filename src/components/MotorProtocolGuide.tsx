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
          기존 자료의 운동학습 개념과 SLS 툴·Lax Vox 활용안을 통합한 코칭 적용 예시입니다. 유형을 확정하거나 특정 생리 상태를 만들어내는 임상 프로토콜이 아니라, 학생 반응을 비교하며 다음 과제를 선택하기 위한 수업 설계 자료입니다.
        </p>
        <p className="text-[11px] md:text-xs text-amber-700 dark:text-amber-300 bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200/60 rounded-lg p-3 mb-4 leading-relaxed">
          표의 순서·시간·도구 조합은 고정 처방이 아닙니다. 음질, 연결, 노력감, 불편감, 도구 제거 후 재현성을 기록하고 한 번에 하나의 조건만 조절하세요.
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
            <p className="text-indigo-900 dark:text-indigo-200 font-medium">SLS 툴 + Lax Vox 비교 원칙: 학생 반응에 따라 두 조건을 번갈아 비교하고, 도움을 줄인 뒤 모음·가사로 전이한다.</p>
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
            <p className="text-xs text-slate-600 dark:text-slate-400">자음·비음·모음 조건을 바꾸며 선명도와 연결을 비교</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4">
            <h4 className="font-bold text-purple-700 dark:text-purple-400 text-xs mb-1">Type 3: Light Transitional</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">이동 표적 추적 (sub-Tends To 실시간 판독, 유연한 제약 설계)</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4">
            <h4 className="font-bold text-rose-700 dark:text-rose-400 text-xs mb-1">Type 4: Heavy/Pulled Chest</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">음역·음량을 낮추고 SOVT·모음 조건의 변화를 비교</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4">
            <h4 className="font-bold text-orange-700 dark:text-orange-400 text-xs mb-1">Type 5: Pressed/Over-adducted</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">과폐쇄 끌개 이탈 (3단계 프로토콜, 임시적 숨섞임 허용)</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4">
            <h4 className="font-bold text-sky-700 dark:text-sky-400 text-xs mb-1">Type 6: Breathy/Weak</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">기류감과 소리의 중심을 비교하되 눌림 증가를 함께 확인</p>
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
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">파열음·모음의 선명도와 노력을 비교<br/>Lax Vox의 짧은 과제부터 확인<br/>Staccato→Glissando는 선택적 경로</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">비음·반폐쇄·개방 조건을 한 가지씩 비교<br/>외적 초점: 선명도·연결·노력감</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">B[æ]b·M[ʌ]m·N[ei]·N[ae] 중 반응이 좋은 조건에서 가사로 전이</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-purple-700 dark:text-purple-400">Type 3</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">현재 반응을 먼저 기록<br/>좁은·넓은 모음과 SOVT를 교차 비교<br/>과제별 변화에 따라 다음 조건 선택</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Hooty·Mum·Cry·Nay·W[ʌ]w 중 변화를 만드는 조건을 한 번에 하나씩 비교</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">조건 관찰 기반 유연한 전이<br/>과폐쇄/플립 방지</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-rose-700 dark:text-rose-400">Type 4</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">높은 음에서 내려오는 과제와 좁은 모음을 비교<br/>SOVT는 학생 반응과 튜브 조건을 기록하며 선택</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Lip Trill→Hooty→M[ʌ]m을 차례로 비교<br/>연결·노력감·재현성 기록</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">SOVT→반폐쇄→개방을 선택적으로 비교<br/>튜브 깊이·규격을 고정하지 않고 기록<br/>도움 제거 후 재현성 확인</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-orange-700 dark:text-orange-400">Type 5</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Trill로 수행 반응 비교<br/>Hooty로 음색·노력감 비교<br/>불편감이 없을 때만 짧게 사용</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">3단계 프로토콜 순차<br/>숨섞임→접촉 명료화<br/>'선명하게' 보류, '연결'에 초점</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Trill→Hooty→M[ʌ]m→개방<br/>과폐쇄 재발시 즉시 리셋</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-sky-700 dark:text-sky-400">Type 6</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Edgy·자음·모음의 선명도 비교<br/>Hooty도 짧게 반응 확인<br/>Lax Vox는 조건을 기록하며 선택</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">접촉 유지 + 과폐쇄 예방 (이중 관리)<br/>대역폭 하한/상한 관리</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">변화가 없거나 노력이 늘면 Lax Vox 조건을 낮추거나 다른 툴과 비교<br/>눌림·불편감의 전이를 기록</td>
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
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">기포·소리·노력감의 변화를 함께 관찰</td>
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
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">음역을 바꿔도 연결과 노력감이 유지되는지</td>
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
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">기포만으로 성대 접촉을 판정하지 않고 제거 후 반응을 비교</td>
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
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">자음·모음·음량을 한 가지씩 비교</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">선명도를 위해 힘이 늘거나 눌리는지 확인</td>
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
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Trill·Hooty·Mum을 짧게 비교하고 불편하면 중단</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">도구 제거 후 눌림·노력감이 돌아오는지 확인</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">Type 6</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">기류감이 크고 소리의 중심이 약하게 관찰됨</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">선명도와 편안함이 함께 유지되는 조건</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">Edgy·자음·Goo·Mum을 짧게 비교</td>
                <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400 border-l border-slate-100 dark:border-slate-800/60">눌림·불편감이 늘면 즉시 조건을 낮춤</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

       {/* Summary Table 4 */}
       <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">세션 운영 시간 예시 (고정 처방 아님)</h3>
        <div className="overflow-x-auto shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl">
          <table className="w-full text-left text-xs min-w-[700px]">
            <thead className="bg-slate-100 dark:bg-slate-800/60 font-semibold text-slate-700 dark:text-slate-300">
              <tr>
                <th className="px-4 py-3 border-b flex-shrink-0 w-24">유형</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">SLS 툴 중심 (Phase 1~2 초)</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">Lax Vox 도입 (Phase 2 후반~3 초)</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700">SLS 툴 전이 (Phase 3 후반)</th>
                <th className="px-4 py-3 border-b border-l border-slate-200 dark:border-slate-700 text-indigo-700 dark:text-indigo-400">Lax Vox 시간 예시</th>
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
