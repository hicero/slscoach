const fs = require('fs');

function repl(file) {
  let text = fs.readFileSync(file, 'utf8');
  text = text.replace(/절대적인 치유의 안전 지대/g, '상대적 저위험의 치유 지대');
  text = text.replace(/절대 안전/g, '상대적 저위험');
  text = text.replace(/호흡 압력/g, '공기 사용량');
  text = text.replace(/공기 압력/g, '공기 사용량');
  text = text.replace(/안전 지대/g, '저위험 지대');
  text = text.replace(/mf-f/g, 'mp-mf');
  text = text.replace(/mf~f/g, 'mp~mf');
  text = text.replace(/최저호흡/g, '최저 공기 사용량');
  text = text.replace(/저호흡/g, '저 공기 사용량');
  text = text.replace(/약호흡/g, '약 공기 사용량');
  text = text.replace(/중호흡/g, '중 공기 사용량');
  
  text = text.replace(/소리가 약하게라도 나오기는 하지만, 성역의 브릿지 구간에서 어김없이 와르르 깨짐/g, "소리가 약하게라도 나오기는 하지만, 성역의 브릿지 구간에서 어김없이 와르르 깨짐 (구분 문장: Type 6은 '소리가 안 나와요', Type 2는 '소리가 나오다가 깨져요')");
  text = text.replace(/가볍고 부드러운 연결/g, '가볍고 부드러운 연결 (Hold on 큐잉 주의: Type 5에서는 절대 금지, Type 6 전이시 즉시 중단)');
  text = text.replace(/Hooty \(가벼운 포근한 바보 목소리 음색\)/g, 'Hooty (가벼운 포근한 바보 목소리 음색, 임시적 과제 제약으로만 사용)');
  text = text.replace(/과도기적 유형 \(Light Transitional\)/g, "과도기적 유형 (Light Transitional - 이동 표적 Moving Target)");
  text = text.replace(/과도한 공기 압력과 흉성 무게를 줄이고/g, "과도한 공기 사용량과 흉성 무게를 줄이고 (Airflow 원활화)");
  text = text.replace(/Staccato 파열음 ➡️ Sustain 파열음 ➡️ 넓은 모음 기반 연결 ➡️ 짧은 가사 적용\./g, 'Staccato 파열음 ➡️ Sustain 파열음 ➡️ 넓은 모음 기반 연결 ➡️ 짧은 가사 적용. (임계 요동 주의: Type 5 상전이 경고)');
  fs.writeFileSync(file, text);
}

repl('src/types.ts');
repl('src/components/VocalReference.tsx');
repl('src/components/VocalLessonPlanner.tsx');
console.log('done');
