import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '..', 'src', 'assets', 'images');
const destDir = path.join(__dirname, '..', 'src', 'assets', 'images-optimized');

// Map of image title in images folder to slug-friendly name for thumbnailMap
const imageMapping = {
  'Core Web Vitals w 2026 – praktyczny przewodnik dla właściciela firmy.webp': 'core-web-vitals-2026.webp',
  'Czy naprawdę potrzebujesz headless CMS.webp': 'headless-cms-2026.webp',
  'WCAG 2.2 i dostępność – obowiązek, nie miły dodatek.webp': 'wcag-dostepnosc-2026.webp',
  'Co decyduje o tym, czy użytkownik zostanie na stronie czy ją zamknie.webp': 'co-decyduje-czy-uzytkownik-zostanie.webp',
  'Strategia MVP aplikacji webowej  jak nie przepalić budżetu w pierwszej wersji produktu.webp': 'mvp-aplikacji-webowej-2026.webp',
  'React vs Next.webp': 'react-vs-nextjs.webp',
  'Strony internetowe, które naprawdę sprzedają.webp': 'strony-ktore-sprzedaja.webp',
  'Tworzenie stron internetowych jest łatwe… dopóki ma przynosić klientów. Przewodnik dla firm (2026).webp': 'tworzenie-stron-przewodnik-2026.webp',
  'Strona firmowa vs landing page pod kampanię – kiedy co ma sens dla biznesu.webp': 'strona-firmowa-vs-landing.webp'
};

// Ensure destination exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

for (const [srcName, destName] of Object.entries(imageMapping)) {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  
  if (fs.existsSync(srcPath)) {
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcName} -> ${destName}`);
    } else {
      console.log(`Skipping (exists): ${destName}`);
    }
  } else {
    console.log(`Not found: ${srcName}`);
  }
}

console.log('\nCopy complete!');

