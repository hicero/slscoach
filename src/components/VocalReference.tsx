import { useState } from 'react';
import { TOOLBOX_TIERS, TRANSITION_GUIDE, VOWEL_NARROWING_CHART, CONSONANT_STRENGTH_CHART } from '../types';
import { ShieldCheck, Sparkles, RefreshCw, AlertTriangle, HelpCircle, ChevronRight, Activity } from 'lucide-react';
import TermTooltip from './TermTooltip';
import LaxVoxGuide from './LaxVoxGuide';
import MotorChecklistGuide from './MotorChecklistGuide';
import MotorProtocolGuide from './MotorProtocolGuide';

export default function VocalReference() {
  const [activeTab, setActiveTab] = useState<'toolbox' | 'transitions' | 'science' | 'quickRef' | 'postures' | 'vowels' | 'motorLearning' | 'laxVox' | 'protocol'>('toolbox');

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
      <div className="mb-5 bg-amber-50/50 border border-amber-200/60 rounded-xl p-3 md:p-4 text-[11px] md:text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
        <strong className="text-amber-900 font-bold flex items-center gap-1.5 mb-1">
          <AlertTriangle size={14}/>
          주의: SLS 하위 분류 체계 안내
        </strong>
        본 가이드의 6가지 발성 유형은 <strong>SLS 공식 4 Tends To를 대체하는 것이 아니라</strong>, 현장 진단과 실전 레슨 설계를 돕기 위해 확장/세분화한 <strong>하위 분류 (현장형) 체계</strong>입니다.<br/>
        특히 <strong>Type 5 (Pressed / Over-adducted)</strong>는 SLS 원본 매뉴얼의 독립 Tends To가 아니며, <strong>Pull Chest 또는 Imperfect Mix 내부에서 발견되는 'pressed sub-pattern'</strong>을 현장 진단 및 레슨 편의상 독립 유형으로 분리한 것입니다.
        <hr className="my-2 border-amber-200/60" />
        <strong className="text-amber-900 font-bold block mb-1">💡 진단 및 처방 기준의 핵심</strong>
        SLS의 궁극적 진단은 단순히 [호흡 양 vs 성대 접촉력]의 균형만을 보는 것이 아니라, <strong>Airflow (호흡), Cord Closure (성대 접촉), Vowel (모음)</strong>의 3요결합을 통해 <strong>'Low Stable Larynx(안정된 후두)'</strong>와 <strong>'Release(외부 주변근의 개입 없는 자유로움)'</strong>을 이끌어내는 데 목적이 있습니다.
      </div>

      <div className="flex flex-col xl:flex-row xl:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5 gap-4">
        <div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border border-indigo-200">
            <Sparkles size={10} />
            보컬 지휘 보충 가이드
          </span>
          <h2 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight mt-1">
            SLS 전문 레퍼런스 매트릭스
          </h2>
        </div>

        {/* 하부 탭 컨트롤 */}
        <div className="w-full xl:w-auto">
          {/* 모바일 (Select Dropdown) */}
          <div className="md:hidden relative">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as any)}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-bold rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all"
            >
              <option value="toolbox">툴 분류 가이드 & 충돌 맵</option>
              <option value="transitions">유형 전이 정밀 경로</option>
              <option value="science">과학적 근거 (논문 매치)</option>
              <option value="postures">신체 큐잉 & 자세</option>
              <option value="vowels">모음 훈련 가이드</option>
              <option value="motorLearning">복잡계/운동학습</option>
              <option value="protocol">실전 훈련 프로토콜</option>
              <option value="laxVox">Lax Vox 심화</option>
              <option value="quickRef">빠른 종합 가이드</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 dark:text-slate-400">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* 태블릿/데스크탑 (Buttons) */}
          <div className="hidden md:flex flex-wrap bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 gap-1.5 justify-start">
            {[
              { id: 'toolbox', label: '툴 분류 가이드 & 충돌 맵' },
              { id: 'transitions', label: '유형 전이 정밀 경로' },
              { id: 'science', label: '과학적 근거 (논문 매치)' },
              { id: 'postures', label: '신체 큐잉 & 자세' },
              { id: 'vowels', label: '모음 훈련 가이드' },
              { id: 'motorLearning', label: '복잡계/운동학습' },
              { id: 'protocol', label: '상세 훈련 프로토콜' },
              { id: 'laxVox', label: 'Lax Vox 심화' },
              { id: 'quickRef', label: '빠른 종합 가이드' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 lg:px-4 py-2 rounded-lg font-semibold text-xs transition-all text-center ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm border border-slate-200 dark:border-slate-700/60"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:text-slate-200 hover:bg-slate-200/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === 'toolbox' && (
        <div className="space-y-8">
             {/* Tier 1: 상대적 저위험 시작 툴 */}
          <div className="space-y-3">
            <h3 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <ShieldCheck className="text-emerald-500" size={16} />
              Tier 1: 상대적 저위험 시작 툴 (어떤 유형이든 초기 진단 전 워밍업 및 탐색으로 출발 가능)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TOOLBOX_TIERS.tier1.map((t) => (
                <div key={t.name} className="bg-emerald-50/5 border border-emerald-100/70 p-4 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 font-sans">{t.name}</h4>
                      <span className="text-[9px] uppercase font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-md border border-emerald-200">
                        {t.classification.split(' ')[0]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-650 mt-1.5 leading-relaxed">
                      <strong className="text-slate-850 font-semibold block">기능 작동 원리:</strong>
                      <TermTooltip text={t.principle} />
                    </p>
                  </div>
                  <div className="mt-3 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-700/50 p-2.5 rounded-xl text-[10px] text-slate-500 dark:text-slate-400 leading-normal">
                    <strong className="text-emerald-700 dark:text-emerald-400 font-bold block mb-0.5">안전 가치가 높은 이유:</strong>
                    <TermTooltip text={t.reason} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 2: 진단 전 기본 탐색 툴 */}
          <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <ShieldCheck className="text-teal-500" size={16} />
              Tier 2: 진단 전 기본 탐색 툴 (경미한 관찰 아래 전 유형 공용 가능)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {TOOLBOX_TIERS.tier2.map((t) => (
                <div key={t.name} className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-4 rounded-xl space-y-2.5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 font-sans">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">
                      <TermTooltip text={t.warning} />
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-700/50 p-2.5 rounded-xl text-[10px] text-teal-700 dark:text-teal-400 font-normal">
                    <strong className="block text-slate-800 dark:text-slate-200 font-bold mb-0.5">핵심 훈련 이점 및 효과:</strong>
                    <TermTooltip text={t.benefit} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 충돌 툴 요약 체크표 */}
          <div className="space-y-3 pt-3 border-t border-slate-105">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <AlertTriangle className="text-rose-500" size={16} />
                유형별 단계 의존적 툴 (특정 단계/유형 외 공용 오용 금지)
              </h3>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">⚠️ 학생의 현재 Tends To와 맞지 않는 툴을 오용할 경우 발성 문제를 악화시킬 수 있습니다.</span>
            </div>

            <div className="border border-slate-150 dark:border-slate-700/50 rounded-xl shadow-sm">
              <div className="min-w-full">
                <table className="min-w-full divide-y divide-slate-155 text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/40 font-semibold text-slate-700 dark:text-slate-300">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left font-bold">보컬 훈련 툴 명칭</th>
                      <th scope="col" className="px-4 py-3 text-left font-bold">Type 4, 5 (과압축 유형군) 오용 시 영향</th>
                      <th scope="col" className="px-4 py-3 text-left font-bold">Type 2, 6 (과소폐쇄 유형군) 오용 시 영향</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-105">
                    {TOOLBOX_TIERS.clashSection.map((row) => (
                      <tr key={row.tool} className="hover:bg-slate-50 dark:bg-slate-800/40/50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">{row.tool}</td>
                        <td className="px-4 py-3 leading-relaxed whitespace-pre-line">
                          <span className={`inline font-semibold ${
                            row.type45.startsWith('✗') ? 'text-rose-600' : 'text-emerald-600'
                          }`}>
                            <TermTooltip text={row.type45} />
                          </span>
                        </td>
                        <td className="px-4 py-3 leading-relaxed whitespace-pre-line">
                          <span className={`inline font-semibold ${
                            row.type26.startsWith('✗') ? 'text-rose-600' : 'text-emerald-600'
                          }`}>
                            <TermTooltip text={row.type26} />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* 비교표: Type 4 vs 5, Type 2 vs 6 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-3 border-t border-slate-105">
            {/* Type 4 vs Type 5 */}
            <div className="space-y-3">
              <h3 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <AlertTriangle className="text-amber-500" size={16} />
                비슷해 보이지만 다른 과압축 (Type 4 vs 5)
              </h3>
              <div className="border border-slate-150 dark:border-slate-700/50 rounded-xl shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-slate-155 text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/40 font-semibold text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="px-3 py-2 text-left w-1/4">구분</th>
                      <th className="px-3 py-2 text-left">Type 4 (Pulled)</th>
                      <th className="px-3 py-2 text-left">Type 5 (Pressed)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-105">
                    <tr>
                      <td className="px-3 py-2 font-medium bg-slate-50 dark:bg-slate-800/40 border-r border-slate-100 dark:border-slate-800">원인</td>
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">흉성의 과도한 개입 (Bottom-up 끌어올리기)</td>
                      <td className="px-3 py-2">순수하게 성대를 과도하게 짓누름 (맹목적인 Adduction 강제)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium bg-slate-50 dark:bg-slate-800/40 border-r border-slate-100 dark:border-slate-800">양상</td>
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">가창 시 음정이 올라갈수록 후두 상승, 브릿지에서 크게 Flip</td>
                      <td className="px-3 py-2">전 음역대에서 눌린 소리, 호흡 소진 빠름, 후두 고정 수축</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium bg-slate-50 dark:bg-slate-800/40 border-r border-slate-100 dark:border-slate-800">해법</td>
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">Top-down (Hooty), 이완 + 연결 의식 유지</td>
                      <td className="px-3 py-2">Hooty (과폐쇄 해제), Lip Trill (압력 분산)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Type 2 vs Type 6 */}
            <div className="space-y-3">
              <h3 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <AlertTriangle className="text-amber-500" size={16} />
                비슷해 보이지만 다른 과소폐쇄 (Type 2 vs 6)
              </h3>
              <div className="border border-slate-150 dark:border-slate-700/50 rounded-xl shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-slate-155 text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/40 font-semibold text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="px-3 py-2 text-left w-1/4">구분</th>
                      <th className="px-3 py-2 text-left">Type 2 (Light Unstable)</th>
                      <th className="px-3 py-2 text-left">Type 6 (Breathy)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-105">
                    <tr>
                      <td className="px-3 py-2 font-medium bg-slate-50 dark:bg-slate-800/40 border-r border-slate-100 dark:border-slate-800">원인</td>
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">성대 접촉 면적/근력 부족</td>
                      <td className="px-3 py-2">심각한 성대 폐쇄력 및 호흡 조절력 부재</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium bg-slate-50 dark:bg-slate-800/40 border-r border-slate-100 dark:border-slate-800">양상</td>
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">브릿지에서 잦은 Flip, 음정이 불안정함</td>
                      <td className="px-3 py-2">전 음역대 숨이 샘, Flip조차 발생하지 않는 옅은 소리</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium bg-slate-50 dark:bg-slate-800/40 border-r border-slate-100 dark:border-slate-800">해법</td>
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">Edgy mmm 활용해 순간 탠션 리셋</td>
                      <td className="px-3 py-2">자음(B,D,G) + mp~mf 환경의 연결 탐색 (과압착 전이 극경계)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Vowel & Consonant Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-3 border-t border-slate-105">
            {/* Vowel Narrowing Chart */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Activity className="text-indigo-500" size={16} />
                  모음 협착 교정 (Vowel Narrowing Chart)
                </h3>
              </div>
              <div className="border border-slate-150 dark:border-slate-700/50 rounded-xl shadow-sm">
                <table className="min-w-full divide-y divide-slate-155 text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/40 font-semibold text-slate-700 dark:text-slate-300">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left font-bold">Problem Vowel (문제 모음)</th>
                      <th scope="col" className="px-4 py-3 text-left font-bold">Narrower Vowel Solution (대체 모음)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-105">
                    {VOWEL_NARROWING_CHART.map((v) => (
                      <tr key={v.problem} className="hover:bg-slate-50 dark:bg-slate-800/40/50 transition-colors">
                        <td className="px-4 py-2 font-medium text-slate-800 dark:text-slate-200">{v.problem}</td>
                        <td className="px-4 py-2 font-bold text-indigo-700 dark:text-indigo-400">{v.substitution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Consonant Strength Chart */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                 <h3 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                   <Activity className="text-indigo-500" size={16} />
                   자음 저항력 분류 (Consonants Type)
                 </h3>
              </div>
              <div className="border border-slate-150 dark:border-slate-700/50 rounded-xl shadow-sm">
                <table className="min-w-full divide-y divide-slate-155 text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/40 font-semibold text-slate-700 dark:text-slate-300">
                    <tr>
                       <th scope="col" className="px-4 py-3 text-left font-bold">Level (차단 강도)</th>
                       <th scope="col" className="px-4 py-3 text-left font-bold">Examples (자음 예시)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-105">
                    {CONSONANT_STRENGTH_CHART.map((c) => (
                      <tr key={c.level} className="hover:bg-slate-50 dark:bg-slate-800/40/50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">{c.level}</td>
                        <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">{c.examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      )}

      {activeTab === 'transitions' && (
        <div className="space-y-5">
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-3.5 rounded-xl text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mb-1">
            <strong>💡 SLS 발성 전이란?</strong> 보컬 훈련과 발성 밸런스 발달에 따라, 학생이 지닌 태생적인 발성 성향(Tends To)은 유기적으로 변화하게 됩니다. 전이가 발생된다는 것은 이전 유형의 주요 구조적 피로도가 치유되고, 새로운 성장에 걸맞은 보컬 과도기가 나타났음을 알리는 성장의 신호입니다.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TRANSITION_GUIDE.map((tg) => (
              <div key={tg.path} className="border border-slate-150 dark:border-slate-700/50 rounded-xl p-4.5 hover:shadow-md transition-all bg-white dark:bg-slate-900 relative group">
                <div className="absolute top-0 right-0 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border-l border-b border-indigo-100 font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-bl-lg rounded-tr-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-200">
                  성장 경로 {TRANSITION_GUIDE.indexOf(tg) + 1}
                </div>

                <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-2.5 pt-1">
                  <RefreshCw className="text-indigo-500 animate-spin-slow" size={12} />
                  {tg.path}
                </h4>

                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 font-semibold block mb-0.5">유형 변화(전이)의 주된 원인:</strong>
                    <p className="bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800/60 text-[11px]"><TermTooltip text={tg.reason} /></p>
                  </div>

                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 font-semibold block mb-0.5">실전 코칭 대응 전략:</strong>
                    <p className="text-slate-700 dark:text-slate-300 text-[11px]"><TermTooltip text={tg.solution} /></p>
                  </div>

                  <div className="bg-rose-50/30 border border-rose-100 p-2.5 rounded-lg text-rose-800 dark:text-rose-300 text-[10px]">
                    <strong className="block text-rose-900 font-bold">⚠️ 트레이닝 시 주요 주의사항:</strong>
                    <TermTooltip text={tg.attention} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'science' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 p-5 md:p-6 rounded-2xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-full pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4">
               <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
                     <Activity className="text-teal-600" size={20} />
                     발성 훈련의 과학적 근거 (SLS & 현대 음성 과학 학술 매치)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                     SLS 발명 초기의 직관적 훈련 시스템이 현대 음성과학 논문에서 어떻게 과학적 사실로 교차 검증되는지 매핑한 전문 자료입니다.
                  </p>
               </div>
            </div>

            <div className="space-y-5 text-sm">
                
                {/* 1. 철학과 근육 제어 */}
                <div className="border border-slate-100 dark:border-slate-800 rounded-xl p-4 md:p-5 bg-slate-50 dark:bg-slate-800/40/50">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                     <span className="bg-teal-100 text-teal-800 dark:text-teal-300 text-[10px] w-5 h-5 flex items-center justify-center rounded-md font-mono">1</span>
                     SLS의 철학과 근육 제어 (Type 1 기반)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                     <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
                        <strong className="text-indigo-600 block mb-1">SLS 훈련 매뉴얼</strong>
                        말할 때처럼(Speech Level) 후두가 안정되고, 외재근(삼키는 근육)의 개입 없이 내재근만으로 발성해야 한다.
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300">
                        <strong className="text-emerald-400 block mb-1">현대 증명 논문</strong>
                        <ul className="list-disc pl-4 space-y-1">
                           <li><strong className="text-white">Chhetri (2012, 2014):</strong> TA, CT, LCA의 내재근 활성도만으로 음정과 성문 자세가 충분히 제어됨을 증명. 외재근(스트랩) 사용 배제의 과학적 근거.</li>
                           <li><strong className="text-white">Palaparthi (2019) / Geng (2020):</strong> 과도한 TA 개입 없이 TA-CT 밸런스를 유지하는 "스피치 레벨"의 MAP(근육 활성도) 위치를 일치하게 밝혀냄.</li>
                        </ul>
                     </div>
                  </div>
                </div>

                {/* 2. 믹스와 브릿지 */}
                <div className="border border-slate-100 dark:border-slate-800 rounded-xl p-4 md:p-5 bg-slate-50 dark:bg-slate-800/40/50">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                     <span className="bg-teal-100 text-teal-800 dark:text-teal-300 text-[10px] w-5 h-5 flex items-center justify-center rounded-md font-mono">2</span>
                     믹스(Mix)와 브릿지 불안정성
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                     <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
                        <strong className="text-indigo-600 block mb-1">SLS 훈련 매뉴얼</strong>
                        브릿지를 부드럽게 넘어가는 것이 핵심이며, 이 통과 구간에서 불안정해지는 것(Type 3)은 흉성 무게가 방해하기 때문이다.
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300">
                        <strong className="text-emerald-400 block mb-1">현대 증명 논문</strong>
                        <ul className="list-disc pl-4 space-y-1">
                           <li><strong className="text-white">Titze (2014):</strong> 성문이 윗면과 아랫면 모두 직사각형(평행)인 믹스 상태(Mixed registration)는 수렴/발산형보다 물리적으로 불안정함. 브릿지 위기의 물리적 기원을 가장 완벽히 설명!</li>
                           <li><strong className="text-white">Roubeau (2007):</strong> M1(흉성)과 M2(두성/가성) 구역 사이의 주파수 도약(Jump)을 넘는 과정이라고 분류.</li>
                        </ul>
                     </div>
                  </div>
                </div>

                {/* 3. 립 트릴 공용 안전툴 */}
                <div className="border border-slate-100 dark:border-slate-800 rounded-xl p-4 md:p-5 bg-slate-50 dark:bg-slate-800/40/50">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                     <span className="bg-teal-100 text-teal-800 dark:text-teal-300 text-[10px] w-5 h-5 flex items-center justify-center rounded-md font-mono">3</span>
                     립 / 혀 트릴 (Tier 1 안전 툴의 과학)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                     <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
                        <strong className="text-indigo-600 block mb-1">SLS 훈련 매뉴얼</strong>
                        모든 유형에서 부작용 없이 사용 가능. 과압축(Type 4,5)을 만들지 않고 과소폐쇄(Type 2,6)도 악화시키지 않는 유일한 시작점.
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300">
                        <strong className="text-emerald-400 block mb-1">현대 증명 논문</strong>
                        <ul className="list-disc pl-4 space-y-1">
                           <li><strong className="text-white">Titze (2009):</strong> 립 트릴은 반폐쇄성도(SOVT) 도구로써 성도 임피던스를 향상시켜 발성 임계압(PTP)을 대폭 하락하게 물리 모델링을 수정함. 힘 안 들이고 성대를 진동시키는 SLS 안전 툴의 1티어 정당성 부여.</li>
                        </ul>
                     </div>
                  </div>
                </div>

                {/* 4. 접촉 부족과 과도 압축 해결 */}
                <div className="border border-slate-100 dark:border-slate-800 rounded-xl p-4 md:p-5 bg-slate-50 dark:bg-slate-800/40/50">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                     <span className="bg-teal-100 text-teal-800 dark:text-teal-300 text-[10px] w-5 h-5 flex items-center justify-center rounded-md font-mono">4</span>
                     성대 폐쇄율 제어 (접촉 부족 vs 과도)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                     <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
                        <div>
                           <strong className="text-indigo-600 block mb-0.5">Type 2, 6 (접촉 부족)</strong>
                           Edge mmm, 경음(B/D/K), Bratty로 성대를 붙여줘야 한다.
                        </div>
                        <div className="border-t border-slate-150 dark:border-slate-700/50 pt-2">
                           <strong className="text-indigo-600 block mb-0.5">Type 4, 5 (과도 접촉)</strong>
                           경음을 빼고 Hooty나 Lip Trill로 이완시켜야 한다.
                        </div>
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300 space-y-2">
                        <div>
                           <strong className="text-emerald-400 block mb-0.5">Švec (1999) - Videokymography</strong>
                           가성/숨새는 폐쇄율(CQ)이 극도로 낮음. Edge 훈련이 CQ를 순간적으로 강제 상승시키는 유효한 방법임을 증명.
                        </div>
                        <div className="border-t border-slate-600 pt-2 mt-2">
                           <strong className="text-emerald-400 block mb-0.5">Geng (2020) / Jiang (2024)</strong>
                           Type 4는 TA 과도 활성, Type 5는 성문 수렴형(Convergent) 상태임. 성문 형태(수렴/발산/직사각)의 극단화를 막는 양극단 툴 배치 원리.
                        </div>
                     </div>
                  </div>
                </div>

                 {/* 5. 모음 좁히기와 트리킹 */}
                 <div className="border border-slate-100 dark:border-slate-800 rounded-xl p-4 md:p-5 bg-slate-50 dark:bg-slate-800/40/50">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                     <span className="bg-teal-100 text-teal-800 dark:text-teal-300 text-[10px] w-5 h-5 flex items-center justify-center rounded-md font-mono">5</span>
                     모음 좁히기(Narrowing)와 Tricking
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                     <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
                        <strong className="text-indigo-600 block mb-1">SLS 훈련 매뉴얼</strong>
                        무거운 흉성 풀링은 반드시 높은 음에서 시작(Tricking)하여 새로운 조정을 경험토록 한다. 넓은 [a]에서 좁은 [i, u] 모음으로 전환시킨다.
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300">
                        <strong className="text-emerald-400 block mb-1">현대 증명 논문</strong>
                        <ul className="list-disc pl-4 space-y-1">
                           <li><strong className="text-white">Maxfield (2017) Source-Filter:</strong> 넓은 모음의 F1 공명 주파수는 고음 진입 시 배음들과 비선형 음향 충돌을 유발함. 좁은 모음은 포먼트를 낮춰 물리적 브레이크를 방어.</li>
                           <li><strong className="text-white">Jiang (2024):</strong> 트릭킹(고음 하행)이 통하는 이유는 고음에서 CT가 지배적이라 TA의 고질적 의존성을 물리적으로 차단하기 때문.</li>
                        </ul>
                     </div>
                  </div>
                </div>

                {/* 6. 과압착 이완 메커니즘 */}
                <div className="border border-slate-100 dark:border-slate-800 rounded-xl p-4 md:p-5 bg-slate-50 dark:bg-slate-800/40/50">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                     <span className="bg-teal-100 text-teal-800 dark:text-teal-300 text-[10px] w-5 h-5 flex items-center justify-center rounded-md font-mono">6</span>
                     Type 5 유도와 극단적 이완 원리
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                     <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
                        <strong className="text-indigo-600 block mb-1">SLS 훈련 매뉴얼</strong>
                        성대가 완강하게 붙어 안 나올 때 "더 세게 붙여라"는 절대 금지. 트릴로 성대가 "살짝 떨어지는 느낌"까지 성문 저항을 풀어라.
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300">
                        <strong className="text-emerald-400 block mb-1">현대 증명 논문</strong>
                        <ul className="list-disc pl-4 space-y-1">
                           <li><strong className="text-white">Titze (2014):</strong> 파열 스트레스 단계의 과압착 상태(극단적 수렴형 성문)에서 가하는 추가 압력은 조직 파괴 유발. SOVT는 후두내압을 신속히 하강시켜 폭발을 방지하는 유일무이한 응급 처방임.</li>
                        </ul>
                     </div>
                  </div>
                </div>

            </div>

             {/* 결론 */}
             <div className="mt-6 bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl text-slate-300">
               <h4 className="text-sm font-bold text-emerald-400 mb-2">💡 통찰과 시사점: (코칭 가이드)</h4>
               <p className="text-xs leading-relaxed">
                 SLS 6가지 도구 상자와 툴들은 성문 하강 훈련법이 아닙니다. 학생에게 툴을 제시할 때, "세스 리그스가 그렇게 했기 때문에" 가 아닌, <strong>"이 툴이 당신의 성문 형태를 직사각형(믹스)으로 물리 변형시켜주고, 성문하압의 불연속적 폭발을 막아 안전하게 발성할 수 있게 해주는 구조적 해법 (Titze 2014 모델 등)"</strong>이라고 인지하고 코치할 때 그 위력과 안정성이 극대화됩니다.
               </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'postures' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 p-5 md:p-6 rounded-2xl shadow-sm relative overflow-hidden">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2 mb-4">
              <Sparkles className="text-emerald-500" size={20} />
              신체 큐잉과 자세 (Somatic Cues)
            </h3>
            
            <p className="text-[13px] text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              SLS에서는 자음+모음 툴뿐만 아니라 신체의 움직임과 자세를 활용한 큐잉도 중요하게 다룹니다. 무의식적 긴장 패턴을 차단하고, 올바른 발성 조건을 간접적으로 유도합니다. 특히 고음에서 후두 상승이나 외부 근육 개입이 심한 학생에게 효과적입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-indigo-700 dark:text-indigo-400">① 허리 굽히기 (Bend Forward)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">고음에 다가갈 때 허리를 앞으로 굽혀 고음에 대한 불안감을 해소하고 '도달하려는' 습관을 차단합니다.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  추천: Type 4 (Pull Chest), Type 5 (Pressed)
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-indigo-700 dark:text-indigo-400">② 손가락으로 볼 받치기</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">손가락으로 볼과 입 주변을 받쳐 턱과 입술의 긴장을 풉니다. 과도한 공기 사용을 방지합니다.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  추천: Type 2, 4 (Lip Trill 훈련 시)
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-emerald-700 dark:text-emerald-400">③ Speech-Level Posture (가장 핵심)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">후두가 안정된 위치에 머물게 합니다. 고음에서 턱을 들거나 저음에서 고개를 숙이지 않는 중립 자세를 유지합니다.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  추천: 모든 유형의 최종 상태 (Type 1)
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-teal-700 dark:text-teal-400">④ 이완 유도 (Relaxation)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">심호흡, 어깨 롤(Shoulder Roll), 스트레칭 등을 통해 전신의 긴장을 해소한 후 훈련에 돌입합니다.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  추천: Type 5 (신체적 과긴장 동반 시)
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-sky-700 dark:text-sky-400">⑤ 고개 숙이기 (Chin Tuck)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">턱을 가슴 쪽으로 약간 숙인 채 발성하여 설골상근 긴장을 감소시키고 후두 상승 억제.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  추천: Type 4 (Pulled Chest 후두 상승 억제)
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-purple-700 dark:text-purple-400">⑥ 허리 숙이기 (Bend Forward)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">허리를 앞으로 약 45도 숙이고 발성하여 복강내압을 자동 증가, 호흡 지원 파워 자동화.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  추천: Type 6 (Breathy/Weak 호흡 지원 강화)
                </div>
              </div>
            </div>

            <h3 className="text-[14px] font-bold text-slate-800 dark:text-slate-200 mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">유형별 추천 신체 큐 요약정리</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-150 dark:border-slate-700/50">
              <table className="w-full text-xs text-left min-w-[600px]">
                <thead className="bg-slate-50 dark:bg-slate-800/40 font-semibold text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50 w-32">유형</th>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50">추천 신체 큐</th>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50 w-1/2">목적 및 이유</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-teal-700 dark:text-teal-400">Type 1</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">Speech-Level Posture</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">이미 균형이 잡혀 있으므로 다른 동작 없이 기본 자세만 유지</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-sky-600">Type 2</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">Cry / 볼 받치기</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">접촉을 강화하고 입 주변 긴장을 풀어 과도한 공기 사용을 방지</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-indigo-600">Type 3</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">고개 돌리기 + Cry, 걷기</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">브리지 통과 시 긴장 완화 및 전신 이완으로 자연스러운 연결 유도</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-amber-600">Type 4</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">허리 굽히기(핵심) + Dopy</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">고음을 향해 '도달'하려는 나쁜 습관을 물리적으로 차단, 후두 억제</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-rose-600">Type 5</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">어깨 롤링 + 이완 + Dopy</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">몸 전체의 압축과 과폐쇄를 풀고 후두 하강을 통해 공간을 확보</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-emerald-600">Type 6</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">Cry + 걷기</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">적당한 텐션의 접촉 강화 및 심리적 긴장 완화로 호흡 조절력 향상</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}

      {activeTab === 'vowels' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 p-5 md:p-6 rounded-2xl shadow-sm relative overflow-hidden">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2 mb-4">
              <Sparkles className="text-purple-500" size={20} />
              모음 분류 및 진행 원칙 (Vowel Strategies)
            </h3>
            
            <p className="text-[13px] text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              SLS에서 모음(Vowel)은 성도(Vocal Tract)의 형태를 변화시켜 성대 접촉과 공명에 영향을 미치는 핵심 조절매개변수입니다. 운동학습 관점에서 모음 선택 자체가 발성 시스템의 특정 방향의 자기조직화를 유도하는 '과제 제약(Task Constraint)'입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-300 text-[13px] mb-2">좁은 모음 [i], [u], [o]</h4>
                <ul className="text-[11px] text-slate-700 dark:text-slate-300 space-y-1.5 list-disc pl-4 marker:text-indigo-400">
                  <li><strong>성도 형태:</strong> 구강 내 공간 축소, 성도가 좁아짐.</li>
                  <li><strong>과제 효과:</strong> 두성 유도, 성대 접촉 간접 지원, 브릿지 통과 원활.</li>
                  <li><strong>활용 유형:</strong> Type 4, 5 (과압축 완화, 두성 유도. 흉성이 강한 자에게 유리)</li>
                </ul>
              </div>
              <div className="p-4 bg-rose-50/50 border border-rose-100 rounded-xl">
                <h4 className="font-bold text-rose-800 dark:text-rose-300 text-[13px] mb-2">넓은 모음 [a], [æ]</h4>
                <ul className="text-[11px] text-slate-700 dark:text-slate-300 space-y-1.5 list-disc pl-4 marker:text-rose-400">
                  <li><strong>성도 형태:</strong> 구강 내 공간 확대, 성도가 넓어짐.</li>
                  <li><strong>과제 효과:</strong> 흉성 유도, 풍부한 배음 형성, 성대 접촉 강화.</li>
                  <li><strong>활용 유형:</strong> Type 2, 6 (흉성 발견, 접촉 형성. 흉성이 약한 자에게 유리)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-3 mt-6 border-b border-slate-100 dark:border-slate-800 pb-2">모음 3 카테고리 기전</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-150 dark:border-slate-700/50 mb-6">
              <table className="w-full text-xs text-left min-w-[500px]">
                <thead className="bg-slate-50 dark:bg-slate-800/40 font-semibold text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50">카테고리</th>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50">예시 모음</th>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50">활성화 레지스터</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-indigo-600">Narrow (좁은 모음)</td>
                    <td className="px-3 py-2.5 font-mono">OO (/u/), EE (/i/)</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">Head Voice 활성화, Bridge 통과 용이</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-teal-600">Medium (중간 모음)</td>
                    <td className="px-3 py-2.5 font-mono">UH (/ʌ/), ʊ (/ʊ/)</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">Mix Voice 활성화, Register 전환 균형</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-rose-600">Wide (넓은 모음)</td>
                    <td className="px-3 py-2.5 font-mono">AH (/æ/), A (/ɑ/), EY, EH</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">Chest Voice 고정, 파워 및 공명</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-purple-50/40 border border-purple-100 rounded-xl">
               <h3 className="text-[12px] font-bold text-purple-900 mb-2">💡 SLS 모음 훈련 진행 원칙</h3>
               <p className="text-[11px] md:text-xs text-purple-800 dark:text-purple-300/80 leading-relaxed font-medium">
                 가장 보편적인 교정 메커니즘은 <strong>좁은 모음 → 중간 모음 → 넓은 모음</strong> 순으로 진행하며, 환절기에서 당김이 심해질 때 좁은 모음으로 임시 스윙하여 안정성을 보강합니다. 지속적으로 좁은 모음만 부르면 Head Voice 파워가 미약해지는 부작용이 생기므로, 반드시 브리지를 안착한 후엔 입을 열어(Wide) 본래의 파워를 얻어야 합니다.
               </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'protocol' && (
        <MotorProtocolGuide />
      )}

      {activeTab === 'quickRef' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 p-5 md:p-6 rounded-2xl shadow-sm relative overflow-hidden">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2 mb-4">
              <Sparkles className="text-amber-500" size={20} />
              유형별 스케일·강도·호흡 종합표
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-150 dark:border-slate-700/50">
              <table className="w-full text-xs text-left min-w-[700px]">
                <thead className="bg-slate-50 dark:bg-slate-800/40 font-semibold text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50 text-center w-16">유형</th>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50">초기 스케일 (Discover/Add)</th>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50">후기 스케일 (Stabilize/Speech)</th>
                    <th className="px-2 py-3 border-b border-slate-150 dark:border-slate-700/50">초기 강도</th>
                    <th className="px-2 py-3 border-b border-slate-150 dark:border-slate-700/50">후기 강도</th>
                    <th className="px-2 py-3 border-b border-slate-150 dark:border-slate-700/50">초기 호흡</th>
                    <th className="px-2 py-3 border-b border-slate-150 dark:border-slate-700/50">후기 호흡</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50 transition-colors">
                    <td className="px-3 py-3 font-bold text-teal-700 dark:text-teal-400 text-center">Type 1</td>
                    <td className="px-3 py-3">5-Tone<br/><span className="text-[10px] text-slate-400">1.5 Octave</span></td>
                    <td className="px-3 py-3">Octave Repeater<br/><span className="text-[10px] text-slate-400">Octave Down</span></td>
                    <td className="px-2 py-3 font-semibold">mf</td>
                    <td className="px-2 py-3 font-semibold">mp~f <span className="text-[9px] text-slate-400 block">(다이나믹스)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">중</td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">중</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50 transition-colors">
                    <td className="px-3 py-3 font-bold text-sky-600 text-center">Type 2</td>
                    <td className="px-3 py-3">Staccato<br/><span className="text-[10px] text-slate-400">5-Tone [ae]</span></td>
                    <td className="px-3 py-3">1.5 Octave<br/><span className="text-[10px] text-slate-400">Octave Repeater</span></td>
                    <td className="px-2 py-3 font-semibold text-rose-600">mp~mf <span className="text-[9px] block text-slate-400">(접촉 만들기)</span></td>
                    <td className="px-2 py-3 font-semibold">mf <span className="text-[9px] block text-slate-400">(자연스럽게)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">고 <span className="text-[9px] block text-slate-400">(짧게 토스)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">중</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50 transition-colors">
                    <td className="px-3 py-3 font-bold text-purple-600 text-center">Type 3</td>
                    <td className="px-3 py-3">1.5 Octave<br/><span className="text-[10px] text-slate-400">Octave Repeater</span></td>
                    <td className="px-3 py-3">Octave Repeater<br/><span className="text-[10px] text-slate-400">Octave Down 3x</span></td>
                    <td className="px-2 py-3 font-semibold">mf→p <span className="text-[9px] block text-slate-400">(통과 시 약하게)</span></td>
                    <td className="px-2 py-3 font-semibold">mf <span className="text-[9px] block text-slate-400">(자연스럽게)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">중→약 <span className="text-[9px] block text-slate-400">(통과 시)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">중</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50 transition-colors">
                    <td className="px-3 py-3 font-bold text-amber-600 text-center">Type 4</td>
                    <td className="px-3 py-3">1.5 Octave <span className="text-[9px] text-slate-400">(Tricking)</span></td>
                    <td className="px-3 py-3">Octave Repeater <span className="text-[9px] text-slate-400">(Reinforcing)</span><br/><span className="text-[10px] text-slate-400">Octave Down 3x</span></td>
                    <td className="px-2 py-3 font-semibold text-teal-600">p~mp <span className="text-[9px] block text-slate-400">(절대 밀지 않기)</span></td>
                    <td className="px-2 py-3 font-semibold">mf <span className="text-[9px] block text-slate-400">(새 감각 강화)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">저 <span className="text-[9px] block text-slate-400">(가볍게)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">중</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50 transition-colors">
                    <td className="px-3 py-3 font-bold text-rose-600 text-center">Type 5</td>
                    <td className="px-3 py-3">1.5 Octave <span className="text-[9px] text-slate-400">(Tricking)</span></td>
                    <td className="px-3 py-3">Octave Repeater<br/><span className="text-[10px] text-slate-400">Octave Down 3x</span></td>
                    <td className="px-2 py-3 font-semibold text-teal-600">p <span className="text-[9px] block text-slate-400">(Trill=선명, Hooty=치료적 숨섞임)</span></td>
                    <td className="px-2 py-3 font-semibold">mp~mf <span className="text-[9px] block text-slate-400">(자연 접촉 복귀)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">최저 <span className="text-[9px] block text-slate-400">(Trill) → 약간 숨섞임(Hooty)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">약→중</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50 transition-colors">
                    <td className="px-3 py-3 font-bold text-emerald-600 text-center">Type 6</td>
                    <td className="px-3 py-3">Staccato<br/><span className="text-[10px] text-slate-400">5-Tone [ae]</span></td>
                    <td className="px-3 py-3">1.5 Octave<br/><span className="text-[10px] text-slate-400">Octave Repeater</span></td>
                    <td className="px-2 py-3 font-semibold text-rose-600">mp~mf <span className="text-[9px] block text-slate-400">(접촉 유도)</span></td>
                    <td className="px-2 py-3 font-semibold text-rose-600">mf <span className="text-[9px] block text-slate-400">(균형 유지)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">중 <span className="text-[9px] block text-slate-400">(목척금지)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">중 <span className="text-[9px] block text-rose-400">(전이 주의)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2 mb-4 mt-10">
              <AlertTriangle className="text-rose-500" size={20} />
              위험 신호 및 대응 가이드 (Warning Signs)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="border border-rose-100 bg-rose-50/30 rounded-xl p-4">
                  <h4 className="font-bold text-rose-700 dark:text-rose-400 text-sm mb-1">고음에서 후두가 상승하는 느낌</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-mono bg-white dark:bg-slate-900 inline-block px-1.5 py-0.5 rounded shadow-sm border border-slate-100 dark:border-slate-800">Type 4 (초기 신호)</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">Hooty로 일시적 이완 후 재시도. 넓은 모음 사용 즉시 중단.</p>
                  <p className="text-[10px] font-semibold text-rose-600 flex items-center gap-1"><RefreshCw size={10}/> p 강도로 리셋</p>
               </div>
               
               <div className="border border-rose-100 bg-rose-50/30 rounded-xl p-4">
                  <h4 className="font-bold text-rose-700 dark:text-rose-400 text-sm mb-1">음이 전부 연결되지 않고 끊어짐</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-mono bg-white dark:bg-slate-900 inline-block px-1.5 py-0.5 rounded shadow-sm border border-slate-100 dark:border-slate-800">Type 2, 6</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">경음 자음 + 넓은 모음으로 접촉을 강제 확립. Hooty 사용 중지.</p>
               </div>

               <div className="border border-rose-100 bg-rose-50/30 rounded-xl p-4">
                  <h4 className="font-bold text-rose-700 dark:text-rose-400 text-sm mb-1">음이 통째 막히고 기류가 안 나옴</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-mono bg-white dark:bg-slate-900 inline-block px-1.5 py-0.5 rounded shadow-sm border border-slate-100 dark:border-slate-800">Type 5</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">Tongue Trill + Lip Trill로 시작해 무조건 기류를 열고 압을 빼줍니다.</p>
                  <p className="text-[10px] font-semibold text-rose-600">"압 더 세게" 절대 금지</p>
               </div>

               <div className="border border-rose-100 bg-rose-50/30 rounded-xl p-4">
                  <h4 className="font-bold text-rose-700 dark:text-rose-400 text-sm mb-1">30분 이상 지속되는 쉰 목소리</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-mono bg-white dark:bg-slate-900 inline-block px-1.5 py-0.5 rounded shadow-sm border border-slate-100 dark:border-slate-800">모든 유형 (위험!)</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">즉시 연습 중단. 48시간 휴식 및 후두 외상 ENT 전문의 상담 권고.</p>
               </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'motorLearning' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 p-5 md:p-6 rounded-2xl shadow-sm relative overflow-hidden">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2 mb-4">
              <Sparkles className="text-blue-500" size={20} />
              복잡계 관점의 운동 제어와 발성 교육
            </h3>
            
            <p className="text-[13px] text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              SLS 교육 방법론을 최신 스포츠 과학/재활의학의 '복잡계(Complex Systems) 및 동적 시스템 이론(Dynamic Systems Theory)' 관점으로 해석합니다. 발성 문제를 선형적으로 교정하려는 관점에서 벗어나, <strong>수행자(Performer), 과제(Task), 환경(Environment)</strong>이라는 제약 조건 속에서 발성 시스템이 어떤 협응을 창발해내는지를 이해하는 체계입니다. 강사의 역할은 '교정자'에서 '조건 설계자'로 매끄럽게 전환됩니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl space-y-2">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 text-[13px]">1. 패러다임의 전환: 교정에서 '조건 설계(중재)'로</h4>
                <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  문제적 소리(Pull Chest, No Chest 등)는 단순한 <strong>실수</strong>가 아니라, 현재의 조건(과도한 음정/음량) 속에서 살기 위해 신경계가 선택해 파놓은 깊은 골짜기, <strong>보상 끌개(Attractor)</strong>입니다. "목 열어" 같은 몸통 직접 조정(MMC)은 실패하며, 대신 <strong>오직 올바른 협응만 나올 수 있는 저항력 있는 툴로 과제 규칙(조건) 자체를 개조</strong>해야 합니다.
                </p>
              </div>
              <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl space-y-2">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-300 text-[13px]">2. 자기조직화(Self-Organization)와 창발(Emergence)</h4>
                <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  학생이 수많은 성대와 호흡 내부 근육들을 하나하나 의식으로 통제(자유도 문제)할 수 없습니다. 교사가 학생의 자유도를 제한하는 특수 툴(자음, 모음, SOVTE)이라는 <strong>과제 제약(Task Constraint)</strong>을 주면, 학생의 신경계가 생존을 위해 그 모양대로 <strong>스스로 목표 협응을 창발해 조립</strong>합니다.
                </p>
              </div>
              <div className="p-4 bg-teal-50/50 border border-teal-100 rounded-xl space-y-2">
                <h4 className="font-bold text-teal-800 dark:text-teal-300 text-[13px]">3. SOVTE와 Vocalise = 과제 제약</h4>
                <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Lip Trill이나 좁은 모음 스케일은 성문 압력을 올려주는 단순한 요술 지팡이가 아닙니다. 풀체스트 같은 <strong>틀린 버릇을 아예 쓸 수가 없는 물리적 한계 환경을 목에 씌워버리는 '과제 제약'</strong>입니다. 자유도를 얼려서 악습을 틀어막고 정방향을 일러줍니다.
                </p>
              </div>
              <div className="p-4 bg-rose-50/50 border border-rose-100 rounded-xl space-y-2">
                <h4 className="font-bold text-rose-800 dark:text-rose-300 text-[13px]">4. 임계 요동(Critical Fluctuation)과 상전이</h4>
                <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  파사지오 대역에서 소리가 불안정하게 떨리거나 살짝 플립되는 것을 즉시 실패로 심판하지 마세요. 거대했던 무거운 흉성의 협응 체계가 부서지고 새로운 믹스 체계로 환승하며 일어나는 <strong>상전이(Phase Transition)의 정상적 신호이자 '좋은 변동성'</strong>일 수 있습니다.
                </p>
              </div>
            </div>

            <MotorChecklistGuide />
          </div>
        </div>
      )}

      {activeTab === 'laxVox' && (
        <LaxVoxGuide />
      )}
    </div>
  );
}
