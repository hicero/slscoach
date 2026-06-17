const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/dark:text-slate-300 dark:text-slate-200/g, 'dark:text-slate-200');
  content = content.replace(/dark:text-slate-300(?:\s+dark:text-slate-200)/g, 'dark:text-slate-200');
  fs.writeFileSync(filePath, content);
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  }
}

walk('./src/components');
console.log('done colors cleanup');
