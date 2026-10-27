# Portfolio restoration

Restored on October 26, 2026 from `egunalucasandrei-droid/My-Portfolio-Eguna`,
commit `2f0ada0`, on the local branch `portfolio-restoration`.

## Original architecture

- JavaScript ES modules, React 19.2.4, React DOM 19.2.4, Vite 8.0.3 and Tailwind CSS 4.2.2, using the existing npm lockfile.
- `index.html` provides the root element, viewport, title and favicon.
- `src/main.jsx` mounts `App` through React's `createRoot` and `StrictMode`, and imports `src/index.css`.
- `src/index.css` imports Tailwind CSS. `GlobalStyles` in `src/App.jsx` supplies the original Google Fonts import, fade-up animation and scrollbar styles.
- `src/App.jsx` contains the `App` and `GlobalStyles` components. The existing render helpers handle projects, tech stack, certifications and gallery views through React state; there is no router or backend.
- App state handles theme persistence in localStorage, project filtering, image previews, and the profile hover image/audio. IntersectionObserver drives the original reveal animation. Tailwind utilities provide responsive layouts and transitions.
- The content arrays contain 19 projects (5 websites, 4 UI/UX designs, 10 videos), 5 certifications, 5 tech/tool categories and 5 gallery photos.
- `src/images/` contains 30 original files: 5 certificates, 4 Figma designs, 5 website screenshots, 8 film/video thumbnails, 5 gallery photos, 2 profile images and the resume image. Some project thumbnails remain imported data even though the original project cards display text only.
- `src/sound/rizz sound effect.mp3` is the original profile hover sound; `public/favicon.svg` is the original favicon.
- `vite.config.js` enables the React and Tailwind Vite plugins with the original root base path.
- `eslint.config.js` configures ESLint 9, browser globals, React Hooks and React Refresh rules.
- `vercel.json` retains the original Vite framework, install/build commands and `dist` output.
- `package.json` and `package-lock.json` retain all original versions and scripts. Runtime dependencies are React, React DOM, Tailwind and its Vite plugin. Development dependencies include Vite, its React plugin, ESLint, its React plugins, globals and React type declarations. Those declarations do not make this a TypeScript project.
- `.gitignore` excludes dependencies, builds, environment files and local editor settings. No environment variables are required by the recovered application.

## Local environment and changes

The workspace was initially empty. The original repository and history were cloned directly into it.
Node.js and npm were absent from the shell PATH. A checksum-verified official Node.js 22.23.4
distribution (npm 10.9.9) was installed under
`%LOCALAPPDATA%\Programs\NodeJS\node-v22.23.4-win-x64` and added to the user PATH.
Dependencies were installed with `npm ci` from the unchanged lockfile.

Files changed:

- `src/App.jsx`: render the modal image only once an image is selected, removing React's empty-src console error. Remove delayed image resets that could erase a newly reopened preview. Keep the selected image during the existing close animation; the next selection replaces it.
- `README.md`: document Node requirements, lockfile installation, Windows usage and validation commands.
- `RESTORATION.md`: this architecture and restoration record.

Content, projects, styles, assets, configuration and dependency versions were preserved.
No commits were pushed and nothing was deployed.

## Verification

- `npm ci`, `npm run lint`, `npm run build` and the production preview succeed.
- Before the modal fixes, the built JavaScript and CSS were byte-for-byte identical to the files served by `https://lucaseguna.vercel.app/`. This confirms the recovered repository matches the deployed version.
- Browser checks compare local and deployed home text, element geometry and colors in both themes at widths of 320, 375, 768 and 1440 pixels.
- Interaction checks cover all four detail views, all 19 projects and filter counts, all five certification and gallery previews, close-button/Escape behavior, scroll locking, persisted themes, profile hover image/audio request, and resume loading.
- A production-preview regression check confirms that quickly reopening a modal retains the newly selected image. The original implementation reproduced a blank image while the overlay remained open.
- Desktop/mobile screenshots and the browser verification report are saved in the ignored `restoration.local/` directory. Browser automation tooling is outside the repository; no test framework was added to the project.

## Remaining limitations

- The original locked dependency tree reports 11 npm audit findings: 1 low, 2 moderate and 8 high. Dependency upgrades were left outside this restoration to preserve the original lockfile. Keep the development server bound to loopback; it is currently started with `--host 127.0.0.1`.
- Mobile verification uses Chromium viewport emulation, not physical iOS/Android devices. Audio playback is subject to the browser's existing autoplay restrictions; the original `.play().catch(...)` behavior is preserved.
- The original header Email link and the lower contact Email link have different recipients. Both were retained because content updates were explicitly excluded.
- Google Fonts, image fallback URLs and external project/social links still depend on their third-party services. External account flows and project backends were not changed or exhaustively tested.

See `README.md` for starting local development in a newly opened terminal.
