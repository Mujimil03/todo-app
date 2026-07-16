# To-Do List App

A responsive React to-do list with a blue gradient theme, task complete/delete/edit actions, filtering, dark mode, and localStorage persistence.

## Run it in VS Code

1. **Unzip** the project and open the folder in VS Code (`File > Open Folder`).
2. Open a terminal in VS Code: `` Ctrl+` `` (Windows/Linux) or `Cmd+`` (Mac).
3. Install dependencies:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open the URL shown in the terminal (usually `http://localhost:5173`) — it should also open automatically in your browser.

## Build for production

```
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── Header/
│   ├── TodoInput/
│   ├── Filter/
│   ├── TodoList/
│   └── TodoItem/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Features

- Add, edit (double-click a task or use the pencil icon), complete, and delete tasks
- Filter: All / Active / Completed
- Task counter + "Clear completed" button
- Dark mode toggle (persisted)
- Tasks persist in localStorage
- Press Enter to add a task; empty input is ignored
- Fully responsive, keyboard accessible
