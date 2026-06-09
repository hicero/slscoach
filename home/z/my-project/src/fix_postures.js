const fs = require('fs');

let txt = fs.readFileSync('src/components/VocalReference.tsx', 'utf8');

const regex = /<div className="mt-2 text-\[10px\] bg-white border border-slate-200 p-1\.5 rounded-md inline-block text-slate-500[\s\S]*?<thead className="bg-slate-50/;

if (regex.test(txt)) {
  txt = txt.replace(regex, `<div className="mt-2 text-[10px] bg-white border border-slate-200 p-1.5 rounded-md inline-block text-slate-500 font-semibold">
                  추천: Type 5 (신체적 과긴장 동반 시)
                </div>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl">
                <h4 className="font-bold text-slate-800 text-sm mb-1 text-sky-700">⑤ 고개 숙이기 (Chin Tuck)</h4>
                <p className="text-xs text-slate-600 mb-2">턱을 가슴 쪽으로 약간 숙인 채 발성하여 설골상근 긴장을 감소시키고 후두 상승 억제.</p>
                <div className="mt-2 text-[10px] bg-white border border-slate-200 p-1.5 rounded-md inline-block text-slate-500 font-semibold">
                  추천: Type 4 (Pulled Chest 후두 상승 억제)
                </div>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl">
                <h4 className="font-bold text-slate-800 text-sm mb-1 text-purple-700">⑥ 허리 숙이기 (Bend Forward)</h4>
                <p className="text-xs text-slate-600 mb-2">허리를 앞으로 약 45도 숙이고 발성하여 복강내압을 자동 증가, 호흡 지원 파워 자동화.</p>
                <div className="mt-2 text-[10px] bg-white border border-slate-200 p-1.5 rounded-md inline-block text-slate-500 font-semibold">
                  추천: Type 6 (Breathy/Weak 호흡 지원 강화)
                </div>
              </div>
            </div>

            <h3 className="text-[14px] font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">유형별 추천 신체 큐 요약정리</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-150">
              <table className="w-full text-xs text-left min-w-[600px]">
                <thead className="bg-slate-50`);
                
  fs.writeFileSync('src/components/VocalReference.tsx', txt);
  console.log('Fixed postures');
} else {
  console.log('Regex not found');
}
