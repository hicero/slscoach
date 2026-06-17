const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  content = content.replace(/text-teal-700/g, 'text-teal-700 dark:text-teal-400');
  content = content.replace(/text-indigo-700/g, 'text-indigo-700 dark:text-indigo-400');
  content = content.replace(/text-emerald-700/g, 'text-emerald-700 dark:text-emerald-400');
  content = content.replace(/text-rose-700/g, 'text-rose-700 dark:text-rose-400');
  content = content.replace(/text-[a-z]+-800/g, (m) => m + ' dark:' + m.replace('800', '300'));
  
  // also fix double darks just in case
  content = content.replace(/dark:text-teal-400(?:\s+dark:text-teal-400)+/g, 'dark:text-teal-400');
  content = content.replace(/dark:text-indigo-400(?:\s+dark:text-indigo-400)+/g, 'dark:text-indigo-400');
  content = content.replace(/dark:text-emerald-400(?:\s+dark:text-emerald-400)+/g, 'dark:text-emerald-400');
  content = content.replace(/dark:text-rose-400(?:\s+dark:text-rose-400)+/g, 'dark:text-rose-400');
  
  content = content.replace(/bg-teal-50(?=\s|")/g, 'bg-teal-50 dark:bg-teal-900/30');
  content = content.replace(/bg-indigo-50(?=\s|")/g, 'bg-indigo-50 dark:bg-indigo-900/30');
  content = content.replace(/bg-emerald-50(?=\s|")/g, 'bg-emerald-50 dark:bg-emerald-900/30');
  content = content.replace(/bg-rose-50(?=\s|")/g, 'bg-rose-50 dark:bg-rose-900/30');

  content = content.replace(/dark:bg-teal-900\/30(?:\s+dark:bg-teal-900\/30)+/g, 'dark:bg-teal-900/30');
  content = content.replace(/dark:bg-indigo-900\/30(?:\s+dark:bg-indigo-900\/30)+/g, 'dark:bg-indigo-900/30');
  content = content.replace(/dark:bg-emerald-900\/30(?:\s+dark:bg-emerald-900\/30)+/g, 'dark:bg-emerald-900/30');
  content = content.replace(/dark:bg-rose-900\/30(?:\s+dark:bg-rose-900\/30)+/g, 'dark:bg-rose-900/30');

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
console.log('done colors');
