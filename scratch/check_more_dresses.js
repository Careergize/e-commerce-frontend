import https from 'node:https';

const ids = [
  "photo-1548624313-0396c75e4b1a",
  "photo-1562157873-818bc0726f68",
  "photo-1554412933-514a83d2f3c8",
  "photo-1563178406-4cdc2923acbc",
  "photo-1574201635302-388dd92a4c3f",
  "photo-1518049362265-d5b2a6467637",
  "photo-1576995853123-5a10305d93c0",
  "photo-1572804013309-59a88b7e92f1",
  "photo-1596755094514-f87e34085b2c",
  "photo-1583743814966-8936f5b7be1a",
  "photo-1509631179647-0177331693ae",
  "photo-1534528741775-53994a69daeb",
  "photo-1515886657613-9f3515b0c78f",
  "photo-1490481651871-ab68de25d43d",
  "photo-1485968579580-b6d095142e6e",
  "photo-1503342217505-b0a15ec3261c",
  "photo-1529139574466-a303027c1d8b",
  "photo-1564257631407-4deb129965a2",
  "photo-1581044777550-4cfa60707c03",
  "photo-1544005313-94ddf0286df2"
];

function check(id) {
  return new Promise((res) => {
    https.get(`https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`, (r) => {
      res({ id, status: r.statusCode });
    }).on('error', e => res({ id, status: e.message }));
  });
}

async function run() {
  const res = await Promise.all(ids.map(check));
  res.filter(r => r.status === 200).forEach(r => console.log('VALID:', r.id));
}

run();
