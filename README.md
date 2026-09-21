# CompExam.exe

A C++ lab exam practice site. It provides a PYQ question bank with year and
difficulty filters, an in-browser code editor, and real C++ execution against
hidden test cases.

Will be adding:
- [x] Questions from PYQs
- Add a button to see the output of ur code without haveing to submit it
- Maybe a theory tab too that verifies the answer with a comp-specific ai thats given the class slides
- 

Feel free to raise an issue for any feature request


Live: **https://aryan2-7.github.io/CompExam/**

## Features
- 28-question PYQ bank filterable by year and difficulty, with paper source badges and repeated-question tags
- Runs each test case against your code and shows pass/fail per test
- Animated pixel-art cat that reflects compile/run state (working, passed,
  failed, error) and falls asleep after inactivity
- Progress tracking ("X/Y questions") that persists between visits
- Per-question code autosave in localStorage

## How execution works
The browser does not compile C++. Code is POSTed to tio.run, a free, keyless
API with CORS support, which compiles with g++ and returns stdout plus the
exit code. See `src/lib/execute.js` for the request/response protocol:
- Request payload is a null-delimited field list identifying the language
  (`cpp-gcc`) and providing the source file and stdin, compressed with
  deflate-raw
- The response is gzip-compressed and split into stdout and stats sections
  by a 16-byte separator token
- Compile errors are detected via the `code.tio.cpp` reference in the stats

## Tech stack
- React 19, Vite 8, plain CSS
- Deployed to GitHub Pages via GitHub Actions
- localStorage for persistence

## Local development
    npm install
    npm run dev       # dev server
    npm run build     # production build to dist/
    npm run preview   # preview the build

## Adding questions
Edit `src/data/questions.js`. Each question object has:

- `id` — unique kebab-case slug
- `title`, `difficulty` (`easy` | `medium` | `hard`)
- `body`, `input`, `output` — the problem statement
- `examples` — `[{ input, output }]` shown to the student
- `starterCode` — a minimal shell to start from
- `tests` — `[{ input, expected }]`; `expected` is the exact expected stdout
- `hint` — a short nudge

A question is considered solved when all of its tests pass.

## Deployment
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
project and deploys `dist/` to GitHub Pages automatically.

## Project structure
    src/
      components/   TopBar, FilterBar, QuestionList, QuestionPanel, EditorPanel, Cat, Toast
      data/         questions.js — question bank
      lib/          execute.js (execution API), storage.js (persistence)
