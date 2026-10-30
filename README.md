# Mekhluqat Abdulwehab — Portfolio

Personal portfolio for Mekhluqat Abdulwehab (Data Science · Machine Learning), built with
Next.js 16, React 19, Tailwind CSS v4 and next-themes. The structure is adapted from
[Jennah198/dev-portfolio](https://github.com/Jennah198/dev-portfolio), restyled with a teal / amber "data" palette.

## Run it

```bash
npm ci
npm run dev                  # http://localhost:3000, TODO notes are visible here
npm run build && npm start   # production view, TODO notes are hidden
```

The contact form sends through [Resend](https://resend.com). Set `RESEND_API_KEY` and
`CONTACT_EMAIL` in `.env.local`. Without them the site still builds, and the form says it's
temporarily unavailable.

## Editing content

Everything lives in **`lib/data.ts`**: profile, socials, projects, experience, skills,
education and certificates. `/cv.md`, `/llms.txt`, the print CV (Ctrl/⌘ P), JSON-LD and the
sitemap are all generated from it.

- Strings starting with `TODO(mekhluqat):` show as dashed notes in dev and are hidden in production.
- Placeholder values are marked `// PLACEHOLDER`.

### Still to fill in

| What | Where |
| --- | --- |
| Real GitHub / LinkedIn / LeetCode URLs | `socials` |
| Repo link for each project | `GITHUB` constant, `caseStudies[].links`, `moreProjects[].href` |
| Deployed domain | `site.url` |
| Zindi competition year, SSGI internship dates and stack | `experience` |
| Project details (models, metrics, results) | `caseStudies[].sections` (the TODO notes) |
| Project screenshots | add to `/public`, set `caseStudies[].image` (a generated chart shows until then) |
| Certificate scans | add to `/public`, set `certificates[].image` (a placeholder card shows until then) |
| Hosted PDF résumé (optional) | `site.resumeUrl` (defaults to the generated `/cv.md`) |

## Extras

- `⌘K` / `Ctrl K` command palette, `?` for keyboard shortcuts
- Light / dark theme and five accent colours (navbar swatch)
- Case-study page per project at `/work/[slug]`
