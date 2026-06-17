import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, HelpCircle, AlertCircle } from 'lucide-react';
import TermTooltip from './TermTooltip';

interface KeyConfig {
  note: string;
  freq: number;
  isBlack: boolean;
  label: string;
}

const KEYS_PRESET: KeyConfig[] = [
  { note: "C3", freq: 130.81, isBlack: false, label: "남성 시작/저음" },
  { note: "C#3", freq: 138.59, isBlack: true, label: "" },
  { note: "D3", freq: 146.83, isBlack: false, label: "남성 안정" },
  { note: "D#3", freq: 155.56, isBlack: true, label: "" },
  { note: "E3", freq: 164.81, isBlack: false, label: "" },
  { note: "F3", freq: 174.61, isBlack: false, label: "" },
  { note: "F#3", freq: 185.00, isBlack: true, label: "남성 흉성당김 유도" },
  { note: "G3", freq: 196.00, isBlack: false, label: "여성 시작/저음" },
  { note: "G#3", freq: 207.65, isBlack: true, label: "" },
  { note: "A3", freq: 220.00, isBlack: false, label: "여성 안정" },
  { note: "A#3", freq: 233.08, isBlack: true, label: "" },
  { note: "B3", freq: 246.94, isBlack: false, label: "" },
  { note: "C4", freq: 261.63, isBlack: false, label: "가온다" },
  { note: "C#4", freq: 277.18, isBlack: true, label: "여성 훈련 시작" },
  { note: "D4", freq: 293.66, isBlack: false, label: "" },
  { note: "D#4", freq: 311.13, isBlack: true, label: "" },
  { note: "E4", freq: 329.63, isBlack: false, label: "" },
  { note: "F4", freq: 349.23, isBlack: false, label: "" },
  { note: "F#4", freq: 369.99, isBlack: true, label: "" },
  { note: "G4", freq: 392.00, isBlack: false, label: "남성 고음역" },
  { note: "G#4", freq: 415.30, isBlack: true, label: "" },
  { note: "A4", freq: 440.00, isBlack: false, label: "튜닝 라" },
  { note: "A#4", freq: 466.16, isBlack: true, label: "" },
  { note: "B4", freq: 493.88, isBlack: false, label: "" },
  { note: "C5", freq: 523.25, isBlack: false, label: "" },
  { note: "C#5", freq: 554.37, isBlack: true, label: "여성 고음역" },
  { note: "D5", freq: 587.33, isBlack: false, label: "" }
];

