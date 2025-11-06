import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration for high-quality gallery images
const config = {
  quality: 90,
  width: 1200,
  height: 900
};

// Input and output directories
const galleryInputDir = path.join(__dirname, '..', 'src', 'assets', 'blog', 'shg-gallery');
const galleryOutputDir = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'blog', 'shg-gallery');

// Create output directory if it doesn't exist
if (!fs.existsSync(galleryOutputDir)) {
  fs.mkdirSync(galleryOutputDir, { recursive: true });
}

// Process images with high quality settings
async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(config.width, config.height, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: config.quality })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    console.log(`✅ ${path.basename(inputPath)} -> ${path.basename(outputPath)} (${savings}% smaller)`);
  } catch (err) {
    console.error(`❌ Error processing ${inputPath}:`, err);
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting gallery image optimization...\n');
  
  const files = fs.readdirSync(galleryInputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(galleryInputDir, file);
      const outputPath = path.join(galleryOutputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      await optimizeImage(inputPath, outputPath);
    }
  }
  
  console.log('\n✨ Gallery image optimization complete!');
  console.log('📁 Optimized images saved to: src/assets/optimized/blog/shg-gallery/');
}

main().catch(console.error);