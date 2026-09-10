# JB WebDev Portfolio

Modernes Next.js-Portfolio für Julia Bellmann.

## Start

```bash
npm install
npm run dev
```

Danach: http://localhost:3000

## Produktion

```bash
npm run build
npm start
```

## Vor dem Deployment anpassen

1. `data/projects.js`
   - GitHub-Links
   - Live-Demos
   - Projekttexte
   - weitere Projekte

2. `pages/index.js`
   - E-Mail-Adresse
   - LinkedIn
   - GitHub

3. `public/lebenslauf.pdf`
   - eigenen Lebenslauf als PDF ablegen

4. Projekt-Screenshots
   - können später in `public/projects/` ergänzt und in den Projektkomponenten verwendet werden.

## Deployment

Das Projekt kann direkt als GitHub-Repository auf Vercel importiert werden.
