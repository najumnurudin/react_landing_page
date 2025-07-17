import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "src/assets");
const supportedExts = [".jpg", ".jpeg", ".png"];

async function compressImage(fileName) {
  const inputFile = path.join(inputDir, fileName);
  const outputFile = inputFile; // overwrite original

  try {
    const ext = path.extname(fileName).toLowerCase();
    let image = sharp(inputFile).resize({ width: 1920 });

    if (ext === ".jpg" || ext === ".jpeg") {
      await image.jpeg({ quality: 75 }).toFile(outputFile);
    } else if (ext === ".png") {
      await image.png({ compressionLevel: 8 }).toFile(outputFile);
    } else {
      console.log(`Skipped unsupported file: ${fileName}`);
      return;
    }

    console.log(`Compressed ${fileName}`);
  } catch (err) {
    console.error(`Error compressing ${fileName}:`, err);
  }
}

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Could not read input directory:", err);
    return;
  }

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (supportedExts.includes(ext)) {
      compressImage(file);
    }
  });
});
