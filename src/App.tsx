import { useState, useEffect } from 'react';
import { VOCAL_TYPES } from './types';
import VocalDiagnostic from './components/VocalDiagnostic';
import VocalLessonPlanner from './components/VocalLessonPlanner';
import VocalReference from './components/VocalReference';
import VocalPiano from './components/VocalPiano';
import StudentLog from './components/StudentLog';
import { Compass, Sparkles, BookOpen, Music, ShieldCheck, Heart, AlertCircle, Users, Sun, Moon } from 'lucide-react';

export default function App() {
  const [selectedTypeId, setSelectedTypeId] = useState<string>("type1");
  const [viewMode, setViewMode] = useState<'diagnostic' | 'planner' | 'reference' | 'log'>('planner');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark') || 
                   window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  const handleSelectTypeFromDiagnostic = (typeId: string) => {
    setSelectedTypeId(typeId);
    setViewMode('planner'); // 레슨 플래너 탭으로 이동
  };

  const currentType = VOCAL_TYPES.find(v => v.id === selectedTypeId) || VOCAL_TYPES[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans antialiased selection:bg-teal-500 selection:text-white flex flex-col transition-colors">
      {/* Modern Top Navigation Bar */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setViewMode('planner')}>
            <div className="bg-gradient-to-tr from-teal-600 to-emerald-500 text-white p-2 rounded-xl shadow-sm">
              <Music size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">SLS 6 VOCAL</span>
                <span className="bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">v4.0</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              {[
                { id: 'diagnostic', icon: Compass, label: '자가 진단' },
                { id: 'planner', icon: Music, label: '레슨 매뉴얼' },
                { id: 'reference', icon: BookOpen, label: '레퍼런스' },
                { id: 'log', icon: Users, label: '학생 관리' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setViewMode(item.id as any)}
                  className={`text-sm font-semibold transition-colors flex items-center gap-1.5 h-16 border-b-2 ${
                    viewMode === item.id ? 'border-teal-500 text-teal-700' : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              ))}
            </nav>
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-full"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Nav Below Header */}
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 flex overflow-x-auto hide-scrollbar bg-slate-50 dark:bg-slate-900 transition-colors">
            {[
              { id: 'diagnostic', icon: Compass, label: '자가 진단' },
              { id: 'planner', icon: Music, label: '레슨 플래너' },
              { id: 'reference', icon: BookOpen, label: '레퍼런스' },
              { id: 'log', icon: Users, label: '학생 관리' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setViewMode(item.id as any)}
                className={`flex-1 py-3 text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap px-4 border-b-2 ${
                  viewMode === item.id ? 'bg-white dark:bg-slate-800 border-teal-500 text-teal-700 dark:text-teal-400' : 'border-transparent text-slate-500 dark:text-slate-400'
                }`}
              >
                <item.icon size={14} />
                {item.label}
              </button>
            ))}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Subtle dark gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-900 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold">
              <Sparkles size={14} />
              <span>Speech Level Singing 실전 필드 가이드</span>
            </div>
            <h1 className="text-3.5xl md:text-5xl font-bold tracking-tight leading-[1.15]">
              성대 진동과 호흡 균형의 미학, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">자유로운 가창을 향하여.</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-lg">
              SLS의 4대 핵심 경향성(Tends To)을 6대 보컬 유형으로 세분화한 운동학습 솔루션. 당신의 목소리가 피로 없이 가장 효율적인 자기조직화를 이룰 수 있도록 정교한 조건 제약 가이드를 제공합니다.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setViewMode('diagnostic')}
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg shadow-teal-500/30 transition-all flex items-center gap-2 text-sm"
              >
                <Compass size={18} /> 자신의 보컬 유형 진단하기
              </button>
              <button 
                onClick={() => setViewMode('planner')}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2 text-sm"
              >
                <Music size={18} /> 레슨 매뉴얼 열기
              </button>
            </div>
          </div>

          {/* Right Side: Emergency Guide */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/10 to-emerald-500/10 blur-2xl rounded-full"></div>
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-6 md:p-8 rounded-2xl relative shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-widest">긴급 이완 응급처치</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">
                어떤 유형인지 모르거나 목이 피로할 때
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                과도한 긴장이나 오진이 염려될 때는 모든 연습을 중단하고 아래의 가장 중립적이고 안전한 툴로 즉시 우회하십시오.
              </p>

              <div className="space-y-3">
                <div className="bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-teal-400 font-mono mb-1">기류 안정 최우선</div>
                    <div className="font-semibold text-slate-100">Lip Trill (입술 떨기)</div>
                  </div>
                  <span className="text-[10px] font-bold bg-slate-800 text-slate-300 px-2 py-1 rounded">과압축 방지</span>
                </div>
                <div className="bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-emerald-400 font-mono mb-1">안전한 성대 접촉</div>
                    <div className="font-semibold text-slate-100">Cry (가볍게 우는 소리)</div>
                  </div>
                  <span className="text-[10px] font-bold bg-slate-800 text-slate-300 px-2 py-1 rounded">과소폐쇄 해결</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* 가상 건반 메이트가 포함된 좌측 보조 칼럼 */}
          <div className="order-2 lg:order-1 lg:col-span-1 lg:sticky lg:top-24 space-y-6">
            
            {/* 오디오 가청용 미니 피아노 키보드 탑재! */}
            <VocalPiano />

            {/* 현재 타겟 유형 퀵 가이드 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4.5 shadow-sm transition-colors">
              <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">포커스 훈련 모드</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  선택된 레슨 유형 : <span className="text-teal-650 dark:text-teal-400">{currentType.koreanName.split('(')[0]}</span>
                </h4>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-sans leading-relaxed mt-2 border-t border-slate-100 dark:border-slate-800 pt-2">
                자가 진단을 통해 목 주변 수축, 바람소리 누출, 또는 음역대의 급격한 단절 및 뒤집힘을 정교하게 판별한 뒤 유형별 수련을 시작해 보세요.
              </p>
              
              {viewMode !== 'diagnostic' && (
                <button
                  onClick={() => setViewMode('diagnostic')}
                  className="mt-3.5 w-full bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 py-2 px-3 rounded-xl text-[10px] font-semibold text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1 transition-all"
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

            {viewMode === 'log' && (
              <div className="animate-fade-in">
                <StudentLog />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300 font-medium">
            <Heart size={16} className="text-rose-500 animate-pulse" />
            보컬리스트의 성대 보호 및 안전하고 자연스러운 발성 성장을 지휘합니다.
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-2xl mx-auto">
            본 실전 가이드는 Speech Level Singing 지휘 철학을 기반으로 하며, 운동학습(Motor Learning) 이론을 결합하여 현대적으로 재해석되었습니다. 성대 근육이 외부 근육 개입이나 긴장으로 인해 피로해지지 않도록 수시 이완(립트릴 및 텅트릴)을 권장합니다.
          </p>
          <div className="text-[10px] text-slate-600 font-mono pt-4 border-t border-slate-800">
            SLS 6 TYPES FIELD MANUAL &bull; STABLE EDITION v4.0 &bull; {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}
