const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /좂은/g, to: '좁은' },
  { from: /흑성/g, to: '흉성' },
  { from: /구정이/g, to: '조정이' },
  { from: /축존/g, to: '보존' },
  { from: /하급하는/g, to: '해결하는' },
  { from: /너비 모음/g, to: '넓은 모음' },
  { from: /균형한/g, to: '균형 잡힌' },
  { from: /슈센임/g, to: '숨섞임' },
  { from: /클래시 중일 때/g, to: '불명확할 때' }
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  for (const r of replacements) {
    if (r.from.test(content)) {
      content = content.replace(r.from, r.to);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed typos in:', filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  }
}

walk('./src');
console.log('done fixing typos');
