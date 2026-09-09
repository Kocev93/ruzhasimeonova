# Дигитална визитка — Ружа Симеонова

Статична, еднократна дигитална визитка (pilot проект). Next.js (App Router) + TypeScript +
Tailwind CSS. Цялото съдържание е hardcoded в [`app/content.ts`](app/content.ts) — няма база
данни, няма админ панел, няма плащания.

## Локална разработка

```bash
npm install
npm run dev
```

Отвори [http://localhost:3000](http://localhost:3000).

## QR код

QR кодът, сочещ към финалния Vercel адрес, се генерира локално (без платени услуги) с
пакета [`qrcode`](https://www.npmjs.com/package/qrcode):

```bash
npm run generate:qr
```

Резултатите се записват в `public/qr-code.png` и `public/qr-code.svg`. Ако финалният домейн
се различава от `https://ruzha-simeonova.vercel.app`, подай го като аргумент:

```bash
node scripts/generate-qr.mjs https://ruzha-simeonova-zentio.vercel.app
```

## Деплой във Vercel (безплатен Hobby план)

1. Качи проекта в частен GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <адрес на твоя GitHub repo>
   git push -u origin main
   ```
2. Отиди на [vercel.com/new](https://vercel.com/new) → Import Git Repository → избери repo-то.
3. Име на проекта: `ruzha-simeonova` (ако е заето: `ruzha-simeonova-zentio`).
4. Framework се разпознава автоматично като Next.js — не са нужни допълнителни настройки или
   променливи на средата.
5. Deploy. Сайтът ще бъде достъпен на `https://ruzha-simeonova.vercel.app` (или резервното име).
6. (По желание) Ако финалният адрес се различи, регенерирай QR кода с новия адрес (виж по-горе)
   и redeploy-ни, за да влезе новият `public/qr-code.png` в проекта.

Всичко в проекта работи в рамките на безплатния Vercel Hobby план и безплатните `*.vercel.app`
поддомейни — не се изисква кредитна карта, платен план или платен API ключ.
