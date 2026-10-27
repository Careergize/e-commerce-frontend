import fs from 'fs';
const content = fs.readFileSync('src/data/mockProducts.ts', 'utf8');
const cats = {};
const subcats = {};
const reCat = /category:\s*["']([^"']+)["']/g;
const reSub = /subcategory:\s*["']([^"']+)["']/g;
let m;
while ((m = reCat.exec(content)) !== null) {
  cats[m[1]] = (cats[m[1]] || 0) + 1;
}
while ((m = reSub.exec(content)) !== null) {
  subcats[m[1]] = (subcats[m[1]] || 0) + 1;
}
console.log('Categories:', cats);
console.log('Subcategories:', subcats);
