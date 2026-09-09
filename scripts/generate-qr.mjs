import QRCode from "qrcode";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public");
mkdirSync(outDir, { recursive: true });

const url = process.argv[2] || "https://ruzhasimeonova.vercel.app";

const options = {
  errorCorrectionLevel: "M",
  margin: 2,
  color: {
    dark: "#453A63",
    light: "#FBF6EE",
  },
};

await QRCode.toFile(join(outDir, "qr-code.png"), url, {
  ...options,
  width: 800,
});
await QRCode.toFile(join(outDir, "qr-code.svg"), url, options);

console.log(`QR code generated for: ${url}`);
console.log(`- public/qr-code.png`);
console.log(`- public/qr-code.svg`);
