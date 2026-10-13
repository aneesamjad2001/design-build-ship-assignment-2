/* Search Wikimedia Commons and print top results with license metadata so we
   can pick public-domain / CC references for the mood boards. */
const queries = process.argv.slice(2);
const API = "https://commons.wikimedia.org/w/api.php";

async function search(q) {
  const s = new URL(API);
  s.search = new URLSearchParams({
    action: "query", list: "search", srsearch: q, srnamespace: "6",
    srlimit: "6", format: "json",
  });
  const hits = (await (await fetch(s, { headers: { "User-Agent": "coursework-moodboard/1.0" } })).json())
    .query.search.map((h) => h.title);
  if (!hits.length) return console.log(`\n=== ${q}: no hits`);
  const i = new URL(API);
  i.search = new URLSearchParams({
    action: "query", titles: hits.join("|"), prop: "imageinfo",
    iiprop: "url|extmetadata|size", iiurlwidth: "900", format: "json",
  });
  const pages = (await (await fetch(i, { headers: { "User-Agent": "coursework-moodboard/1.0" } })).json())
    .query.pages;
  console.log(`\n=== ${q}`);
  for (const p of Object.values(pages)) {
    const info = p.imageinfo?.[0];
    if (!info) continue;
    const m = info.extmetadata || {};
    const lic = m.LicenseShortName?.value || "?";
    const artist = (m.Artist?.value || "?").replace(/<[^>]+>/g, "").slice(0, 50);
    console.log(`- ${p.title}\n    license: ${lic} · artist: ${artist} · ${info.width}x${info.height}\n    thumb: ${info.thumburl}`);
  }
}

(async () => {
  for (const q of queries) await search(q);
})();
