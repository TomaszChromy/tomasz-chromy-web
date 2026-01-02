import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../src/assets/images');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/images-optimized');

// Configuration for different image types
const config = {
  hero: { width: 1920, quality: 80 },
  portfolio: { width: 800, quality: 80 },
  testimonial: { width: 400, quality: 80 },
  blog: { width: 800, quality: 80 },
  about: { width: 600, quality: 80 },
  default: { width: 1200, quality: 80 }
};

function getConfig(filename) {
  if (filename.includes('hero')) return config.hero;
  if (filename.includes('portfolio')) return config.portfolio;
  if (filename.includes('testimonial')) return config.testimonial;
  if (filename.includes('blog')) return config.blog;
  if (filename.includes('about')) return config.about;
  return config.default;
}

async function optimizeImages() {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(IMAGES_DIR);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`Found ${imageFiles.length} images to optimize...\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(IMAGES_DIR, file);
    const baseName = path.parse(file).name;
    const outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`);

    const cfg = getConfig(file);
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024).toFixed(0);

    try {
      await sharp(inputPath)
        .resize(cfg.width, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: cfg.quality })
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024).toFixed(0);
      const savings = ((1 - newStats.size / stats.size) * 100).toFixed(0);

      console.log(`✅ ${file}`);
      console.log(`   ${originalSize} KB → ${newSize} KB (${savings}% smaller)\n`);
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log('\n✨ Optimization complete!');
  console.log(`Optimized images saved to: ${OUTPUT_DIR}`);
}

optimizeImages();

