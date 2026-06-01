import { useState } from 'react';
import { VOCAL_TYPES } from './types';
import VocalDiagnostic from './components/VocalDiagnostic';
import VocalLessonPlanner from './components/VocalLessonPlanner';
import VocalReference from './components/VocalReference';
import VocalPiano from './components/VocalPiano';
import { Compass, Sparkles, BookOpen, Music, ShieldCheck, Heart, AlertCircle } from 'lucide-react';

export default function App() {
  const [selectedTypeId, setSelectedTypeId] = useState<string>("type1");
  const [viewMode, setViewMode] = useState<'diagnostic' | 'planner' | 'reference'>('planner');

  const handleSelectTypeFromDiagnostic = (typeId: string) => {
    setSelectedTypeId(typeId);
    setViewMode('planner'); // 레슨 플래너 탭으로 이동
  };

  const currentType = VOCAL_TYPES.find(v => v.id === selectedTypeId) || VOCAL_TYPES[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-teal-500 selection:text-white">
      {/* 장엄하고 전문적인 상공 보컬 에이전트 헤더 바 */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-opacity-95 py-3 md:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:h-18 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-teal-600 to-emerald-500 text-white p-2.5 rounded-xl shadow-md shadow-teal-750/10 shrink-0">
              <Music size={20} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base md:text-lg text-slate-900 tracking-tight">SLS 6 VOCAL</span>
                <span className="bg-teal-50 text-teal-700 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-teal-200">
                  Field Guide v4
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium leading-none mt-1">
                Speech Level Singing 실전 진단 및 타이머 연동 레슨 솔루션
              </p>
            </div>
          </div>

          {/* 중앙 통합 탭 셀렉터 */}
          <nav className="flex bg-slate-100 p-0.5 sm:p-1 rounded-xl border border-slate-200 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setViewMode('diagnostic')}
              className={`px-2.5 sm:px-4.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 flex-1 sm:flex-none whitespace-nowrap ${
                viewMode === 'diagnostic'
                  ? "bg-white text-teal-700 shadow-sm border border-slate-200/50"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Compass size={13} />
              자가 진단
            </button>
            <button
              onClick={() => setViewMode('planner')}
              className={`px-2.5 sm:px-4.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 flex-1 sm:flex-none whitespace-nowrap ${
                viewMode === 'planner'
                  ? "bg-white text-teal-700 shadow-sm border border-slate-200/50"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Music size={13} />
              레슨 매뉴얼 & 타이머
            </button>
            <button
              onClick={() => setViewMode('reference')}
              className={`px-2.5 sm:px-4.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 flex-1 sm:flex-none whitespace-nowrap ${
                viewMode === 'reference'
                  ? "bg-white text-teal-700 shadow-sm border border-slate-200/50"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <BookOpen size={13} />
              지휘 레퍼런스
            </button>
          </nav>
        </div>
      </header>

      {/* 종합적 SLS 배경 안내 및 공용 도구 고속 노출 */}
      <section className="bg-gradient-to-b from-teal-50/20 via-slate-50/10 to-transparent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 가속 SLS 슬로건 및 개요 가이드 */}
          <div className="lg:col-span-2 bg-white border border-slate-150 p-5 md:p-6 rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <h1 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                학술적인 성대 진동과 호흡 균형의 미학, <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Speech Level Singing(SLS)</span> 실전 필드 가이드
              </h1>
              
              <div className="text-xs text-slate-600 space-y-2.5 font-normal leading-relaxed">
                <p>
                  SLS 발성 훈련은 단순한 가창 목소리의 음역 확장이 아닙니다. 학생의 전신 신경계와 성대 내전근이 <strong>새로운 고유 조절 패턴을 스스로 안전하게 발견(Discover)하고, 얇고 강한 협응력을 점진적으로 안정화(Stabilize)해 가는 과정</strong>입니다.
                </p>
                <p>
                  본 실전 필드 가이드는 SLS 거장 매뉴얼의 4대 핵심 경향성(Tends To)을 현대 발성 과학 기준에 맞춰 <strong>6대 보컬 발성 유형</strong>으로 세분하여 제공합니다. 한국인 보컬 코치와 셀프 훈련생들을 위해 번역 어투를 정갈하고 학술적인 표준 한글로 세련되게 정리해 드립니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-5 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <div className="bg-teal-50 text-teal-700 p-1 rounded-lg border border-teal-100 text-[10px] font-bold leading-none">1</div>
                <div className="text-[10px] text-slate-500 leading-normal">
                  <strong className="text-slate-800 text-[11px] block">Discover & Release</strong>성구 전환 시 외부 근육 개입을 줄이고 무거운 흉성 긴장 이완
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-emerald-50 text-emerald-700 p-1 rounded-lg border border-emerald-100 text-[10px] font-bold leading-none">2</div>
                <div className="text-[10px] text-slate-500 leading-normal">
                  <strong className="text-slate-800 text-[11px] block">Add & Connect</strong>성대 내전근(TA)과 인두윤상갑상근(CT)의 협응 연마
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-indigo-50 text-indigo-700 p-1 rounded-lg border border-indigo-100 text-[10px] font-bold leading-none">3</div>
                <div className="text-[10px] text-slate-500 leading-normal">
                  <strong className="text-slate-800 text-[11px] block">Speech Level Production</strong>말하듯 자연스러운 가창과 편안한 성구 믹스 실현
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: SLS에서 가장 위대한 비밀병기 "공용 안전 툴" */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-850 p-5 md:p-6 rounded-2xl text-slate-100 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-widest leading-none">긴급 이완 가이드</span>
              </div>
              
              <h2 className="text-sm font-bold text-slate-100 font-sans tracking-tight leading-snug">
                어떤 유형인지 도저히 모를 땐? <br />
                <span className="text-teal-400 underline decoration-teal-500/40 underline-offset-4 font-bold">공용 안전 툴</span> 우선 선택 수칙
              </h2>
              
              <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                목소리가 피로해 가로막히거나 오진으로 인한 과압축이 염려될 때는 무조건 <strong>Lip Trill(립트릴)</strong>과 <strong>Cry(울음 참는 듯한 톤)</strong>를 활용해 보세요. 이 조합은 기류와 성대 저항의 양극단 균형을 즉각 조율하는 안전한 코칭 기준점입니다.
              </p>
            </div>

            <div className="space-y-2 mt-4">
              <div className="bg-slate-850 border border-slate-800/80 p-2.5 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-teal-450 font-mono">가장 중립적인 툴</span>
                  <h4 className="text-xs font-normal text-slate-200">기류 안정 : Lip Trill</h4>
                </div>
                <span className="text-[9px] uppercase bg-teal-950 text-teal-400 border border-teal-850 px-2 py-0.5 rounded font-semibold">과압축 방지</span>
              </div>

              <div className="bg-slate-850 border border-slate-800/80 p-2.5 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-450 font-mono">가장 안전한 접촉 유도 툴</span>
                  <h4 className="text-xs font-normal text-slate-200">성대 접촉 : Cry 울음소리</h4>
                </div>
                <span className="text-[9px] uppercase bg-emerald-950 text-emerald-400 border border-emerald-850 px-2 py-0.5 rounded font-semibold">과소폐쇄 해결</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 통합 워크스페이스 그리드 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* 가상 건반 메이트가 포함된 좌측 보조 칼럼 */}
          <div className="order-2 lg:order-1 lg:col-span-1 lg:sticky lg:top-24 space-y-6">
            
            {/* 오디오 가청용 미니 피아노 키보드 탑재! */}
            <VocalPiano />

            {/* 현재 타겟 유형 퀵 가이드 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-4.5 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-slate-400">포커스 훈련 모드</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                <h4 className="text-xs font-semibold text-slate-800">
                  선택된 레슨 유형 : <span className="text-teal-650">{currentType.koreanName.split('(')[0]}</span>
                </h4>
              </div>
              <p className="text-[10px] text-slate-500 font-sans leading-relaxed mt-2 border-t border-slate-100 pt-2">
                자가 진단을 통해 목 주변 수축, 바람소리 누출, 또는 음역대의 급격한 단절 및 뒤집힘을 정교하게 판별한 뒤 유형별 수련을 시작해 보세요.
              </p>
              
              {viewMode !== 'diagnostic' && (
                <button
                  onClick={() => setViewMode('diagnostic')}
                  className="mt-3.5 w-full bg-slate-50 hover:bg-slate-100 border border-slate-205 py-2 px-3 rounded-xl text-[10px] font-semibold text-slate-600 flex items-center justify-center gap-1 transition-all"
                >
                  보컬 자가 진단 다시 시작해보기 →
                </button>
              )}
            </div>
          </div>

          {/* 중앙~우측 메인 실재 가이드 뷰포트 */}
          <div className="order-1 lg:order-2 lg:col-span-2 space-y-6">
            {viewMode === 'diagnostic' && (
              <div className="animate-fade-in">
                <VocalDiagnostic onSelectType={handleSelectTypeFromDiagnostic} />
              </div>
            )}

            {viewMode === 'planner' && (
              <div className="animate-fade-in">
                <VocalLessonPlanner 
                  selectedTypeId={selectedTypeId} 
                  onSelectType={setSelectedTypeId} 
                />
              </div>
            )}

            {viewMode === 'reference' && (
              <div className="animate-fade-in">
                <VocalReference />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 학술 프레임 크레딧 하부 테두리 */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 font-normal font-sans">
            <Heart size={13} className="text-rose-500 animate-pulse" />
            보컬리스트의 성대 보호 및 안전하고 자연스러운 SLS 발성 성장을 적극 지휘합니다
          </div>
          <p className="text-[10px] text-slate-400 font-sans leading-relaxed max-w-xl mx-auto">
            본 실전 가이드는 Speech Level Singing 지휘 철학을 준수하며, 성대 근육이 목 외부 근육 개입이나 긴장으로 인해 피로해지지 않도록 수시 이완(립트릴 및 텅트릴)을 유도합니다. 오진으로 인한 과도한 후두 과부하 및 성대 부상 예방을 위해 무리한 고음 가창은 금지하십시오.
          </p>
          <div className="text-[9px] text-slate-450 font-mono pt-1">
            SLS 6 TYPES FIELD MANUAL &bull; STABLE EDITION v4
          </div>
        </div>
      </footer>
    </div>
  );
}
