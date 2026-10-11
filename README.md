![cv](https://github.com/user-attachments/assets/a3652dc7-9457-4be5-b6ac-ed1386a9580d)

# Haitham Assoli's CV

Source for [cv.assoli.site](https://cv.assoli.site): a minimalist, print-friendly CV built with Next.js, shadcn/ui, and Tailwind CSS, deployed on Vercel.

Based on [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv).

## Features

- All content lives in a single typed config file: [`src/data/resume-data.tsx`](./src/data/resume-data.tsx)
- Print / Save as PDF layout: featured projects are printed, the rest stay on the web
- Command menu (`⌘J` / `Ctrl+J`) for printing, jumping to sections, and opening links
- SEO: Open Graph and Twitter metadata, JSON-LD `Person` data, sitemap, and robots.txt
- Built with Next.js 16, React 19, TypeScript, shadcn/ui, and Tailwind CSS

## Getting Started Locally

Requires Node.js 24.

```bash
git clone https://github.com/haithamassoli/cv.git
cd cv
npm install
npm run dev
```

Then edit [`src/data/resume-data.tsx`](./src/data/resume-data.tsx). Mark a project with `featured: true` to include it in the printed CV.

## License

[MIT](https://choosealicense.com/licenses/mit/)
