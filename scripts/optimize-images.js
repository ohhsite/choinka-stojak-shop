import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, '../public/images');
const outputDir = join(__dirname, '../public/images');

async function optimizeImages() {
  try {
    const files = await readdir(inputDir);
    const pngFiles = files.filter(file => file.endsWith('.png'));

    console.log(`Found ${pngFiles.length} PNG files to optimize...`);

    for (const file of pngFiles) {
      const inputPath = join(inputDir, file);
      const outputPath = join(outputDir, file.replace('.png', '.webp'));

      console.log(`Converting ${file}...`);
      
      // Sprawdź rozmiar pliku
      const inputStats = await stat(inputPath);
      const inputSizeKB = inputStats.size / 1024;
      
      let quality = 85;
      let resizeOptions = null;
      
      // Dla dużych plików (>500KB) użyj niższej jakości i resize
      if (inputSizeKB > 500) {
        quality = 70;
        resizeOptions = { width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true };
        console.log(`  Large file (${inputSizeKB.toFixed(2)} KB) - using quality ${quality} and max 1200px`);
      }
      
      const sharpInstance = sharp(inputPath).webp({ quality, effort: 6 });
      
      if (resizeOptions) {
        sharpInstance.resize(resizeOptions);
      }
      
      await sharpInstance.toFile(outputPath);

      const outputStats = await stat(outputPath);
      const reduction = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
      console.log(`✓ Created ${file.replace('.png', '.webp')} (${(outputStats.size / 1024).toFixed(2)} KB) - ${reduction}% reduction`);
    }

    console.log('\n✓ All images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();
