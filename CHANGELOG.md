# Jurnal de modificări — Reiki

## 2.1.1 — 2026-11-15

- Nou: butoane de distribuire pe rețele sociale (vertical, pe marginea din stânga; fără scripturi externe, doar linkuri deschise la clic); bara de zoom cu lupă și „potrivire ecran” revine pe marginea din dreapta, centrată pe verticală; corectat afișarea suprapusă la zoom mare (panourile cu înălțimi în vh/vw nu mai ies din ecran).

## 2.1.0 — 2026-11-15

- Nou: accesibilitate pe toate ecranele — butonul „Aa” (mărimea textului, contrast ridicat, fără animații, text lizibil, linkuri subliniate, citire cu voce), săgeata „Înapoi sus” și „Sari la conținut”; fereastra se potrivește mereu ecranului; zoom-ul cu lupă și „potrivire ecran” stau acum pe marginea din stânga (fff-kit 1.6.0).

## 2.0.10 — 2026-11-15

- Nou: texturi fractale hiper-detaliate (fff-texturi 1.1.2) — fundalul și suprafețele mari (carduri, panouri, antete, butoane; filele și dialogurile ascunse la încărcare, când se deschid) primesc un material generat local (WebGL2, fără rețea și fără imagini), care se repetă fără cusătură; culorile aplicației rămân ale ei. Se oprește din dialogul „Transparență” sau cu `?notex=1`.

## 2.0.5 — 2026-11-08

- Gradele I–III: notă că aplicația nu acordă și nu echivalează certificări (8 limbi).

## 2.0.2 — 2026-11-02 (reîmprospătare kit)

- Nou (kit): **Sincronizare între dispozitive** (`FFF.sync`) — în dialogul «Transparență» (clic pe versiune → Copie de siguranță): conectezi două dispozitive direct (WebRTC, cod/QR, fără server și fără cont) și își schimbă datele aplicației; cea mai recentă valoare câștigă, secretele (chei API, parole) nu se trimit, ștergerile nu se propagă. Aplicarea trece prin importul kitului (confirmare, chei permise, rollback).
- Nou (kit): **Istoric local — «mașina timpului»** (`FFF.history`) — instantanee automate ale datelor (IndexedDB, fără secrete), diferență față de starea curentă și restaurare reversibilă; «Șterge datele aplicației» șterge și istoricul.
- Module adăugate: `qr`, `p2p`, `sync`, `history` (+~140 KB). Versiunea aplicației nu se schimbă.

## 2.0.2 — 2026-10-27 (anterior: 2.0.1)

Doar text (identificatori confirmați).

- Blocul „Surse” (`x14s`, 8 limbi): adăugate DOI Cochrane CD006833.pub2, DOI + PMID Lee et al. 2008, DOI Jain & Mills 2010 și adresa/data paginii NCCIH (decembrie 2018), toate confirmate pe pagini deschise.
- Test nou `tests/surse.test.mjs` (static).

Nu implementat:

- Volum/pagini Lee et al. 2008 și Jain & Mills 2010: neconfirmate (rămân ca în 2.0.1).
- Căutarea unei versiuni Cochrane mai noi decât 2015: nefăcută.
- Link-uri active: nu (aplicația rămâne fără ieșiri externe).

## 2.0.1 — 2026-10-27 (anterior: 2.0.0)

Doar text (surse).

- Panoul „Ce spun dovezile”: bloc nou „Surse” (cheia `x14s`, 8 limbi) cu citări exacte: Joyce & Herbison 2015 (Cochrane CD006833), Lee/Pittler/Ernst 2008, Jain & Mills 2010, NCCIH.
- README: rândul din „Limits and warnings” actualizat (referința nu mai lipsește), „Stare” și „Offline”.

Nu implementat:

- Link-uri directe către PubMed/Cochrane: nu s-au pus (aplicația rămâne fără link-uri externe active); citările sunt text.
- Afirmații despre eficacitate: niciuna adăugată.

Istoricul anterior (1.x–2.0.0) este în secțiunea „History” din README.md.
