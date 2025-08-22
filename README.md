# RubiksCube-threejs

A browser-based interactive Rubik's Cube visualization and solver built with Three.js and vanilla JavaScript. The project renders a 3D Rubik's Cube, provides controls to scramble and solve it (including algorithmic solving), and includes 2D map views for debugging/visualization.

This repository is an interactive demo and learning project that combines three.js rendering, custom cube logic and solver algorithms.

## Features

- 3D cube rendering using Three.js.
- Controls for camera and cube animations (start/stop/reset).
- Shuffle (random scramble) and solve algorithm(s).
- 2D "map" overview panels for quick cube state visualization.
- Loading overlay for long operations.
- Modern UI/UX (modern theme, glass panels, animated buttons, ripple effect).

## Quick start (Windows / PowerShell)

Prerequisites: Node.js (v16+ recommended) and npm.

Start the dev server:

```powershell
npm run serve
```

Build a production bundle (this regenerates `dist/main.min.js`):

```powershell
npm run build
```

Open `index.html` (or use the dev server URL) in a modern browser to view the app.

## Notes about the build

- The repository ships a `dist/` bundle. If you modify source files (for example `game.js` or `style.css`) you should run `npm run build` so the `dist/main.min.js` is regenerated.
- During this session I updated `game.js` (source) to remove the `MyFont` canvas usage. If you still see remnants of the old font at runtime, rebuild the project so the minified bundle is updated.

## Project structure (important files)

- `index.html` — main HTML entry (includes controls and map placeholders).
- `style.css` — main stylesheet (updated with theme + UI/UX improvements).
- `game.js` — cube rendering / canvas utilities (canvas face number drawing updated to use system font).
- `ui-enhancements.js` — new helper script that exposes UI convenience functions.
- `dist/main.min.js` — built/minified application bundle (served by `index.html` in production).
- `test/` — debugging and test harness files (includes `test.js`).
- `assets/fonts/` — font assets (older custom font files left in place but no longer required).
- `package.json` — scripts and dependencies (three, bootstrap, jquery, vite).

## How to trigger the new UI helpers

From app code or the browser console, you can call the helper functions exposed on `window.UI`:

```javascript
// show the loading overlay
UI.showLoading(true, "Solving...");

// hide it when done
UI.showLoading(false);

// trigger the solved animation on the map panel (or any selector)
UI.showSolved(".map-parent");
```

If you want this hooked into the solver logic, call `UI.showLoading(true)` before the solver runs and `UI.showSolved()` (or `UI.showLoading(false)`) when solving completes.

## Development notes / tips

- Styling: edit `style.css`. Colors and variables are organized at the top under `:root`.
- Rebuilding: run `npm run build` after source changes so `dist` is up-to-date.
- Adding assets: place fonts or images in `assets/` and reference them relative to project root.
- Adding a confetti effect: a simple enhancement is to add `canvas-confetti` and call it when solved.

## Contributing

Contributions are welcome — open a PR or issue. Small suggestions:

- Add unit tests for solver logic (the `test/` folder is a good place to start).
- Improve accessibility (ARIA labels, keyboard navigation for controls).
- Add mobile-specific UX optimizations (gesture controls).

## License

See the `LICENSE` file in the repository for license details.

## Contact / Next steps

If you'd like, I can:

- Rebuild the `dist/` bundle here and verify `main.min.js` no longer references the old font.
- Add a confetti animation for the solve success.
- Add a theme toggle (dark/neon) and persist preference.

Pick one and I’ll implement it next.
