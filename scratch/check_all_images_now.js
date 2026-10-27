import fs from 'fs';
import https from 'https';

const content = fs.readFileSync('src/data/mockProducts.ts', 'utf8');
const urlMatches = content.match(/https:\/\/images\.unsplash\.com\/photo-[^"'\s]+/g) || [];
const uniqueUrls = [...new Set(urlMatches)];

console.log('Testing', uniqueUrls.length, 'unique image URLs...');

function check(url) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', (e) => {
      resolve({ url, status: 'ERR' });
    });
    req.setTimeout(4000, () => {
      req.destroy();
      resolve({ url, status: 'TIMEOUT' });
    });
  });
}

(async () => {
  const results = await Promise.all(uniqueUrls.map(check));
  const bad = results.filter(r => r.status !== 200);
  console.log('Bad URLs count:', bad.length);
  bad.forEach(b => console.log(b.status, b.url));
  console.log('All other', results.length - bad.length, 'URLs are 200 OK.');
})();
