import { useState, useEffect, useRef } from 'react';
import { VOCAL_TYPES, VocalType, LessonStep } from '../types';
import { Play, Pause, RotateCcw, AlertTriangle, MessageSquare, ListMusic, CheckCircle, ChevronRight, HelpCircle, Activity, Sparkles } from 'lucide-react';
import TermTooltip from './TermTooltip';

interface VocalLessonPlannerProps {
  selectedTypeId: string;
  onSelectType: (id: string) => void;
}

export default function VocalLessonPlanner({ selectedTypeId, onSelectType }: VocalLessonPlannerProps) {
  const currentType = VOCAL_TYPES.find(v => v.id === selectedTypeId) || VOCAL_TYPES[0];
  
  // 타이머 상태 관리
  const [isPlaying, setIsPlaying] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0); // 20분 = 1200초
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 유형 변경 시 타이머 리셋
  useEffect(() => {
    resetTimer();
  }, [selectedTypeId]);

  // 실시간 경과 시간에 따른 활성 단계 자동 매핑
  useEffect(() => {
    const minutes = totalSeconds / 60;
    
    // 20분 레슨 플로우 구간 매핑 로직
    if (selectedTypeId === 'type5') { // Type 5: 0-6분 / 6-12분 / 12-16분 / 16-18분 / 18-20분
      if (minutes < 6) setActiveStepIndex(0);
      else if (minutes < 12) setActiveStepIndex(1);
      else if (minutes < 16) setActiveStepIndex(2);
      else if (minutes < 18) setActiveStepIndex(3);
      else setActiveStepIndex(4);
    } else if (selectedTypeId === 'type2') { // Type 2: 0-3분 / 3-8분 / 8-13분 / 13-17분 / 17-20분
      if (minutes < 3) setActiveStepIndex(0);
      else if (minutes < 8) setActiveStepIndex(1);
      else if (minutes < 13) setActiveStepIndex(2);
      else if (minutes < 17) setActiveStepIndex(3);
      else setActiveStepIndex(4);
    } else if (selectedTypeId === 'type6') { // Type 6: 0-3분 / 3-9분 / 9-14분 / 14-17분 / 17-20분
      if (minutes < 3) setActiveStepIndex(0);
      else if (minutes < 9) setActiveStepIndex(1);
      else if (minutes < 14) setActiveStepIndex(2);
      else if (minutes < 17) setActiveStepIndex(3);
      else setActiveStepIndex(4);
    } else { // 기본: 0-3분 / 3-7분 / 7-12분 / 12-16분 / 16-20분
      if (minutes < 3) setActiveStepIndex(0);
      else if (minutes < 7) setActiveStepIndex(1);
      else if (minutes < 12) setActiveStepIndex(2);
      else if (minutes < 16) setActiveStepIndex(3);
      else setActiveStepIndex(4);
    }
  }, [totalSeconds, selectedTypeId]);

  const startTimer = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    timerRef.current = setInterval(() => {
      setTotalSeconds(prev => {
        if (prev >= 1200) { // 20분 만료
          clearInterval(timerRef.current!);
          setIsPlaying(false);
          return 1200;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsPlaying(false);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsPlaying(false);
    setTotalSeconds(0);
    setActiveStepIndex(0);
  };

  // 특정 단계를 수동 클릭해서 시간 점프 설정해주는 편의 기능
  const handleJumpToStep = (index: number) => {
    setActiveStepIndex(index);
    let targetSeconds = 0;
    
    // 각 유형벌 시작점 환산
    if (selectedTypeId === 'type5') {
      const stepStarts = [0, 6 * 60, 12 * 60, 16 * 60, 18 * 60];
      targetSeconds = stepStarts[index];
    } else if (selectedTypeId === 'type2') {
      const stepStarts = [0, 3 * 60, 8 * 60, 13 * 60, 17 * 60];
      targetSeconds = stepStarts[index];
    } else if (selectedTypeId === 'type6') {
      const stepStarts = [0, 3 * 60, 9 * 60, 14 * 60, 17 * 60];
      targetSeconds = stepStarts[index];
    } else {
      const stepStarts = [0, 3 * 60, 7 * 60, 12 * 60, 16 * 60];
      targetSeconds = stepStarts[index];
    }
    
    setTotalSeconds(targetSeconds);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remaining.toString().padStart(2, '0')}`;
  };

  const activeStep = currentType.lessonFlow[activeStepIndex] || currentType.lessonFlow[0];
  const progressPercent = (totalSeconds / 1200) * 100;

  return (
    <div className="space-y-6">
      <div className="bg-teal-50 border border-teal-100/70 p-3 rounded-xl flex gap-2">
        <AlertTriangle className="text-teal-600 shrink-0 mt-0.5" size={16} />
        <p className="text-[11px] md:text-xs text-teal-800 leading-relaxed font-medium">
          <strong>레슨 플로우는 참고용 레시피입니다.</strong><br/>
          훈련 도중 학생의 Tends To가 바뀌면(예: Type 4가 Hooty 후 Type 2로 풀려버리는 경우 등) 현재 플로우를 고집하지 말고 <strong className="text-teal-900 border-b border-teal-200">즉시 해당 상태(유형)에 맞는 솔루션으로 조향</strong>해야 발성 사고를 예방할 수 있습니다.
        </p>
      </div>

      {/* 발성 유형별 가로 탭 바 */}
      <div className="flex bg-slate-100 hover:bg-slate-150/80 p-0.5 rounded-xl overflow-x-auto gap-0.5 scroller-slim border border-slate-200">
        {VOCAL_TYPES.map((v) => (
          <button
            key={v.id}
            onClick={() => {
              onSelectType(v.id);
            }}
            className={`px-3 py-1.5 rounded-lg font-medium text-[11px] md:text-xs whitespace-nowrap transition-all ${
              selectedTypeId === v.id
                ? "bg-white text-teal-700 shadow-sm border border-slate-200/50"
                : "text-slate-650 hover:text-slate-800 hover:bg-white/40"
            }`}
          >
            {v.koreanName.split(' ')[0]} {v.koreanName.split(' ')[1] || ""}
          </button>
        ))}
      </div>

      {/* 종합 가이드 카드 */}
      <div className="bg-white border border-slate-100 rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 좌측 상세 및 가시적 정보 */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-teal-600">6대 보컬 유형 매뉴얼</span>
              <h1 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                {currentType.koreanName}
              </h1>
              <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                SLS 공식 명칭: {currentType.name}
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal bg-slate-50 border border-slate-100 p-4 rounded-xl">
              <TermTooltip text={currentType.description} />
            </p>

            {/* 시작 음가 및 핵심 전략 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-50/20 border border-emerald-100 rounded-xl p-4">
                <span className="text-[10px] uppercase font-bold text-emerald-600">레슨 시작 가이드 키(여/남)</span>
                <p className="text-xs text-slate-700 font-normal mt-1 leading-snug">
                  {currentType.startKey}
                </p>
              </div>

              <div className="bg-teal-50/20 border border-teal-100 rounded-xl p-4">
                <span className="text-[10px] uppercase font-bold text-teal-600">훈련 목적 (SLS Target)</span>
                <p className="text-xs text-slate-700 font-normal mt-1 leading-snug">
                  {currentType.slsTarget}
                </p>
              </div>
            </div>

            {/* 주의 가짜 훈련 & 위험 대응 */}
            <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 space-y-2">
              <h3 className="text-[10px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5 pb-2 border-b border-slate-200">
                <AlertTriangle size={12} className="text-amber-500" />
                우발적 보상현상 및 핵심 수칙
              </h3>
              <p className="text-xs text-slate-750 leading-relaxed">
                <strong className="text-slate-900 font-bold block mb-1">핵심 전략 및 원칙:</strong>
                <TermTooltip text={currentType.strategy} />
              </p>
              <div className="bg-white border border-slate-200/60 rounded-xl p-3 text-[10px] text-slate-600 mb-2">
                <span className="text-slate-800 font-bold">⚠️ 강사 가이드 큐팁: </span>
                <TermTooltip text={currentType.keyPoints} />
              </div>
              
              {currentType.motorDiagnostic && (
                <div className="mt-3 pt-3 border-t border-slate-200/60 space-y-3">
                  <h3 className="text-[11px] font-bold text-blue-800 flex items-center gap-1">
                    <Sparkles size={12} className="text-blue-500" />
                    운동학습 (복잡계) 관점 중재 설계
                  </h3>
                  
                  <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-2.5">
                    <strong className="text-[10px] text-blue-800 block mb-1">운동학적 진단</strong>
                    <p className="text-[11px] text-slate-700 leading-relaxed">{currentType.motorDiagnostic}</p>
                  </div>
                  
                  <div className="bg-indigo-50/50 border border-indigo-100 rounded-lg p-2.5">
                    <strong className="text-[10px] text-indigo-800 block mb-1">제약 조건 재설계 (과제 제약)</strong>
                    <p className="text-[11px] text-slate-700 leading-relaxed">{currentType.constraintRedesign}</p>
                  </div>
                  
                  <div className="bg-teal-50/50 border border-teal-100 rounded-lg p-2.5">
                    <strong className="text-[10px] text-teal-800 block mb-1">창발 유도 및 대역폭 피드백</strong>
                    <p className="text-[11px] text-slate-700 leading-relaxed">{currentType.emergenceFeedback}</p>
                  </div>
                  
                  <div className="bg-purple-50/50 border border-purple-100 rounded-lg p-2.5">
                    <strong className="text-[10px] text-purple-800 block mb-1">파지 및 전이(Transfer) 설계</strong>
                    <p className="text-[11px] text-slate-700 leading-relaxed">{currentType.transferDesign}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 우측 20분 인터랙티브 타이머 센터 */}
          <div className="bg-slate-950 border border-slate-850 rounded-2xl p-5 text-slate-100 flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider bg-slate-800 text-teal-400 px-2 rounded-full border border-slate-750">
                  <span className={`w-1.5 h-1.5 rounded-full bg-teal-400 ${isPlaying ? 'animate-pulse' : ''}`}></span>
                  {isPlaying ? '실시간 훈련 중' : '대기 모드'}
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-semibold">훈련 진행 시간</span>
              </div>

              {/* 거대한 타이머 숫자 */}
              <div className="text-center py-4">
                <span className="text-3xl md:text-4xl font-bold font-mono tracking-wider text-slate-100">
                  {formatTime(totalSeconds)}
                </span>
                <span className="text-slate-500 font-mono text-xs block mt-1">/ 20:00</span>
              </div>

              {/* 가열 슬라이더 바 */}
              <div className="space-y-1">
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden border border-slate-750">
                  <div 
                    className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                  <span>00:00</span>
                  <span>10:00</span>
                  <span>20:00</span>
                </div>
              </div>

              {/* 재생 정지 제어기 버튼들 */}
              <div className="flex justify-center items-center gap-3 pt-1">
                <button
                  onClick={resetTimer}
                  className="p-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded-lg transition-all"
                  title="타이머 리셋"
                >
                  <RotateCcw size={14} />
                </button>

                {isPlaying ? (
                  <button
                    onClick={pauseTimer}
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-rose-900/10 transition-all cursor-pointer"
                  >
                    <Pause size={14} />
                    일시 정지
                  </button>
                ) : (
                  <button
                    onClick={startTimer}
                    className="px-4 py-2 bg-teal-500 hover:bg-teal-450 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-teal-500/10 transition-all cursor-pointer"
                  >
                    <Play size={14} />
                    레슨 시작
                  </button>
                )}
              </div>
            </div>

            {/* 현재 실행 중인 단계 대시보드 */}
            <div className="border-t border-slate-850 mt-5 pt-4 space-y-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider">포커스 단계 ({activeStep.time})</span>
                <h4 className="text-xs font-bold text-slate-150 leading-none mt-1">
                  <TermTooltip text={activeStep.stage} />
                </h4>
              </div>

              <div className="bg-slate-900 border border-slate-850 p-2.5 rounded-xl">
                <span className="text-[10px] uppercase text-slate-500 font-bold">매칭 툴 및 음표 진행</span>
                <p className="text-xs text-slate-350 font-semibold mt-0.5 flex flex-wrap items-center gap-1">
                  <ListMusic size={12} className="text-teal-400" />
                  {activeStep.tools} / <span className="text-slate-400 font-normal">{activeStep.scale}</span>
                </p>
                {activeStep.dynamicBreath && (
                  <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                    <Activity size={10} className="text-emerald-400" />
                    강도·호흡: {activeStep.dynamicBreath}
                  </p>
                )}
              </div>

              <div className="bg-teal-950/20 border border-teal-900/40 p-3 rounded-xl space-y-1">
                <span className="text-[10px] uppercase text-teal-400 font-bold flex items-center gap-1">
                  <MessageSquare size={10} />
                  보컬 큐잉 연출 가이드
                </span>
                <p className="text-xs text-teal-200 font-medium leading-relaxed italic">
                  &ldquo;<TermTooltip text={activeStep.queuing} />&rdquo;
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 20분 레슨의 단계별 타임라인 바 */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
        <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
          <ListMusic className="text-teal-500" size={16} />
          20분 레슨 단계별 정밀 타임라인 (수동 이동 지원)
        </h3>

        <div className="space-y-2.5">
          {currentType.lessonFlow.map((step, idx) => {
            const isCurrent = activeStepIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => handleJumpToStep(idx)}
                className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                  isCurrent
                    ? "bg-gradient-to-r from-teal-50/40 to-emerald-50/20 border-teal-500 shadow-md shadow-teal-700/5"
                    : "bg-white border-slate-100 hover:border-slate-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-7 h-7 rounded-full font-mono text-xs font-semibold flex items-center justify-center shrink-0 border ${
                    isCurrent
                      ? "bg-teal-500 text-white border-teal-600 shadow-sm"
                      : "bg-slate-50 text-slate-600 border-slate-205"
                  }`}>
                    {idx + 1}
                  </span>
                  
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold text-slate-900 font-sans"><TermTooltip text={step.stage} /></span>
                      <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-mono font-bold ${
                        isCurrent ? "bg-teal-500/10 text-teal-700" : "bg-slate-100 text-slate-500"
                      }`}>
                        {step.time}
                      </span>
                    </div>
                    
                    <p className="text-[11px] text-slate-600 font-normal mt-1 flex flex-wrap items-center gap-1">
                      <strong className="text-slate-500 font-normal">사용 툴:</strong> {step.tools} 
                      <span className="text-slate-300 mx-1">|</span>
                      <strong className="text-slate-500 font-normal">스케일:</strong> {step.scale}
                      {step.dynamicBreath && (
                        <>
                          <span className="text-slate-300 mx-1">|</span>
                          <strong className="text-slate-500 font-normal">호흡/강도:</strong> {step.dynamicBreath}
                        </>
                      )}
                    </p>

                    <div className="mt-1.5 pl-2.5 border-l-2 border-teal-500/20 text-[10px] text-slate-500 leading-relaxed font-sans max-w-2xl">
                      <strong>큐잉:</strong> &ldquo;<TermTooltip text={step.queuing} />&rdquo;
                    </div>
                  </div>
                </div>

                <div className="md:text-right md:w-64 border-t md:border-t-0 border-slate-100 pt-2.5 md:pt-0">
                  <span className="text-[10px] uppercase font-bold text-rose-500 block">체크포인트 & 즉각 이완 조치</span>
                  <p className="text-[11px] text-slate-600 font-normal mt-0.5 leading-relaxed">
                    <TermTooltip text={step.checkpoint} />
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
