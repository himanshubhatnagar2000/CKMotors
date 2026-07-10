const urls = [
  ['ace-pro-bi-fuel', 'https://trucks.cardekho.com/en/trucks/tata/ace-pro-bi-fuel'],
  ['ace-pro-petrol', 'https://trucks.cardekho.com/en/trucks/tata/ace-pro'],
  ['ace-pro-ev', 'https://trucks.cardekho.com/en/trucks/tata/ace-pro-ev'],
  ['ace-gold-petrol', 'https://trucks.cardekho.com/en/trucks/tata/ace-gold/2100petrol'],
  ['ace-cng-2-0', 'https://trucks.cardekho.com/en/trucks/tata/ace-cng-2-0-bi-fuel'],
  ['ace-ht-diesel', 'https://trucks.cardekho.com/en/trucks/tata/ace-ht/2250-diesel'],
  ['ace-ev-1000', 'https://trucks.cardekho.com/en/trucks/tata/ace-ev-1000'],
  ['intra-v10', 'https://trucks.cardekho.com/en/trucks/tata/intra-v10'],
  ['intra-v20', 'https://trucks.cardekho.com/en/trucks/tata/intra-v20-bi-fuel'],
  ['intra-v30', 'https://trucks.cardekho.com/en/trucks/tata/intra-v30'],
  ['intra-v40', 'https://trucks.cardekho.com/en/trucks/tata/intra-v40'],
  ['intra-v50', 'https://trucks.cardekho.com/en/trucks/tata/intra-v50'],
  ['intra-v70', 'https://trucks.cardekho.com/en/trucks/tata/intra-v70'],
  ['yodha-1700', 'https://trucks.cardekho.com/en/trucks/tata/yodha-1700-bs6'],
  ['yodha-2-0', 'https://trucks.cardekho.com/en/trucks/tata/yodha-2-0'],
  ['yodha-cc', 'https://trucks.cardekho.com/en/trucks/tata/yodha-crew-cab-4x2'],
  ['magic-express', 'https://buses.cardekho.com/buses/tata/magic-express'],
  ['magic-mantra', 'https://buses.cardekho.com/buses/tata/magic-mantra'],
];

async function main() {
  for (const [name, url] of urls) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      const matches = [
        ...html.matchAll(/https:\/\/[^"'\s>]+\.(?:jpg|jpeg|png|webp)/gi),
      ];
      const filtered = [...new Set(matches.map(m => m[0]))].filter(u =>
        (u.includes('truckcdn') || u.includes('buscdn') || u.includes('tractorjunction') || u.includes('91trucks') || u.includes('tatamotors')) &&
        !u.includes('logo') && !u.includes('icon') && !u.includes('pwa/')
      );
      console.log(name + ' => ' + (filtered[0] || 'NOT FOUND'));
      if (filtered.length > 1) console.log('  alt: ' + filtered.slice(1, 4).join(' | '));
    } catch (e) {
      console.log(url + ' ERROR: ' + e.message);
    }
  }
}

main();
