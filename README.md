# KPM Power To-Do (React)

A simple To-Do app supports adding, editing, deleting, and marking tasks as done. All data is saved automatically in the browser’s local storage.


## Run Online

Click here to try the app: 
**[To-Do Live Demo](https://cyndi-s.github.io/react-todolist/)**  


## Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/cyndi-s/react-todolist.git
cd react-todolist

# 2. Install dependencies
npm install

# 3. Start the app
npm run dev
# open the printed URL (usually http://localhost:5173/)
```

## Bonus
- Local Storage (JSON) – Todos persist in the browser under the key `kpm_todos_v1`.
- CI (GitHub Actions) – Every push/PR runs:
  - `npm ci` (clean, reproducible install)
  - `npm run test` (Vitest + React Testing Library)
  - `npm run build` (Vite production build)
- CD (GitHub Pages) – Main branch auto-deploys to:
  - https://cyndi-s.github.io/react-todolist/
- Pipelines (Green) — Latest builds and deployments:
  - https://github.com/cyndi-s/react-todolist/actions 