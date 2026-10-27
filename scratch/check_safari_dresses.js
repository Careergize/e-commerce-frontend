import https from 'node:https';

// Candidate Unsplash IDs for women in linen safari shirt dress, belted neutral shirt dress, safari style
const candidateIds = [
  "photo-1595777457583-95e059d581b8", // Linen dress neutral
  "photo-1572804013309-59a88b7e92f1", // Linen dress
  "photo-1502716119720-b23a93e5fe1b", // Summer shirt dress
  "photo-1515372039744-b8f02a3ae446", // Model in dress
  "photo-1539109136881-3be0616acf4b", // Autumn fashion
  "photo-1496747611176-843222e1e57c", // Old one
  "photo-1585487000160-6ebcfceb0d03", // Linen shirt dress
  "photo-1612423284934-2850a4ea6b0f", // Beige belted dress
  "photo-1550639525-c97d455acf70", // Safari dress / beige dress
  "photo-1583496661160-fb5886a0aaaa", // Neutral dress
  "photo-1515886657613-9f3515b0c78f", // Fashion model
  "photo-1594633312681-425c7b97ccd1", // Brown dress/top
  "photo-1485968579580-b6d095142e6e", // Beige linen outfit
  "photo-1525507119028-ed4c629a60a3", // Earth linen dress
  "photo-1617059063772-34532796cdb5", // Blouse / dress
  "photo-1589465885857-44edb59bbff2", // Linen neutral
];

function check(id) {
  return new Promise((res) => {
    const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;
    https.get(url, (r) => {
      res({ id, status: r.statusCode, url });
    }).on('error', (e) => res({ id, status: e.message, url }));
  });
}

async function run() {
  const results = await Promise.all(candidateIds.map(check));
  results.filter(r => r.status === 200).forEach(r => console.log('OK:', r.url));
}

run();
