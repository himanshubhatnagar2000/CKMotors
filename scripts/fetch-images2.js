const urls = [
  ['intra-v30', 'https://trucks.cardekho.com/en/trucks/tata/intra-v30'],
  ['intra-v20', 'https://trucks.cardekho.com/en/trucks/tata/intra-v20-bi-fuel'],
  ['ace-cng-2-0', 'https://trucks.cardekho.com/en/trucks/tata/ace-cng-2-0-bi-fuel'],
  ['yodha-cc', 'https://trucks.cardekho.com/en/trucks/tata/yodha-crew-cab-4x2'],
  ['intra-v30-tj', 'https://trucks.tractorjunction.com/en/tata-truck/intra-v30'],
  ['intra-v20-tj', 'https://trucks.tractorjunction.com/en/tata-truck/intra-v20'],
  ['yodha-cc-tj', 'https://trucks.tractorjunction.com/en/tata-truck/yodha-crew-cab'],
];

async function main() {
  for (const [name, url] of urls) {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const matches = [...html.matchAll(/https:\/\/[^"'\s>]+\.(?:jpg|jpeg|png|webp)/gi)]
      .map(m => m[0])
      .filter(u => !u.includes('logo') && !u.includes('icon') && !u.includes('avatar') && !u.includes('pwa/'));
    console.log(name, [...new Set(matches)].slice(0, 8));
  }
}

main();
