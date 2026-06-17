const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/bg-white/g, 'bg-white dark:bg-slate-900');
  content = content.replace(/bg-slate-50/g, 'bg-slate-50 dark:bg-slate-800/40');
  content = content.replace(/bg-slate-100/g, 'bg-slate-100 dark:bg-slate-800/80');
  
  content = content.replace(/text-slate-800/g, 'text-slate-800 dark:text-slate-200');
  content = content.replace(/text-slate-900/g, 'text-slate-900 dark:text-slate-100');
  content = content.replace(/text-slate-700/g, 'text-slate-700 dark:text-slate-300');
  content = content.replace(/text-slate-600/g, 'text-slate-600 dark:text-slate-400');
  content = content.replace(/text-slate-500/g, 'text-slate-500 dark:text-slate-400');
  
  content = content.replace(/border-slate-200/g, 'border-slate-200 dark:border-slate-700');
  content = content.replace(/border-slate-150/g, 'border-slate-150 dark:border-slate-700/50');
  content = content.replace(/border-slate-100/g, 'border-slate-100 dark:border-slate-800');
  content = content.replace(/border border-slate-205/g, 'border border-slate-200 dark:border-slate-700');
  
  // also fix double darks just in case
  content = content.replace(/dark:bg-slate-900(?:\s+dark:bg-slate-900)+/g, 'dark:bg-slate-900');
  content = content.replace(/dark:text-slate-200(?:\s+dark:text-slate-200)+/g, 'dark:text-slate-200');

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
console.log('done');
