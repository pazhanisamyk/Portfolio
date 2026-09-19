const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ffmpegPath = require('ffmpeg-static');

console.log('Using ffmpeg binary:', ffmpegPath);

const inputPath = fs.existsSync('input.mp4') ? 'input.mp4' : path.join('public', 'video', 'portfolio-background.mp4');
const outputPath = path.join('public', 'video', 'portfolio-background-temp.mp4');
const finalPath = path.join('public', 'video', 'portfolio-background.mp4');

console.log('Source video:', inputPath);
console.log('Encoding with -g 1 -keyint_min 1 -c:v libx264 -crf 20 -preset veryfast -movflags +faststart ...');

const cmd = `"${ffmpegPath}" -y -i "${inputPath}" -g 1 -keyint_min 1 -c:v libx264 -crf 20 -preset veryfast -movflags +faststart "${outputPath}"`;
console.log('Executing:', cmd);

try {
  execSync(cmd, { stdio: 'inherit' });
  if (fs.existsSync(outputPath)) {
    fs.copyFileSync(outputPath, finalPath);
    fs.unlinkSync(outputPath);
    console.log('Successfully optimized background video with every-frame keyframes (-g 1 -keyint_min 1)!');
    const stats = fs.statSync(finalPath);
    console.log('Optimized video size:', stats.size, 'bytes');
  }
} catch (err) {
  console.error('Encoding failed:', err);
  process.exit(1);
}
