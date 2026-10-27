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
