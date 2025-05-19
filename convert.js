const fs = require('fs').promises;
const path = require('path');
let heicConvert;
try {
  heicConvert = require('heic-convert');
} catch (err) {
  console.error('Missing dependency: heic-convert. Please run "npm install" first.');
  process.exit(1);
}

async function convertDirectory(dir) {
  const entries = await fs.readdir(dir);
  const outputDir = path.join(dir, 'convert');
  await fs.mkdir(outputDir, { recursive: true });
  for (const entry of entries) {
    const parsed = path.parse(entry);
    const ext = parsed.ext.toLowerCase();
    if (ext === '.heic') {
      const inputPath = path.join(dir, entry);
      const outputPath = path.join(outputDir, parsed.name + '.jpg');
      const inputBuffer = await fs.readFile(inputPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 1
      });
      await fs.writeFile(outputPath, outputBuffer);
      console.log(`Converted ${entry} -> ${path.basename(outputPath)}`);
    }
  }
}

const targetDir = process.argv[2];
if (!targetDir) {
  console.log('Usage: node convert.js <heic-folder>');
  process.exit(1);
}

convertDirectory(targetDir).catch(err => {
  console.error(err);
  process.exit(1);
});
