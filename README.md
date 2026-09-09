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

Резултатите се записват в `public/qr-code.png` и `public/qr-code.svg`. Ако адресът се промени
в бъдеще, подай го като аргумент:

```bash
node scripts/generate-qr.mjs https://ruzhasimeonova.vercel.app
```

## Деплой (безплатен Vercel Hobby план)

Проектът е свързан с GitHub repo [`Kocev93/ruzhasimeonova`](https://github.com/Kocev93/ruzhasimeonova)
и се деплойва автоматично във Vercel при всеки push към `main`.

**Публичен адрес:** [`https://ruzhasimeonova.vercel.app`](https://ruzhasimeonova.vercel.app)

За нов push:

```bash
git add .
git commit -m "..."
git push
```

Vercel хваща push-а автоматично и redeploy-ва сайта — не са нужни допълнителни настройки или
променливи на средата.

Всичко в проекта работи в рамките на безплатния Vercel Hobby план и безплатните `*.vercel.app`
поддомейни — не се изисква кредитна карта, платен план или платен API ключ.
