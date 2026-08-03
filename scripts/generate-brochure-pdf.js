/**
 * Generate MEDIY product brochure PDF from HTML template.
 * Usage: node scripts/generate-brochure-pdf.js
 */

const path = require('path');
const fs = require('fs');

async function main() {
  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch {
    console.error('Puppeteer not found. Installing temporarily...');
    const { execSync } = require('child_process');
    execSync('npm install puppeteer --no-save --legacy-peer-deps', {
      cwd: path.resolve(__dirname, '..'),
      stdio: 'inherit',
    });
    puppeteer = require('puppeteer');
  }

  const rootDir = path.resolve(__dirname, '..');
  const htmlPath = path.join(rootDir, 'brochure', 'index.html');
  const outputPath = path.join(rootDir, 'brochure', 'MEDIY-产品宣传彩页.pdf');

  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Brochure HTML not found: ${htmlPath}`);
  }

  const SCALE = Number(process.env.BROCHURE_PDF_SCALE || 4);

  const launchOptions = {
    headless: 'new',
    args: [
      '--font-render-hinting=none',
      `--force-device-scale-factor=${SCALE}`,
    ],
  };

  const systemChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (fs.existsSync(systemChrome)) {
    launchOptions.executablePath = systemChrome;
  }

  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();

  // A4 @ 96dpi ≈ 794×1123px；提高 deviceScaleFactor 增加渲染像素密度
  await page.setViewport({
    width: 794,
    height: 1123,
    deviceScaleFactor: SCALE,
  });

  await page.emulateMediaType('print');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // 等待所有截图解码完成，避免 PDF 嵌入低质量占位图
  await page.evaluate(async () => {
    const imgs = Array.from(document.images);
    await Promise.all(
      imgs.map(
        (img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              })
      )
    );
  });

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  const stats = fs.statSync(outputPath);
  console.log(`PDF generated: ${outputPath}`);
  console.log(`Render scale: ${SCALE}x (set BROCHURE_PDF_SCALE to change)`);
  console.log(`File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
