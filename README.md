# SweepSheets — Broomball Roster Manager

A static webapp for managing a broomball team roster. No server required — data is stored in your browser's localStorage.

## Features

- **Roster management** — add, edit, and remove players
- **Line assignments** — assign players to Line 1, Line 2, Line 3, or Bench
- **Special teams** — toggle Power Play (PP) and Penalty Kill (PK) indicators per player
- **Lines view** — visual lineup grouped by line, with PP/PK unit summaries
- **CSV import/export** — bulk import a roster from a CSV file, export your current roster
- **Search & filter** — by name, position, status, or line
- **Card & table views** — switch between a card grid and a sortable table
- **Editable team name & season** — click to edit in the header

## CSV Format

When importing, your CSV file should have a header row with these column names (order doesn't matter):

```
Name, Number, Position, Status, Line, PP, PK, Notes
```

- **Position**: `Forward`, `Defense`, or `Goalie` (defaults to `Forward`)
- **Status**: `Active`, `Injured`, or `Inactive` (defaults to `Active`)
- **Line**: `1`, `2`, `3`, or `Bench` (defaults to `Bench`)
- **PP / PK**: `true` or `false`

## Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`
4. Click **Save** — your app will be live at `https://<username>.github.io/<repo-name>/`

> **Note:** The `.nojekyll` file tells GitHub Pages not to process the site with Jekyll, which is required for plain HTML/CSS/JS sites.

## Local development

Just open `index.html` in any modern browser — no build step needed.

Or serve it locally:

```bash
npx serve .
# then open http://localhost:3000
```
