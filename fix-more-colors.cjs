const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/text-sky-700/g, 'text-sky-700 dark:text-sky-400');
  content = content.replace(/text-purple-700/g, 'text-purple-700 dark:text-purple-400');
  
  // just cleanup
  content = content.replace(/dark:text-sky-400(?:\s+dark:text-sky-400)+/g, 'dark:text-sky-400');
  content = content.replace(/dark:text-purple-400(?:\s+dark:text-purple-400)+/g, 'dark:text-purple-400');
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
