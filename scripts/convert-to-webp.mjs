import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '..', 'src', 'assets', 'images');

async function convertToWebP() {
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);
    const filePath = path.join(imagesDir, file);
    
    // Skip if already WebP or if it's a directory
    if (ext === '.webp' || !fs.statSync(filePath).isFile()) {
      continue;
    }
    
    // Only process PNG and JPG files
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      continue;
    }
    
    const outputPath = path.join(imagesDir, `${baseName}.webp`);
    
    // Check if WebP already exists
    if (fs.existsSync(outputPath)) {
      console.log(`Skipping ${file} - WebP already exists`);
      continue;
    }
    
    try {
      await sharp(filePath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`Converted: ${file} -> ${baseName}.webp`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err.message);
    }
  }
  
  console.log('\nConversion complete!');
}

convertToWebP();

