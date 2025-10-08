import sharp from 'sharp';
import { readdir } from 'fs/promises';
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
      
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      console.log(`✓ Created ${file.replace('.png', '.webp')}`);
    }

    console.log('\n✓ All images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();
