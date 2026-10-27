import fs from 'fs';
const content = fs.readFileSync('src/data/mockProducts.ts', 'utf8');
const idMatches = [...content.matchAll(/id:\s*(\d+),\s*title:\s*["']([^"']+)["']/g)];
console.log('Count:', idMatches.length);
idMatches.forEach(m => console.log(`${m[1]}: ${m[2]}`));
