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
        이 가이드는 <strong>Airflow(기류), 소리의 연결, 모음, 노력감</strong>의 변화를 관찰 항목으로 사용합니다. 이 항목만으로 후두 위치·성대 접촉·근육 상태를 진단하거나 특정 결과를 보장하지 않으며, 학생 반응에 따라 다음 과제를 선택합니다.
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
              Tier 1: 초기 비교 후보 (워밍업·탐색용, 자동 안전 보장 아님)
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
                    <strong className="text-emerald-700 dark:text-emerald-400 font-bold block mb-0.5">사용 전 비교할 점:</strong>
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
              Tier 2: 기본 탐색 후보 (학생 반응을 확인하며 사용)
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
                    <strong className="block text-slate-800 dark:text-slate-200 font-bold mb-0.5">비교할 수 있는 점:</strong>
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
                유형별 반응 비교표 (고정 금지표 아님)
              </h3>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">⚠️ 같은 툴도 학생·음역·음량에 따라 반응이 다를 수 있으므로 관찰 후 유지·변경합니다.</span>
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
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">상행에서 음량·노력감이 커지고 무거운 연결이 지속되는 경향</td>
                      <td className="px-3 py-2">과제 전반에서 눌림·거친 음질·불편감이 함께 관찰되는 경향</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium bg-slate-50 dark:bg-slate-800/40 border-r border-slate-100 dark:border-slate-800">양상</td>
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">상행에서 음량·노력감·연결의 변화가 커지거나 플립이 나타남</td>
                      <td className="px-3 py-2">음역과 무관하게 눌림·거침·노력감이 반복되는지 확인</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium bg-slate-50 dark:bg-slate-800/40 border-r border-slate-100 dark:border-slate-800">해법</td>
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">Hooty·Lip Trill·Goo 등을 짧게 비교하고, 상행에서 노력감과 연결이 어떻게 달라지는지 기록</td>
                      <td className="px-3 py-2">Hooty·Lip Trill·Mum 등을 짧게 비교하고, 눌림·불편감이 줄어드는 조건을 확인</td>
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
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">작은 소리에서 중심과 연결이 불안정하게 들리는 경향</td>
                      <td className="px-3 py-2">기류감이 크고 모음이 바뀌면 선명도·지속이 달라지는 경향</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium bg-slate-50 dark:bg-slate-800/40 border-r border-slate-100 dark:border-slate-800">양상</td>
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">상행·하행 또는 음량을 바꿀 때 플립과 음정 안정성이 달라지는지 확인</td>
                      <td className="px-3 py-2">전 음역에서 기류감·옅은 음질이 지속되는지, 과제에 따라 달라지는지 확인</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium bg-slate-50 dark:bg-slate-800/40 border-r border-slate-100 dark:border-slate-800">해법</td>
                      <td className="px-3 py-2 border-r border-slate-100 dark:border-slate-800">Edgy mmm·Lip Trill·Goo를 비교해 선명도와 노력감이 함께 좋아지는지 확인</td>
                      <td className="px-3 py-2">B·D·G·Mum·Goo 등을 낮은 음량에서 비교하고, 선명도와 눌림을 함께 관찰</td>
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
            <strong>💡 조건 변화 기록이란?</strong> 같은 학생도 과제·음역·모음·음량에 따라 다른 반응을 보일 수 있습니다. 아래 경로는 유형이 실제로 생리적으로 전환된다는 뜻이 아니라, 이전 과제와 다른 반응이 관찰될 때 다음 비교 조건을 선택하는 기록 방식입니다.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TRANSITION_GUIDE.map((tg) => (
              <div key={tg.path} className="border border-slate-150 dark:border-slate-700/50 rounded-xl p-4.5 hover:shadow-md transition-all bg-white dark:bg-slate-900 relative group">
                <div className="absolute top-0 right-0 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border-l border-b border-indigo-100 font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-bl-lg rounded-tr-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-200">
                  비교 경로 {TRANSITION_GUIDE.indexOf(tg) + 1}
                </div>

                <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-2.5 pt-1">
                  <RefreshCw className="text-indigo-500 animate-spin-slow" size={12} />
                  {tg.path}
                </h4>

                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 font-semibold block mb-0.5">관찰된 변화의 조건:</strong>
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
                     발성 훈련의 근거와 코칭 해석
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                     SLS 자료의 코칭 원칙, 연구가 실제로 다룬 범위, 현장에서 사용할 수 있는 비교 가설을 분리해 읽는 참고 화면입니다. 논문이 이 앱의 유형·도구 처방 전체를 증명한다는 뜻은 아닙니다.
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
                        SLS에서 말하는 Speech Level은 말하듯 편안한 조건과 연결을 탐색하는 코칭 목표로 기록합니다. 실제 후두 위치나 외재근 사용은 이 화면의 관찰만으로 확정하지 않습니다.
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300">
                        <strong className="text-emerald-400 block mb-1">관련 연구 참고</strong>
                        <ul className="list-disc pl-4 space-y-1">
                           <li><strong className="text-white">Chhetri 관련 연구:</strong> 후두 근육 활동을 다룬 연구로 참고할 수 있지만, 외재근을 배제해야 한다는 교육 원칙이나 이 앱의 Type 분류를 직접 증명하는 근거로 확대하지 않습니다.</li>
                           <li><strong className="text-white">Palaparthi / Geng 관련 문헌:</strong> 대상·과제·측정 범위를 원문에서 확인한 뒤 해당 결과만 인용해야 합니다. 특정 학생의 TA·CT 균형이나 Speech Level 상태를 청취만으로 판정하지 않습니다.</li>
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
                        브리지에서 연결이 흔들리면 음량·모음·진행 방향을 바꿔 부담이 줄어드는 조건을 찾습니다. Type 3은 이 앱에서 조건에 따른 변화를 기록하기 위한 현장형 분류입니다.
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300">
                        <strong className="text-emerald-400 block mb-1">관련 연구 참고</strong>
                        <ul className="list-disc pl-4 space-y-1">
                           <li><strong className="text-white">Titze 관련 모델:</strong> 성문·성도 상호작용을 설명하는 물리 모델로 참고합니다. 모든 가수의 믹스가 불안정하거나 특정 툴이 이를 해결한다고 결론내리지 않습니다.</li>
                           <li><strong className="text-white">Roubeau 관련 문헌:</strong> M1·M2와 레지스터 전환을 설명하는 용어 체계로 참고하며, 이 용어를 개인의 생리 상태 진단으로 사용하지 않습니다.</li>
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
                        초기 탐색의 한 후보입니다. 개인별로 기류·음질·노력감이 달라질 수 있으므로, 과압축이나 과소폐쇄를 자동으로 예방한다고 전제하지 않습니다.
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300">
                        <strong className="text-emerald-400 block mb-1">관련 연구 참고</strong>
                        <ul className="list-disc pl-4 space-y-1">
                           <li><strong className="text-white">Titze 관련 SOVT 모델:</strong> 반폐쇄 조건에서 음원과 성도의 상호작용·발성 임계압을 설명하는 모델 근거로 참고합니다. 립 트릴이 모든 사람에게 힘을 줄이거나 안전을 보장한다고 일반화하지 않습니다.</li>
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
                           <strong className="text-indigo-600 block mb-0.5">Type 2, 6 (중심이 약하게 들리는 경향)</strong>
                           Edge mmm·B/D/K·Bratty 등을 낮은 음량에서 비교하고, 자음만 강해지거나 눌림이 늘지 않는지 확인한다.
                        </div>
                        <div className="border-t border-slate-150 dark:border-slate-700/50 pt-2">
                           <strong className="text-indigo-600 block mb-0.5">Type 4, 5 (눌림이 관찰되는 경향)</strong>
                           Hooty·Lip Trill·Goo·Mum 등을 비교하고, 불편감이나 노력감이 늘면 과제를 낮추거나 중단한다.
                        </div>
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300 space-y-2">
                        <div>
                           <strong className="text-emerald-400 block mb-0.5">Švec (1999) - Videokymography</strong>
                           가성/숨새는 폐쇄율(CQ)이 극도로 낮음. 해당 연구 결과를 특정 Edge 처방의 효과로 일반화하지 않습니다.
                        </div>
                        <div className="border-t border-slate-600 pt-2 mt-2">
                           <strong className="text-emerald-400 block mb-0.5">관련 근육·성문 연구</strong>
                           근육 활동이나 성문 형태를 다룬 연구 결과를 특정 학생의 Type 4·5 상태로 바로 번역하지 않습니다. 이 화면의 도구 배치는 관찰 가능한 소리·노력감 비교를 위한 코칭 가설입니다.
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
                        무거운 연결이 상행에서 커지는 학생에게 높은 음에서 내려오는 과제(Tricking)를 비교할 수 있습니다. 시작 음과 [a]·[i]·[u] 모음의 순서는 학생 반응에 따라 조절하며 고정 처방으로 사용하지 않습니다.
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300">
                        <strong className="text-emerald-400 block mb-1">관련 연구 참고</strong>
                        <ul className="list-disc pl-4 space-y-1">
                           <li><strong className="text-white">Maxfield (2017) Source-Filter:</strong> 모음에 따라 음색과 음정의 반응이 달라질 수 있으므로, 고음에서 모음 대체 전후를 비교합니다.</li>
                           <li><strong className="text-white">관련 음성생리 연구:</strong> 고음 하행 과제가 일부 조건에서 다르게 느껴질 수 있다는 해석은 가능하지만, 특정 근육의 의존성을 자동으로 차단한다고 단정하지 않습니다.</li>
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
                        소리가 눌리거나 막힐 때 “더 세게”를 우선 지시하지 말고, Trill·Hooty·Mum 등에서 음질·기류·노력감이 어떻게 달라지는지 확인한다.
                     </div>
                     <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm text-slate-300">
                        <strong className="text-emerald-400 block mb-1">관련 연구 참고</strong>
                        <ul className="list-disc pl-4 space-y-1">
                           <li><strong className="text-white">Titze 관련 모델:</strong> 압력과 조직 부담의 관계를 설명하는 참고 모델입니다. 모델 결과만으로 조직 손상이나 특정 SOVT 처방을 단정하지 않습니다.</li>
                        </ul>
                     </div>
                  </div>
                </div>

            </div>

             {/* 결론 */}
             <div className="mt-6 bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl text-slate-300">
               <h4 className="text-sm font-bold text-emerald-400 mb-2">💡 통찰과 시사점: (코칭 가이드)</h4>
               <p className="text-xs leading-relaxed">
                 SLS의 음절·자음·모음과 SOVT는 학생 반응을 비교하고 연습에서 가사로 전이하기 위한 조건 설계 도구로 기록합니다. 특정 툴이 성문 형태를 바꾸거나 안전을 보장한다고 단정하지 않으며, 불편감·통증·지속적인 음질 악화가 있으면 중단하고 필요 시 음성 전문가의 평가를 고려합니다.
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
              자세·움직임은 일부 학생에게 수행 조건을 비교하는 단서가 될 수 있습니다. 후두 위치나 근육 상태를 자동으로 바꾸거나 특정 결과를 보장한다고 설명하지 않으며, 불편감이 없는 범위에서 한 가지 조건만 바꿔 음질·연결·노력감의 변화를 기록합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-indigo-700 dark:text-indigo-400">① 허리 굽히기 (Bend Forward)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">같은 짧은 음형을 자세를 바꿔 비교하고, 음량·연결·노력감이 어떻게 달라지는지 관찰합니다.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  비교 후보: Type 4·5에서 반응 확인
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-indigo-700 dark:text-indigo-400">② 손가락으로 볼 받치기</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">볼과 입 주변의 움직임을 가볍게 보조한 뒤, 소리의 선명도와 노력감이 달라지는지 비교합니다.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  비교 후보: Type 2·4의 Lip Trill 과제
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-emerald-700 dark:text-emerald-400">③ Speech-Level Posture (가장 핵심)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">중립 자세를 기준으로 삼고, 턱·고개 위치를 바꿨을 때 음질·연결·불편감이 달라지는지 확인합니다.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  비교 기준: 모든 유형
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-teal-700 dark:text-teal-400">④ 이완 유도 (Relaxation)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">심호흡·어깨 롤·가벼운 스트레칭 전후의 음질과 노력감을 비교합니다. 불편하거나 어지러우면 중단합니다.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  비교 후보: Type 5에서 긴장감이 동반될 때
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-sky-700 dark:text-sky-400">⑤ 고개 숙이기 (Chin Tuck)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">작은 범위의 고개 위치 변화를 비교하고, 음질·노력감·목의 불편감이 악화되지 않는지 확인합니다.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  비교 후보: Type 4에서 상행 반응 확인
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-700/50 rounded-xl">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 text-purple-700 dark:text-purple-400">⑥ 허리 숙이기 (Bend Forward)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">자세 변화 전후의 호흡감·음량·노력감을 비교합니다. 자세가 불편하거나 힘을 더 써야 하면 사용하지 않습니다.</p>
                <div className="mt-2 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 rounded-md inline-block text-slate-500 dark:text-slate-400 font-semibold">
                  비교 후보: Type 6에서 기류감과 중심 변화 확인
                </div>
              </div>
            </div>

            <h3 className="text-[14px] font-bold text-slate-800 dark:text-slate-200 mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">유형별 신체 큐 비교 후보</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-150 dark:border-slate-700/50">
              <table className="w-full text-xs text-left min-w-[600px]">
                <thead className="bg-slate-50 dark:bg-slate-800/40 font-semibold text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50 w-32">유형</th>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50">비교할 신체 큐</th>
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50 w-1/2">목적 및 이유</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-teal-700 dark:text-teal-400">Type 1</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">Speech-Level Posture</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">중립 자세를 기준으로 다른 조건을 바꿨을 때의 차이를 확인</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-sky-600">Type 2</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">Cry / 볼 받치기</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">Cry·볼 보조 전후의 선명도·기류감·노력감을 비교</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-indigo-600">Type 3</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">고개 돌리기 + Cry, 걷기</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">고개 돌리기·걷기 전후의 연결과 재현성을 비교</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-amber-600">Type 4</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">허리 굽히기(핵심) + Dopy</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">허리 굽히기·Dopy 전후에 상행의 노력감과 연결이 어떻게 달라지는지 관찰</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-rose-600">Type 5</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">어깨 롤링 + 이완 + Dopy</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">어깨 롤·이완·Dopy 전후의 눌림·불편감·음질을 비교</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-emerald-600">Type 6</td>
                    <td className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">Cry + 걷기</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">Cry·걷기 전후의 기류감·선명도·노력감을 함께 기록</td>
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
              모음은 성도의 형태와 소리의 결과를 바꾸므로, 같은 음형에서 모음별 반응을 비교할 수 있는 중요한 과제 조건입니다. 다만 모음만으로 성대 접촉이나 레지스터를 확정하지 않고, 학생의 음질·연결·노력감 변화를 함께 기록합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-300 text-[13px] mb-2">좁은 모음 [i], [u], [o]</h4>
                <ul className="text-[11px] text-slate-700 dark:text-slate-300 space-y-1.5 list-disc pl-4 marker:text-indigo-400">
                  <li><strong>성도 형태:</strong> 구강 내 공간 축소, 성도가 좁아짐.</li>
                  <li><strong>비교할 반응:</strong> 고음·연결에서 음질, 노력감, 기류감이 어떻게 달라지는지.</li>
                  <li><strong>비교 후보:</strong> Type 4·5에서 좁은 모음과 다른 모음을 짧게 교차 비교.</li>
                </ul>
              </div>
              <div className="p-4 bg-rose-50/50 border border-rose-100 rounded-xl">
                <h4 className="font-bold text-rose-800 dark:text-rose-300 text-[13px] mb-2">넓은 모음 [a], [æ]</h4>
                <ul className="text-[11px] text-slate-700 dark:text-slate-300 space-y-1.5 list-disc pl-4 marker:text-rose-400">
                  <li><strong>성도 형태:</strong> 구강 내 공간 확대, 성도가 넓어짐.</li>
                  <li><strong>비교할 반응:</strong> 선명도, 음량, 기류감과 노력이 어떻게 달라지는지.</li>
                  <li><strong>비교 후보:</strong> Type 2·6에서 넓은 모음과 다른 모음을 낮은 음량으로 교차 비교.</li>
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
                    <th className="px-3 py-3 border-b border-slate-150 dark:border-slate-700/50">비교할 반응</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-indigo-600">Narrow (좁은 모음)</td>
                    <td className="px-3 py-2.5 font-mono">OO (/u/), EE (/i/)</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">고음·연결에서 음질과 노력감 변화</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-teal-600">Medium (중간 모음)</td>
                    <td className="px-3 py-2.5 font-mono">UH (/ʌ/), ʊ (/ʊ/)</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">음역·음량을 바꿀 때 연결과 안정성 변화</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50">
                    <td className="px-3 py-2.5 font-bold text-rose-600">Wide (넓은 모음)</td>
                    <td className="px-3 py-2.5 font-mono">AH (/æ/), A (/ɑ/), EY, EH</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">저음·음량에서 선명도와 눌림 변화</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-purple-50/40 border border-purple-100 rounded-xl">
               <h3 className="text-[12px] font-bold text-purple-900 mb-2">💡 SLS 모음 훈련 진행 원칙</h3>
               <p className="text-[11px] md:text-xs text-purple-800 dark:text-purple-300/80 leading-relaxed font-medium">
                 좁은 모음 → 중간 모음 → 넓은 모음의 순서는 사용할 수 있는 한 가지 비교 경로입니다. 모든 학생에게 고정하지 말고, 한 조건에서 편안함·연결·음질이 좋아졌는지 확인한 뒤 모음을 넓혀 봅니다. 도움을 줄인 뒤에도 변화가 유지되는지 확인합니다.
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
                    <td className="px-2 py-3 font-semibold text-teal-600">p~mp <span className="text-[9px] block text-slate-400">(무리해서 밀지 않기)</span></td>
                    <td className="px-2 py-3 font-semibold">mf <span className="text-[9px] block text-slate-400">(새 감각 강화)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">저 <span className="text-[9px] block text-slate-400">(가볍게)</span></td>
                    <td className="px-2 py-3 text-slate-600 dark:text-slate-400">중</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:bg-slate-800/40/50 transition-colors">
                    <td className="px-3 py-3 font-bold text-rose-600 text-center">Type 5</td>
                    <td className="px-3 py-3">1.5 Octave <span className="text-[9px] text-slate-400">(Tricking)</span></td>
                    <td className="px-3 py-3">Octave Repeater<br/><span className="text-[10px] text-slate-400">Octave Down 3x</span></td>
                    <td className="px-2 py-3 font-semibold text-teal-600">p <span className="text-[9px] block text-slate-400">(Trill=떨림 비교, Hooty=음색 비교)</span></td>
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
                  <h4 className="font-bold text-rose-700 dark:text-rose-400 text-sm mb-1">고음에서 노력감·음량이 급증하는 느낌</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-mono bg-white dark:bg-slate-900 inline-block px-1.5 py-0.5 rounded shadow-sm border border-slate-100 dark:border-slate-800">Type 4 (초기 신호)</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">음량·음역을 낮춘 뒤 Hooty·Goo·Mum 등을 짧게 비교하고, 상행에서 노력감과 연결을 기록합니다.</p>
                  <p className="text-[10px] font-semibold text-rose-600 flex items-center gap-1"><RefreshCw size={10}/> 불편감이 있으면 중단</p>
               </div>
               
               <div className="border border-rose-100 bg-rose-50/30 rounded-xl p-4">
                  <h4 className="font-bold text-rose-700 dark:text-rose-400 text-sm mb-1">음이 전부 연결되지 않고 끊어짐</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-mono bg-white dark:bg-slate-900 inline-block px-1.5 py-0.5 rounded shadow-sm border border-slate-100 dark:border-slate-800">Type 2, 6</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">Goo·Mum·Gee 또는 Lip Trill을 낮은 음량으로 비교하고, 자음만 세지면서 모음이 눌리지 않는지 확인합니다.</p>
               </div>

               <div className="border border-rose-100 bg-rose-50/30 rounded-xl p-4">
                  <h4 className="font-bold text-rose-700 dark:text-rose-400 text-sm mb-1">음이 통째 막히고 기류가 안 나옴</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-mono bg-white dark:bg-slate-900 inline-block px-1.5 py-0.5 rounded shadow-sm border border-slate-100 dark:border-slate-800">Type 5</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">Tongue Trill·Lip Trill·Hooty를 짧게 비교하고, 기류와 소리가 함께 유지되는지 확인합니다. 압을 더 세게 만들지 않습니다.</p>
                  <p className="text-[10px] font-semibold text-rose-600">"압 더 세게" 우선 피하고 반응을 확인</p>
               </div>

               <div className="border border-rose-100 bg-rose-50/30 rounded-xl p-4">
                  <h4 className="font-bold text-rose-700 dark:text-rose-400 text-sm mb-1">지속되거나 반복되는 쉰 목소리·통증</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-mono bg-white dark:bg-slate-900 inline-block px-1.5 py-0.5 rounded shadow-sm border border-slate-100 dark:border-slate-800">모든 유형 (위험!)</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">연습을 중단합니다. 증상이 지속되거나 반복되면 이비인후과 또는 음성 전문가의 평가를 고려합니다.</p>
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
                  문제적 소리(Pull Chest, No Chest 등)는 현재 과제 조건에서 반복되는 수행 패턴으로 기록할 수 있습니다. '목을 열어' 같은 지시 하나에 의존하기보다, <strong>자음·모음·SOVTE·음량·음역 중 한 조건을 바꿔 반응을 비교</strong>하고, 어떤 조건에서 노력감과 연결이 좋아지는지 확인합니다.
                </p>
              </div>
              <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl space-y-2">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-300 text-[13px]">2. 자기조직화(Self-Organization)와 창발(Emergence)</h4>
                <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  학생이 여러 생리 요소를 하나하나 의식적으로 통제하기는 어렵습니다. 교사는 자음·모음·SOVTE 같은 <strong>과제 제약(Task Constraint)</strong>으로 수행 조건을 단순화하고, 그 조건에서 실제로 어떤 소리·노력감·연결 변화가 나타나는지 관찰합니다. 제약은 특정 협응을 보장하는 장치가 아닙니다.
                </p>
              </div>
              <div className="p-4 bg-teal-50/50 border border-teal-100 rounded-xl space-y-2">
                <h4 className="font-bold text-teal-800 dark:text-teal-300 text-[13px]">3. SOVTE와 Vocalise = 과제 제약</h4>
                <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Lip Trill이나 좁은 모음 스케일은 특정 압력이나 성대 상태를 보장하는 도구로 설명하지 않습니다. 수행 조건을 단순하게 만들어 다른 반응을 탐색하는 과제 제약으로 사용할 수 있으며, 도움을 줄인 뒤에도 변화가 유지되는지 확인합니다.
                </p>
              </div>
              <div className="p-4 bg-rose-50/50 border border-rose-100 rounded-xl space-y-2">
                <h4 className="font-bold text-rose-800 dark:text-rose-300 text-[13px]">4. 임계 요동(Critical Fluctuation)과 상전이</h4>
                <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  파사지오 대역에서 작은 변동이나 플립이 나타나면 즉시 원인을 확정하지 말고, 음량·모음·진행 방향을 낮은 부담으로 바꿔 비교합니다. 변화가 탐색 과정의 일부일 수 있지만, 불편감·지속적 악화·재현성 저하는 함께 기록하고 과제를 조정합니다.
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
