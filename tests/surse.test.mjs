// Identificatori de surse confirmați. Rulare: node tests/surse.test.mjs (static)
import fs from 'node:fs'; import path from 'node:path'; import {fileURLToPath} from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url)); const h = fs.readFileSync(path.join(HERE, '..', 'index.html'), 'utf8');
let ok = 0, bad = 0; const t = (n, c, x) => { if (c) { ok++; console.log('  ok  ', n); } else { bad++; console.log('  FAIL', n, x ?? ''); } };
const n = r => (h.match(r) || []).length;
t('DOI Cochrane în toate blocurile', n(/10\.1002\/14651858\.CD006833\.pub2/g) >= 8);
t('DOI + PMID Lee et al.', n(/10\.1111\/j\.1742-1241\.2008\.01729\.x; PMID 18410352/g) >= 8);
t('DOI Jain & Mills', n(/10\.1007\/s12529-009-9062-4/g) >= 8);
t('NCCIH cu adresă și dată', n(/nccih\.nih\.gov\/health\/reiki \(page dated December 2018/g) >= 8);
t('versiune 2.0.2', JSON.parse(fs.readFileSync(path.join(HERE, '..', 'app.json'), 'utf8')).version === '2.0.2');
console.log(`\n${ok} reușite, ${bad} eșuate`); process.exit(bad ? 1 : 0);
