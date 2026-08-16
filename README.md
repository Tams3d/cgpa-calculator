# CGPA Calculator

A regulation-aware SGPA, CGPA and percentage calculator for engineering students. Pick your college, department, batch and current semester, then enter grades once. SGPA, CGPA and percentage update as you type.

Currently live for **Rajalakshmi Engineering College** with more colleges coming soon.

## Features

- **Subject-by-subject entry** for the current semester, using the official grade scale.
- **SGPA shortcut** for past semesters. One number per semester, CGPA rolls forward.
- **Regulation-aware**. Anna University curricula, credit structures and percentage formulas per department and year of admission.
- **Live summary**. CGPA, this semester's SGPA, previous semesters' CGPA and percentage.
- **Private by default**. Everything stays in your browser's local storage. No account, no server.
- **Light / dark / system** theme, mobile-first layout with a sticky summary bar on small screens.

## Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) with [shadcn/ui](https://ui.shadcn.com) primitives
- [Base UI](https://base-ui.com), [Heroicons](https://heroicons.com), [Inter](https://rsms.me/inter/) via Google Fonts
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) for linting, [Bun](https://bun.sh) as package manager

## Getting started

```bash
bun install
bun run dev        # start the dev server
bun run check      # lint + typecheck
bun run build      # typecheck + production build
bun run preview    # preview the production build
```

## Project structure

```
src/
├── components/
│   ├── ui/                  # Base UI + shadcn primitives (button, select, accordion, ...)
│   ├── landing/             # hero, stats, logo cloud, features, FAQ, header, footer
│   ├── calculator/          # course details, grade rows, semester cards, summary
│   └── theme/               # theme provider + toggle
├── data/                    # colleges, 19 departments, curricula, grade scales
├── hooks/                   # useCgpaStore (state + persistence)
├── lib/
│   ├── cgpa.ts              # CGPA/SGPA/percentage math
│   ├── storage.ts           # localStorage persistence + legacy migration
│   └── utils.ts             # cn() helper
├── types/                   # curriculum, computation, storage types
└── App.tsx
public/
├── robots.txt, sitemap.xml  # search engine discovery
├── llms.txt                 # LLM/agent-friendly site overview
├── logos/, favicon.svg, og-card.png
└── 404.html
```

## How the math works

- **SGPA** = credit-weighted grade points earned in a semester ÷ credits completed in that semester.
- **CGPA** = total credit-weighted grade points ÷ total credits completed across all semesters (including any past-semester SGPA you enter, weighted by that semester's credits).
- **Percentage** follows the curriculum's formula: `(CGPA − 0.75) × 10` for older batches, `CGPA × 10` for newer ones.
- Non-credit and audit courses (`W` / `U`) are excluded from the average automatically.

## Disclaimer

Grade scales and credits follow the published curriculum. Use this for planning. Always confirm your final result against your college records.

## Author

Built by [Tamilselvan (Tams)](https://tamilselvanportfolio.vercel.app), an engineering student building tools for students.

- Portfolio: https://tamilselvanportfolio.vercel.app
- GitHub: [Tams3d](https://github.com/Tams3d)
- LinkedIn: [tamilselvan29](https://www.linkedin.com/in/tamilselvan29/)
