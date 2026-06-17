import React, { Fragment, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { VOCAL_TERMS } from '../terms';

const TERMS_KEYS = Object.keys(VOCAL_TERMS).sort((a, b) => b.length - a.length);
const REGEX = new RegExp(`(${TERMS_KEYS.map(k => k.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')).join('|')})`, 'gi');

export default function TermTooltip({ text }: { text: string | undefined | null }) {
  if (!text) return null;
  if (typeof text !== 'string') return <>{text}</>;

  const parts = text.split(REGEX);

  return (
    <>
      {parts.map((part, i) => {
        const lowerPart = part.toLowerCase();
        const originalKey = TERMS_KEYS.find(key => key.toLowerCase() === lowerPart);

        if (originalKey) {
          return <TooltipTrigger key={i} text={part} tooltipContent={VOCAL_TERMS[originalKey]!} />;
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

function TooltipTrigger({ text, tooltipContent }: { text: string, tooltipContent: string, key?: React.Key | null }) {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (show && spanRef.current) {
      const rect = spanRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top - 8,
        left: rect.left + rect.width / 2,
      });
    }
  }, [show]);

  return (
    <span 
      ref={spanRef}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="relative inline cursor-help border-b border-dashed border-teal-500/70 text-teal-800 dark:text-teal-300 hover:text-teal-950 font-semibold transition-colors"
    >
      {text}
      {show && createPortal(
        <div 
          className="fixed pointer-events-none z-[99999] -translate-x-1/2 -translate-y-full w-48 sm:w-64 p-3.5 bg-slate-900 text-white text-[11px] sm:text-xs leading-relaxed rounded-xl shadow-2xl text-center whitespace-normal break-keep font-normal animate-in fade-in zoom-in duration-200"
          style={{ top: coords.top, left: coords.left }}
        >
          {tooltipContent}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900" />
        </div>,
        document.body
      )}
    </span>
  );
}
