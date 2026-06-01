import { useState } from 'react';
import { DIAGNOSTIC_FLOWCHART, VOCAL_TYPES, VocalType } from '../types';
import { ChevronRight, RotateCcw, Activity, HelpCircle, CheckCircle } from 'lucide-react';
import TermTooltip from './TermTooltip';

interface VocalDiagnosticProps {
  onSelectType: (typeId: string) => void;
}

export default function VocalDiagnostic({ onSelectType }: VocalDiagnosticProps) {
  const [currentStepId, setCurrentStepId] = useState<string>("q1");
  const [history, setHistory] = useState<string[]>([]);
  const [diagnosticResult, setDiagnosticResult] = useState<VocalType | null>(null);

  const currentStep = DIAGNOSTIC_FLOWCHART.find(q => q.id === currentStepId);

  const handleSelectOption = (nextId: string | null, resultTypeId?: string) => {
    if (resultTypeId) {
      const match = VOCAL_TYPES.find(v => v.id === resultTypeId);
      if (match) {
        setDiagnosticResult(match);
      }
    } else if (nextId) {
      setHistory(prev => [...prev, currentStepId]);
      setCurrentStepId(nextId);
    }
  };

  const handleUndo = () => {
    if (diagnosticResult) {
      setDiagnosticResult(null);
      // 마지막 단계로 복구
      if (history.length > 0) {
        const lastStep = history[history.length - 1];
        setCurrentStepId(lastStep);
        setHistory(prev => prev.slice(0, -1));
      } else {
        setCurrentStepId("q1");
      }
    } else if (history.length > 0) {
      const prevStep = history[history.length - 1];
      setCurrentStepId(prevStep);
      setHistory(prev => prev.slice(0, -1));
    }
  };

  const handleReset = () => {
    setCurrentStepId("q1");
    setHistory([]);
    setDiagnosticResult(null);
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-150 pb-5 mb-5 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Activity size={12} className="animate-pulse" />
            대화형 5-Tone 실시간 진단
          </span>
          <h2 className="text-base md:text-lg font-bold text-slate-900 tracking-tight mt-1">
            보컬 자가 진단 차트 (Vocal Self-Diagnostic Chart)
          </h2>
        </div>
        
        {(history.length > 0 || diagnosticResult) && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 transition-all font-medium self-start sm:self-auto shrink-0"
          >
            <RotateCcw size={12} />
            처음부터 다시
          </button>
        )}
      </div>

      {!diagnosticResult ? (
        currentStep ? (
          <div>
            <div className="mb-5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">자가 진단 {history.length + 1}단계 질문</span>
              <h3 className="text-sm md:text-base font-semibold text-slate-800 leading-snug mt-1">
                <TermTooltip text={currentStep.question} />
              </h3>
            </div>

            <div className="space-y-3">
              {currentStep.options.map((option, idx) => (
                <button
                   key={idx}
                   onClick={() => handleSelectOption(option.nextId, option.resultTypeId)}
                   className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50/20 active:bg-teal-50/55 transition-all flex items-center justify-between group"
                >
                  <span className="text-xs md:text-sm text-slate-700 font-normal group-hover:text-teal-900 transition-colors">
                     <TermTooltip text={option.text} />
                  </span>
                  <div className="bg-slate-50 group-hover:bg-teal-500 text-slate-400 group-hover:text-white p-1 rounded-lg border border-slate-100 group-hover:border-teal-400 transition-all ml-4 shrink-0">
                    <ChevronRight size={14} />
                  </div>
                </button>
              ))}
            </div>

            {history.length > 0 && (
              <button
                onClick={handleUndo}
                className="mt-6 text-[10px] text-slate-450 hover:text-slate-650 underline underline-offset-4 flex items-center gap-1 transition-colors"
              >
                이전 단계로 돌아가기
              </button>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-sm text-slate-500">진단 진행 중 오류가 발생했습니다. 처음 단계로 이동합니다.</p>
            <button onClick={handleReset} className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-xl text-xs">리셋</button>
          </div>
        )
      ) : (
        <div className="bg-gradient-to-br from-teal-50/50 via-emerald-50/30 to-transparent border border-teal-100 rounded-2xl p-6 md:p-8 animate-fade-in">
          <div className="flex items-start gap-4 mb-5">
            <div className="bg-teal-500 text-white p-2.5 rounded-xl shadow-md shrink-0">
              <CheckCircle size={20} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">분석 완료 및 판별 결과</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                {diagnosticResult.koreanName}
              </h3>
              <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                SLS 공식 명칭: {diagnosticResult.name}
              </p>
            </div>
          </div>

          <div className="bg-white/80 border border-slate-100 p-4.5 rounded-xl mb-5">
            <h4 className="text-[10px] uppercase tracking-wider text-teal-600 font-bold mb-1">성대 특징 및 상태 요약</h4>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              <TermTooltip text={diagnosticResult.description} />
            </p>
          </div>

          <div className="space-y-4 mb-5">
            <div>
              <h5 className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-2">판별된 주요 보컬 특징</h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {diagnosticResult.characteristics.map((char, index) => (
                  <li key={index} className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-xs text-slate-700 flex items-start gap-2">
                    <span className="flex-shrink-0 w-4 h-4 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-[9px]">
                      {index + 1}
                    </span>
                    <span><TermTooltip text={char} /></span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-150 pt-3.5 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold text-blue-600">추천되는 보컬 지휘 툴</span>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {diagnosticResult.primaryTools.map(t => (
                    <span key={t} className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold text-rose-500">주의 / 피해야 할 도구</span>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {diagnosticResult.avoidTools.map(t => (
                    <span key={t} className="text-[10px] font-semibold bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => onSelectType(diagnosticResult.id)}
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs md:text-sm py-3 px-5 rounded-xl shadow-md shadow-teal-750/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              20분 실전 가이드 & 즉시 가창 트레이닝 시작
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={handleReset}
              className="px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-350 text-slate-600 font-semibold justify-center items-center flex gap-1.5 text-xs transition-all"
            >
              <RotateCcw size={12} />
              다시 진단
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
