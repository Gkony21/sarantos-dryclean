import fs from "node:fs";
import QRCode from "qrcode";
import sharp from "sharp";

const targets = [
  { name: "qr-site", url: "https://sarantos-dryclean.gr" },
  // { name: "qr-reviews", url: "ΕΔΩ_ΤΟ_LINK_ΤΩΝ_REVIEWS" },
];

const logo = fs.readFileSync("public/logo.svg");
const logoData = `data:image/svg+xml;base64,${logo.toString("base64")}`;

fs.mkdirSync("qr", { recursive: true });

for (const { name, url } of targets) {
  const qrSvg = await QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 4,
    color: { dark: "#1b2a1f", light: "#ffffff" },
  });

  const size = Number(qrSvg.match(/viewBox="0 0 (\d+) \d+"/)[1]);

  let box = Math.round(size * 0.26);
  if ((size - box) % 2 !== 0) box += 1;
  const boxPos = (size - box) / 2;

  const logoSize = size * 0.2;
  const logoPos = (size - logoSize) / 2;

  const overlay = `
    <rect x="${boxPos}" y="${boxPos}" width="${box}" height="${box}" fill="#ffffff"/>
    <image href="${logoData}" x="${logoPos}" y="${logoPos}" width="${logoSize}" height="${logoSize}"/>`;

  const svg = qrSvg.replace("</svg>", `${overlay}</svg>`);

  fs.writeFileSync(`qr/${name}.svg`, svg);
  await sharp(Buffer.from(svg), { density: 300 })
    .resize(1200)
    .png()
    .toFile(`qr/${name}.png`);

  console.log(`✓ qr/${name}.svg + qr/${name}.png`);
}
