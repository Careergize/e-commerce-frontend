import fs from 'fs';
const content = fs.readFileSync('src/data/mockProducts.ts', 'utf8');

const categoryMatches = content.match(/"category":\s*"([^"]+)"/g) || [];
const counts = {};
categoryMatches.forEach(m => {
  const cat = m.replace(/"category":\s*"/, '').replace('"', '');
  counts[cat] = (counts[cat] || 0) + 1;
});
console.log('Category Counts:', counts);

const total = Object.values(counts).reduce((a, b) => a + b, 0);
console.log('Total products:', total);
