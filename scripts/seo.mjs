import { readFile, writeFile } from "node:fs/promises";
const raw = process.env.VITE_SITE_URL;
const escape = (s) =>
  s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
let html = await readFile("dist/index.html", "utf8");
if (raw) {
  const url = new URL(raw);
  if (url.protocol !== "https:")
    throw new Error("VITE_SITE_URL must use HTTPS");
  const canonical = url.href.replace(/\/$/, "") + "/";
  const image = new URL("assets/social.svg", canonical).href;
  html = html.replace(
    "</head>",
    `<link rel="canonical" href="${escape(canonical)}"><meta property="og:url" content="${escape(canonical)}"><meta property="og:image" content="${escape(image)}"><meta name="twitter:image" content="${escape(image)}"><script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Rutvik Purohit", jobTitle: "Software Engineer II", url: canonical, worksFor: { "@type": "Organization", name: "Deloitte" }, knowsAbout: ["C#", ".NET", "SQL Server", "Enterprise Integrations"] }).replaceAll("<", "\\u003c")}</script></head>`,
  );
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(canonical)}</loc></url></urlset>`,
  );
  await writeFile(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\nSitemap: ${canonical}sitemap.xml\n`,
  );
} else {
  await writeFile("dist/robots.txt", "User-agent: *\nAllow: /\n");
  console.log(
    "SEO: set VITE_SITE_URL to emit canonical, structured data and sitemap.",
  );
}
await writeFile("dist/index.html", html);