export default function VocalPiano() {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [vol, setVol] = useState(0.4);
  const [audioError, setAudioError] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
        } catch (e) {}
      }
    };
  }, []);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
        gainNodeRef.current = audioCtxRef.current.createGain();
        gainNodeRef.current.gain.value = 0;
        gainNodeRef.current.connect(audioCtxRef.current.destination);
      } catch (err) {
        console.error("Audio Context initialisation failed", err);
        setAudioError("이 브라우저에서는 Web Audio API를 지원하지 않거나 오디오 출력이 제한됩니다.");
        setAudioEnabled(false);
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playNote = (freq: number, noteName: string) => {
    try {
      initAudio();
      if (!audioEnabled || !audioCtxRef.current || !gainNodeRef.current) return;

      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
      }

      const osc = audioCtxRef.current.createOscillator();
      // 보컬 훈련용으로는 부드럽고 맑은 사인파 또는 약간 가온된 삼각파가 가이드 음으로 우수함
      osc.type = 'triangle'; 
      osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
      
      // 노이즈(클릭 노이즈) 방지를 위한 볼륨 엔벨롭 적용
      gainNodeRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
      gainNodeRef.current.gain.linearRampToValueAtTime(vol, audioCtxRef.current.currentTime + 0.05);

      osc.connect(gainNodeRef.current);
      osc.start();
      
      oscRef.current = osc;
      setActiveNote(noteName);
    } catch (e) {
      console.error(e);
    }
  };

  const stopNote = () => {
    if (!audioCtxRef.current || !gainNodeRef.current) return;
    try {
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioCtxRef.current.currentTime);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.3);
      setTimeout(() => {
        if (oscRef.current && activeNote) {
          try {
            oscRef.current.stop();
            oscRef.current.disconnect();
            oscRef.current = null;
          } catch(e){}
        }
        setActiveNote(null);
      }, 300);
    } catch (e) {
      setActiveNote(null);
    }
  };

  // 가이드 패널에서 빠른 가창음 추천 세트
  const RECOMMEND_GUIDES = [
    { label: "남성 흉성 시작 (C3)", note: "C3", freq: 130.81, desc: "Light Unstable / Transitional / Breathy 등 복구 시작음" },
    { label: "남성 높은 고음 (F#3)", note: "F#3", freq: 185.00, desc: "Heavy / Pressed 두성 유도 시작음 (Tricking)" },
    { label: "여성 흉성 시작 (G3)", note: "G3", freq: 196.00, desc: "Light Unstable / Transitional / Breathy 등 복구 시작음" },
    { label: "여성 높은 고음 (C#4/C#5)", note: "C#5", freq: 554.37, desc: "Heavy / Pressed 두성 유도 시작음 (Tricking)" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl p-5 mb-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-sm font-bold text-teal-400 flex items-center gap-1.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            피치 메이트 (Vocal Pitch Guide)
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">
            훈련의 시작음과 브릿지 통과 음의 주파수를 즉시 확인하고 목소리를 튜닝해 보세요.
          </p>
        </div>

        {/* 볼륨 제어 및 에러 메세지 */}
        <div className="flex items-center gap-3">
          {audioError ? (
            <span className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={14} /> 오디오 비활성
            </span>
          ) : (
            <div className="flex items-center gap-2 bg-slate-850 px-3 py-1.5 rounded-lg border border-slate-800">
              {vol === 0 ? <VolumeX className="text-slate-500 dark:text-slate-400" size={16} /> : <Volume2 className="text-teal-400" size={16} />}
              <input 
                type="range" 
                min="0" 
                max="0.8" 
                step="0.05" 
                value={vol} 
                onChange={(e) => {
                  setVol(parseFloat(e.target.value));
                  if (gainNodeRef.current && audioCtxRef.current) {
                    gainNodeRef.current.gain.setValueAtTime(parseFloat(e.target.value), audioCtxRef.current.currentTime);
                  }
                }}
                className="w-16 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
              />
              <span className="text-2xs font-mono text-slate-400 w-8 text-right">
                {Math.round(vol * 125)}%
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 속성 가이드 핫 키들 */}
      <h4 className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2">훈련 필수 시작음 가치 체크 (One-Tap 피치 가이드)</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        {RECOMMEND_GUIDES.map((g) => {
          const isCurrent = activeNote === g.note;
          return (
            <button
              key={g.label}
              onMouseDown={() => playNote(g.freq, g.note)}
              onMouseUp={stopNote}
              onMouseLeave={stopNote}
              onTouchStart={(e) => { e.preventDefault(); playNote(g.freq, g.note); }}
              onTouchEnd={(e) => { e.preventDefault(); stopNote(); }}
              className={`p-2 rounded-lg border text-left transition-all flex items-center justify-between ${
                isCurrent 
                  ? "bg-teal-950/60 border-teal-500 text-teal-300 ring-1 ring-teal-500/30" 
                  : "bg-slate-850 hover:bg-slate-800 border-slate-800 hover:border-slate-705 text-slate-300"
              }`}
            >
              <div>
                <div className="text-[11px] font-semibold flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isCurrent ? "bg-teal-400" : "bg-slate-600"}`}></span>
                  <span><TermTooltip text={g.label} /></span>
                </div>
                <div className="text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans leading-none"><TermTooltip text={g.desc} /></div>
              </div>
              <span className="text-[10px] font-mono bg-slate-900/60 text-teal-400 px-1.5 py-0.5 rounded border border-slate-800">
                {g.note}
              </span>
            </button>
          );
        })}
      </div>

      {/* 시각적 피아노 건반 및 레이블 */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-xl p-3 pt-6 select-none overflow-x-auto scroller-slim">
        <div className="flex justify-start lg:justify-center min-w-[500px] h-32 relative">
          {KEYS_PRESET.map((k) => {
            if (k.isBlack) return null; // 아래에서 포지셔닝을 위해 따로 렌더링하거나, 겹쳐서 진행
            
            // 이 건반 앞에 검은 건반이 있는지 계산하여 마운트
            const isPressed = activeNote === k.note;
            return (
              <div 
                key={k.note}
                onMouseDown={() => playNote(k.freq, k.note)}
                onMouseUp={stopNote}
                onMouseLeave={stopNote}
                onTouchStart={(e) => { e.preventDefault(); playNote(k.freq, k.note); }}
                onTouchEnd={(e) => { e.preventDefault(); stopNote(); }}
                className={`w-8 border-r border-slate-900 h-full rounded-b-md relative cursor-pointer flex flex-col justify-end pb-2 items-center transition-all ${
                  isPressed 
                    ? "bg-teal-500 text-slate-950" 
                    : "bg-white dark:bg-slate-900 hover:bg-slate-100 dark:bg-slate-800/80 text-slate-705"
                }`}
                style={{ zIndex: 1 }}
              >
                <span className="text-[9px] font-mono font-bold uppercase">
                  {k.note}
                </span>
                {k.label && (
                  <span className="absolute top-1 text-[7px] text-center px-0.5 leading-none opacity-80 pointer-events-none text-slate-900 dark:text-slate-100 font-sans font-semibold">
                    <TermTooltip text={k.label.split('/')[0]} />
                  </span>
                )}
              </div>
            );
          })}

          {/* 검은 건반 레이어 오버레이 */}
          <div className="absolute top-0 left-[24px] flex pointer-events-none min-w-[500px]" style={{ zIndex: 10 }}>
            {/* 개별 흑건 절대좌표 배치용 offset 구조 */}
            {KEYS_PRESET.map((k, index) => {
              if (!k.isBlack) return null;
              
              // C3가 인덱스 0일 때, 흑건은 백건 슬롯 사이에 알맞게 떠 있어야 합니다.
              // 백건 간격이 32px 이고 흑건 두께가 18px인 정적 매칭:
              // 백건 개수 기준 offset 계산
              const whiteKeysBefore = KEYS_PRESET.slice(0, index).filter(x => !x.isBlack).length;
              const leftOffset = whiteKeysBefore * 32 - 10; // 건반 중심 정렬 보정
              const isPressed = activeNote === k.note;

              return (
                <div
                  key={k.note}
                  onMouseDown={(e) => { e.stopPropagation(); playNote(k.freq, k.note); }}
                  onMouseUp={(e) => { e.stopPropagation(); stopNote(); }}
                  onMouseLeave={(e) => { e.stopPropagation(); stopNote(); }}
                  onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); playNote(k.freq, k.note); }}
                  onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); stopNote(); }}
                  className={`w-5 h-20 rounded-b absolute cursor-pointer pointer-events-auto border-t-0 shadow-lg flex items-end justify-center pb-2 transition-all ${
                    isPressed 
                      ? "bg-teal-400 text-slate-950" 
                      : "bg-slate-800 hover:bg-slate-700 border border-slate-950 text-slate-400"
                  }`}
                  style={{ left: `${leftOffset}px` }}
                >
                  <span className="text-[7px] font-mono scale-90 font-bold leading-none">
                    {k.note}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center mt-3 text-[10px] text-slate-500 dark:text-slate-400">
        <HelpCircle size={10} />
        건반을 꾹 마우스로 누르고 있으면 가이드 사인음이 지속됩니다. 과압축 진단 및 남성/여성 고음 브릿지 훈련 시 적극 활용해 보세요.
      </div>
    </div>
  );
}
