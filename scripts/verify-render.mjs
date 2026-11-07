import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { createServer } from "vite";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  const { projects } = await server.ssrLoadModule("/src/data/projects.ts");
  const { socials } = await server.ssrLoadModule("/src/data/socials.ts");
  const html = renderToStaticMarkup(createElement(App));
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size, "IDs must be unique");
  for (const [, hash] of html.matchAll(/href="#([^"]*)"/g))
    if (hash) assert(ids.includes(hash), `Broken anchor: ${hash}`);
  for (const p of projects)
    assert.equal(
      html.includes(`<h3>${p.name}</h3>`),
      p.visible,
      `${p.name} visibility`,
    );
  assert(html.includes(`mailto:${socials.email}`));
  assert(html.includes(socials.github) && html.includes(socials.linkedin));
  assert(
    !html.includes("tel:") &&
      !html.includes("download=") &&
      !html.includes(".pdf"),
    "No phone or resume download",
  );
  assert(
    !html.includes("resume-summarizer") && !html.includes("studybud"),
    "Do not use mismatched resume repository links",
  );
  assert(
    html.includes('aria-expanded="false"') &&
      html.includes('aria-controls="navigation"'),
  );
  assert.equal(
    [...html.matchAll(/<details>/g)].length,
    projects.filter((p) => p.visible).length,
    "Every visible project has an expandable write-up",
  );
  assert(
    html.includes("Jun 2026") &&
      html.includes("Jan 2024") &&
      html.includes("Ozibook"),
    "Confirmed work history",
  );
  assert(
    html.includes("Personal projects") &&
      html.includes("Enterprise experience"),
    "Skill experience contexts",
  );
  const first = projects[0];
  first.visible = false;
  const hidden = renderToStaticMarkup(createElement(App));
  assert(
    !hidden.includes(`<h3>${first.name}</h3>`),
    "Visibility flag must hide real projects too",
  );
  first.visible = true;
  const saved = { ...socials };
  socials.email = "";
  socials.github = "";
  socials.linkedin = "";
  const missing = renderToStaticMarkup(createElement(App));
  assert(
    !missing.includes("mailto:") && !missing.includes(`href="${saved.github}"`) && !missing.includes(`href="${saved.linkedin}"`),
    "No broken empty contact links",
  );
  Object.assign(socials, saved);
  async function checkPublic(path) {
    for (const file of await readdir(path, { withFileTypes: true })) {
      assert(!/\.pdf$/i.test(file.name), "No resume uploaded to public assets");
      if (file.isDirectory()) await checkPublic(`${path}/${file.name}`);
    }
  }
  await checkPublic("public");
  const css = await readFile("src/styles.css", "utf8");
  assert(
    css.includes("prefers-reduced-motion") && /font-size:\s*18px/.test(css),
  );
  console.log(
    "PASS: internal anchors, unique IDs, project visibility and write-ups, confirmed contacts, no phone/PDF/download, role dates, skill contexts, missing-contact fallbacks, reduced motion and 18px base type.",
  );
} finally {
  await server.close();
}
