# Lucas Eguna Portfolio

React, Tailwind CSS, and Vite portfolio website.

## Local development

Use Node.js 22.12 or newer in the 22.x series (restored with Node.js 22.23.4 and npm 10.9.9).
Install the exact dependencies from the existing lockfile:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. If port 5173 is occupied, Vite chooses the next available port.
On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.
After installing Node.js, reopen VS Code or your terminal so it picks up the updated PATH.

```bash
npm run lint
npm run build
npm run preview
```

The original architecture and restoration checks are documented in [RESTORATION.md](RESTORATION.md).

## Portfolio content and media

- `src/App.jsx` retains the portfolio data and state-based views. Shared project, video, technology and image-preview components are in `src/components/`.
- NOLTA Court Booking Website is **Live** at https://nolta-web.onrender.com/. Its supplied screenshot is imported from `src/images/nolta.png`, with an optimized WebP card preview in `src/images/previews/`. The React, NestJS, Prisma ORM, and Supabase badges are verified from the local NOLTA source; no source repository link is published.
- `src/images/previews/` contains smaller WebP derivatives for cards. Original certificates and personal gallery images are retained for enlarged viewing; the Resume button still opens the supplied JPG.
- `src/videoThumbnails.js` maps existing YouTube projects to authentic thumbnails retrieved from their linked videos. Categories without supplied hotel/resort or AI-assisted samples use an honest empty state.
- The email recipient is `egunalucasandrei@gmail.com`. Existing social destinations remain unchanged.
- Local comparison screenshots and verification artifacts are in the ignored `restoration.local/professional/` directory.

The professional improvements are local review work on `portfolio-professional-improvements`. Publishing requires the owner's approval.

## Publish updates

Vercel deploys automatically whenever a commit is pushed to `main`.

```bash
git add .
git commit -m "Update"
git push origin main
```

## Vercel settings

- Framework preset: Vite
- Root directory: repository root
- Build command: `npm run build`
- Output directory: `dist`
