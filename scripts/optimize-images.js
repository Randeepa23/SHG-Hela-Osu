import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  logos: { width: 200, height: 200 },
  heroes: { width: 1920, height: 1080 },
  general: { width: 800, height: 600 }
};

// Input and output directories
const assetsDir = path.join(__dirname, '..', 'src', 'assets');
const optimizedDir = path.join(assetsDir, 'optimized');

// Create optimized directory structure
function createOptimizedDirs() {
  const dirs = [
    optimizedDir,
    path.join(optimizedDir, 'logos'),
    path.join(optimizedDir, 'heroes'),
    path.join(optimizedDir, 'general'),
    path.join(optimizedDir, 'blog'),
    path.join(optimizedDir, 'branches'),
    path.join(optimizedDir, 'products')
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Get image type based on filename/path
function getImageType(filePath) {
  const filename = path.basename(filePath).toLowerCase();
  const dirname = path.dirname(filePath);
  
  if (dirname.includes('logos')) return 'logos';
  if (filename.includes('hero') || filename.includes('background')) return 'heroes';
  return 'general';
}

// Optimize single image
async function optimizeImage(inputPath, outputPath, type) {
  try {
    const { width, height } = config[type];
    
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .webp({ 
        quality: type === 'logos' ? 85 : 80,
        effort: 6
      })
      .toFile(outputPath);
      
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const reduction = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} -> ${path.basename(outputPath)} (${reduction}% smaller)`);
    return true;
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return false;
  }
}

// Process directory recursively
async function processDirectory(dir, relativeDir = '') {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory() && item !== 'optimized') {
      await processDirectory(itemPath, path.join(relativeDir, item));
    } else if (stats.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const type = getImageType(itemPath);
        const outputDir = relativeDir ? 
          path.join(optimizedDir, relativeDir) : 
          path.join(optimizedDir, type);
        
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        
        const outputPath = path.join(outputDir, item.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
        await optimizeImage(itemPath, outputPath, type);
      }
    }
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  createOptimizedDirs();
  await processDirectory(assetsDir);
  
  console.log('\n✨ Image optimization complete!');
  console.log('📁 Optimized images saved to: src/assets/optimized/');
  console.log('💡 Next: Update your imports to use .webp files');
}

main().catch(console.error);