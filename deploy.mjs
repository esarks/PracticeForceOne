// One-shot Firebase Hosting deploy via REST API using a gcloud OAuth access token.
// Usage: TOKEN=$(gcloud auth print-access-token) node deploy.mjs
import { readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { createHash } from "node:crypto";
import { resolve } from "node:path";

const TOKEN = process.env.TOKEN;
const SITE = "practiceforceone";
const QUOTA = "claimsprocessing";
const API = "https://firebasehosting.googleapis.com/v1beta1";
if (!TOKEN) { console.error("Missing TOKEN env"); process.exit(1); }

const H = (extra = {}) => ({
  Authorization: `Bearer ${TOKEN}`,
  "x-goog-user-project": QUOTA,
  ...extra,
});

// Deploy paths -> local files
const FILES = {
  "/index.html": "index.html",
  "/compare.html": "compare.html",
  "/features.html": "features.html",
  "/assets/css/styles.css": "assets/css/styles.css",
  "/assets/js/main.js": "assets/js/main.js",
  "/assets/img/pf1-logo-mark.png": "assets/img/pf1-logo-mark.png",
  "/assets/img/pf1-logo-alt.png": "assets/img/pf1-logo-alt.png",
  "/assets/img/pf1-logo-tagline.png": "assets/img/pf1-logo-tagline.png",
};

async function jfetch(url, opts) {
  const r = await fetch(url, opts);
  const t = await r.text();
  if (!r.ok) throw new Error(`${opts?.method || "GET"} ${url}\n${r.status} ${t}`);
  return t ? JSON.parse(t) : {};
}

const gz = {};   // hash -> gzipped Buffer
const map = {};  // deployPath -> hash
for (const [dpath, lpath] of Object.entries(FILES)) {
  const buf = gzipSync(readFileSync(resolve(lpath)), { level: 9 });
  const hash = createHash("sha256").update(buf).digest("hex");
  gz[hash] = buf;
  map[dpath] = hash;
}

console.log("1/5 creating version…");
const version = await jfetch(`${API}/sites/${SITE}/versions`, {
  method: "POST", headers: H({ "Content-Type": "application/json" }), body: "{}",
});
console.log("   version:", version.name);

console.log("2/5 populating file manifest…");
const pop = await jfetch(`${API}/${version.name}:populateFiles`, {
  method: "POST", headers: H({ "Content-Type": "application/json" }),
  body: JSON.stringify({ files: map }),
});
const required = pop.uploadRequiredHashes || [];
console.log(`   ${Object.keys(map).length} files, ${required.length} need upload`);

console.log("3/5 uploading files…");
for (const hash of required) {
  const r = await fetch(`${pop.uploadUrl}/${hash}`, {
    method: "POST",
    headers: H({ "Content-Type": "application/octet-stream" }),
    body: gz[hash],
  });
  if (!r.ok) throw new Error(`upload ${hash}: ${r.status} ${await r.text()}`);
  process.stdout.write("   ✓\n");
}

console.log("4/5 finalizing version…");
await jfetch(`${API}/${version.name}?update_mask=status`, {
  method: "PATCH", headers: H({ "Content-Type": "application/json" }),
  body: JSON.stringify({ status: "FINALIZED" }),
});

console.log("5/5 releasing…");
const rel = await jfetch(`${API}/sites/${SITE}/releases?versionName=${encodeURIComponent(version.name)}`, {
  method: "POST", headers: H({ "Content-Type": "application/json" }), body: "{}",
});
console.log("\n✅ LIVE:", rel.version?.name || "released");
console.log("   https://practiceforceone.web.app");
