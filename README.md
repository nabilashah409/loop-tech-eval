# Demo App – Data-Driven Playwright Test Suite

A **data-driven** Playwright test suite for the Demo App (Netlify). All scenario data lives in JSON; one test implementation runs every case, so adding or changing cases doesn’t require new test code.

## Quick start

```bash
npm install
npx playwright install chromium
npm test
```

## Project structure

| Path | Purpose |
|------|--------|
| `tests/demo-app.spec.ts` | Single parameterized test driven by `test-data.json` |
| `tests/test-data.json` | All test cases (project, task, column, tags) |
| `tests/helper.ts` | Shared login and navigation helpers |
| `tests/selectors.ts` | Centralized selectors for maintainability |
| `playwright.config.ts` | Base URL, serial execution, reporters |

## Design decisions

- **Data-driven from JSON** – `test-data.json` defines the six cases; the spec loops over them. New cases = new JSON entries, no new test code.
- **TypeScript** – Typed `TestCase` interface and `resolveJsonModule` for type-safe use of the JSON.
- **Serial execution** – `test.describe.serial` and one worker so login and board state are predictable.
- **Reusable helper** – Login (and optional navigation) in one place; spec stays focused on assertions.
- **Centralized selectors** – Selectors live in `selectors.ts` so UI changes are fixed in one file.

## Test cases covered

1. **Web Application** – Implement user authentication (To Do; Feature, High Priority)  
2. **Web Application** – Fix navigation bug (To Do; Bug)  
3. **Web Application** – Design system updates (In Progress; Design)  
4. **Mobile Application** – Push notification system (To Do; Feature)  
5. **Mobile Application** – Offline mode (In Progress; Feature, High Priority)  
6. **Mobile Application** – App icon design (Done; Design)  

## Scripts

| Command | Description |
|--------|-------------|
| `npm test` | Run tests (headless) |
| `npm run test:headed` | Run with browser visible |
| `npm run test:ui` | Open Playwright UI |
| `npm run report` | Open last HTML report |

## CI (next steps)

A GitHub Actions workflow (`.github/workflows/playwright.yml`) is included as a **next step**: it would run the suite on push/PR and upload the HTML report. It is not run or verified as part of this submission—it’s there to show how you’d hook this into CI in a real repo.
