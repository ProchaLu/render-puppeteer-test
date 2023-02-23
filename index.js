import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log('__dirname:', __dirname);

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Contents of ${__dirname}:`);
  console.log(files);
});

fs.readdir(
  '/opt/render/project/src/.cache/puppeteer/chrome/linux-1095492/chrome-linux/chrome',
  (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Contents of puppeteer:`);
    console.log(files);
  },
);

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');

//   const title = await page.title();
//   console.log(`Page title: ${title}`);

//   await browser.close();
// })();
