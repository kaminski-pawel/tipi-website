# tipi.software static page

## Description

The website was optimized for web performance: fast first contentful paint, no blocking time, no layout shift, etc. This was achieved, among others, with the use of svg, css spliting, loading optimization, minimization and compression.

## Further improvements

Bootstrap is one of the biggest css frameworks. Most bootstrap JavaScripts and css is not even used. Using Google Fonts in its current form causes flickering, especially that only few characters are being used on each page in the hero section.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
